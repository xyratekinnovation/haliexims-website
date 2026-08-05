import type { CatalogProduct, SpecRow } from "./catalog/types";
import { toProductImageFileName } from "@/lib/images";

const PLACEHOLDER_SHORT =
  "Product details coming soon. Contact HALI EXIMS for specifications and quotations.";
const PLACEHOLDER_DESC =
  "Detailed product information will be updated shortly. Please contact our export team for current specifications, availability, and quotations.";
const PLACEHOLDER_SPECS: SpecRow[] = [{ label: "Specifications", value: "To be updated" }];

function toSlug(title: string): string {
  return title
    .normalize("NFKD")
    .toLowerCase()
    .replace(/¼/g, "1-4")
    .replace(/⅜/g, "3-8")
    .replace(/[×]/g, "x")
    .replace(/[–—−]/g, "-")
    .replace(/["'`´""'']/g, "")
    .replace(/[()[\]{}]/g, "")
    .replace(/&/g, "and")
    .replace(/:/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const exportPackaging = {
  packing: "Export-grade bundling or carton packing with clear product identification tags.",
  shipping: "Sea freight for bulk orders; air freight available for urgent / sample lots.",
  containerLoading: "20ft / 40ft container loading with secure lashing and moisture protection as required.",
  markets: "Available for international buyers — confirm destination with our export team.",
};

type PlaceholderInput = {
  categorySlug: string;
  sectionSlug: string;
  title: string;
  badge: string;
};

function placeholderProduct(input: PlaceholderInput): CatalogProduct {
  const id = toSlug(input.title);
  const image = toProductImageFileName(input.title);
  return {
    id,
    slug: id,
    categorySlug: input.categorySlug,
    sectionSlug: input.sectionSlug,
    title: input.title,
    badge: input.badge,
    shortDescription: PLACEHOLDER_SHORT,
    description: PLACEHOLDER_DESC,
    image,
    gallery: [image, image, image],
    specifications: PLACEHOLDER_SPECS,
    specPreview: PLACEHOLDER_SPECS.map((s) => `${s.label}: ${s.value}`),
    features: ["Export enquiry available"],
    applications: ["Construction", "Industrial"],
    packaging: exportPackaging,
    relatedProductIds: [],
  };
}

function withSectionRelated(products: CatalogProduct[]): CatalogProduct[] {
  return products.map((product) => {
    const related = products
      .filter((p) => p.sectionSlug === product.sectionSlug && p.id !== product.id)
      .slice(0, 4)
      .map((p) => p.id);
    return { ...product, relatedProductIds: related };
  });
}

function sectionProducts(
  categorySlug: string,
  sectionSlug: string,
  badge: string,
  titles: string[],
): CatalogProduct[] {
  return titles.map((title) =>
    placeholderProduct({ categorySlug, sectionSlug, title, badge }),
  );
}

/* -------------------------------------------------------------------------- */
/* 1. Concrete, Blocks & Masonry Products                                     */
/* -------------------------------------------------------------------------- */

const CONCRETE = "concrete-blocks-masonry-products";

const concreteBlocksMasonryProducts = withSectionRelated([
  ...sectionProducts(CONCRETE, "hydraulic-tools", "HYDRAULIC TOOLS", [
    "Hand Operated Hydraulic Pump",
    "Hydraulic Crimping Head",
    "Hydraulic Cable Cutter",
  ]),
  ...sectionProducts(CONCRETE, "concrete-machinery", "CONCRETE MACHINERY", [
    "1 Bag Hydraulic Hopper Concrete Mixer",
    "3 Bag Hydraulic Hopper Concrete Mixer",
    "Electric Concrete Mixer – 3 Bag",
  ]),
  ...sectionProducts(CONCRETE, "block-brick-manufacturing", "BLOCK & BRICK", [
    "Hydraulic Concrete Block Making Machine",
    "Fly Ash Bricks",
    "Bricks",
    "Refractory Fire Bricks",
  ]),
  ...sectionProducts(CONCRETE, "pavers-precast-products", "PAVERS", [
    "Concrete Pavers 300×300×60mm",
    "Interlocking Paver Blocks",
    "Colorado Paver Blocks",
    "Combi Paver Blocks",
    "Flexi Paver Blocks",
    "Designer Paving Blocks",
    "Paving Blocks",
  ]),
]);

/* -------------------------------------------------------------------------- */
/* 2. Electricals, Electronics & Power Systems                                */
/* -------------------------------------------------------------------------- */

const ELECTRICALS = "electricals-electronics-power-systems";

const electricalsPowerProducts = withSectionRelated(
  sectionProducts(ELECTRICALS, "cable-management", "CABLE MANAGEMENT", [
    "Cable Trays (Perforated with Cover)",
    "Cable Tray Fittings (Tee Bend, Reducer)",
  ]),
);

/* -------------------------------------------------------------------------- */
/* 3. HVAC, Ducting & Air Systems                                             */
/* -------------------------------------------------------------------------- */

const HVAC = "hvac-ducting-air-systems";

const hvacDuctingProducts = withSectionRelated(
  sectionProducts(HVAC, "ducting-supports", "DUCTING", [
    "Profile Ducting with Fittings",
    "Duct Supporting Materials",
  ]),
);

/* -------------------------------------------------------------------------- */
/* 4. Wood, Boards & Timber Products                                          */
/* -------------------------------------------------------------------------- */

const WOOD = "wood-boards-timber-products";

const woodBoardsTimberProducts = withSectionRelated([
  ...sectionProducts(WOOD, "engineered-wood-boards", "ENGINEERED WOOD", [
    "Plywood",
    "Ordinary Plywood",
    "Laminated Plywood",
    "Pre-Laminated Plywood",
    "Film Faced Plywood",
    "Marine Plywood",
    "MDF Board",
  ]),
  ...sectionProducts(WOOD, "natural-wood", "NATURAL WOOD", ["Hardwood", "Timber"]),
]);

/* -------------------------------------------------------------------------- */
/* 5. Tools, Hardware & General Consumables                                   */
/* -------------------------------------------------------------------------- */

const TOOLS = "tools-hardware-general-consumables";

const toolsHardwareConsumablesProducts = withSectionRelated([
  ...sectionProducts(TOOLS, "measuring-tools", "MEASURING TOOLS", [
    "MEASURING TAPE, FIBER, SIZE: 50 MTR",
    "MEASURING TAPE, FIBER, SIZE: 30 MTR",
    "MEASURING TAPE, S/S, SIZE: 3 MTR",
  ]),
  ...sectionProducts(TOOLS, "hand-tools", "HAND TOOLS", [
    "HAMMER, CARPENTER, CAPACITY: 0.5 KG, W/ HANDLE",
    "HAMMER, MASONRY, CAPACITY: 1.0 KG, W/ HANDLE",
    "HAMMER, MASONRY, CAPACITY: 2.0 KG, W/ HANDLE",
    "HAMMER, CHIPPING, CAPACITY: 0.5 KG",
    "HAMMER, RUBBER, 12 OZ",
    "HAMMER, SLEDGE, CAPACITY: 5.0 KG, W/ HANDLE",
    'PLIER, END NIPPER, 6"',
    "4 Ft Length Manual Tile Cutter",
  ]),
  ...sectionProducts(TOOLS, "general-consumables", "CONSUMABLES", [
    "JOLLY - TIXO STRAW INDIA 1KG",
    "WD 40 (420ML)",
    "FEVI SEAL PU FOAM (Construction Foam) 720g",
  ]),
]);

/* -------------------------------------------------------------------------- */
/* 6. Tiles, Flooring & Sanitary (existing: tiles-natural-stone)              */
/* -------------------------------------------------------------------------- */

const STONE = "tiles-natural-stone";

const tilesSanitaryAdditions = withSectionRelated([
  ...sectionProducts(STONE, "tile-adhesive-grout", "GROUT", [
    "MYK Laticrete SP-100 Epoxy Tile Grout ; Color: 61 Parchment",
    "MYK Laticrete SP-100 Epoxy Tile Grout ; Color: White",
  ]),
  ...sectionProducts(STONE, "floor-drains", "FLOOR DRAINS", [
    "V DRAINS SS304 Clean Out Floor Drain Size: 3x3 inches Outlet:2 inches Item Code:VCO-201 Finish: Mirror",
    "V DRAINS SS304 Clean Out Floor Drain Size: 4x4 inches Outlet:2 inches Item Code:VCO-202 Finish: Mirror",
    "V DRAINS SS304 Clean Out Floor Drain Size: 6x6 inches Outlet:4 inches Item Code:VCO-204 Finish: Mirror",
    "V DRAINS SS304 Clean Out Floor Drain Size: 8x8 inches Outlet:4 inches Item Code:VCO-205 Finish: Mirror",
  ]),
  ...sectionProducts(STONE, "sanitary-products", "SANITARY", [
    "PRY ASIAN PAN NEW FLAT - WHITE",
    "PRY SLIMLINE TANK WHITE",
    "PRY SPARE P TRAP",
  ]),
]);

/* -------------------------------------------------------------------------- */
/* 7. Construction Chemicals & Repair Materials                               */
/* -------------------------------------------------------------------------- */

const CHEMICALS = "construction-chemicals-repair-materials";

const constructionChemicalsProducts = withSectionRelated(
  sectionProducts(CHEMICALS, "sealants-repair", "SEALANTS & REPAIR", [
    "Sikaflex-221 white C108 /12 CTR300",
    "SikaEmaco S488 Repair Mortar (25Kg)",
    "Sika FerroGard-950 IN",
  ]),
);

/* -------------------------------------------------------------------------- */
/* 8. Stainless Steel Hardware (existing steel category)                      */
/* -------------------------------------------------------------------------- */

const STEEL = "construction-stainless-steel-structural-materials";

const ssHardwareAdditions = withSectionRelated(
  sectionProducts(STEEL, "ss-hardware", "SS HARDWARE", [
    "SS304 6mm Chian",
    "SS 304 D-Shackle 6mm",
  ]),
);

/** All newly added catalogue products (new categories + existing category additions). */
export const catalogProductAdditions: CatalogProduct[] = [
  ...concreteBlocksMasonryProducts,
  ...electricalsPowerProducts,
  ...hvacDuctingProducts,
  ...woodBoardsTimberProducts,
  ...toolsHardwareConsumablesProducts,
  ...tilesSanitaryAdditions,
  ...constructionChemicalsProducts,
  ...ssHardwareAdditions,
];

/** Titles used when syncing placeholder product images. */
export const catalogProductAdditionTitles: string[] = catalogProductAdditions.map((p) => p.title);

/** New category slugs that need placeholder images. */
export const newCategorySlugs: string[] = [
  CONCRETE,
  ELECTRICALS,
  HVAC,
  WOOD,
  TOOLS,
  CHEMICALS,
];
