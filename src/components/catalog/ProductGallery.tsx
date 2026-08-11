import { useState } from "react";
import { CatalogImg } from "@/components/catalog/CatalogImg";
import { productImageFitClass } from "@/lib/images";

type ProductGalleryProps = {
  title: string;
  /** Product image filenames under public/images/products/ */
  images: string[];
  categorySlug?: string;
};

export function ProductGallery({ title, images, categorySlug = "" }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];
  const imageFit = productImageFitClass(categorySlug);

  return (
    <div>
      <div className="group relative overflow-hidden rounded-3xl border border-border bg-white aspect-[4/3]">
        <CatalogImg
          kind="product"
          src={current}
          alt={title}
          className={`h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 ${imageFit}`}
          width={1200}
          height={900}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={i === active}
              className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition ${
                i === active ? "border-royal shadow-soft" : "border-border hover:border-navy/30"
              }`}
            >
              <CatalogImg
                kind="product"
                src={src}
                alt=""
                className={`h-full w-full ${productImageFitClass(categorySlug)}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
