import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductCategory } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";

const AUTO_MS = 5500;

type CategoryCarouselProps = {
  categories: ProductCategory[];
};

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [emblaApi, paused]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div
        className="overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Product categories"
      >
        <div className="flex touch-pan-y -ml-4 md:-ml-5 lg:-ml-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 sm:pl-5 lg:basis-1/3 lg:pl-6 xl:basis-1/4"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${categories.length}: ${category.title}`}
            >
              <CategoryCard category={category} priority={index < 3} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Category slides">
          {categories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-label={`Go to ${category.title}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/50 ${
                selected === index ? "w-7 bg-royal" : "w-2 bg-navy/20 hover:bg-navy/35"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous categories"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-soft transition hover:border-navy/30 hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next categories"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-soft transition hover:border-navy/30 hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
