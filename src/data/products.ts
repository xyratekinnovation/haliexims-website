import type { CatalogProduct, SpecRow } from "./catalog/types";
import { toProductImageFileName } from "@/lib/images";
import { catalogProductAdditions } from "./products-additions";

const CAT = "construction-stainless-steel-structural-materials";

const exportPackaging = {
  packing: "Export-grade bundling or carton packing with clear product identification tags.",
  shipping: "Sea freight for bulk orders; air freight available for urgent / sample lots.",
  containerLoading: "20ft / 40ft container loading with secure lashing and moisture protection as required.",
  markets: "Available for international buyers — confirm destination with our export team.",
};

function product(partial: {
  id: string;
  slug: string;
  sectionSlug: string;
  title: string;
  badge: string;
  shortDescription: string;
  description: string;
  /** Filename only — defaults from title via toProductImageFileName */
  image?: string;
  specifications: SpecRow[];
  features: string[];
  applications: string[];
  relatedProductIds: string[];
  categorySlug?: string;
}): CatalogProduct {
  const { categorySlug = CAT, image: imageOverride, ...rest } = partial;
  const image = imageOverride ?? toProductImageFileName(rest.title);
  return {
    ...rest,
    categorySlug,
    image,
    gallery: [image, image, image],
    specPreview: rest.specifications.slice(0, 3).map((s) => `${s.label}: ${s.value}`),
    packaging: exportPackaging,
  };
}

/* ----------------------------- SECTION 1 — Reinforcement Steel ----------------------------- */

const reinforcementSteel: CatalogProduct[] = [
  product({
    id: "deformed-tmt-bars-8mm",
    slug: "deformed-tmt-bars-8mm",
    sectionSlug: "reinforcement-steel",
    title: "Deformed - TMT Bars 8mm",
    badge: "Reinforcement Steel",
    shortDescription: "8mm deformed TMT bars for light RCC members, mesh, and stirrup applications.",
    description:
      "Deformed TMT Bars 8mm are supplied for reinforcement work requiring smaller diameter bars with reliable bond and ductility. Suitable for stirrups, distribution steel, and light structural members in residential and commercial construction. Bars are mill-finished, ribbed, and packed in export bundles with clear diameter marking.",
    specifications: [
      { label: "Product", value: "Deformed TMT Bar" },
      { label: "Diameter", value: "8 mm" },
      { label: "Grade", value: "Fe 500 / Fe 500D (as available)" },
      { label: "Length", value: "12 m standard (cut length on request)" },
      { label: "Finish", value: "Ribbed / deformed" },
      { label: "Standard", value: "IS 1786 equivalent / buyer specification" },
      { label: "Application", value: "Stirrups, slabs, light RCC members" },
      { label: "Packaging", value: "Steel-strapped bundles" },
      { label: "Origin", value: "India" },
    ],
    features: ["High bond with concrete", "Consistent rib pattern", "Export bundling", "Good bendability", "Clear size marking"],
    applications: ["Construction", "Residential", "Commercial", "Infrastructure"],
    relatedProductIds: ["deformed-tmt-bars-10mm", "deformed-tmt-bars-12mm", "deformed-and-tmt-bars", "binding-wire-all-gauges"],
  }),
  product({
    id: "deformed-tmt-bars-10mm",
    slug: "deformed-tmt-bars-10mm",
    sectionSlug: "reinforcement-steel",
    title: "Deformed - TMT Bars 10mm",
    badge: "Reinforcement Steel",
    shortDescription: "10mm deformed TMT bars for slabs, beams, and general reinforcement work.",
    description:
      "Deformed TMT Bars 10mm are a widely used diameter for floor slabs, beams, and secondary reinforcement. Sourced from trusted rolling partners and packed for international shipment with heat/bundle identification for site verification.",
    specifications: [
      { label: "Product", value: "Deformed TMT Bar" },
      { label: "Diameter", value: "10 mm" },
      { label: "Grade", value: "Fe 500 / Fe 500D (as available)" },
      { label: "Length", value: "12 m standard (cut length on request)" },
      { label: "Finish", value: "Ribbed / deformed" },
      { label: "Standard", value: "IS 1786 equivalent / buyer specification" },
      { label: "Application", value: "Slabs, beams, general RCC" },
      { label: "Packaging", value: "Steel-strapped bundles" },
      { label: "Origin", value: "India" },
    ],
    features: ["Reliable tensile strength", "Excellent concrete bond", "Weldable grades available", "Export-ready packing", "Project-lot supply"],
    applications: ["Construction", "Commercial", "Infrastructure", "Industrial"],
    relatedProductIds: ["deformed-tmt-bars-8mm", "deformed-tmt-bars-12mm", "deformed-tmt-bars-16mm", "binding-wire-all-gauges"],
  }),
  product({
    id: "deformed-tmt-bars-12mm",
    slug: "deformed-tmt-bars-12mm",
    sectionSlug: "reinforcement-steel",
    title: "Deformed - TMT Bars 12mm",
    badge: "Reinforcement Steel",
    shortDescription: "12mm deformed TMT bars for columns, beams, and primary reinforcement.",
    description:
      "Deformed TMT Bars 12mm are commonly specified for primary reinforcement in columns, beams, and structural frames. Supplied with consistent gauge control and export packing suitable for containerised shipments to international buyers.",
    specifications: [
      { label: "Product", value: "Deformed TMT Bar" },
      { label: "Diameter", value: "12 mm" },
      { label: "Grade", value: "Fe 500 / Fe 500D / Fe 550 (as available)" },
      { label: "Length", value: "12 m standard (cut length on request)" },
      { label: "Finish", value: "Ribbed / deformed" },
      { label: "Standard", value: "IS 1786 equivalent / buyer specification" },
      { label: "Application", value: "Columns, beams, primary RCC" },
      { label: "Packaging", value: "Steel-strapped bundles" },
      { label: "Origin", value: "India" },
    ],
    features: ["High yield strength", "Ductile performance", "Uniform ribbing", "Bulk export supply", "Clear diameter marking"],
    applications: ["Construction", "Infrastructure", "Commercial", "Engineering"],
    relatedProductIds: ["deformed-tmt-bars-10mm", "deformed-tmt-bars-16mm", "deformed-tmt-bars-20mm", "deformed-and-tmt-bars"],
  }),
  product({
    id: "deformed-tmt-bars-16mm",
    slug: "deformed-tmt-bars-16mm",
    sectionSlug: "reinforcement-steel",
    title: "Deformed - TMT Bars 16mm",
    badge: "Reinforcement Steel",
    shortDescription: "16mm deformed TMT bars for heavy structural reinforcement and civil works.",
    description:
      "Deformed TMT Bars 16mm are used in heavier structural members, foundations, and infrastructure works. Offered through HALI EXIMS for buyers seeking dependable Indian mill supply with export documentation and logistics coordination.",
    specifications: [
      { label: "Product", value: "Deformed TMT Bar" },
      { label: "Diameter", value: "16 mm" },
      { label: "Grade", value: "Fe 500 / Fe 500D / Fe 550 (as available)" },
      { label: "Length", value: "12 m standard (cut length on request)" },
      { label: "Finish", value: "Ribbed / deformed" },
      { label: "Standard", value: "IS 1786 equivalent / buyer specification" },
      { label: "Application", value: "Foundations, heavy beams, civil works" },
      { label: "Packaging", value: "Steel-strapped bundles" },
      { label: "Origin", value: "India" },
    ],
    features: ["Strong load capacity", "Consistent mechanical properties", "Suitable for large pours", "Export bundling", "Project consolidation"],
    applications: ["Infrastructure", "Construction", "Industrial", "Engineering"],
    relatedProductIds: ["deformed-tmt-bars-12mm", "deformed-tmt-bars-20mm", "deformed-and-tmt-bars", "binding-wire-all-gauges"],
  }),
  product({
    id: "deformed-tmt-bars-20mm",
    slug: "deformed-tmt-bars-20mm",
    sectionSlug: "reinforcement-steel",
    title: "Deformed - TMT Bars 20mm",
    badge: "Reinforcement Steel",
    shortDescription: "20mm deformed TMT bars for heavy foundations, columns, and infrastructure.",
    description:
      "Deformed TMT Bars 20mm support high-load structural applications including heavy columns, pile caps, and infrastructure decks. Available for bulk export with coordinated packing and shipment planning.",
    specifications: [
      { label: "Product", value: "Deformed TMT Bar" },
      { label: "Diameter", value: "20 mm" },
      { label: "Grade", value: "Fe 500 / Fe 550 / Fe 550D (as available)" },
      { label: "Length", value: "12 m standard (cut length on request)" },
      { label: "Finish", value: "Ribbed / deformed" },
      { label: "Standard", value: "IS 1786 equivalent / buyer specification" },
      { label: "Application", value: "Heavy foundations, columns, infrastructure" },
      { label: "Packaging", value: "Steel-strapped bundles" },
      { label: "Origin", value: "India" },
    ],
    features: ["High structural capacity", "Reliable mill supply", "Export documentation support", "Bulk container loading", "Site-ready marking"],
    applications: ["Infrastructure", "Industrial", "Construction", "Engineering"],
    relatedProductIds: ["deformed-tmt-bars-16mm", "deformed-and-tmt-bars", "deformed-tmt-bars-12mm", "binding-wire-all-gauges"],
  }),
  product({
    id: "deformed-and-tmt-bars",
    slug: "deformed-and-tmt-bars",
    sectionSlug: "reinforcement-steel",
    title: "Deformed and TMT Bars",
    badge: "Reinforcement Steel",
    shortDescription: "Full deformed / TMT bar range from 8mm to 32mm for mixed project requirements.",
    description:
      "Deformed and TMT Bars covering the complete product range from 8mm to 32mm. Ideal for buyers who need mixed diameters consolidated into a single export shipment for construction and infrastructure projects. Grades and lengths can be aligned to project specifications.",
    specifications: [
      { label: "Product", value: "Deformed / TMT Bars" },
      { label: "Product Range", value: "8 mm – 32 mm" },
      { label: "Grade", value: "Fe 500 / Fe 500D / Fe 550 (as available)" },
      { label: "Length", value: "12 m standard (cut length on request)" },
      { label: "Finish", value: "Ribbed / deformed" },
      { label: "Standard", value: "IS 1786 equivalent / buyer specification" },
      { label: "Application", value: "Full RCC & infrastructure packages" },
      { label: "Packaging", value: "Diameter-sorted strapped bundles" },
      { label: "Origin", value: "India" },
    ],
    features: ["Complete diameter range", "Mixed-lot consolidation", "Export packing by size", "Flexible grade options", "One-partner project supply"],
    applications: ["Construction", "Infrastructure", "Commercial", "Industrial", "Engineering"],
    relatedProductIds: [
      "deformed-tmt-bars-8mm",
      "deformed-tmt-bars-12mm",
      "deformed-tmt-bars-16mm",
      "deformed-tmt-bars-20mm",
    ],
  }),
];

/* ----------------- SECTION 2 — SS316/SS304 Fasteners & Fixings ----------------- */

const ssFasteners: CatalogProduct[] = [
  product({
    id: "u-bolt-nut-washer",
    slug: "u-bolt-nut-washer",
    sectionSlug: "ss-fasteners-fixings",
    title: "U Bolt Nut Washer",
    badge: "SS Fasteners",
    shortDescription: "U-bolt assemblies complete with matching nuts and washers for pipe and structural mounting.",
    description:
      "U Bolt Nut Washer sets are supplied as complete fastening assemblies for piping, mechanical, and structural mounting. Available in stainless grades with matching nuts and washers packed as ready-to-install kits for export buyers.",
    specifications: [
      { label: "Product", value: "U-Bolt with Nut & Washer" },
      { label: "Material", value: "SS316 / SS304 (as specified)" },
      { label: "Includes", value: "U-bolt + nuts + washers" },
      { label: "Size Range", value: "As per pipe OD / drawing" },
      { label: "Finish", value: "Plain / passivated stainless" },
      { label: "Standard", value: "Buyer drawing / commercial" },
      { label: "Application", value: "Pipe & structural mounting" },
      { label: "Packaging", value: "Matched kits in cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["Complete assembly kits", "Corrosion-resistant stainless", "Made-to-size options", "Export carton packing", "Project kit consolidation"],
    applications: ["Industrial", "Infrastructure", "Engineering", "Construction"],
    relatedProductIds: ["ss316-u-bolts-all-sizes", "ss316-nuts-m10-m12", "ss316-flat-washers-m6-m10-m12", "ss316-quick-fit-insulated-clamps"],
  }),
  product({
    id: "ss316-threaded-rods-m10-m12",
    slug: "ss316-threaded-rods-m10-m12",
    sectionSlug: "ss-fasteners-fixings",
    title: "SS316 Threaded Rods (M10, M12)",
    badge: "SS316",
    shortDescription: "SS316 fully threaded rods in M10 and M12 for corrosion-resistant fixing systems.",
    description:
      "SS316 Threaded Rods in M10 and M12 sizes for hanging systems, anchors, and general industrial fixing. Marine-grade stainless offers strong corrosion resistance for outdoor and humid environments.",
    specifications: [
      { label: "Product", value: "Threaded Rod" },
      { label: "Material", value: "SS316" },
      { label: "Sizes", value: "M10, M12" },
      { label: "Thread", value: "Metric coarse (standard)" },
      { label: "Length", value: "Standard / cut-to-length" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Application", value: "Hangers, anchors, assemblies" },
      { label: "Packaging", value: "Bundles / cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["SS316 corrosion resistance", "M10 & M12 stock sizes", "Cut-to-length options", "Pairs with SS nuts & washers", "Export packing"],
    applications: ["Industrial", "Commercial", "Marine environments", "Engineering"],
    relatedProductIds: ["ss316-nuts-m10-m12", "ss316-flat-washers-m6-m10-m12", "ss316-anchor-bolts-m10-m12", "ss316-wedge-anchor-bolts"],
  }),
  product({
    id: "ss316-flat-washers-m6-m10-m12",
    slug: "ss316-flat-washers-m6-m10-m12",
    sectionSlug: "ss-fasteners-fixings",
    title: "SS316 Flat Washers (M6, M10, M12)",
    badge: "SS316",
    shortDescription: "SS316 flat washers in M6, M10 and M12 for load distribution under fasteners.",
    description:
      "SS316 Flat Washers supplied in M6, M10, and M12 to complete stainless fastener assemblies. Suitable for corrosive and outdoor environments where long service life is required.",
    specifications: [
      { label: "Product", value: "Flat Washer" },
      { label: "Material", value: "SS316" },
      { label: "Sizes", value: "M6, M10, M12" },
      { label: "Type", value: "Flat / plain washer" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Standard", value: "DIN / ISO equivalent as specified" },
      { label: "Application", value: "Load distribution under bolt heads/nuts" },
      { label: "Packaging", value: "Poly bags in cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["Matched metric sizes", "SS316 durability", "Clean finish", "Bulk bag packing", "Completes SS kits"],
    applications: ["Industrial", "Construction", "Engineering", "Commercial"],
    relatedProductIds: ["ss316-nuts-m10-m12", "ss316-threaded-rods-m10-m12", "hexagonal-screws", "u-bolt-nut-washer"],
  }),
  product({
    id: "ss316-nuts-m10-m12",
    slug: "ss316-nuts-m10-m12",
    sectionSlug: "ss-fasteners-fixings",
    title: "SS316 Nuts (M10, M12)",
    badge: "SS316",
    shortDescription: "SS316 hex nuts in M10 and M12 for corrosion-resistant fastening.",
    description:
      "SS316 Nuts in M10 and M12 for pairing with stainless bolts, threaded rods, and U-bolt assemblies. Precision threading supports reliable assembly in industrial and construction applications.",
    specifications: [
      { label: "Product", value: "Hex Nut" },
      { label: "Material", value: "SS316" },
      { label: "Sizes", value: "M10, M12" },
      { label: "Thread", value: "Metric coarse" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Standard", value: "DIN / ISO equivalent as specified" },
      { label: "Application", value: "Stainless fastener assemblies" },
      { label: "Packaging", value: "Poly bags in cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["Precision threads", "SS316 corrosion resistance", "M10 & M12", "Export carton packing", "Kit-ready supply"],
    applications: ["Industrial", "Engineering", "Construction", "Commercial"],
    relatedProductIds: ["ss316-threaded-rods-m10-m12", "ss316-flat-washers-m6-m10-m12", "ss316-anchor-bolts-m10-m12", "ss316-u-bolts-all-sizes"],
  }),
  product({
    id: "ss316-u-bolts-all-sizes",
    slug: "ss316-u-bolts-all-sizes",
    sectionSlug: "ss-fasteners-fixings",
    title: "SS316 U-Bolts (¼\", ⅜\" – All Sizes)",
    badge: "SS316",
    shortDescription: "SS316 U-bolts in ¼\" and ⅜\" ranges and additional sizes for pipe and mount fixing.",
    description:
      "SS316 U-Bolts available in ¼\", ⅜\", and other sizes to suit pipe diameters and mounting patterns. Ideal for corrosive environments where carbon steel fixings are not suitable.",
    specifications: [
      { label: "Product", value: "U-Bolt" },
      { label: "Material", value: "SS316" },
      { label: "Sizes", value: "¼\", ⅜\" – all sizes" },
      { label: "Form", value: "Round bend U-bolt" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Nuts/Washers", value: "Available as matching sets" },
      { label: "Application", value: "Pipe clamps, mounts, supports" },
      { label: "Packaging", value: "Bundles / cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["Full size coverage", "SS316 durability", "Custom pipe OD options", "Matching fastener sets", "Export packing"],
    applications: ["Industrial", "Infrastructure", "Marine", "Engineering"],
    relatedProductIds: ["u-bolt-nut-washer", "ss316-quick-fit-insulated-clamps", "ss316-nuts-m10-m12", "ss316-flat-washers-m6-m10-m12"],
  }),
  product({
    id: "ss316-anchor-bolts-m10-m12",
    slug: "ss316-anchor-bolts-m10-m12",
    sectionSlug: "ss-fasteners-fixings",
    title: "SS316 Anchor Bolts (M10, M12)",
    badge: "SS316",
    shortDescription: "SS316 anchor bolts in M10 and M12 for concrete and structural fixing.",
    description:
      "SS316 Anchor Bolts in M10 and M12 for securing equipment, base plates, and fixtures into concrete. Stainless construction provides long-term resistance in humid and outdoor locations.",
    specifications: [
      { label: "Product", value: "Anchor Bolt" },
      { label: "Material", value: "SS316" },
      { label: "Sizes", value: "M10, M12" },
      { label: "Type", value: "Foundation / chemical / expansion (as specified)" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Application", value: "Concrete & structural fixing" },
      { label: "Packaging", value: "Cartons with accessories as required" },
      { label: "Origin", value: "India" },
    ],
    features: ["M10 & M12 sizes", "Corrosion resistant", "Project kit options", "Pairs with SS nuts", "Export ready"],
    applications: ["Construction", "Industrial", "Commercial", "Infrastructure"],
    relatedProductIds: ["ss316-wedge-anchor-bolts", "ss316-nuts-m10-m12", "ss316-threaded-rods-m10-m12", "concrete-nails-heavy-duty"],
  }),
  product({
    id: "ss316-wedge-anchor-bolts",
    slug: "ss316-wedge-anchor-bolts",
    sectionSlug: "ss-fasteners-fixings",
    title: "SS316 Wedge Anchor Bolts (10mm, 12mm)",
    badge: "SS316",
    shortDescription: "SS316 wedge anchors in 10mm and 12mm for heavy-duty concrete fastening.",
    description:
      "SS316 Wedge Anchor Bolts in 10mm and 12mm diameters for heavy-duty fastening into concrete. Designed for secure expansion holding where stainless performance is required.",
    specifications: [
      { label: "Product", value: "Wedge Anchor Bolt" },
      { label: "Material", value: "SS316" },
      { label: "Sizes", value: "10 mm, 12 mm" },
      { label: "Type", value: "Expansion wedge anchor" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Application", value: "Heavy-duty concrete fixing" },
      { label: "Packaging", value: "Boxes / cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["High holding strength", "SS316 body", "10mm & 12mm", "Installer-friendly", "Export boxing"],
    applications: ["Construction", "Industrial", "Infrastructure", "Commercial"],
    relatedProductIds: ["ss316-anchor-bolts-m10-m12", "concrete-nails-heavy-duty", "ss316-nuts-m10-m12", "hexagonal-screws"],
  }),
  product({
    id: "ss316-hex-head-self-tapping-screws",
    slug: "ss316-hex-head-self-tapping-screws",
    sectionSlug: "ss-fasteners-fixings",
    title: "SS316 Hex Head Self Tapping Screws",
    badge: "SS316",
    shortDescription: "SS316 hex head self-tapping screws for metal and light structural fixing.",
    description:
      "SS316 Hex Head Self Tapping Screws for rapid fixing into metal sheets and light assemblies where corrosion resistance matters. Hex heads allow positive driving with standard sockets.",
    specifications: [
      { label: "Product", value: "Hex Head Self Tapping Screw" },
      { label: "Material", value: "SS316" },
      { label: "Head", value: "Hexagonal" },
      { label: "Type", value: "Self tapping" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Sizes", value: "As per standard charts / enquiry" },
      { label: "Application", value: "Sheet metal & light assemblies" },
      { label: "Packaging", value: "Bags / boxes" },
      { label: "Origin", value: "India" },
    ],
    features: ["Self-tapping thread", "Hex drive", "SS316 durability", "Assorted size packs", "Export packing"],
    applications: ["Industrial", "Commercial", "Engineering", "Fabrication"],
    relatedProductIds: ["ss316-scotch-screws", "hexagonal-screws", "ss316-flat-washers-m6-m10-m12", "concrete-nails-heavy-duty"],
  }),
  product({
    id: "ss316-scotch-screws",
    slug: "ss316-scotch-screws",
    sectionSlug: "ss-fasteners-fixings",
    title: "SS316 Scotch Screws",
    badge: "SS316",
    shortDescription: "SS316 Scotch screws for specialty fastening and assembly applications.",
    description:
      "SS316 Scotch Screws supplied for specialty fastening needs where stainless performance and consistent thread quality are required. Available in enquiry-based size assortments for project and distributor buyers.",
    specifications: [
      { label: "Product", value: "Scotch Screw" },
      { label: "Material", value: "SS316" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Sizes", value: "As per enquiry" },
      { label: "Application", value: "Specialty fastening & assemblies" },
      { label: "Packaging", value: "Bags / cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["SS316 material", "Precision threads", "Flexible sizing", "Export carton options", "Pairs with SS washers"],
    applications: ["Industrial", "Engineering", "Commercial", "Construction"],
    relatedProductIds: ["ss316-hex-head-self-tapping-screws", "hexagonal-screws", "ss316-flat-washers-m6-m10-m12", "ss316-nuts-m10-m12"],
  }),
  product({
    id: "hexagonal-screws",
    slug: "hexagonal-screws",
    sectionSlug: "ss-fasteners-fixings",
    title: "Hexagonal Screws",
    badge: "Fasteners",
    shortDescription: "Hexagonal screws for general industrial and construction fastening.",
    description:
      "Hexagonal Screws for general-purpose industrial and construction fastening. Available in stainless and other finishes as specified in the enquiry, with export packing for distributors and project buyers.",
    specifications: [
      { label: "Product", value: "Hexagonal Screw" },
      { label: "Material", value: "SS316 / SS304 / as specified" },
      { label: "Head", value: "Hexagonal" },
      { label: "Sizes", value: "As per standard charts / enquiry" },
      { label: "Finish", value: "Plain / passivated (as available)" },
      { label: "Application", value: "General industrial fastening" },
      { label: "Packaging", value: "Bags / boxes / cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["Hex drive reliability", "Multiple material options", "Assorted packs", "Export ready", "Distributor friendly"],
    applications: ["Industrial", "Construction", "Engineering", "Commercial"],
    relatedProductIds: ["ss316-hex-head-self-tapping-screws", "ss316-scotch-screws", "ss316-nuts-m10-m12", "ss316-flat-washers-m6-m10-m12"],
  }),
  product({
    id: "concrete-nails-heavy-duty",
    slug: "concrete-nails-heavy-duty",
    sectionSlug: "ss-fasteners-fixings",
    title: "Concrete Nails – Heavy Duty",
    badge: "Fixings",
    shortDescription: "Heavy-duty concrete nails for masonry and hard-surface fastening.",
    description:
      "Concrete Nails – Heavy Duty for fastening into masonry and hard substrates on construction sites. Supplied in bulk packs suitable for contractors and export distributors.",
    specifications: [
      { label: "Product", value: "Concrete Nail" },
      { label: "Type", value: "Heavy duty" },
      { label: "Material", value: "Hardened steel" },
      { label: "Finish", value: "As available / enquiry" },
      { label: "Sizes", value: "As per enquiry" },
      { label: "Application", value: "Masonry & hard-surface fastening" },
      { label: "Packaging", value: "Boxes / bulk cartons" },
      { label: "Origin", value: "India" },
    ],
    features: ["Heavy-duty hardness", "Site-ready packs", "Bulk export supply", "Contractor preferred", "Consolidates with fixings"],
    applications: ["Construction", "Infrastructure", "Industrial", "Commercial"],
    relatedProductIds: ["ss316-wedge-anchor-bolts", "ss316-anchor-bolts-m10-m12", "binding-wire-all-gauges", "hexagonal-screws"],
  }),
  product({
    id: "binding-wire-all-gauges",
    slug: "binding-wire-all-gauges",
    sectionSlug: "ss-fasteners-fixings",
    title: "Binding Wire (All Gauges)",
    badge: "Fixings",
    shortDescription: "Binding wire in all gauges for rebar tying and general construction use.",
    description:
      "Binding Wire (All Gauges) for tying reinforcement bars and general construction binding. Soft annealed options are available for easy twisting on site, packed in coils for export.",
    specifications: [
      { label: "Product", value: "Binding Wire" },
      { label: "Gauges", value: "All gauges" },
      { label: "Material", value: "Mild steel / as specified" },
      { label: "Form", value: "Coil" },
      { label: "Finish", value: "Black annealed / as available" },
      { label: "Application", value: "Rebar tying & general binding" },
      { label: "Packaging", value: "Wrapped coils" },
      { label: "Origin", value: "India" },
    ],
    features: ["Full gauge coverage", "Soft tying performance", "Export coil packing", "Pairs with TMT orders", "Bulk supply"],
    applications: ["Construction", "Infrastructure", "Commercial", "Industrial"],
    relatedProductIds: ["deformed-and-tmt-bars", "deformed-tmt-bars-12mm", "concrete-nails-heavy-duty", "u-bolt-nut-washer"],
  }),
];

/* ----------------- SECTION 3 — SS Clamps & Sections ----------------- */

const ssClampsSections: CatalogProduct[] = [
  product({
    id: "ss316-quick-fit-insulated-clamps",
    slug: "ss316-quick-fit-insulated-clamps",
    sectionSlug: "ss-clamps-sections",
    title: "SS316 Quick Fit Insulated Clamps (25mm–160mm)",
    badge: "SS316 Clamps",
    shortDescription: "SS316 quick-fit insulated pipe clamps covering 25mm to 160mm sizes.",
    description:
      "SS316 Quick Fit Insulated Clamps in sizes from 25mm to 160mm for pipe support systems requiring insulation and corrosion resistance. Designed for efficient installation on industrial and commercial piping runs.",
    specifications: [
      { label: "Product", value: "Quick Fit Insulated Clamp" },
      { label: "Material", value: "SS316" },
      { label: "Size Range", value: "25 mm – 160 mm" },
      { label: "Type", value: "Quick fit / insulated" },
      { label: "Finish", value: "Plain stainless" },
      { label: "Application", value: "Insulated pipe support" },
      { label: "Packaging", value: "Cartons / crates by size" },
      { label: "Origin", value: "India" },
    ],
    features: ["25–160mm coverage", "Insulated design", "SS316 body", "Quick installation", "Export size sorting"],
    applications: ["Industrial", "Commercial", "Infrastructure", "Engineering"],
    relatedProductIds: ["ss316-u-bolts-all-sizes", "u-bolt-nut-washer", "ss316-angle-bars", "ss304-sheet-corner-angles"],
  }),
  product({
    id: "ss316-angle-bars",
    slug: "ss316-angle-bars",
    sectionSlug: "ss-clamps-sections",
    title: "SS316 Angle Bars",
    badge: "SS316 Sections",
    shortDescription: "SS316 angle bars in 30×30×3, 35×35×3 and 50×50×5 sections.",
    description:
      "SS316 Angle Bars supplied in 30×30×3, 35×35×3, and 50×50×5 for fabrication, frames, and corrosive-environment structures. Stainless angles provide strength with long-term durability for export projects.",
    specifications: [
      { label: "Product", value: "Angle Bar" },
      { label: "Material", value: "SS316" },
      { label: "Sizes", value: "30×30×3, 35×35×3, 50×50×5" },
      { label: "Type", value: "Equal angle" },
      { label: "Length", value: "Standard / cut-to-length" },
      { label: "Finish", value: "Mill / polished (as available)" },
      { label: "Application", value: "Frames, supports, fabrication" },
      { label: "Packaging", value: "Strapped bundles" },
      { label: "Origin", value: "India" },
    ],
    features: ["Specified SS316 sizes", "Corrosion resistant", "Fabrication ready", "Cut-length options", "Export bundling"],
    applications: ["Industrial", "Engineering", "Commercial", "Marine", "Construction"],
    relatedProductIds: ["ss304-sheet-corner-angles", "ss304-flat-corner-radius-sections", "ss316-quick-fit-insulated-clamps", "ss316-u-bolts-all-sizes"],
  }),
  product({
    id: "ss304-sheet-corner-angles",
    slug: "ss304-sheet-corner-angles",
    sectionSlug: "ss-clamps-sections",
    title: "SS304 Sheet Corner Angles",
    badge: "SS304 Sections",
    shortDescription: "SS304 sheet corner angles for edge protection, cladding, and fabrication detailing.",
    description:
      "SS304 Sheet Corner Angles for edge detailing, cladding transitions, and light fabrication work. Suitable for architectural and industrial finishing where stainless appearance and corrosion resistance are required.",
    specifications: [
      { label: "Product", value: "Sheet Corner Angle" },
      { label: "Material", value: "SS304" },
      { label: "Form", value: "Corner / angle section from sheet" },
      { label: "Sizes", value: "As per drawing / enquiry" },
      { label: "Finish", value: "Mill / brushed (as available)" },
      { label: "Application", value: "Edges, cladding, fabrication detailing" },
      { label: "Packaging", value: "Bundles / protective wrap" },
      { label: "Origin", value: "India" },
    ],
    features: ["SS304 finish options", "Custom size capability", "Clean corner profile", "Export protection packing", "Pairs with flat radius sections"],
    applications: ["Commercial", "Industrial", "Architectural", "Engineering"],
    relatedProductIds: ["ss304-flat-corner-radius-sections", "ss316-angle-bars", "ss316-quick-fit-insulated-clamps", "hexagonal-screws"],
  }),
  product({
    id: "ss304-flat-corner-radius-sections",
    slug: "ss304-flat-corner-radius-sections",
    sectionSlug: "ss-clamps-sections",
    title: "SS304 Flat Corner Radius Sections",
    badge: "SS304 Sections",
    shortDescription: "SS304 flat corner radius sections for smooth edge transitions and detailing.",
    description:
      "SS304 Flat Corner Radius Sections for applications needing a radiused corner profile instead of a sharp angle. Used in detailing, guards, and fabricated assemblies where a smoother transition is preferred.",
    specifications: [
      { label: "Product", value: "Flat Corner Radius Section" },
      { label: "Material", value: "SS304" },
      { label: "Form", value: "Flat corner with radius" },
      { label: "Sizes", value: "As per drawing / enquiry" },
      { label: "Finish", value: "Mill / brushed (as available)" },
      { label: "Application", value: "Radiused edge detailing & fabrication" },
      { label: "Packaging", value: "Bundles / protective wrap" },
      { label: "Origin", value: "India" },
    ],
    features: ["Radiused corner profile", "SS304 material", "Custom sizing", "Clean finish options", "Export packing"],
    applications: ["Architectural", "Commercial", "Industrial", "Engineering"],
    relatedProductIds: ["ss304-sheet-corner-angles", "ss316-angle-bars", "ss316-quick-fit-insulated-clamps", "ss316-flat-washers-m6-m10-m12"],
  }),
];

/* ---------- SECTION 4 — Galvanized Steel (GI/HDG) – Structural Steel ---------- */

const galvanizedStructural: CatalogProduct[] = [
  product({
    id: "galvanized-steel-angle-bars",
    slug: "galvanized-steel-angle-bars",
    sectionSlug: "galvanized-steel-structural",
    title: "Galvanized Steel Angle Bars",
    badge: "STRUCTURAL",
    shortDescription: "Galvanized steel equal and unequal angle bars to BS EN ISO 1461 coating standard.",
    description:
      "Galvanized Steel Angle Bars supplied in equal and unequal profiles with zinc coating to BS EN ISO 1461. Suitable for frameworks, supports, and corrosion-resistant structural fabrication.",
    specifications: [
      { label: "Material", value: "Galvanized Steel" },
      { label: "Type", value: "Equal / Unequal Angle" },
      { label: "Coating Standard", value: "BS EN ISO 1461" },
    ],
    features: ["Equal & unequal profiles", "BS EN ISO 1461 coating", "Corrosion resistant", "Export bundling"],
    applications: ["Construction", "Infrastructure", "Industrial", "Fabrication"],
    relatedProductIds: [
      "gi-hot-dip-galvanized-angles",
      "hdg-steel-plates",
      "hdg-h-beam-8x6-5",
      "ss316-angle-bars",
    ],
  }),
  product({
    id: "gi-hot-dip-galvanized-angles",
    slug: "gi-hot-dip-galvanized-angles",
    sectionSlug: "galvanized-steel-structural",
    title: "GI Hot Dip Galvanized Angles (50×3, 50×4, 50×5, 40×5)",
    badge: "STRUCTURAL",
    shortDescription: "HDG steel angles in 50×50×3, 50×50×4, 50×50×5 and 40×40×5 mm with >85 microns zinc coating.",
    description:
      "GI Hot Dip Galvanized Angles in specified sizes with average zinc coating greater than 85 microns. Ideal for outdoor and corrosive environments requiring durable equal-angle sections.",
    specifications: [
      { label: "Material", value: "HDG Steel" },
      { label: "Sizes", value: "50×50×3, 50×50×4, 50×50×5, 40×40×5 mm" },
      { label: "Zinc Coating", value: ">85 microns (avg)" },
    ],
    features: ["Specified HDG sizes", ">85 µm zinc coating", "Hot dip galvanized", "Export ready"],
    applications: ["Construction", "Industrial", "Infrastructure", "Marine environments"],
    relatedProductIds: [
      "galvanized-steel-angle-bars",
      "hdg-steel-plates",
      "hdg-h-beam-8x6-5",
      "c-purlins-50x100x2x5800mm",
    ],
  }),
  product({
    id: "hdg-steel-plates",
    slug: "hdg-steel-plates",
    sectionSlug: "galvanized-steel-structural",
    title: "HDG Steel Plates – 3mm/4mm/5mm/10mm",
    badge: "INDUSTRIAL",
    shortDescription: "Hot dip galvanized steel plates in 3mm, 4mm, 5mm and 10mm thicknesses, grades S275JR / S355JR.",
    description:
      "HDG Steel Plates supplied in 3mm, 4mm, 5mm and 10mm thickness ranges in S275JR / S355JR grades for industrial flooring, cladding, and fabrication requiring galvanized protection.",
    specifications: [
      { label: "Material", value: "Hot Dip Galvanized Steel" },
      { label: "Thickness Range", value: "3mm, 4mm, 5mm, 10mm" },
      { label: "Grade", value: "S275JR / S355JR" },
    ],
    features: ["Multi-thickness range", "S275JR / S355JR", "HDG finish", "Industrial duty"],
    applications: ["Industrial", "Construction", "Fabrication", "Infrastructure"],
    relatedProductIds: [
      "galvanized-steel-angle-bars",
      "gi-hot-dip-galvanized-angles",
      "hdg-h-beam-8x6-5",
      "ducting-and-fabrication",
    ],
  }),
  product({
    id: "hdg-h-beam-8x6-5",
    slug: "hdg-h-beam-8x6-5",
    sectionSlug: "galvanized-steel-structural",
    title: "HDG H-Beam 8\" × 6.5\"",
    badge: "STRUCTURAL",
    shortDescription: "Hot dip galvanized H-beam / universal column, 8\" × 6.5\" (approx 200×165mm).",
    description:
      "HDG H-Beam 8\" × 6.5\" (approximately 200×165mm) supplied as hot dip galvanized H-beam / universal column sections for structural frames requiring long-term corrosion resistance.",
    specifications: [
      { label: "Profile", value: "H-Beam / Universal Column" },
      { label: "Dimensions", value: "8\" × 6.5\" (Approx 200×165mm)" },
      { label: "Finish", value: "Hot Dip Galvanized" },
    ],
    features: ["Universal column profile", "HDG finish", "Structural capacity", "Export bundling"],
    applications: ["Construction", "Infrastructure", "Industrial", "Engineering"],
    relatedProductIds: [
      "gi-hot-dip-galvanized-angles",
      "hdg-steel-plates",
      "t-truss-frame-fabricated-hdg",
      "galvanized-steel-angle-bars",
    ],
  }),
  product({
    id: "hdg-lightning-poles",
    slug: "hdg-lightning-poles",
    sectionSlug: "galvanized-steel-structural",
    title: "HDG Lightning Poles",
    badge: "ELECTRICAL",
    shortDescription: "HDG steel lightning poles — Type 2–6m, Type 3–10m, Type 4–2m for LPS installations.",
    description:
      "HDG Lightning Poles for lightning protection systems, available as Type 2–6m, Type 3–10m and Type 4–2m. Hot dip galvanized steel construction for outdoor durability.",
    specifications: [
      { label: "Material", value: "HDG Steel" },
      { label: "Available Lengths", value: "2m, 6m, 10m" },
      { label: "Pole Types", value: "Type 2, Type 3, Type 4" },
      { label: "Application", value: "Lightning Protection System" },
    ],
    features: ["Type 2 / 3 / 4 options", "2m–10m lengths", "HDG steel", "LPS ready"],
    applications: ["Electrical", "Infrastructure", "Industrial", "Commercial"],
    relatedProductIds: [
      "hdg-h-beam-8x6-5",
      "hdg-steel-plates",
      "gi-hot-dip-galvanized-angles",
      "gi-coupler",
    ],
  }),
];

/* ---------------- SECTION 5 — Galvanized Steel – Accessories ---------------- */

const galvanizedAccessories: CatalogProduct[] = [
  product({
    id: "gi-coupler",
    slug: "gi-coupler",
    sectionSlug: "galvanized-steel-accessories",
    title: "GI Coupler",
    badge: "PIPING",
    shortDescription: "Malleable iron galvanized coupler with BSP / NPT thread options.",
    description:
      "GI Coupler in malleable iron with galvanized finish and BSP / NPT threading for piping connections in construction and industrial installations.",
    specifications: [
      { label: "Material", value: "Malleable Iron" },
      { label: "Finish", value: "Galvanized" },
      { label: "Thread", value: "BSP / NPT" },
    ],
    features: ["Malleable iron body", "Galvanized finish", "BSP / NPT threads", "Export packing"],
    applications: ["Piping", "Industrial", "Construction", "Infrastructure"],
    relatedProductIds: [
      "clamps-for-1-1-2-gi-pipe",
      "gi-hot-dip-galvanized-angles",
      "u-bolt-nut-washer",
      "ss316-u-bolts-all-sizes",
    ],
  }),
  product({
    id: "clamps-for-1-1-2-gi-pipe",
    slug: "clamps-for-1-1-2-gi-pipe",
    sectionSlug: "galvanized-steel-accessories",
    title: "Clamps for 1 1/2 GI Pipe",
    badge: "INDUSTRIAL",
    shortDescription: "Two-bolt GI pipe clamps compatible with 1 1/2 inch galvanized iron pipe.",
    description:
      "Clamps for 1 1/2 GI Pipe — two-bolt galvanized iron pipe clamps sized for 1 1/2 inch pipe compatibility in industrial and construction mounting applications.",
    specifications: [
      { label: "Pipe Size Compatibility", value: "1 1/2 inch" },
      { label: "Material", value: "GI (Galvanized Iron)" },
      { label: "Type", value: "Two-Bolt Pipe Clamp" },
    ],
    features: ["1 1/2\" compatibility", "Two-bolt design", "GI material", "Site ready"],
    applications: ["Industrial", "Piping", "Construction", "Infrastructure"],
    relatedProductIds: [
      "gi-coupler",
      "ss316-quick-fit-insulated-clamps",
      "u-bolt-nut-washer",
      "ss316-u-bolts-all-sizes",
    ],
  }),
];

/* ----------- SECTION 6 — Mild Steel (MS) – Structural & Formwork ----------- */

const mildSteelStructuralFormwork: CatalogProduct[] = [
  product({
    id: "adjustable-base-jacks",
    slug: "adjustable-base-jacks",
    sectionSlug: "mild-steel-structural-formwork",
    title: "Adjustable Base Jacks",
    badge: "SCAFFOLDING",
    shortDescription: "ERW MS pipe base jacks, 4mm thickness, 430mm total length with 300mm adjustment range.",
    description:
      "Adjustable Base Jacks with ERW MS pipe stems, 4mm pipe thickness, 430mm total length and 300mm adjustment range for scaffolding and formwork leveling.",
    specifications: [
      { label: "Stem Material", value: "ERW MS Pipe" },
      { label: "Pipe Thickness", value: "4mm" },
      { label: "Total Length", value: "430mm" },
      { label: "Adjustment Range", value: "300mm" },
    ],
    features: ["ERW MS stem", "4mm wall", "300mm adjustability", "Scaffolding ready"],
    applications: ["Scaffolding", "Formwork", "Construction", "Infrastructure"],
    relatedProductIds: [
      "adjustable-shoring-jacks",
      "c-purlins-50x100x2x5800mm",
      "t-truss-frame-fabricated-hdg",
      "concrete-nails-heavy-duty",
    ],
  }),
  product({
    id: "adjustable-shoring-jacks",
    slug: "adjustable-shoring-jacks",
    sectionSlug: "mild-steel-structural-formwork",
    title: "Adjustable Shoring Jacks",
    badge: "SCAFFOLDING",
    shortDescription: "Heavy-duty telescopic prop / jack in MS ERW pipes, painted or galvanized finish.",
    description:
      "Adjustable Shoring Jacks as telescopic props / jacks in MS ERW pipes, heavy-duty grade, available painted or galvanized for formwork and temporary support.",
    specifications: [
      { label: "Type", value: "Telescopic Prop / Jack" },
      { label: "Material", value: "MS ERW Pipes" },
      { label: "Grade", value: "Heavy Duty" },
      { label: "Finish", value: "Painted / Galvanized" },
    ],
    features: ["Telescopic design", "Heavy duty", "Painted or HDG", "Formwork support"],
    applications: ["Scaffolding", "Formwork", "Construction", "Infrastructure"],
    relatedProductIds: [
      "adjustable-base-jacks",
      "t-truss-frame-fabricated-hdg",
      "c-purlins-50x100x2x5800mm",
      "ducting-and-fabrication",
    ],
  }),
  product({
    id: "c-purlins-50x100x2x5800mm",
    slug: "c-purlins-50x100x2x5800mm",
    sectionSlug: "mild-steel-structural-formwork",
    title: "C-Purlins",
    badge: "STRUCTURAL",
    shortDescription: "C-purlins 50×100×2×5800mm — 100mm web × 50mm flange, 2.0mm thick, 5800mm length.",
    description:
      "C-Purlins 50×100×2×5800mm — C-section profiles with 100mm web, 50mm flange, 2.0mm thickness and 5800mm length for roofing and secondary structural framing.",
    specifications: [
      { label: "Profile", value: "C-Section" },
      { label: "Dimensions", value: "100mm (Web) × 50mm (Flange)" },
      { label: "Thickness", value: "2.0mm" },
      { label: "Length", value: "5800mm" },
    ],
    features: ["C-section profile", "2.0mm thickness", "5800mm length", "Roofing frames"],
    applications: ["Construction", "Industrial", "Warehousing", "Fabrication"],
    relatedProductIds: [
      "t-truss-frame-fabricated-hdg",
      "gi-hot-dip-galvanized-angles",
      "hdg-h-beam-8x6-5",
      "adjustable-base-jacks",
    ],
  }),
  product({
    id: "t-truss-frame-fabricated-hdg",
    slug: "t-truss-frame-fabricated-hdg",
    sectionSlug: "mild-steel-structural-formwork",
    title: "T-Truss Frame (Fabricated & HDG)",
    badge: "STRUCTURAL",
    shortDescription: "Welded MS T-truss frames finished with hot dip galvanizing.",
    description:
      "T-Truss Frame (Fabricated & HDG) — welded mild steel sections fabricated as T-truss frames and hot dip galvanized for durable structural and roofing support.",
    specifications: [
      { label: "Type", value: "T-Truss Frame" },
      { label: "Fabrication", value: "Welded MS Sections" },
      { label: "Finish", value: "Hot Dip Galvanized" },
    ],
    features: ["Welded MS fabrication", "HDG finish", "Structural truss", "Project supply"],
    applications: ["Construction", "Industrial", "Infrastructure", "Engineering"],
    relatedProductIds: [
      "c-purlins-50x100x2x5800mm",
      "hdg-h-beam-8x6-5",
      "ducting-and-fabrication",
      "adjustable-shoring-jacks",
    ],
  }),
  product({
    id: "ducting-and-fabrication",
    slug: "ducting-and-fabrication",
    sectionSlug: "mild-steel-structural-formwork",
    title: "Ducting and Fabrication",
    badge: "FABRICATION",
    shortDescription: "MS / GI ducting and fabrication — cutting, bending, welding, flanging for HVAC and supports.",
    description:
      "Ducting and Fabrication in mild steel or GI, typical thickness 0.6mm–2.0mm, covering cutting, bending, welding and flanging with galvanized or industrial paint finish for HVAC ducting, enclosures and supports.",
    specifications: [
      { label: "Material", value: "Mild Steel (MS) / GI" },
      { label: "Thickness", value: "0.6mm – 2.0mm (Typical)" },
      { label: "Fabrication", value: "Cutting, Bending, Welding, Flanging" },
      { label: "Finish", value: "Galvanized / Industrial Paint" },
      { label: "Applications", value: "HVAC Ducting, Enclosures, Supports" },
    ],
    features: ["MS / GI options", "Full fabrication suite", "HVAC ready", "Custom sizing"],
    applications: ["HVAC", "Industrial", "Commercial", "Infrastructure"],
    relatedProductIds: [
      "t-truss-frame-fabricated-hdg",
      "hdg-steel-plates",
      "c-purlins-50x100x2x5800mm",
      "gi-coupler",
    ],
  }),
];

export const ironSteelHardwareProducts: CatalogProduct[] = [
  ...reinforcementSteel,
  ...ssFasteners,
  ...ssClampsSections,
  ...galvanizedStructural,
  ...galvanizedAccessories,
  ...mildSteelStructuralFormwork,
];

/** Clone an entire category catalogue onto another category slug (unique ids for related links). */
function cloneProductsForCategory(
  products: CatalogProduct[],
  categorySlug: string,
  idPrefix: string,
): CatalogProduct[] {
  return products.map((p) => ({
    ...p,
    id: `${idPrefix}${p.id}`,
    categorySlug,
    relatedProductIds: p.relatedProductIds.map((id) => `${idPrefix}${id}`),
  }));
}

/** Exact mirror of Construction & Stainless Steel Structural Materials catalogue. */
export const structuralSteelAnglesProducts = cloneProductsForCategory(
  ironSteelHardwareProducts,
  "structural-steel-steel-angles",
  "ssa-",
);
/* ==========================================================================
 * CATEGORY — Construction Machinery & Site Equipment
 * ========================================================================== */

const MACHINERY = "construction-machinery-site-equipment";

/* ----------------------------- SECTION — Heavy Equipment ----------------------------- */

const heavyEquipment: CatalogProduct[] = [
  product({
    categorySlug: MACHINERY,
    id: "fleet-guard-genset",
    slug: "fleet-guard-genset",
    sectionSlug: "heavy-equipment",
    title: "Fleet Guard Genset",
    badge: "POWER GENERATION",
    shortDescription: "Diesel generator set with Fleetguard filtration system across various kVA ratings.",
    description:
      "Fleet Guard Genset diesel generator sets equipped with Fleetguard filtration systems. Available across various kVA ratings for reliable site and industrial power generation.",
    specifications: [
      { label: "Type", value: "Diesel Generator Set" },
      { label: "Filtration", value: "Fleetguard Filtration System" },
      { label: "Power Output", value: "Various kVA Ratings" },
    ],
    features: ["Diesel genset", "Fleetguard filtration", "Multiple kVA options", "Export ready"],
    applications: ["Construction", "Industrial", "Infrastructure", "Power backup"],
    relatedProductIds: ["forklift", "jcb", "air-filter", "fuel-filter"],
  }),
  product({
    categorySlug: MACHINERY,
    id: "forklift",
    slug: "forklift",
    sectionSlug: "heavy-equipment",
    title: "Forklift",
    badge: "MATERIAL HANDLING",
    shortDescription: "Diesel or electric forklifts with 3 ton / 5 ton load capacity and 3m–6m lift height.",
    description:
      "Forklift units for material handling with 3 ton / 5 ton load capacity, diesel or electric fuel options, and lift heights from 3m to 6m for warehouses and construction sites.",
    specifications: [
      { label: "Load Capacity", value: "3 Ton / 5 Ton" },
      { label: "Fuel Type", value: "Diesel / Electric" },
      { label: "Lift Height", value: "3m - 6m" },
    ],
    features: ["3T / 5T capacity", "Diesel or electric", "3–6m lift", "Site ready"],
    applications: ["Warehousing", "Construction", "Industrial", "Logistics"],
    relatedProductIds: ["lifting-winch-machine", "jcb", "fleet-guard-genset", "tractors-implements"],
  }),
  product({
    categorySlug: MACHINERY,
    id: "tractors-implements",
    slug: "tractors-implements",
    sectionSlug: "heavy-equipment",
    title: "Tractors & Implements",
    badge: "AGRICULTURE",
    shortDescription: "50–90 HP tractors in 2WD / 4WD with loader, plough, and trailer attachments.",
    description:
      "Tractors & Implements with engine power from 50 HP to 90 HP, 2WD / 4WD drive options, and attachments including loader, plough, and trailer for agricultural and site work.",
    specifications: [
      { label: "Engine Power", value: "50 HP - 90 HP" },
      { label: "Drive", value: "2WD / 4WD" },
      { label: "Attachments", value: "Loader, Plough, Trailer" },
    ],
    features: ["50–90 HP range", "2WD / 4WD", "Multiple implements", "Export packing"],
    applications: ["Agriculture", "Construction", "Infrastructure", "Industrial"],
    relatedProductIds: ["jcb", "forklift", "front-tyre-with-tube", "rear-tyre-kit-jcb"],
  }),
  product({
    categorySlug: MACHINERY,
    id: "jcb",
    slug: "jcb",
    sectionSlug: "heavy-equipment",
    title: "JCB",
    badge: "CONSTRUCTION",
    shortDescription: "Backhoe loader, 74 HP, 7,460 kg operating weight, 4.77m dig depth.",
    description:
      "JCB backhoe loader with 74 HP engine power, 7,460 kg operating weight, and 4.77m dig depth for excavation, loading, and general construction site operations.",
    specifications: [
      { label: "Type", value: "Backhoe Loader" },
      { label: "Engine Power", value: "74 HP" },
      { label: "Operating Weight", value: "7,460 kg" },
      { label: "Dig Depth", value: "4.77m" },
    ],
    features: ["Backhoe loader", "74 HP", "4.77m dig depth", "Heavy site duty"],
    applications: ["Construction", "Infrastructure", "Industrial", "Earthmoving"],
    relatedProductIds: ["forklift", "tractors-implements", "rear-tyre-kit-jcb", "lifting-winch-machine"],
  }),
];

/* ----------------------------- SECTION — Lifting & Handling ----------------------------- */

const liftingHandling: CatalogProduct[] = [
  product({
    categorySlug: MACHINERY,
    id: "lifting-winch-machine",
    slug: "lifting-winch-machine",
    sectionSlug: "lifting-handling",
    title: "Lifting Winch Machine",
    badge: "LIFTING",
    shortDescription: "Electric motor lifting winch, 1–5 ton capacity with steel core wire rope.",
    description:
      "Lifting Winch Machine with 1 ton to 5 ton capacity, electric motor power, and steel core wire rope for reliable material lifting on construction and industrial sites.",
    specifications: [
      { label: "Capacity", value: "1 Ton - 5 Ton" },
      { label: "Power", value: "Electric Motor" },
      { label: "Wire Rope", value: "Steel Core" },
    ],
    features: ["1–5 ton capacity", "Electric drive", "Steel core rope", "Site lifting"],
    applications: ["Construction", "Industrial", "Warehousing", "Infrastructure"],
    relatedProductIds: ["forklift", "jcb", "fleet-guard-genset", "tractors-implements"],
  }),
];

/* ----------------------------- SECTION — Filters & Consumables ----------------------------- */

const filtersConsumables: CatalogProduct[] = [
  product({
    categorySlug: MACHINERY,
    id: "air-filter",
    slug: "air-filter",
    sectionSlug: "filters-consumables",
    title: "Air Filter",
    badge: "MAINTENANCE",
    shortDescription: "Heavy duty air filter with 99.9% efficiency for engines and compressors.",
    description:
      "Air Filter — heavy duty filtration with 99.9% efficiency for engines and compressors, supporting reliable equipment performance in dusty site conditions.",
    specifications: [
      { label: "Type", value: "Heavy Duty Air Filter" },
      { label: "Efficiency", value: "99.9%" },
      { label: "Application", value: "Engines / Compressors" },
    ],
    features: ["99.9% efficiency", "Heavy duty", "Engines & compressors", "Export packs"],
    applications: ["Maintenance", "Construction", "Industrial", "Power generation"],
    relatedProductIds: ["fuel-filter", "oil-filter", "fleet-guard-genset", "jcb"],
  }),
  product({
    categorySlug: MACHINERY,
    id: "fuel-filter",
    slug: "fuel-filter",
    sectionSlug: "filters-consumables",
    title: "Fuel Filter",
    badge: "MAINTENANCE",
    shortDescription: "Spin-on fuel filter with synthetic / cellulose media and water separator function.",
    description:
      "Fuel Filter spin-on type with synthetic or cellulose media and water separator function for protecting diesel engines and generators from contaminated fuel.",
    specifications: [
      { label: "Type", value: "Spin-on Fuel Filter" },
      { label: "Media", value: "Synthetic / Cellulose" },
      { label: "Function", value: "Water Separator" },
    ],
    features: ["Spin-on design", "Water separator", "Synthetic / cellulose", "Engine protection"],
    applications: ["Maintenance", "Power generation", "Construction", "Industrial"],
    relatedProductIds: ["air-filter", "oil-filter", "fleet-guard-genset", "forklift"],
  }),
  product({
    categorySlug: MACHINERY,
    id: "oil-filter",
    slug: "oil-filter",
    sectionSlug: "filters-consumables",
    title: "Oil Filter",
    badge: "MAINTENANCE",
    shortDescription: "Lube oil filter, 10–30 micron rating, high pressure resistant durability.",
    description:
      "Oil Filter — lube oil filtration with 10–30 micron rating and high pressure resistant durability for heavy equipment and industrial engines.",
    specifications: [
      { label: "Type", value: "Lube Oil Filter" },
      { label: "Micron Rating", value: "10 - 30 Microns" },
      { label: "Durability", value: "High Pressure Resistant" },
    ],
    features: ["10–30 micron", "High pressure rated", "Lube oil duty", "Bulk supply"],
    applications: ["Maintenance", "Construction", "Industrial", "Agriculture"],
    relatedProductIds: ["air-filter", "fuel-filter", "jcb", "tractors-implements"],
  }),
];

/* ----------------------------- SECTION — Tyres & Accessories ----------------------------- */

const tyresAccessories: CatalogProduct[] = [
  product({
    categorySlug: MACHINERY,
    id: "front-tyre-with-tube",
    slug: "front-tyre-with-tube",
    sectionSlug: "tyres-accessories",
    title: "Front Tyre with Tube",
    badge: "TYRES",
    shortDescription: "Front axle tyre kit with rib / lug pattern including tyre, tube, and flap.",
    description:
      "Front Tyre with Tube for front axle fitment, rib / lug pattern options, supplied as a complete kit with tyre, tube, and flap for construction and agricultural equipment.",
    specifications: [
      { label: "Position", value: "Front Axle" },
      { label: "Pattern", value: "Rib / Lug" },
      { label: "Includes", value: "Tyre, Tube, Flap" },
    ],
    features: ["Front axle", "Rib / lug options", "Complete kit", "Export packing"],
    applications: ["Construction", "Agriculture", "Industrial", "Earthmoving"],
    relatedProductIds: ["rear-tyre-kit-jcb", "tractors-implements", "jcb", "forklift"],
  }),
  product({
    categorySlug: MACHINERY,
    id: "rear-tyre-kit-jcb",
    slug: "rear-tyre-kit-jcb",
    sectionSlug: "tyres-accessories",
    title: "Rear Tyre Kit (JCB)",
    badge: "TYRES",
    shortDescription: "JCB rear tyre kit, sizes 16.9-28 / 14-25, 12PR / 16PR with heavy duty grip.",
    description:
      "Rear Tyre Kit (JCB) in sizes 16.9-28 / 14-25 with 12PR / 16PR ply ratings and heavy duty traction grip for backhoe loaders and similar earthmoving equipment.",
    specifications: [
      { label: "Size", value: "16.9-28 / 14-25" },
      { label: "Ply Rating", value: "12PR / 16PR" },
      { label: "Traction", value: "Heavy Duty Grip" },
    ],
    features: ["JCB fitment", "16.9-28 / 14-25", "12PR / 16PR", "Heavy duty grip"],
    applications: ["Construction", "Earthmoving", "Industrial", "Infrastructure"],
    relatedProductIds: ["front-tyre-with-tube", "jcb", "tractors-implements", "forklift"],
  }),
];

export const constructionMachineryProducts: CatalogProduct[] = [
  ...heavyEquipment,
  ...liftingHandling,
  ...filtersConsumables,
  ...tyresAccessories,
];

/* ==========================================================================
 * CATEGORY — Flooring, Tiles, Marble & Stone
 * ========================================================================== */

const STONE = "tiles-natural-stone";

/* ----------------------------- SECTION — Tiles & Flooring ----------------------------- */

const tilesFlooring: CatalogProduct[] = [
  product({
    categorySlug: STONE,
    id: "earth-matt-295x600-r10",
    slug: "earth-matt-295x600-r10",
    sectionSlug: "tiles-flooring",
    title: "Earth Matt 295×600 (R10)",
    badge: "TILES",
    shortDescription: "Earth Matt finish tile, 295×600mm, R10 anti-slip for bathroom and kitchen.",
    description:
      "Earth Matt 295×600 (R10) porcelain tile with earth matt finish and R10 anti-slip rating, suited to bathroom and kitchen flooring applications.",
    specifications: [
      { label: "Finish", value: "Earth Matt" },
      { label: "Size", value: "295mm × 600mm" },
      { label: "Slip Rating", value: "R10 (Anti-Slip)" },
      { label: "Application", value: "Bathroom, Kitchen" },
    ],
    features: ["Earth matt finish", "R10 anti-slip", "295×600mm", "Wet area ready"],
    applications: ["Bathroom", "Kitchen", "Residential", "Commercial"],
    relatedProductIds: [
      "pulpis-matt-600x600-r10",
      "raw-slate-grey-295x600-r10",
      "snow-white-295x600-polished",
      "marble-dolomine",
    ],
  }),
  product({
    categorySlug: STONE,
    id: "pulpis-matt-600x600-r10",
    slug: "pulpis-matt-600x600-r10",
    sectionSlug: "tiles-flooring",
    title: "Pulpis Matt 600×600 (R10)",
    badge: "TILES",
    shortDescription: "Pulpis marble-look glazed porcelain, 600×600mm, matt R10 surface.",
    description:
      "Pulpis Matt 600×600 (R10) glazed porcelain tile with Pulpis marble look design and matt R10 surface for durable residential and commercial floors.",
    specifications: [
      { label: "Design", value: "Pulpis Marble Look" },
      { label: "Size", value: "600mm × 600mm" },
      { label: "Surface", value: "Matt R10" },
      { label: "Material", value: "Glazed Porcelain" },
    ],
    features: ["Marble look", "600×600mm", "Matt R10", "Glazed porcelain"],
    applications: ["Flooring", "Residential", "Commercial", "Hospitality"],
    relatedProductIds: [
      "marble-pulipis",
      "earth-matt-295x600-r10",
      "raw-slate-grey-600x600-r10",
      "marble-slate-grey",
    ],
  }),
  product({
    categorySlug: STONE,
    id: "raw-slate-grey-295x600-r10",
    slug: "raw-slate-grey-295x600-r10",
    sectionSlug: "tiles-flooring",
    title: "Raw Slate Grey 295×600 (R10)",
    badge: "TILES",
    shortDescription: "Raw slate textured grey tile, 295×600mm with R10 slip resistance.",
    description:
      "Raw Slate Grey 295×600 (R10) tile featuring raw slate texture in grey with R10 slip resistance for contemporary flooring schemes.",
    specifications: [
      { label: "Texture", value: "Raw Slate" },
      { label: "Color", value: "Grey" },
      { label: "Size", value: "295mm × 600mm" },
      { label: "Slip Resistance", value: "R10" },
    ],
    features: ["Raw slate texture", "Grey tone", "R10 rated", "295×600mm"],
    applications: ["Flooring", "Residential", "Commercial", "Outdoor-adjacent"],
    relatedProductIds: [
      "raw-slate-grey-600x600-r10",
      "marble-slate-grey",
      "rock-slate-grey-grooved-step",
      "earth-matt-295x600-r10",
    ],
  }),
  product({
    categorySlug: STONE,
    id: "raw-slate-grey-600x600-r10",
    slug: "raw-slate-grey-600x600-r10",
    sectionSlug: "tiles-flooring",
    title: "Raw Slate Grey 600×600 (R10)",
    badge: "TILES",
    shortDescription: "Raw slate textured grey tile, 600×600mm with R10 rating.",
    description:
      "Raw Slate Grey 600×600 (R10) large-format tile with raw slate texture and R10 rating for spacious floor installations.",
    specifications: [
      { label: "Texture", value: "Raw Slate" },
      { label: "Size", value: "600mm × 600mm" },
      { label: "Rating", value: "R10" },
    ],
    features: ["Raw slate look", "600×600mm", "R10 rating", "Large format"],
    applications: ["Flooring", "Commercial", "Residential", "Lobby areas"],
    relatedProductIds: [
      "raw-slate-grey-295x600-r10",
      "marble-slate-grey",
      "rock-slate-grey-grooved-step",
      "pulpis-matt-600x600-r10",
    ],
  }),
  product({
    categorySlug: STONE,
    id: "snow-white-295x600-polished",
    slug: "snow-white-295x600-polished",
    sectionSlug: "tiles-flooring",
    title: "Snow White 295×600 (Polished)",
    badge: "TILES",
    shortDescription: "Snow white high gloss polished tile, 295×600mm for wall cladding.",
    description:
      "Snow White 295×600 (Polished) tile in snow white with high gloss polished finish, ideal for wall cladding applications.",
    specifications: [
      { label: "Color", value: "Snow White" },
      { label: "Size", value: "295mm × 600mm" },
      { label: "Finish", value: "High Gloss Polished" },
      { label: "Usage", value: "Wall Cladding" },
    ],
    features: ["Snow white", "High gloss", "Wall cladding", "295×600mm"],
    applications: ["Wall cladding", "Bathrooms", "Residential", "Commercial"],
    relatedProductIds: [
      "marble-dolomine",
      "earth-matt-295x600-r10",
      "pulpis-matt-600x600-r10",
      "polished-color-granite-300x99cm",
    ],
  }),
];

/* ----------------------------- SECTION — Marble ----------------------------- */

const marbleProducts: CatalogProduct[] = [
  product({
    categorySlug: STONE,
    id: "marble-dolomine",
    slug: "marble-dolomine",
    sectionSlug: "marble",
    title: "Marble – Dolomine",
    badge: "NATURAL STONE",
    shortDescription: "Natural dolomite marble, white with grey veins, polished or honed finish.",
    description:
      "Marble – Dolomine natural dolomite marble in white with grey veins, available polished or honed for floors, walls, and feature surfaces.",
    specifications: [
      { label: "Material", value: "Natural Dolomite Marble" },
      { label: "Color", value: "White with Grey Veins" },
      { label: "Finish", value: "Polished / Honed" },
    ],
    features: ["Natural dolomite", "White with grey veins", "Polished or honed", "Export slabs"],
    applications: ["Flooring", "Walls", "Residential", "Hospitality"],
    relatedProductIds: [
      "marble-pulipis",
      "marble-slate-grey",
      "snow-white-295x600-polished",
      "polished-color-granite-300x99cm",
    ],
  }),
  product({
    categorySlug: STONE,
    id: "marble-pulipis",
    slug: "marble-pulipis",
    sectionSlug: "marble",
    title: "Marble – Pulipis",
    badge: "NATURAL STONE",
    shortDescription: "Imported Pulpis marble in warm brown / tobacco tones.",
    description:
      "Marble – Pulipis (Pulpis marble) in warm brown / tobacco tones, imported natural stone for premium flooring and interior applications.",
    specifications: [
      { label: "Material", value: "Pulpis Marble" },
      { label: "Tone", value: "Warm Brown / Tobacco" },
      { label: "Origin", value: "Imported" },
    ],
    features: ["Pulpis marble", "Warm brown / tobacco", "Imported", "Premium interiors"],
    applications: ["Flooring", "Feature walls", "Hospitality", "Residential"],
    relatedProductIds: [
      "pulpis-matt-600x600-r10",
      "marble-dolomine",
      "marble-slate-grey",
      "polished-color-granite-300x99cm",
    ],
  }),
  product({
    categorySlug: STONE,
    id: "marble-slate-grey",
    slug: "marble-slate-grey",
    sectionSlug: "marble",
    title: "Marble – Slate Grey",
    badge: "NATURAL STONE",
    shortDescription: "Grey marble with slate effect for flooring and countertops.",
    description:
      "Marble – Slate Grey natural grey marble with slate effect texture, suitable for flooring and countertop applications.",
    specifications: [
      { label: "Material", value: "Grey Marble" },
      { label: "Texture", value: "Slate Effect" },
      { label: "Application", value: "Flooring, Countertops" },
    ],
    features: ["Grey marble", "Slate effect", "Flooring & countertops", "Natural stone"],
    applications: ["Flooring", "Countertops", "Residential", "Commercial"],
    relatedProductIds: [
      "raw-slate-grey-600x600-r10",
      "rock-slate-grey-grooved-step",
      "marble-dolomine",
      "marble-pulipis",
    ],
  }),
];

/* ----------------------------- SECTION — Granite ----------------------------- */

const graniteProducts: CatalogProduct[] = [
  product({
    categorySlug: STONE,
    id: "polished-color-granite-300x99cm",
    slug: "polished-color-granite-300x99cm",
    sectionSlug: "granite",
    title: "Polished Color Granite 300×99cm",
    badge: "GRANITE",
    shortDescription: "Natural granite slab, mirror polish, 300×99cm, 18–20mm thickness.",
    description:
      "Polished Color Granite 300×99cm natural granite slabs with mirror polish finish, slab size 300cm × 99cm and thickness 18mm–20mm for architectural and flooring use.",
    specifications: [
      { label: "Material", value: "Natural Granite" },
      { label: "Finish", value: "Mirror Polish" },
      { label: "Slab Size", value: "300cm × 99cm" },
      { label: "Thickness", value: "18mm - 20mm" },
    ],
    features: ["Natural granite", "Mirror polish", "300×99cm slabs", "18–20mm"],
    applications: ["Flooring", "Cladding", "Countertops", "Commercial"],
    relatedProductIds: [
      "marble-dolomine",
      "marble-pulipis",
      "marble-slate-grey",
      "snow-white-295x600-polished",
    ],
  }),
];

/* ----------------------------- SECTION — Steps & Outdoor Flooring ----------------------------- */

const stepsOutdoorFlooring: CatalogProduct[] = [
  product({
    categorySlug: STONE,
    id: "rock-slate-grey-grooved-step",
    slug: "rock-slate-grey-grooved-step",
    sectionSlug: "steps-outdoor-flooring",
    title: "Rock Slate Grey – Grooved Step",
    badge: "STAIRS",
    shortDescription: "Anti-slip grooved stair step in Rock Slate Grey look.",
    description:
      "Rock Slate Grey – Grooved Step stair tread with anti-slip grooves and Rock Slate Grey appearance for safe indoor and outdoor stair installations.",
    specifications: [
      { label: "Type", value: "Stair Step" },
      { label: "Feature", value: "Anti-Slip Grooves" },
      { label: "Look", value: "Rock Slate Grey" },
    ],
    features: ["Anti-slip grooves", "Stair step", "Rock slate grey", "Matched system"],
    applications: ["Stairs", "Outdoor flooring", "Residential", "Commercial"],
    relatedProductIds: [
      "rock-slate-grey-non-grooved-riser",
      "raw-slate-grey-295x600-r10",
      "marble-slate-grey",
      "raw-slate-grey-600x600-r10",
    ],
  }),
  product({
    categorySlug: STONE,
    id: "rock-slate-grey-non-grooved-riser",
    slug: "rock-slate-grey-non-grooved-riser",
    sectionSlug: "steps-outdoor-flooring",
    title: "Rock Slate Grey – Non-Grooved Riser",
    badge: "STAIRS",
    shortDescription: "Smooth / textured stair riser matching the Slate Grey grooved step.",
    description:
      "Rock Slate Grey – Non-Grooved Riser stair riser with smooth or textured surface, designed to match the Rock Slate Grey grooved step.",
    specifications: [
      { label: "Type", value: "Stair Riser" },
      { label: "Surface", value: "Smooth / Textured" },
      { label: "Match", value: "Matches Slate Grey Step" },
    ],
    features: ["Stair riser", "Smooth / textured", "Matches grooved step", "Coordinated set"],
    applications: ["Stairs", "Outdoor flooring", "Residential", "Commercial"],
    relatedProductIds: [
      "rock-slate-grey-grooved-step",
      "raw-slate-grey-295x600-r10",
      "marble-slate-grey",
      "raw-slate-grey-600x600-r10",
    ],
  }),
];

export const flooringTilesMarbleStoneProducts: CatalogProduct[] = [
  ...tilesFlooring,
  ...marbleProducts,
  ...graniteProducts,
  ...stepsOutdoorFlooring,
];

/* ==========================================================================
 * CATEGORY — Water Treatment and Purification
 * ========================================================================== */

const WATER = "water-treatment-purification";

/* ----------------------------- SECTION — HDPE Piping Systems ----------------------------- */

const hdpePipingSystems: CatalogProduct[] = [
  product({
    categorySlug: WATER,
    id: "hdpe-bends",
    slug: "hdpe-bends",
    sectionSlug: "hdpe-piping-systems",
    title: "HDPE Bends",
    badge: "PLUMBING",
    shortDescription: "HDPE bends in 45° / 90° with butt fusion or electrofusion connection.",
    description:
      "HDPE Bends manufactured from high density polyethylene in 45° and 90° angles, suitable for butt fusion or electrofusion jointing in water and drainage networks.",
    specifications: [
      { label: "Material", value: "High Density Polyethylene" },
      { label: "Angle", value: "45° / 90°" },
      { label: "Connection", value: "Butt Fusion / Electrofusion" },
    ],
    features: ["HDPE material", "45° / 90°", "Fusion compatible", "Export packing"],
    applications: ["Water supply", "Drainage", "Infrastructure", "Industrial"],
    relatedProductIds: ["hdpe-couplers", "hdpe-pipes", "hdpe-tees", "di-drain-covers-b125"],
  }),
  product({
    categorySlug: WATER,
    id: "hdpe-couplers",
    slug: "hdpe-couplers",
    sectionSlug: "hdpe-piping-systems",
    title: "HDPE Couplers",
    badge: "PLUMBING",
    shortDescription: "HDPE straight couplers rated PN10 / PN16 for pressure piping.",
    description:
      "HDPE Couplers as straight couplers in HDPE with PN10 / PN16 pressure ratings for reliable jointing of HDPE water supply and drainage lines.",
    specifications: [
      { label: "Material", value: "HDPE" },
      { label: "Type", value: "Straight Coupler" },
      { label: "Pressure Rating", value: "PN10 / PN16" },
    ],
    features: ["Straight coupler", "PN10 / PN16", "HDPE body", "Network ready"],
    applications: ["Water supply", "Drainage", "Infrastructure", "Industrial"],
    relatedProductIds: ["hdpe-bends", "hdpe-pipes", "hdpe-tees", "polythene-membrane-all-gauges"],
  }),
  product({
    categorySlug: WATER,
    id: "hdpe-pipes",
    slug: "hdpe-pipes",
    sectionSlug: "hdpe-piping-systems",
    title: "HDPE Pipes",
    badge: "PLUMBING",
    shortDescription: "PE100 / PE80 HDPE pipes, 20mm–630mm, for water supply and drainage.",
    description:
      "HDPE Pipes in PE100 / PE80 materials for water supply and drainage applications, available in diameters from 20mm to 630mm.",
    specifications: [
      { label: "Material", value: "PE100 / PE80" },
      { label: "Application", value: "Water Supply / Drainage" },
      { label: "Diameters", value: "20mm - 630mm" },
    ],
    features: ["PE100 / PE80", "20–630mm", "Supply & drainage", "Export coils / lengths"],
    applications: ["Water supply", "Drainage", "Infrastructure", "Utilities"],
    relatedProductIds: ["hdpe-bends", "hdpe-couplers", "hdpe-tees", "plastic-cable-protection-covers"],
  }),
  product({
    categorySlug: WATER,
    id: "hdpe-tees",
    slug: "hdpe-tees",
    sectionSlug: "hdpe-piping-systems",
    title: "HDPE Tees",
    badge: "PLUMBING",
    shortDescription: "Equal / reducing HDPE tees with fusion weld joint type.",
    description:
      "HDPE Tees in equal and reducing configurations, HDPE material with fusion weld joint type for branching water and drainage networks.",
    specifications: [
      { label: "Configuration", value: "Equal / Reducing Tee" },
      { label: "Material", value: "HDPE" },
      { label: "Joint Type", value: "Fusion Weld" },
    ],
    features: ["Equal / reducing", "Fusion weld", "HDPE", "Branch fittings"],
    applications: ["Water supply", "Drainage", "Infrastructure", "Industrial"],
    relatedProductIds: ["hdpe-pipes", "hdpe-bends", "hdpe-couplers", "di-drain-covers-b125"],
  }),
  product({
    categorySlug: WATER,
    id: "shoring-jacks-nb-ms-erw-pipes",
    slug: "shoring-jacks-nb-ms-erw-pipes",
    sectionSlug: "hdpe-piping-systems",
    title: "Shoring Jacks : NB MS ERW pipes",
    badge: "SCAFFOLDING",
    shortDescription: "Telescopic shoring jacks in NB grade MS ERW pipes with high load capacity.",
    description:
      "Shoring Jacks : NB MS ERW pipes — telescopic height adjustment props in NB grade mild steel ERW pipes with high load bearing capacity for site support.",
    specifications: [
      { label: "Material", value: "NB grade MS ERW Pipes" },
      { label: "Mechanism", value: "Telescopic Height Adjustment" },
      { label: "Load Capacity", value: "High Load Bearing" },
    ],
    features: ["NB MS ERW", "Telescopic", "High load bearing", "Site support"],
    applications: ["Scaffolding", "Formwork", "Construction", "Infrastructure"],
    relatedProductIds: ["hdpe-pipes", "adjustable-shoring-jacks", "hdpe-couplers", "polythene-membrane-all-gauges"],
  }),
];

/* ----------------------------- SECTION — Drain Covers ----------------------------- */

const drainCovers: CatalogProduct[] = [
  product({
    categorySlug: WATER,
    id: "di-drain-covers-b125",
    slug: "di-drain-covers-b125",
    sectionSlug: "drain-covers",
    title: "DI Drain Covers B125 (All Sizes)",
    badge: "DRAINAGE",
    shortDescription: "Ductile iron drain covers, load class B125 (12.5 tonnes), EN 124 standard.",
    description:
      "DI Drain Covers B125 (All Sizes) in ductile iron with B125 (12.5 tonnes) load class to EN 124 for car parks and pedestrian areas.",
    specifications: [
      { label: "Material", value: "Ductile Iron (DI)" },
      { label: "Load Class", value: "B125 (12.5 Tonnes)" },
      { label: "Application", value: "Car Parks, Pedestrian Areas" },
      { label: "Standard", value: "EN 124" },
    ],
    features: ["Ductile iron", "B125 class", "EN 124", "All sizes"],
    applications: ["Car parks", "Pedestrian areas", "Drainage", "Infrastructure"],
    relatedProductIds: [
      "ductile-iron-manhole-cover",
      "b125-ds-solid-top",
      "b125-ss-solid-top",
      "d400-ss-solid-top",
    ],
  }),
];

/* ----------------------------- SECTION — Manhole Covers ----------------------------- */

const manholeCovers: CatalogProduct[] = [
  product({
    categorySlug: WATER,
    id: "ductile-iron-manhole-cover",
    slug: "ductile-iron-manhole-cover",
    sectionSlug: "manhole-covers",
    title: "Ductile Iron Manhole Cover",
    badge: "DRAINAGE",
    shortDescription: "Heavy-duty corrosion-resistant DI manhole covers in custom sizes and thicknesses.",
    description:
      "Ductile Iron Manhole Cover with custom sizes, variable thickness options, heavy-duty construction, and corrosion-resistant performance for utility access.",
    specifications: [
      { label: "Sizes", value: "Custom Sizes Available" },
      { label: "Thickness", value: "Variable Thickness Options" },
      { label: "Construction", value: "Heavy Duty" },
      { label: "Feature", value: "Corrosion Resistant" },
    ],
    features: ["Custom sizes", "Heavy duty", "Corrosion resistant", "Variable thickness"],
    applications: ["Utilities", "Roads", "Infrastructure", "Industrial"],
    relatedProductIds: [
      "di-drain-covers-b125",
      "b125-ds-solid-top",
      "b125-ss-solid-top",
      "d400-ss-solid-top",
    ],
  }),
  product({
    categorySlug: WATER,
    id: "b125-ds-solid-top",
    slug: "b125-ds-solid-top",
    sectionSlug: "manhole-covers",
    title: "B125 DS Solid Top",
    badge: "DRAINAGE",
    shortDescription: "B125 load class manhole cover with double seal and solid top anti-slip surface.",
    description:
      "B125 DS Solid Top manhole cover with B125 load class, double seal (DS), and solid top anti-slip surface for pedestrian and light vehicle areas.",
    specifications: [
      { label: "Load Class", value: "B125" },
      { label: "Seal Type", value: "Double Seal (DS)" },
      { label: "Surface", value: "Solid Top Anti-Slip" },
    ],
    features: ["B125", "Double seal", "Anti-slip solid top", "Pedestrian areas"],
    applications: ["Car parks", "Pedestrian areas", "Utilities", "Infrastructure"],
    relatedProductIds: [
      "b125-ss-solid-top",
      "di-drain-covers-b125",
      "ductile-iron-manhole-cover",
      "d400-ss-solid-top",
    ],
  }),
  product({
    categorySlug: WATER,
    id: "b125-ss-solid-top",
    slug: "b125-ss-solid-top",
    sectionSlug: "manhole-covers",
    title: "B125 SS Solid Top",
    badge: "DRAINAGE",
    shortDescription: "B125 ductile iron manhole cover with single seal (SS) solid top.",
    description:
      "B125 SS Solid Top ductile iron manhole cover with B125 load class and single seal (SS) configuration for general access applications.",
    specifications: [
      { label: "Load Class", value: "B125" },
      { label: "Seal Type", value: "Single Seal (SS)" },
      { label: "Material", value: "Ductile Iron" },
    ],
    features: ["B125", "Single seal", "Ductile iron", "Solid top"],
    applications: ["Utilities", "Car parks", "Pedestrian areas", "Infrastructure"],
    relatedProductIds: [
      "b125-ds-solid-top",
      "di-drain-covers-b125",
      "ductile-iron-manhole-cover",
      "d400-ss-solid-top",
    ],
  }),
  product({
    categorySlug: WATER,
    id: "d400-ss-solid-top",
    slug: "d400-ss-solid-top",
    sectionSlug: "manhole-covers",
    title: "D400 SS Solid Top (With - Without GRP)",
    badge: "DRAINAGE",
    shortDescription: "D400 (40 tonnes) solid top cover for highways; GRP sealing plate optional.",
    description:
      "D400 SS Solid Top (With - Without GRP) manhole cover rated D400 (40 tonnes) for main roads and highways, with optional GRP sealing plate.",
    specifications: [
      { label: "Load Class", value: "D400 (40 Tonnes)" },
      { label: "Application", value: "Main Roads / Highways" },
      { label: "Option", value: "GRP Sealing Plate Available" },
    ],
    features: ["D400 / 40 tonnes", "Highway duty", "GRP option", "Solid top"],
    applications: ["Main roads", "Highways", "Infrastructure", "Utilities"],
    relatedProductIds: [
      "b125-ds-solid-top",
      "b125-ss-solid-top",
      "ductile-iron-manhole-cover",
      "di-drain-covers-b125",
    ],
  }),
];

/* ----------------------------- SECTION — Plastic & Polymer Products ----------------------------- */

const plasticPolymerProducts: CatalogProduct[] = [
  product({
    categorySlug: WATER,
    id: "plastic-cable-protection-covers",
    slug: "plastic-cable-protection-covers",
    sectionSlug: "plastic-polymer-products",
    title: "Plastic Cable Protection Covers",
    badge: "UTILITIES",
    shortDescription: "Heavy duty PE cable covers — red (electric) / blue (water) with interlocking ends.",
    description:
      "Plastic Cable Protection Covers in heavy duty polyethylene, red for electric and blue for water services, featuring interlocking ends for continuous protection runs.",
    specifications: [
      { label: "Material", value: "Heavy Duty Polyethylene" },
      { label: "Color", value: "Red (Electric) / Blue (Water)" },
      { label: "Feature", value: "Interlocking Ends" },
    ],
    features: ["Heavy duty PE", "Colour coded", "Interlocking ends", "Utility protection"],
    applications: ["Utilities", "Electrical", "Water networks", "Infrastructure"],
    relatedProductIds: [
      "polythene-membrane-all-gauges",
      "hdpe-pipes",
      "waterproof-fiberglass-mesh",
      "hdpe-couplers",
    ],
  }),
  product({
    categorySlug: WATER,
    id: "polythene-membrane-all-gauges",
    slug: "polythene-membrane-all-gauges",
    sectionSlug: "plastic-polymer-products",
    title: "Polythene Membrane (All Gauges)",
    badge: "CONSTRUCTION",
    shortDescription: "LDPE / HDPE damp proof membrane in 500, 1000 and 1200 gauge.",
    description:
      "Polythene Membrane (All Gauges) in LDPE / HDPE for damp proof membrane (DPM) use, available in 500, 1000 and 1200 gauge.",
    specifications: [
      { label: "Material", value: "LDPE / HDPE" },
      { label: "Gauges", value: "500, 1000, 1200 Gauge" },
      { label: "Use", value: "Damp Proof Membrane (DPM)" },
    ],
    features: ["LDPE / HDPE", "All gauges", "DPM use", "Construction supply"],
    applications: ["Construction", "Damp proofing", "Flooring underlay", "Infrastructure"],
    relatedProductIds: [
      "waterproof-fiberglass-mesh",
      "plastic-cable-protection-covers",
      "hdpe-pipes",
      "hdpe-bends",
    ],
  }),
];

/* ----------------------------- SECTION — Waterproofing Materials ----------------------------- */

const waterproofingMaterials: CatalogProduct[] = [
  product({
    categorySlug: WATER,
    id: "waterproof-fiberglass-mesh",
    slug: "waterproof-fiberglass-mesh",
    sectionSlug: "waterproofing-materials",
    title: "Waterproof Fiberglass Mesh",
    badge: "WATERPROOFING",
    shortDescription: "Alkali resistant fiberglass mesh, 45–160g/m², for reinforcing waterproof coats.",
    description:
      "Waterproof Fiberglass Mesh in alkali resistant fiberglass, 45g/m² to 160g/m², for reinforcing waterproof coats on roofs, walls, and wet areas.",
    specifications: [
      { label: "Material", value: "Alkali Resistant Fiberglass" },
      { label: "Weight", value: "45g/m² - 160g/m²" },
      { label: "Application", value: "Reinforcing Waterproof Coats" },
    ],
    features: ["Alkali resistant", "45–160g/m²", "Coat reinforcement", "Roll supply"],
    applications: ["Waterproofing", "Construction", "Roofing", "Wet areas"],
    relatedProductIds: [
      "polythene-membrane-all-gauges",
      "plastic-cable-protection-covers",
      "hdpe-pipes",
      "di-drain-covers-b125",
    ],
  }),
];

export const waterTreatmentProducts: CatalogProduct[] = [
  ...hdpePipingSystems,
  ...drainCovers,
  ...manholeCovers,
  ...plasticPolymerProducts,
  ...waterproofingMaterials,
];

/* ==========================================================================
 * CATEGORY — Warning Tapes
 * ========================================================================== */

const TAPES = "warning-tapes";

/* ----------------------------- SECTION — Safety & Utility ----------------------------- */

const safetyUtility: CatalogProduct[] = [
  product({
    categorySlug: TAPES,
    id: "jute-cloth",
    slug: "jute-cloth",
    sectionSlug: "safety-utility",
    title: "Jute Cloth",
    badge: "UTILITY",
    shortDescription: "100% natural jute cloth for concrete curing and packaging in various GSM densities.",
    description:
      "Jute Cloth made from 100% natural jute for concrete curing and packaging applications, available in various GSM densities for construction and export use.",
    specifications: [
      { label: "Material", value: "100% Natural Jute" },
      { label: "Usage", value: "Concrete Curing / Packaging" },
      { label: "GSM", value: "Various Densities" },
    ],
    features: ["100% natural jute", "Curing & packaging", "Various GSM", "Export bales"],
    applications: ["Construction", "Concrete curing", "Packaging", "Infrastructure"],
    relatedProductIds: [
      "safety-gloves",
      "custom-printed-warning-tape",
      "underground-warning-tape",
      "polythene-membrane-all-gauges",
    ],
  }),
  product({
    categorySlug: TAPES,
    id: "safety-gloves",
    slug: "safety-gloves",
    sectionSlug: "safety-utility",
    title: "Safety Gloves",
    badge: "SAFETY",
    shortDescription: "Cotton knitted / dipped gloves for general handling with dotted or latex coated grip.",
    description:
      "Safety Gloves in cotton knitted or dipped types for general handling protection, with dotted or latex coated grip options for construction and industrial sites.",
    specifications: [
      { label: "Type", value: "Cotton Knitted / Dipped" },
      { label: "Protection", value: "General Handling" },
      { label: "Grip", value: "Dotted / Latex Coated" },
    ],
    features: ["Cotton / dipped", "General handling", "Dotted / latex grip", "Bulk packs"],
    applications: ["Construction", "Industrial", "Warehousing", "Safety"],
    relatedProductIds: [
      "jute-cloth",
      "custom-printed-warning-tape",
      "underground-warning-tape",
      "plastic-cable-protection-covers",
    ],
  }),
];

/* ----------------------------- SECTION — Warning & Identification ----------------------------- */

const warningIdentification: CatalogProduct[] = [
  product({
    categorySlug: TAPES,
    id: "custom-printed-warning-tape",
    slug: "custom-printed-warning-tape",
    sectionSlug: "warning-identification",
    title: "Custom Printed Warning Tape (All Sizes)",
    badge: "SAFETY",
    shortDescription: "LDPE warning tape with customizable Danger/Caution text in red/white or yellow/black.",
    description:
      "Custom Printed Warning Tape (All Sizes) in LDPE with customizable Danger/Caution text, red/white or yellow/black colours, and roll lengths of 100m / 200m / 500m.",
    specifications: [
      { label: "Material", value: "LDPE" },
      { label: "Text", value: "Customizable (Danger/Caution)" },
      { label: "Colors", value: "Red/White, Yellow/Black" },
      { label: "Length", value: "100m / 200m / 500m" },
    ],
    features: ["Custom text", "Red/white or yellow/black", "100–500m rolls", "All sizes"],
    applications: ["Construction sites", "Hazard marking", "Industrial", "Events"],
    relatedProductIds: [
      "underground-warning-tape",
      "safety-gloves",
      "jute-cloth",
      "plastic-cable-protection-covers",
    ],
  }),
  product({
    categorySlug: TAPES,
    id: "underground-warning-tape",
    slug: "underground-warning-tape",
    sectionSlug: "warning-identification",
    title: "Underground Warning Tape",
    badge: "SAFETY",
    shortDescription: "Rot-resistant PE tape for buried cable/pipe marking — detectable or non-detectable.",
    description:
      "Underground Warning Tape for buried cable and pipe marking in rot resistant polyethylene, available detectable or non-detectable, following utility colour codes.",
    specifications: [
      { label: "Application", value: "Buried Cable/Pipe Marking" },
      { label: "Material", value: "Rot Resistant Polyethylene" },
      { label: "Detectability", value: "Detectable / Non-Detectable" },
      { label: "Standards", value: "Utility Color Codes" },
    ],
    features: ["Buried marking", "Rot resistant PE", "Detectable options", "Utility colour codes"],
    applications: ["Utilities", "Cable networks", "Water pipes", "Infrastructure"],
    relatedProductIds: [
      "custom-printed-warning-tape",
      "plastic-cable-protection-covers",
      "hdpe-pipes",
      "safety-gloves",
    ],
  }),
];

export const warningTapesProducts: CatalogProduct[] = [
  ...safetyUtility,
  ...warningIdentification,
];

export const allProducts: CatalogProduct[] = [
  ...ironSteelHardwareProducts,
  ...structuralSteelAnglesProducts,
  ...constructionMachineryProducts,
  ...flooringTilesMarbleStoneProducts,
  ...waterTreatmentProducts,
  ...warningTapesProducts,
  ...catalogProductAdditions,
];
