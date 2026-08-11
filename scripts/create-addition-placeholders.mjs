/**
 * Creates/refreshes placeholder PNGs for newly added products + a rename guide.
 * Run: node scripts/create-addition-placeholders.mjs
 *
 * Drop your real images into: public/images/products/
 * Rename each file to match the exact name in NEW-PRODUCTS-RENAME-GUIDE.txt
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const catDir = path.join(root, "public", "images", "categories");
const prodDir = path.join(root, "public", "images", "products");
const placeholderCandidates = [
  path.join(prodDir, "placeholder.png"),
  path.join(catDir, "placeholder.png"),
  path.join(catDir, "placeholder.jpg"),
];

function toProductImageFileName(title) {
  const base = title
    .normalize("NFKD")
    .replace(/¼/g, "1-4")
    .replace(/⅜/g, "3-8")
    .replace(/[×]/g, "x")
    .replace(/[–—−]/g, "-")
    .replace(/["'`´""'']/g, "")
    .replace(/[()[\]{}]/g, "")
    .replace(/&/g, "and")
    .replace(/:/g, "-")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `${base || "product"}.png`;
}

const newCategorySlugs = [
  "concrete-blocks-masonry-products",
  "electricals-electronics-power-systems",
  "hvac-ducting-air-systems",
  "wood-boards-timber-products",
  "tools-hardware-general-consumables",
  "construction-chemicals-repair-materials",
];

const productTitles = [
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
  "SikaEmaco SBR 2 (20L)",
  "SS304 6mm Chian",
  "SS 304 D-Shackle 6mm",
];

const force = process.argv.includes("--force");
const src = placeholderCandidates.find((p) => fs.existsSync(p));
if (!src) {
  console.error("No placeholder image found under public/images/");
  process.exit(1);
}

fs.mkdirSync(catDir, { recursive: true });
fs.mkdirSync(prodDir, { recursive: true });

const categoryFiles = [];
const productFiles = [];

for (const slug of newCategorySlugs) {
  const file = `${slug}.png`;
  const dest = path.join(catDir, file);
  if (force || !fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    categoryFiles.push(file);
  }
}

const guideLines = [
  "NEW PRODUCT IMAGE RENAME GUIDE",
  "==============================",
  "",
  "Folder to paste into:",
  "  public/images/products/",
  "",
  "Instructions:",
  "  1. Rename your image to the EXACT filename in the right column.",
  "  2. Prefer .png ( .jpg also works ).",
  "  3. Paste/replace the file in public/images/products/",
  "  4. Keep the same name — do not change code.",
  "",
  "PRODUCT NAME  =>  EXACT FILENAME",
  "--------------------------------",
];

for (const title of productTitles) {
  const file = toProductImageFileName(title);
  const dest = path.join(prodDir, file);
  if (force || !fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    productFiles.push(file);
  }
  guideLines.push(`${title}`);
  guideLines.push(`  =>  ${file}`);
  guideLines.push("");
}

const guidePath = path.join(prodDir, "NEW-PRODUCTS-RENAME-GUIDE.txt");
fs.writeFileSync(guidePath, guideLines.join("\n"), "utf8");

console.log(`Source placeholder: ${path.relative(root, src)}`);
console.log(`Category placeholders written: ${categoryFiles.length}`);
console.log(`Product placeholders written: ${productFiles.length}`);
console.log(`Rename guide: ${path.relative(root, guidePath)}`);
console.log(`Paste images into: ${path.relative(root, prodDir)}`);
