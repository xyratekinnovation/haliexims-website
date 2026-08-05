import type { CatalogSection } from "./catalog/types";

/**
 * Section headings for category pages.
 * Add sections for new categories here — order controls display sequence.
 */

const STEEL_STRUCTURAL_MATERIALS = "construction-stainless-steel-structural-materials";
const STRUCTURAL_STEEL_ANGLES = "structural-steel-steel-angles";

/** Shared steel catalogue sections — mirrored onto both steel categories. */
const steelStructuralSectionDefs: Omit<CatalogSection, "id" | "categorySlug">[] = [
  {
    slug: "reinforcement-steel",
    title: "Reinforcement Steel",
    order: 1,
    description: "Deformed and TMT reinforcement bars for RCC and infrastructure projects.",
  },
  {
    slug: "ss-fasteners-fixings",
    title: "Stainless Steel (SS316/SS304) – Fasteners & Fixings",
    order: 2,
    description: "Corrosion-resistant fasteners and fixings for industrial and construction use.",
  },
  {
    slug: "ss-clamps-sections",
    title: "Stainless Steel – Clamps & Sections",
    order: 3,
    description: "SS clamps, angle bars, and corner sections for piping and fabrication.",
  },
  {
    slug: "galvanized-steel-structural",
    title: "Galvanized Steel (GI/HDG) – Structural Steel",
    order: 4,
    description: "Hot-dip galvanized angles, plates, beams, and poles for corrosion-resistant structures.",
  },
  {
    slug: "galvanized-steel-accessories",
    title: "Galvanized Steel – Accessories",
    order: 5,
    description: "GI couplers, pipe clamps, and galvanized accessories for piping and installation.",
  },
  {
    slug: "mild-steel-structural-formwork",
    title: "Mild Steel (MS) – Structural & Formwork",
    order: 6,
    description: "MS jacks, purlins, truss frames, and fabrication for scaffolding and formwork systems.",
  },
];

function sectionsForCategory(categorySlug: string, idPrefix = ""): CatalogSection[] {
  return steelStructuralSectionDefs.map((section) => ({
    ...section,
    id: `${idPrefix}${section.slug}`,
    categorySlug,
  }));
}

export const catalogSections: CatalogSection[] = [
  ...sectionsForCategory(STEEL_STRUCTURAL_MATERIALS),
  ...sectionsForCategory(STRUCTURAL_STEEL_ANGLES, "ssa-"),

  /* ---------- Construction Machinery & Site Equipment ---------- */
  {
    id: "heavy-equipment",
    slug: "heavy-equipment",
    title: "Heavy Equipment",
    categorySlug: "construction-machinery-site-equipment",
    order: 1,
    description: "Gensets, forklifts, tractors, and backhoe loaders for site and industrial operations.",
  },
  {
    id: "lifting-handling",
    slug: "lifting-handling",
    title: "Lifting & Handling",
    categorySlug: "construction-machinery-site-equipment",
    order: 2,
    description: "Winches and lifting equipment for material handling on site.",
  },
  {
    id: "filters-consumables",
    slug: "filters-consumables",
    title: "Filters & Consumables",
    categorySlug: "construction-machinery-site-equipment",
    order: 3,
    description: "Air, fuel, and oil filters for engines, compressors, and heavy equipment maintenance.",
  },
  {
    id: "tyres-accessories",
    slug: "tyres-accessories",
    title: "Tyres & Accessories",
    categorySlug: "construction-machinery-site-equipment",
    order: 4,
    description: "Front and rear tyre kits for construction and earthmoving equipment.",
  },

  /* ---------- Flooring, Tiles, Marble & Stone ---------- */
  {
    id: "tiles-flooring",
    slug: "tiles-flooring",
    title: "Tiles & Flooring",
    categorySlug: "tiles-natural-stone",
    order: 1,
    description: "Matt and polished porcelain tiles for bathrooms, kitchens, floors, and wall cladding.",
  },
  {
    id: "marble",
    slug: "marble",
    title: "Marble",
    categorySlug: "tiles-natural-stone",
    order: 2,
    description: "Natural marble options including Dolomine, Pulpis, and Slate Grey.",
  },
  {
    id: "granite",
    slug: "granite",
    title: "Granite",
    categorySlug: "tiles-natural-stone",
    order: 3,
    description: "Polished natural granite slabs for flooring and architectural applications.",
  },
  {
    id: "steps-outdoor-flooring",
    slug: "steps-outdoor-flooring",
    title: "Steps & Outdoor Flooring",
    categorySlug: "tiles-natural-stone",
    order: 4,
    description: "Grooved steps and matching risers for stair and outdoor installations.",
  },

  /* ---------- Water Treatment and Purification ---------- */
  {
    id: "hdpe-piping-systems",
    slug: "hdpe-piping-systems",
    title: "HDPE Piping Systems",
    categorySlug: "water-treatment-purification",
    order: 1,
    description: "HDPE bends, couplers, pipes, tees, and related piping components for water networks.",
  },
  {
    id: "drain-covers",
    slug: "drain-covers",
    title: "Drain Covers",
    categorySlug: "water-treatment-purification",
    order: 2,
    description: "Ductile iron drain covers to EN 124 load classifications.",
  },
  {
    id: "manhole-covers",
    slug: "manhole-covers",
    title: "Manhole Covers",
    categorySlug: "water-treatment-purification",
    order: 3,
    description: "Heavy-duty ductile iron manhole covers for roads, car parks, and utilities.",
  },
  {
    id: "plastic-polymer-products",
    slug: "plastic-polymer-products",
    title: "Plastic & Polymer Products",
    categorySlug: "water-treatment-purification",
    order: 4,
    description: "Cable protection covers and polythene membranes for utilities and construction.",
  },
  {
    id: "waterproofing-materials",
    slug: "waterproofing-materials",
    title: "Waterproofing Materials",
    categorySlug: "water-treatment-purification",
    order: 5,
    description: "Fiberglass mesh and related materials for waterproofing reinforcement.",
  },

  /* ---------- Warning Tapes ---------- */
  {
    id: "safety-utility",
    slug: "safety-utility",
    title: "Safety & Utility",
    categorySlug: "warning-tapes",
    order: 1,
    description: "Jute cloth and safety gloves for site utility and general handling protection.",
  },
  {
    id: "warning-identification",
    slug: "warning-identification",
    title: "Warning & Identification",
    categorySlug: "warning-tapes",
    order: 2,
    description: "Custom printed and underground warning tapes for hazard marking and utility identification.",
  },

  /* ---------- Flooring, Tiles, Marble & Stone (additions) ---------- */
  {
    id: "tile-adhesive-grout",
    slug: "tile-adhesive-grout",
    title: "Tile Adhesive & Grout",
    categorySlug: "tiles-natural-stone",
    order: 5,
    description: "Epoxy tile grouts and related adhesive systems for tiling installations.",
  },
  {
    id: "floor-drains",
    slug: "floor-drains",
    title: "Floor Drains",
    categorySlug: "tiles-natural-stone",
    order: 6,
    description: "Stainless steel clean-out floor drains for wet areas and sanitary flooring.",
  },
  {
    id: "sanitary-products",
    slug: "sanitary-products",
    title: "Sanitary Products",
    categorySlug: "tiles-natural-stone",
    order: 7,
    description: "Sanitary ware and related fittings for bathroom and utility installations.",
  },

  /* ---------- Construction & Stainless Steel (additions) ---------- */
  {
    id: "ss-hardware",
    slug: "ss-hardware",
    title: "SS Hardware",
    categorySlug: "construction-stainless-steel-structural-materials",
    order: 7,
    description: "Stainless steel chains, shackles, and general SS hardware accessories.",
  },

  /* ---------- Concrete, Blocks & Masonry Products ---------- */
  {
    id: "hydraulic-tools",
    slug: "hydraulic-tools",
    title: "Hydraulic Tools",
    categorySlug: "concrete-blocks-masonry-products",
    order: 1,
    description: "Hand-operated hydraulic pumps, crimping heads, and cable cutters.",
  },
  {
    id: "concrete-machinery",
    slug: "concrete-machinery",
    title: "Concrete Machinery",
    categorySlug: "concrete-blocks-masonry-products",
    order: 2,
    description: "Hydraulic and electric concrete mixers for site batching.",
  },
  {
    id: "block-brick-manufacturing",
    slug: "block-brick-manufacturing",
    title: "Block & Brick Manufacturing",
    categorySlug: "concrete-blocks-masonry-products",
    order: 3,
    description: "Block-making machines, fly ash bricks, and refractory fire bricks.",
  },
  {
    id: "pavers-precast-products",
    slug: "pavers-precast-products",
    title: "Pavers & Precast Products",
    categorySlug: "concrete-blocks-masonry-products",
    order: 4,
    description: "Concrete pavers, interlocking blocks, and designer paving products.",
  },

  /* ---------- Electricals, Electronics & Power Systems ---------- */
  {
    id: "cable-management",
    slug: "cable-management",
    title: "Cable Management",
    categorySlug: "electricals-electronics-power-systems",
    order: 1,
    description: "Cable trays and fittings for electrical cable routing and management.",
  },

  /* ---------- HVAC, Ducting & Air Systems ---------- */
  {
    id: "ducting-supports",
    slug: "ducting-supports",
    title: "Ducting & Supports",
    categorySlug: "hvac-ducting-air-systems",
    order: 1,
    description: "Profile ducting with fittings and duct supporting materials.",
  },

  /* ---------- Wood, Boards & Timber Products ---------- */
  {
    id: "engineered-wood-boards",
    slug: "engineered-wood-boards",
    title: "Engineered Wood Boards",
    categorySlug: "wood-boards-timber-products",
    order: 1,
    description: "Plywood grades, laminated boards, film-faced plywood, marine plywood, and MDF.",
  },
  {
    id: "natural-wood",
    slug: "natural-wood",
    title: "Natural Wood",
    categorySlug: "wood-boards-timber-products",
    order: 2,
    description: "Hardwood and timber for construction and joinery applications.",
  },

  /* ---------- Tools, Hardware & General Consumables ---------- */
  {
    id: "measuring-tools",
    slug: "measuring-tools",
    title: "Measuring Tools",
    categorySlug: "tools-hardware-general-consumables",
    order: 1,
    description: "Fiber and stainless measuring tapes in common site sizes.",
  },
  {
    id: "hand-tools",
    slug: "hand-tools",
    title: "Hand Tools",
    categorySlug: "tools-hardware-general-consumables",
    order: 2,
    description: "Hammers, pliers, tile cutters, and related hand tools.",
  },
  {
    id: "general-consumables",
    slug: "general-consumables",
    title: "General Consumables",
    categorySlug: "tools-hardware-general-consumables",
    order: 3,
    description: "Adhesives, lubricants, and foam sealants for site use.",
  },

  /* ---------- Construction Chemicals & Repair Materials ---------- */
  {
    id: "sealants-repair",
    slug: "sealants-repair",
    title: "Sealants & Repair",
    categorySlug: "construction-chemicals-repair-materials",
    order: 1,
    description: "Sealants, repair mortars, and corrosion protection materials.",
  },
];

export function getSectionsByCategory(categorySlug: string): CatalogSection[] {
  return catalogSections
    .filter((s) => s.categorySlug === categorySlug)
    .sort((a, b) => a.order - b.order);
}
