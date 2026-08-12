/**
 * Create placeholder PNGs for newly added Sika Excel products.
 * Run: node scripts/create-sika-excel-placeholders.mjs
 *
 * Replace files in public/images/products/ using the exact filenames listed
 * in public/images/products/SIKA-PRODUCTS-RENAME-GUIDE.txt
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const prodDir = path.join(root, "public", "images", "products");
const catDir = path.join(root, "public", "images", "categories");

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

/** Titles of newly added Sika products (existing 4 already have real images). */
const productTitles = [
  "Waterproofing Admixture SikaCim Pink (1Kg)",
  "SikaCim Pink (20Kg)",
  "SikaCim Pink (5Kg)",
  "SikaMent FFT( VC ) (20Kg)",
  "SikaMent FFT( VC ) 230Kg",
  "SikaPlast 1000 ES 230Kg",
  "SikaPlast 100 FFT VC 230Kg",
  "SikaPlast 5202 NS 255Kg",
  "SikaBlock (30Kg)",
  "SikaGrout 214IN (30Kg)",
  "SikaGrout 870 IN - (25Kg) Bag",
  "SikaREP Microcrete 4, (30kg)",
  "SikaTop - 122 HS, (30Kg)",
  "432563 Sika Fabric 50M",
  "SikaSeal Tape F 10m",
  "SikaSeal Tape F 50m",
  "SikaMultiseal Tape 10m",
  "Sikagard 5310-(5kg)",
  "Sikagard 552W (10kg)",
  "Sikagard XT white (25kg)",
  "SikaLatex SBR (1Kg)",
  "SikaLatex SBR (20Kg)",
  "SikaLatex SBR (5Kg)",
  "SikaMono Top-122 F, (30Kg)",
  "SikaRustoff 1 Kg",
  "SikaRustop 1.25kg",
  "SikaCeram 125 EasyFix - (20Kg)",
  "SikaCeram 155 Grey Tilofix (25Kg)",
  "SikaCeram 155 Wet Room Grey (20Kg)",
  "SikaCeram 212 Grey Tilofix (25Kg)",
  "SikaCeram 255 Grey Tilofix (25Kg)",
  "SikaCeram 288 Grey Tilofix (25Kg)",
  "SikaCeram 50 Grey Tilofix (20Kg)",
  "SikaChapDur (30kg)",
  "SikaDur 32 LP (6Kg)",
  "SikaGard 67 (A+B) (4Kg)",
  "SikaLastic 450 - (20Kg)",
  "Sikalastic 510 Coolcoat Terracoatta (25Kg)",
  "Sikalastic 510 Coolcoat White (25Kg)",
  "SikaLastic 590 White (20Kg)",
  "SikaTopseal 107(A+B) (25Kg)",
  "SikaTopSeal - 109 (A+B) (50Kg)",
  "Sika Block 30 KG",
  "Sikagard-399 Primer (20kg)",
  "Sikagard-300White(20Kg)",
  "Sikaflex 221 black C108/12 CTR300",
  "SikaShield P24 MG IN - 4mm (Roll)",
  "SikaGard P 770N (A+B) - (10Kg) Set",
  "SikaGard M790 (A+B) - Red (5Kg) Set",
  "Sikagard 62 IN (A+B) - (8Kg)",
  "Sikalastic HLM 5000R - (25Kg)",
  "Sika Shield Primer S IN (20L)",
];

const force = process.argv.includes("--force");
const src = placeholderCandidates.find((p) => fs.existsSync(p));
if (!src) {
  console.error("No placeholder image found under public/images/");
  process.exit(1);
}

fs.mkdirSync(prodDir, { recursive: true });

const guideLines = [
  "SIKA PRODUCT IMAGE RENAME GUIDE",
  "===============================",
  "",
  "Folder to paste into:",
  "  public/images/products/",
  "",
  "Instructions:",
  "  1. Rename your image to the EXACT filename in the right column.",
  "  2. Prefer .png (.jpg also works).",
  "  3. Paste/replace the file in public/images/products/",
  "  4. Keep the same name — do not change code.",
  "",
  "PRODUCT NAME  =>  EXACT FILENAME",
  "--------------------------------",
];

const written = [];
const skipped = [];

for (const title of productTitles) {
  const file = toProductImageFileName(title);
  const dest = path.join(prodDir, file);
  if (force || !fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    written.push(file);
  } else {
    skipped.push(file);
  }
  guideLines.push(title);
  guideLines.push(`  =>  ${file}`);
  guideLines.push("");
}

const guidePath = path.join(prodDir, "SIKA-PRODUCTS-RENAME-GUIDE.txt");
fs.writeFileSync(guidePath, guideLines.join("\n"), "utf8");

console.log(`Source placeholder: ${path.relative(root, src)}`);
console.log(`Placeholders written: ${written.length}`);
console.log(`Already present (skipped): ${skipped.length}`);
console.log(`Rename guide: ${path.relative(root, guidePath)}`);
