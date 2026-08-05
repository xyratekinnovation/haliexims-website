import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

/** Replace files in public/images/banners/ using these exact filenames. */
const BANNER_DIR = "/images/banners";

const AUTO_MS = 5500;
const SWIPE_THRESHOLD = 48;
const EASE = [0.2, 0.8, 0.2, 1] as const;

type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  heading: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const SLIDES: HeroSlide[] = [
  {
    id: "excellence",
    image: `${BANNER_DIR}/banner-1-excellence.jpg`,
    alt: "Modern manufacturing and production facility with industrial equipment",
    heading: "Delivering Excellence Across Global Markets",
    description:
      "Your trusted manufacturing and export partner, delivering premium-quality products from India with dependable sourcing, international compliance, and seamless global logistics.",
    primary: { label: "Explore Our Products", href: "/products" },
    secondary: { label: "Contact Us", href: "#contact" },
  },
  {
    id: "categories",
    image: `${BANNER_DIR}/banner-2-categories.jpg`,
    alt: "International shipping with cargo containers at a global logistics port",
    heading: "One Partner. Multiple Product Categories.",
    description:
      "From industrial and consumer products to customized export solutions, we offer a diverse portfolio designed to meet the evolving needs of businesses worldwide.",
    primary: { label: "View Product Categories", href: "/products" },
    secondary: { label: "Request a Quote", href: "#contact" },
  },
  {
    id: "quality",
    image: `${BANNER_DIR}/banner-3-quality.jpg`,
    alt: "Quality inspection and international trade partnership in a professional facility",
    heading: "Quality You Can Trust. Service You Can Rely On.",
    description:
      "Every product is backed by stringent quality standards, efficient supply chain management, and a commitment to delivering value to our global partners.",
    primary: { label: "Our Commitment", href: "#commitment" },
    secondary: { label: "Get in Touch", href: "#contact" },
  },
];

export function HeroSlider() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(() => new Set<number>([0]));
  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const count = SLIDES.length;
  const active = SLIDES[index];

  const goTo = useCallback(
    (next: number) => {
      const normalized = ((next % count) + count) % count;
      setIndex(normalized);
      setLoaded((prev) => {
        const nextSet = new Set(prev);
        nextSet.add(normalized);
        nextSet.add((normalized + 1) % count);
        return nextSet;
      });
    },
    [count],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    setLoaded((prev) => {
      const nextSet = new Set(prev);
      nextSet.add(index);
      nextSet.add((index + 1) % count);
      return nextSet;
    });
  }, [index, count]);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, goNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const root = sectionRef.current;
      if (!root) return;
      if (!root.contains(document.activeElement) && document.activeElement !== root) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <section
      id="home"
      ref={sectionRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="HALI EXIMS hero highlights"
      /* Fill the viewport minus the sticky header (top bar 2.5rem + nav 5rem on lg; nav ~4.5rem on mobile) */
      className="relative flex min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-7.5rem)] flex-col overflow-hidden bg-navy text-white outline-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start == null) return;
        const end = e.changedTouches[0]?.clientX ?? start;
        const delta = end - start;
        if (Math.abs(delta) < SWIPE_THRESHOLD) return;
        if (delta < 0) goNext();
        else goPrev();
      }}
    >
      {/* Background slides */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            {loaded.has(i) && (
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={1920}
                height={1280}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding="async"
              />
            )}
          </div>
        ))}
        {/* ~55% dark overlay for readability */}
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/45 to-navy/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.28),transparent_55%)]" />
      </div>

      {/* Content — vertically centered in the available space */}
      <div className="relative container-x flex flex-1 flex-col justify-center py-12 md:py-16">
        <div className="relative min-h-[18rem] sm:min-h-[19rem] md:min-h-[20rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="max-w-[37.5rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white/90">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-royal animate-ping-slow" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-royal" />
                </span>
                Exporting worldwide from India
              </div>

              <motion.h1
                className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.06] tracking-tight text-balance"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.05, ease: EASE }}
              >
                {active.heading}
              </motion.h1>

              <motion.p
                className="mt-5 max-w-[36rem] text-base sm:text-lg leading-relaxed text-white/80 text-balance"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.14, ease: EASE }}
              >
                {active.description}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-4"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.26, ease: EASE }}
              >
                <a href={active.primary.href} className="btn-accent">
                  {active.primary.label} <ArrowRight className="h-4 w-4" />
                </a>
                <a href={active.secondary.href} className="btn-outline-light">
                  {active.secondary.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Visually hidden live region for screen readers */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Slide {index + 1} of {count}: {active.heading}
          </div>
        </div>
      </div>

      {/* Compact controls pinned near the bottom */}
      <div className="relative container-x flex items-center justify-between gap-4 pb-8">
        <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}: ${slide.heading}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                i === index ? "w-7 bg-royal" : "w-2 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
