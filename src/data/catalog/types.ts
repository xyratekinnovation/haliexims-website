export type SpecRow = {
  label: string;
  value: string;
};

export type CatalogCategory = {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** Filename under public/images/categories/ (e.g. "warning-tapes.jpg") */
  image: string;
  badge: string;
  tags: string[];
  featured: boolean;
  /** Optional shorter label for breadcrumbs / tight UI */
  shortTitle?: string;
};

/** Ordered sections within a category (e.g. Reinforcement Steel). */
export type CatalogSection = {
  id: string;
  slug: string;
  title: string;
  categorySlug: string;
  order: number;
  description?: string;
};

export type CatalogProduct = {
  id: string;
  slug: string;
  categorySlug: string;
  /** Links product to a category section heading */
  sectionSlug: string;
  title: string;
  badge: string;
  shortDescription: string;
  description: string;
  /** Filename under public/images/products/ (e.g. "Jute-Cloth.jpg") */
  image: string;
  /** Filenames under public/images/products/ */
  gallery: string[];
  /** Compact bullets used in related-product cards if needed */
  specPreview: string[];
  /** Full table shown on category product cards + detail page */
  specifications: SpecRow[];
  features: string[];
  applications: string[];
  packaging: {
    packing: string;
    shipping: string;
    containerLoading: string;
    markets: string;
  };
  relatedProductIds: string[];
};
