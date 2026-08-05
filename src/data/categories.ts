import type { CatalogCategory } from "./catalog/types";
import { toCategoryImageFileName } from "@/lib/images";

/**
 * Top-level product categories for `/products`.
 * Images live in public/images/categories/{slug}.png (jpg/webp also supported).
 */
export const catalogCategories: CatalogCategory[] = [
  {
    id: "construction-stainless-steel-structural-materials",
    slug: "construction-stainless-steel-structural-materials",
    title: "Construction and Stainless Steel Structural Materials",
    shortTitle: "Construction & Stainless Steel",
    description:
      "Premium quality stainless steel structural materials, reinforced concrete components, steel beams, columns, and high-grade construction materials for robust infrastructure and building projects.",
    image: toCategoryImageFileName("construction-stainless-steel-structural-materials"),
    badge: "PREMIUM QUALITY",
    tags: ["Cement & Concrete", "Steel & Rebar", "Bricks & Blocks", "Structural Materials"],
    featured: true,
  },
  {
    id: "construction-machinery-site-equipment",
    slug: "construction-machinery-site-equipment",
    title: "Construction Machinery & Site Equipment",
    shortTitle: "Construction Machinery",
    description:
      "Heavy equipment, lifting systems, filters, and tyre accessories for construction sites, material handling, and industrial operations.",
    image: toCategoryImageFileName("construction-machinery-site-equipment"),
    badge: "PREMIUM QUALITY",
    tags: ["Heavy Equipment", "Lifting & Handling", "Filters & Consumables", "Tyres & Accessories"],
    featured: true,
  },
  {
    id: "tiles-natural-stone",
    slug: "tiles-natural-stone",
    title: "Flooring, Tiles, Marble & Stone",
    shortTitle: "Flooring, Tiles & Stone",
    description:
      "Premium ceramic tiles, porcelain, natural marble, granite, and stone products for elegant flooring and wall applications in residential and commercial spaces.",
    image: toCategoryImageFileName("tiles-natural-stone"),
    badge: "PREMIUM QUALITY",
    tags: ["Tiles & Flooring", "Marble", "Granite", "Steps & Outdoor Flooring"],
    featured: true,
  },
  {
    id: "structural-steel-steel-angles",
    slug: "structural-steel-steel-angles",
    title: "Structural Steel / Steel Angles",
    shortTitle: "Structural Steel & Angles",
    description:
      "High-quality structural steel angles, I-beams, galvanised chequered plates, and angle iron profiles for construction frameworks, industrial structures, and fabrication projects.",
    image: toCategoryImageFileName("structural-steel-steel-angles"),
    badge: "PREMIUM QUALITY",
    tags: [
      "Steel Angle Bars & L-Beams",
      "Galvanised Chequered Plate 6mm",
      "Structural Angle Profiles",
      "Heavy-Duty Steel Sections",
    ],
    featured: true,
  },
  {
    id: "water-treatment-purification",
    slug: "water-treatment-purification",
    title: "Water Treatment and Purification",
    shortTitle: "Water Treatment",
    description:
      "Advanced water treatment systems, purification equipment, and filtration solutions for industrial and residential use.",
    image: toCategoryImageFileName("water-treatment-purification"),
    badge: "PREMIUM QUALITY",
    tags: [
      "Water Filtration Systems",
      "Treatment Chemicals",
      "Purification Equipment",
      "Industrial Systems",
    ],
    featured: false,
  },
  {
    id: "warning-tapes",
    slug: "warning-tapes",
    title: "Warning Tapes",
    shortTitle: "Warning Tapes",
    description:
      "High-visibility warning and caution tapes for safety applications, hazard marking, construction sites, and industrial facility demarcation with durable adhesive backing.",
    image: toCategoryImageFileName("warning-tapes"),
    badge: "PREMIUM QUALITY",
    tags: ["Barricade Caution Tapes", "Floor Marking Tapes", "Safety Hazard Tapes"],
    featured: false,
  },
  {
    id: "concrete-blocks-masonry-products",
    slug: "concrete-blocks-masonry-products",
    title: "Concrete, Blocks & Masonry Products",
    shortTitle: "Concrete, Blocks & Masonry",
    description:
      "Hydraulic tools, concrete mixers, block-making machinery, bricks, and precast pavers for construction and masonry applications.",
    image: toCategoryImageFileName("concrete-blocks-masonry-products"),
    badge: "PREMIUM QUALITY",
    tags: ["Hydraulic Tools", "Concrete Machinery", "Block & Brick Manufacturing", "Pavers & Precast"],
    featured: true,
  },
  {
    id: "electricals-electronics-power-systems",
    slug: "electricals-electronics-power-systems",
    title: "Electricals, Electronics & Power Systems",
    shortTitle: "Electricals & Power Systems",
    description:
      "Cable management systems, trays, and fittings for electrical and power distribution installations.",
    image: toCategoryImageFileName("electricals-electronics-power-systems"),
    badge: "PREMIUM QUALITY",
    tags: ["Cable Management", "Cable Trays", "Tray Fittings"],
    featured: true,
  },
  {
    id: "hvac-ducting-air-systems",
    slug: "hvac-ducting-air-systems",
    title: "HVAC, Ducting & Air Systems",
    shortTitle: "HVAC & Ducting",
    description:
      "Profile ducting, fittings, and supporting materials for HVAC and air distribution systems.",
    image: toCategoryImageFileName("hvac-ducting-air-systems"),
    badge: "PREMIUM QUALITY",
    tags: ["Ducting & Supports", "Profile Ducting", "Duct Supports"],
    featured: false,
  },
  {
    id: "wood-boards-timber-products",
    slug: "wood-boards-timber-products",
    title: "Wood, Boards & Timber Products",
    shortTitle: "Wood, Boards & Timber",
    description:
      "Engineered wood boards, plywood grades, MDF, hardwood, and timber for construction and joinery.",
    image: toCategoryImageFileName("wood-boards-timber-products"),
    badge: "PREMIUM QUALITY",
    tags: ["Engineered Wood Boards", "Plywood", "MDF", "Natural Wood"],
    featured: true,
  },
  {
    id: "tools-hardware-general-consumables",
    slug: "tools-hardware-general-consumables",
    title: "Tools, Hardware & General Consumables",
    shortTitle: "Tools & Consumables",
    description:
      "Measuring tapes, hand tools, hammers, cutters, and site consumables for construction and trade use.",
    image: toCategoryImageFileName("tools-hardware-general-consumables"),
    badge: "PREMIUM QUALITY",
    tags: ["Measuring Tools", "Hand Tools", "General Consumables"],
    featured: true,
  },
  {
    id: "construction-chemicals-repair-materials",
    slug: "construction-chemicals-repair-materials",
    title: "Construction Chemicals & Repair Materials",
    shortTitle: "Construction Chemicals",
    description:
      "Sealants, repair mortars, and corrosion-protection materials for concrete and structural repair.",
    image: toCategoryImageFileName("construction-chemicals-repair-materials"),
    badge: "PREMIUM QUALITY",
    tags: ["Sealants & Repair", "Repair Mortars", "Protection Systems"],
    featured: false,
  },
];

export function getCategoryBySlug(slug: string): CatalogCategory | undefined {
  return catalogCategories.find((c) => c.slug === slug);
}

/** Contact form / dropdown labels */
export const productCategoryNames = catalogCategories.map((c) => c.title);

/** Compatibility shape for the homepage carousel */
export type ProductCategory = {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  href: string;
};

export const productCategories: ProductCategory[] = catalogCategories.map((c) => ({
  id: c.id,
  title: c.shortTitle ?? c.title,
  slug: c.slug,
  image: c.image,
  description: c.description,
  href: `/products/${c.slug}`,
}));
