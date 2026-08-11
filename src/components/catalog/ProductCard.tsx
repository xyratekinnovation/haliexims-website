import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { CatalogProduct } from "@/data/catalog/types";
import { siteLinks } from "@/data/site";
import { ProductDetailsModal } from "@/components/catalog/ProductDetailsModal";
import { CatalogImg } from "@/components/catalog/CatalogImg";
import { productImageFitClass } from "@/lib/images";

type ProductCardProps = {
  product: CatalogProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const cardSpecs = product.specifications.slice(0, 6);
  const imageFit = productImageFitClass(product.categorySlug);

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft hover:border-navy/25 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
        <Link
          to="/products/$category/$product"
          params={{ category: product.categorySlug, product: product.slug }}
          className="relative aspect-[5/3.4] overflow-hidden bg-white block"
        >
          <CatalogImg
            kind="product"
            src={product.image}
            alt={product.title}
            className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.04] ${imageFit}`}
            loading="lazy"
            width={800}
            height={560}
          />
          <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-navy shadow-soft">
            {product.badge}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-5">
          <Link
            to="/products/$category/$product"
            params={{ category: product.categorySlug, product: product.slug }}
            className="font-display text-lg font-bold tracking-tight text-navy hover:text-royal transition leading-snug"
          >
            {product.title}
          </Link>

          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-[12px] sm:text-[13px]">
              <tbody>
                {cardSpecs.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-surface/70" : "bg-white"}>
                    <th className="w-[42%] px-3 py-2 font-semibold text-navy align-top border-b border-border/70">
                      {row.label}
                    </th>
                    <td className="px-3 py-2 text-muted-foreground border-b border-border/70">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-auto pt-5 flex flex-wrap gap-2">
            <a href="/#contact" className="btn-accent text-sm px-4 py-2.5">
              Get Quote <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy hover:border-navy/40 transition"
            >
              View Details
            </button>
          </div>
        </div>
      </article>

      <ProductDetailsModal
        product={product}
        isOpen={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />
    </>
  );
}

export function QuoteActions({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href="/#contact" className="btn-accent">
        Request Quote <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href={siteLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-[#25D366]/50 hover:text-[#128C7E] transition"
      >
        <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
      </a>
    </div>
  );
}
