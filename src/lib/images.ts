/**
 * Public image asset paths for the catalogue.
 * Designers replace files under /public/images/ — no code changes required.
 * Supported extensions: .png, .jpg, .jpeg, .webp
 */

export const PRODUCT_IMAGES_DIR = "/images/products";
export const CATEGORY_IMAGES_DIR = "/images/categories";

export const PRODUCT_IMAGE_FALLBACK = `${PRODUCT_IMAGES_DIR}/placeholder.png`;
export const CATEGORY_IMAGE_FALLBACK = `${CATEGORY_IMAGES_DIR}/placeholder.png`;

/** Convert a product title to a clean image filename stem, e.g. "Jute Cloth" → "Jute-Cloth.png" */
export function toProductImageFileName(title: string): string {
  const base = title
    .normalize("NFKD")
    .replace(/¼/g, "1-4")
    .replace(/⅜/g, "3-8")
    .replace(/[×]/g, "x")
    .replace(/[–—−]/g, "-")
    .replace(/["'`´""]/g, "")
    .replace(/[()[\]{}]/g, "")
    .replace(/&/g, "and")
    .replace(/:/g, "-")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return `${base || "product"}.png`;
}

/** Category image filename from slug, e.g. "warning-tapes" → "warning-tapes.png" */
export function toCategoryImageFileName(slug: string): string {
  return `${slug}.png`;
}

export function resolveProductImage(filename: string): string {
  if (!filename) return PRODUCT_IMAGE_FALLBACK;
  if (filename.startsWith("http") || filename.startsWith("/")) return filename;
  return `${PRODUCT_IMAGES_DIR}/${filename}`;
}

export function resolveCategoryImage(filename: string): string {
  if (!filename) return CATEGORY_IMAGE_FALLBACK;
  if (filename.startsWith("http") || filename.startsWith("/")) return filename;
  return `${CATEGORY_IMAGES_DIR}/${filename}`;
}

/**
 * Next candidate URL when a catalogue image 404s (try other extensions, then placeholder).
 */
export function nextImageCandidate(currentSrc: string, fallback: string): string | null {
  if (!currentSrc || currentSrc === fallback) return null;

  const match = currentSrc.match(/^(.*)\.(png|jpe?g|webp)$/i);
  if (!match) return fallback;

  const base = match[1];
  const currentExt = match[2].toLowerCase();
  const order = ["png", "jpg", "jpeg", "webp"] as const;
  const start = order.findIndex((ext) => ext === currentExt);

  for (let i = 1; i < order.length; i++) {
    const nextExt = order[(Math.max(start, 0) + i) % order.length];
    if (nextExt === currentExt) continue;
    return `${base}.${nextExt}`;
  }

  return fallback;
}
