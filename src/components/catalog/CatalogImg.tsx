import { useEffect, useState, type ImgHTMLAttributes } from "react";
import {
  CATEGORY_IMAGE_FALLBACK,
  PRODUCT_IMAGE_FALLBACK,
  nextImageCandidate,
  resolveCategoryImage,
  resolveProductImage,
} from "@/lib/images";

type CatalogImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  /** Filename only (e.g. "Jute-Cloth.png") or already-resolved path */
  src: string;
  kind: "product" | "category";
};

/**
 * Loads catalogue images from /public/images.
 * Tries .png / .jpg / .jpeg / .webp automatically, then placeholder.
 */
export function CatalogImg({ src, kind, onError, alt, ...props }: CatalogImgProps) {
  const resolved = kind === "product" ? resolveProductImage(src) : resolveCategoryImage(src);
  const fallback = kind === "product" ? PRODUCT_IMAGE_FALLBACK : CATEGORY_IMAGE_FALLBACK;
  const [current, setCurrent] = useState(resolved);

  useEffect(() => {
    setCurrent(resolved);
  }, [resolved]);

  return (
    <img
      {...props}
      alt={alt}
      src={current}
      onError={(e) => {
        const next = nextImageCandidate(current, fallback);
        if (next && next !== current) {
          setCurrent(next);
        }
        onError?.(e);
      }}
    />
  );
}
