import { catalogCategories, getCategoryBySlug } from "@/data/categories";
import { getSectionsByCategory } from "@/data/sections";
import { allProducts } from "@/data/products";
import type { CatalogProduct, CatalogSection } from "@/data/catalog/types";

export function getProductsByCategory(categorySlug: string): CatalogProduct[] {
  return allProducts.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsBySection(categorySlug: string, sectionSlug: string): CatalogProduct[] {
  return allProducts.filter((p) => p.categorySlug === categorySlug && p.sectionSlug === sectionSlug);
}

export type CategorySectionGroup = {
  section: CatalogSection;
  products: CatalogProduct[];
};

export function getCategorySectionGroups(categorySlug: string): CategorySectionGroup[] {
  return getSectionsByCategory(categorySlug)
    .map((section) => ({
      section,
      products: getProductsBySection(categorySlug, section.slug),
    }))
    .filter((group) => group.products.length > 0);
}

export function getProduct(categorySlug: string, productSlug: string): CatalogProduct | undefined {
  return allProducts.find((p) => p.categorySlug === categorySlug && p.slug === productSlug);
}

export function getRelatedProducts(product: CatalogProduct, limit = 4): CatalogProduct[] {
  const related = product.relatedProductIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter((p): p is CatalogProduct => Boolean(p));

  if (related.length >= limit) return related.slice(0, limit);

  const sameSection = getProductsBySection(product.categorySlug, product.sectionSlug).filter(
    (p) => p.id !== product.id && !related.some((r) => r.id === p.id),
  );
  return [...related, ...sameSection].slice(0, limit);
}

export function getProductCount(categorySlug: string): number {
  return getProductsByCategory(categorySlug).length;
}

export { catalogCategories, getCategoryBySlug, getSectionsByCategory };
