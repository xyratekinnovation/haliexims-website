import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/data/categories";
import { CatalogImg } from "@/components/catalog/CatalogImg";

type CategoryCardProps = {
  category: ProductCategory;
  priority?: boolean;
};

export function CategoryCard({ category, priority = false }: CategoryCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      className="group/card h-full [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFlipped(false);
      }}
      onClick={() => {
        // Touch / keyboard-friendly reveal on devices without reliable hover
        if (window.matchMedia("(hover: none)").matches) setFlipped((v) => !v);
      }}
    >
      <div
        className={`relative h-full min-h-[22rem] sm:min-h-[24rem] rounded-[1.35rem] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] will-change-transform ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } group-hover/card:-translate-y-1.5`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[1.35rem] border border-border bg-white shadow-soft [backface-visibility:hidden]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <CatalogImg
              kind="category"
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover/card:scale-[1.04]"
              width={800}
              height={600}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
          </div>
          <div className="flex flex-1 items-center px-6 py-5">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy">{category.title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.35rem] border border-navy/20 bg-navy p-7 text-white shadow-elevated [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight">{category.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75">{category.description}</p>
          </div>
          <a
            href={category.href}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-royal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Explore
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}
