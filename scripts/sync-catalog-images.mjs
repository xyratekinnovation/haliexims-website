/**
 * Syncs placeholder catalogue images into public/images/{categories,products}.
 * Run: node scripts/sync-catalog-images.mjs
 *
 * Designers later replace these files in-place — same filenames, no code changes.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assets = path.join(root, "src", "assets");
const categoriesDir = path.join(root, "public", "images", "categories");
const productsDir = path.join(root, "public", "images", "products");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copy(src, dest) {
  fs.copyFileSync(src, dest);
}

function toProductImageFileName(title) {
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
  return `${base || "product"}.jpg`;
}

const catSteel = path.join(assets, "cat-steel.jpg");
const catTiles = path.join(assets, "cat-tiles.jpg");
const catElectrical = path.join(assets, "cat-electrical.jpg");
const catPipes = path.join(assets, "cat-pipes.jpg");
const catFasteners = path.join(assets, "cat-fasteners.jpg");
const aboutMfg = path.join(assets, "about-manufacturing.jpg");
const heroMfg = path.join(assets, "hero-manufacturing.jpg");

const categories = [
  { slug: "construction-stainless-steel-structural-materials", src: catSteel },
  { slug: "construction-machinery-site-equipment", src: heroMfg },
  { slug: "tiles-natural-stone", src: catTiles },
  { slug: "structural-steel-steel-angles", src: aboutMfg },
  { slug: "water-treatment-purification", src: catPipes },
  { slug: "warning-tapes", src: catElectrical },
  { slug: "concrete-blocks-masonry-products", src: aboutMfg },
  { slug: "electricals-electronics-power-systems", src: catElectrical },
  { slug: "hvac-ducting-air-systems", src: catPipes },
  { slug: "wood-boards-timber-products", src: catTiles },
  { slug: "tools-hardware-general-consumables", src: catFasteners },
  { slug: "construction-chemicals-repair-materials", src: catSteel },
];

/** Unique product titles from the catalogue (source of truth for filenames). */
const productTitles = [
  "Deformed - TMT Bars 8mm",
  "Deformed - TMT Bars 10mm",
  "Deformed - TMT Bars 12mm",
  "Deformed - TMT Bars 16mm",
  "Deformed - TMT Bars 20mm",
  "Deformed and TMT Bars",
  "U Bolt Nut Washer",
  "SS316 Threaded Rods (M10, M12)",
  "SS316 Flat Washers (M6, M10, M12)",
  "SS316 Nuts (M10, M12)",
  'SS316 U-Bolts (¼", ⅜" – All Sizes)',
  "SS316 Anchor Bolts (M10, M12)",
  "SS316 Wedge Anchor Bolts (10mm, 12mm)",
  "SS316 Hex Head Self Tapping Screws",
  "SS316 Scotch Screws",
  "Hexagonal Screws",
  "Concrete Nails – Heavy Duty",
  "Binding Wire (All Gauges)",
  "SS316 Quick Fit Insulated Clamps (25mm–160mm)",
  "SS316 Angle Bars",
  "SS304 Sheet Corner Angles",
  "SS304 Flat Corner Radius Sections",
  "Galvanized Steel Angle Bars",
  "GI Hot Dip Galvanized Angles (50×3, 50×4, 50×5, 40×5)",
  "HDG Steel Plates – 3mm/4mm/5mm/10mm",
  'HDG H-Beam 8" × 6.5"',
  "HDG Lightning Poles",
  "GI Coupler",
  "Clamps for 1 1/2 GI Pipe",
  "Adjustable Base Jacks",
  "Adjustable Shoring Jacks",
  "C-Purlins",
  "T-Truss Frame (Fabricated & HDG)",
  "Ducting and Fabrication",
  "Fleet Guard Genset",
  "Forklift",
  "Tractors & Implements",
  "JCB",
  "Lifting Winch Machine",
  "Air Filter",
  "Fuel Filter",
  "Oil Filter",
  "Front Tyre with Tube",
  "Rear Tyre Kit (JCB)",
  "Earth Matt 295×600 (R10)",
  "Pulpis Matt 600×600 (R10)",
  "Raw Slate Grey 295×600 (R10)",
  "Raw Slate Grey 600×600 (R10)",
  "Snow White 295×600 (Polished)",
  "Marble – Dolomine",
  "Marble – Pulipis",
  "Marble – Slate Grey",
  "Polished Color Granite 300×99cm",
  "Rock Slate Grey – Grooved Step",
  "Rock Slate Grey – Non-Grooved Riser",
  "HDPE Bends",
  "HDPE Couplers",
  "HDPE Pipes",
  "HDPE Tees",
  "Shoring Jacks : NB MS ERW pipes",
  "DI Drain Covers B125 (All Sizes)",
  "Ductile Iron Manhole Cover",
  "B125 DS Solid Top",
  "B125 SS Solid Top",
  "D400 SS Solid Top (With - Without GRP)",
  "Plastic Cable Protection Covers",
  "Polythene Membrane (All Gauges)",
  "Waterproof Fiberglass Mesh",
  "Jute Cloth",
  "Safety Gloves",
  "Custom Printed Warning Tape (All Sizes)",
  "Underground Warning Tape",
  // Catalogue additions
  "Hand Operated Hydraulic Pump",
  "Hydraulic Crimping Head",
  "Hydraulic Cable Cutter",
  "1 Bag Hydraulic Hopper Concrete Mixer",
  "3 Bag Hydraulic Hopper Concrete Mixer",
  "Electric Concrete Mixer – 3 Bag",
  "Hydraulic Concrete Block Making Machine",
  "Fly Ash Bricks",
  "Bricks",
  "Refractory Fire Bricks",
  "Concrete Pavers 300×300×60mm",
  "Interlocking Paver Blocks",
  "Colorado Paver Blocks",
  "Combi Paver Blocks",
  "Flexi Paver Blocks",
  "Designer Paving Blocks",
  "Paving Blocks",
  "Cable Trays (Perforated with Cover)",
  "Cable Tray Fittings (Tee Bend, Reducer)",
  "Profile Ducting with Fittings",
  "Duct Supporting Materials",
  "Plywood",
  "Ordinary Plywood",
  "Laminated Plywood",
  "Pre-Laminated Plywood",
  "Film Faced Plywood",
  "Marine Plywood",
  "MDF Board",
  "Hardwood",
  "Timber",
  "MEASURING TAPE, FIBER, SIZE: 50 MTR",
  "MEASURING TAPE, FIBER, SIZE: 30 MTR",
  "MEASURING TAPE, S/S, SIZE: 3 MTR",
  "HAMMER, CARPENTER, CAPACITY: 0.5 KG, W/ HANDLE",
  "HAMMER, MASONRY, CAPACITY: 1.0 KG, W/ HANDLE",
  "HAMMER, MASONRY, CAPACITY: 2.0 KG, W/ HANDLE",
  "HAMMER, CHIPPING, CAPACITY: 0.5 KG",
  "HAMMER, RUBBER, 12 OZ",
  "HAMMER, SLEDGE, CAPACITY: 5.0 KG, W/ HANDLE",
  'PLIER, END NIPPER, 6"',
  "4 Ft Length Manual Tile Cutter",
  "JOLLY - TIXO STRAW INDIA 1KG",
  "WD 40 (420ML)",
  "FEVI SEAL PU FOAM (Construction Foam) 720g",
  "MYK Laticrete SP-100 Epoxy Tile Grout ; Color: 61 Parchment",
  "MYK Laticrete SP-100 Epoxy Tile Grout ; Color: White",
  "V DRAINS SS304 Clean Out Floor Drain Size: 3x3 inches Outlet:2 inches Item Code:VCO-201 Finish: Mirror",
  "V DRAINS SS304 Clean Out Floor Drain Size: 4x4 inches Outlet:2 inches Item Code:VCO-202 Finish: Mirror",
  "V DRAINS SS304 Clean Out Floor Drain Size: 6x6 inches Outlet:4 inches Item Code:VCO-204 Finish: Mirror",
  "V DRAINS SS304 Clean Out Floor Drain Size: 8x8 inches Outlet:4 inches Item Code:VCO-205 Finish: Mirror",
  "PRY ASIAN PAN NEW FLAT - WHITE",
  "PRY SLIMLINE TANK WHITE",
  "PRY SPARE P TRAP",
  "Sikaflex-221 white C108 /12 CTR300",
  "SikaEmaco S488 Repair Mortar (25Kg)",
  "Sika FerroGard-950 IN",
  "SS304 6mm Chian",
  "SS 304 D-Shackle 6mm",
];

function pickSource(title) {
  const t = title.toLowerCase();
  if (/tile|marble|granite|slate|earth matt|pulpis|snow white|rock slate/.test(t)) return catTiles;
  if (/hdpe|pipe|coupler|drain|manhole|membrane|fiberglass|cable protection|polythene/.test(t)) return catPipes;
  if (/jute|warning|glove|tape|safety/.test(t)) return catElectrical;
  if (/forklift|genset|jcb|tractor|winch|filter|tyre|jack|clamp|screw|bolt|nut|washer|nail|wire|fastener/.test(t)) {
    return catFasteners;
  }
  if (/purlin|truss|ducting|beam|plate|angle|tmt|steel|h-beam|lightning|scaffold|shoring/.test(t)) {
    return catSteel;
  }
  return catSteel;
}

ensureDir(categoriesDir);
ensureDir(productsDir);

copy(catSteel, path.join(categoriesDir, "placeholder.jpg"));
copy(catSteel, path.join(productsDir, "placeholder.jpg"));

for (const cat of categories) {
  const dest = path.join(categoriesDir, `${cat.slug}.jpg`);
  copy(cat.src, dest);
  console.log("category", path.basename(dest));
}

const written = new Set();
for (const title of productTitles) {
  const file = toProductImageFileName(title);
  if (written.has(file)) continue;
  written.add(file);
  copy(pickSource(title), path.join(productsDir, file));
  console.log("product", file);
}

console.log(`\nDone: ${categories.length} categories, ${written.size} products (+ placeholders).`);
