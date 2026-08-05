import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { CatalogCategory } from "@/data/catalog/types";
import { CatalogImg } from "@/components/catalog/CatalogImg";

type CatalogCategoryCardProps = {
  category: CatalogCategory;
  priority?: boolean;
};

/**
 * Data-driven category card for `/products`.
 * Layout mirrors the FR EXIMS catalogue reference with HALI EXIMS branding.
 */
export function CatalogCategoryCard({ category, priority = false }: CatalogCategoryCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/20 hover:shadow-elevated">
      <Link
        to="/products/$category"
        params={{ category: category.slug }}
        className="relative block aspect-[16/10] overflow-hidden bg-surface"
        aria-label={`${category.title} — View Catalogue`}
      >
        <CatalogImg
          kind="category"
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={800}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-navy/10 to-transparent" />
        <span className="absolute top-3.5 left-3.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-navy shadow-soft backdrop-blur-sm">
          {category.badge}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link
          to="/products/$category"
          params={{ category: category.slug }}
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-navy leading-snug transition hover:text-royal"
        >
          {category.title}
        </Link>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-4 grow">
          {category.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold text-navy/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-border pt-5">
          <Link
            to="/products/$category"
            params={{ category: category.slug }}
            className="btn-accent w-full justify-center text-sm"
          >
            View Catalogue
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
