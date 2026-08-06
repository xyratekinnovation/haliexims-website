import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Factory,
  Globe2,
  Package,
  ShieldCheck,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";

const CERT_PDF = "/certificates/sika-india-dealership-reference.pdf";
const CERT_IMG = "/certificates/sika-india-dealership-reference.png";
const EASE = [0.2, 0.8, 0.2, 1] as const;

const trustCards = [
  {
    icon: BadgeCheck,
    title: "Officially Trained Dealer",
    description: "Completed certified dealership training by Sika India.",
  },
  {
    icon: Factory,
    title: "Genuine Products",
    description: "Supply only authentic Sika construction chemicals.",
  },
  {
    icon: BookOpen,
    title: "Technical Expertise",
    description: "Knowledge of product data sheets and technical documentation.",
  },
  {
    icon: Globe2,
    title: "Trusted Export Partner",
    description: "Serving industrial and international customers with quality assurance.",
  },
  {
    icon: CalendarCheck,
    title: "Valid Through",
    description: "31 March 2027",
  },
] as const;

const stats = [
  { icon: Factory, label: "Authorized Dealer", value: 1, suffix: "" },
  { icon: Package, label: "Construction Chemicals", value: 1, suffix: "" },
  { icon: Globe2, label: "International Exports", value: 20, suffix: "+" },
  { icon: CheckCircle2, label: "Certified Training Completed", value: 1, suffix: "" },
] as const;

const brandStrip = [
  { name: "Sika India", hint: "Official Dealer" },
  { name: "ISO Ready", hint: "Quality Systems" },
  { name: "Make in India", hint: "Indian Supply" },
  { name: "Global Export", hint: "Worldwide Reach" },
] as const;

export function AuthorizedDealerSection() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <section
      id="authorized-dealer"
      aria-labelledby="trusted-brands-heading"
      className="relative section-y overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,43,107,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface/80 to-transparent" />

      <div className="relative container-x">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="eyebrow mx-auto w-fit">
            <ShieldCheck className="h-3.5 w-3.5" /> Trusted & Certified Partner
          </div>
          <h2
            id="trusted-brands-heading"
            className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy leading-[1.08] text-balance"
          >
            Trusted by Global Brands
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            HALI EXIMS is an officially trained and recognized dealer for world-class industrial solutions, ensuring
            genuine products, technical expertise and international quality standards.
          </p>
        </motion.div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Certificate preview */}
          <motion.div
            className="lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="View full Sika India dealership certificate"
              className="group relative w-full text-left"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -8, 0] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-[#0F2B6B]/15 via-royal/10 to-transparent blur-xl opacity-70" />
              <div className="relative overflow-hidden rounded-[1.15rem] border border-border bg-white shadow-elevated transition duration-500 group-hover:shadow-glow group-hover:scale-[1.02]">
                <div className="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy">
                    <Award className="h-3.5 w-3.5 text-royal" />
                    Dealership Reference
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-semibold text-navy">
                    <ZoomIn className="h-3 w-3" /> Preview
                  </span>
                </div>

                <div className="relative bg-white">
                  <img
                    src={CERT_IMG}
                    alt="Sika India dealership reference letter — full certificate"
                    className="block h-auto w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              </div>
            </motion.button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F2B6B] to-royal px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              View Full Certificate <ZoomIn className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.08, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2B6B]/15 bg-[#0F2B6B]/5 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#0F2B6B]">
              <ShieldCheck className="h-3.5 w-3.5" /> Official Dealer Authorization
            </div>

            <h3 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-navy leading-[1.1]">
              Authorized Sika India Dealer
            </h3>

            <div className="mt-5 space-y-3 text-[15px] md:text-base leading-relaxed text-muted-foreground">
              <p>
                HALI EXIMS has successfully completed dealership training with{" "}
                <span className="font-semibold text-navy">Sika India Pvt. Ltd.</span> and is authorized for Construction
                Chemicals.
              </p>
              <p>
                Our team is trained in dealership operations, storage and application guidance, and operates according to
                official Sika technical documentation.
              </p>
              <p>
                Reference letter validity: <span className="font-semibold text-navy">31 March 2027</span>. These statements
                are supported by the uploaded dealership reference letter.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {trustCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: reduceMotion ? 0 : i * 0.06, ease: EASE }}
                    className={`group rounded-2xl border border-border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[#0F2B6B]/25 hover:shadow-elevated ${
                      i === trustCards.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F2B6B] text-white transition group-hover:bg-royal group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h4 className="mt-4 font-display text-base font-bold tracking-tight text-navy">{card.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  </motion.article>
                );
              })}
            </div>

            {/* Verification highlight */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.15, ease: EASE }}
              className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#0F2B6B] via-[#163A8A] to-royal p-5 md:p-6 text-white shadow-glow"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold tracking-tight">Verified by Sika India Pvt. Ltd.</div>
                  <p className="mt-1 text-sm text-white/75">Official dealership reference letter on file</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0F2B6B] transition hover:bg-white/90"
              >
                View Certificate <span aria-hidden="true">→</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : i * 0.07, ease: EASE }}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-soft transition hover:border-[#0F2B6B]/20 hover:shadow-elevated"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F2B6B]/8 text-[#0F2B6B]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-4 font-display text-3xl md:text-4xl font-extrabold tracking-tight text-navy">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Brand strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-12 md:mt-14 rounded-2xl border border-border bg-surface/80 px-5 py-6 md:px-8 backdrop-blur-sm"
        >
          <div className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted Brands & Certifications
          </div>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {brandStrip.map((brand) => (
              <div
                key={brand.name}
                className="group flex flex-col items-center justify-center rounded-xl border border-transparent bg-white/60 px-4 py-4 transition hover:border-[#0F2B6B]/15 hover:bg-white hover:shadow-soft"
              >
                <Building2 className="h-5 w-5 text-muted-foreground/55 transition group-hover:text-[#0F2B6B]" />
                <div className="mt-2 text-sm font-bold tracking-tight text-muted-foreground/70 transition group-hover:text-navy">
                  {brand.name}
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground/60">{brand.hint}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <CertificateModal open={open} onOpenChange={setOpen} />
    </section>
  );
}

function StatCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const [node, setNode] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!node) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 1200);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      });
    });
    obs.observe(node);
    return () => obs.disconnect();
  }, [node, value]);

  return (
    <span ref={setNode}>
      {n}
      {suffix}
    </span>
  );
}

function CertificateModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!open) setZoom(1);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Sika dealership certificate"
        >
          <motion.button
            type="button"
            aria-label="Close certificate viewer"
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="relative z-10 flex h-[min(92vh,920px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-elevated"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface px-4 py-3 sm:px-5">
              <div>
                <div className="font-display text-sm font-bold text-navy sm:text-base">
                  Sika India — Dealership Reference
                </div>
                <div className="text-xs text-muted-foreground">Valid through 31 March 2027</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(0.75, Number((z - 0.15).toFixed(2))))}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-navy transition hover:border-navy/30"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-xs font-semibold text-muted-foreground">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(2, Number((z + 0.15).toFixed(2))))}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-navy transition hover:border-navy/30"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <a
                  href={CERT_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-[#0F2B6B] to-royal px-4 py-2 text-xs font-semibold text-white"
                >
                  Open PDF
                </a>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-navy transition hover:border-navy/30"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-auto bg-[#E8EEF7] p-3 sm:p-5">
              <div
                className="mx-auto origin-top transition-transform duration-200"
                style={{ transform: `scale(${zoom})`, width: `${100 / zoom}%`, maxWidth: "100%" }}
              >
                <img
                  src={CERT_IMG}
                  alt="Sika India dealership reference letter — full certificate"
                  className="mx-auto block h-auto w-full max-w-3xl rounded-sm bg-white shadow-elevated"
                />
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
