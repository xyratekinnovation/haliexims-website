/**
 * One-shot: generate src/data/sika-excel-products.ts from public/Sika_Product.xlsx
 * Skips products already present in the Construction Chemicals catalogue.
 */
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const XLSX = require("xlsx");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const excelPath = path.join(root, "public", "Sika_Product.xlsx");
const outPath = path.join(root, "src", "data", "sika-excel-products.ts");

const rows = XLSX.utils.sheet_to_json(XLSX.readFile(excelPath).Sheets.Sheet1, { defval: "" });

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function packSize(r) {
  const size = r["Package Size"];
  const uom = r["Package Size UOM"];
  if (size === "" || size == null) return "";
  return uom ? `${size}${uom}` : String(size);
}

function isExisting(name) {
  const n = norm(name);
  if (n.includes("sikaflex") && n.includes("221") && n.includes("white")) return true;
  if (n.includes("sikaemaco") && (n.includes("s 488") || n.includes("s488"))) return true;
  if (n.includes("ferrogard")) return true;
  if (n.includes("sikaemaco") && n.includes("sbr")) return true;
  return false;
}

function cleanDesc(d, title) {
  let s = String(d || "")
    .replace(/supplied by ARM Buildmart\.?/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!s) s = `${title} from Sika.`;
  if (!s.endsWith(".")) s += ".";
  return `${s} Contact HALI EXIMS for current specifications, availability, and export quotations.`;
}

function shortFrom(uses, desc, title) {
  const u = String(uses || "").trim();
  if (u) return u.length > 160 ? `${u.slice(0, 157)}…` : u;
  const d = String(desc || "")
    .replace(/supplied by ARM Buildmart\.?/gi, "")
    .trim();
  if (d) return d.length > 160 ? `${d.slice(0, 157)}…` : d;
  return title;
}

function apps(uses, sub) {
  const parts = String(uses || "")
    .split(/[;,]|\band\b/i)
    .map((s) => s.trim())
    .filter((s) => s.length > 8 && s.length < 80)
    .slice(0, 3);
  if (parts.length) return parts;
  return [sub || "Construction chemical applications", "Construction and repair works"];
}

const skipped = [];
const added = [];
for (const r of rows) {
  const title = String(r["Item Name"]).trim();
  const code = String(r["ERPNext Item Code"]).trim();
  if (isExisting(title)) {
    skipped.push({ title, code });
    continue;
  }
  added.push(r);
}

const lines = [];
lines.push('import type { CatalogProduct } from "./catalog/types";');
lines.push('import { toProductImageFileName } from "@/lib/images";');
lines.push("");
lines.push("/** Sika products from public/Sika_Product.xlsx — missing items only. */");
lines.push('const CHEMICALS = "construction-chemicals-repair-materials";');
lines.push('const SECTION = "sealants-repair";');
lines.push("");
lines.push("const exportPackaging = {");
lines.push(
  '  packing: "Export-grade bundling or carton packing with clear product identification tags.",',
);
lines.push(
  '  shipping: "Sea freight for bulk orders; air freight available for urgent / sample lots.",',
);
lines.push(
  '  containerLoading: "20ft / 40ft container loading with secure lashing and moisture protection as required.",',
);
lines.push(
  '  markets: "Available for international buyers — confirm destination with our export team.",',
);
lines.push("};");
lines.push("");
lines.push("function toSlug(title: string): string {");
lines.push("  return title");
lines.push('    .normalize("NFKD")');
lines.push("    .toLowerCase()");
lines.push('    .replace(/¼/g, "1-4")');
lines.push('    .replace(/⅜/g, "3-8")');
lines.push('    .replace(/[×]/g, "x")');
lines.push('    .replace(/[–—−]/g, "-")');
lines.push("    .replace(/[\"'`´\"\"'']/g, \"\")");
lines.push('    .replace(/[()[\\]{}]/g, "")');
lines.push('    .replace(/&/g, "and")');
lines.push('    .replace(/:/g, "-")');
lines.push('    .replace(/[^a-z0-9]+/g, "-")');
lines.push('    .replace(/-+/g, "-")');
lines.push('    .replace(/^-|-$/g, "");');
lines.push("}");
lines.push("");
lines.push("function sikaProduct(input: {");
lines.push("  title: string;");
lines.push("  badge: string;");
lines.push("  shortDescription: string;");
lines.push("  description: string;");
lines.push("  specifications: { label: string; value: string }[];");
lines.push("  features: string[];");
lines.push("  applications: string[];");
lines.push("}): CatalogProduct {");
lines.push("  const id = toSlug(input.title);");
lines.push("  const image = toProductImageFileName(input.title);");
lines.push("  return {");
lines.push("    id,");
lines.push("    slug: id,");
lines.push("    categorySlug: CHEMICALS,");
lines.push("    sectionSlug: SECTION,");
lines.push("    title: input.title,");
lines.push("    badge: input.badge,");
lines.push("    shortDescription: input.shortDescription,");
lines.push("    description: input.description,");
lines.push("    image,");
lines.push("    gallery: [image, image, image],");
lines.push("    specifications: input.specifications,");
lines.push(
  "    specPreview: input.specifications.slice(0, 3).map((s) => `${s.label}: ${s.value}`),",
);
lines.push("    features: input.features,");
lines.push("    applications: input.applications,");
lines.push("    packaging: exportPackaging,");
lines.push("    relatedProductIds: [],");
lines.push("  };");
lines.push("}");
lines.push("");
lines.push("const rawSikaExcelProducts: CatalogProduct[] = [");

for (const r of added) {
  const title = String(r["Item Name"]).trim();
  const sub = String(r["Sub Category"] || "Construction Chemical").trim();
  const badge = sub.toUpperCase();
  const brand = String(r["Brand"] || "Sika").trim() || "Sika";
  const uses = String(r["Uses"] || "").trim();
  const pack = packSize(r);
  const color = String(r["Color"] || "").trim();
  const shelf = String(r["Shelf life"] || "").trim();
  const code = String(r["ERPNext Item Code"] || "").trim();
  const specs = [];
  specs.push({ label: "Product Type", value: sub });
  if (pack) specs.push({ label: "Pack Size", value: pack });
  specs.push({ label: "Brand", value: brand });
  if (uses) specs.push({ label: "Use", value: uses });
  if (color) specs.push({ label: "Color", value: color });
  if (shelf) specs.push({ label: "Shelf Life", value: shelf });
  if (code) specs.push({ label: "Item Code", value: code });

  const features = [
    `${brand} construction chemical`,
    sub,
    ...(pack ? [`${pack} pack`] : []),
    "Export enquiry available",
  ].slice(0, 4);

  lines.push("  sikaProduct({");
  lines.push(`    title: ${JSON.stringify(title)},`);
  lines.push(`    badge: ${JSON.stringify(badge)},`);
  lines.push(`    shortDescription: ${JSON.stringify(shortFrom(uses, r["Description"], title))},`);
  lines.push(`    description: ${JSON.stringify(cleanDesc(r["Description"], title))},`);
  lines.push(`    specifications: ${JSON.stringify(specs)},`);
  lines.push(`    features: ${JSON.stringify(features)},`);
  lines.push(`    applications: ${JSON.stringify(apps(uses, sub))},`);
  lines.push("  }),");
}

lines.push("];");
lines.push("");
lines.push("export const sikaExcelProducts: CatalogProduct[] = rawSikaExcelProducts.map((product) => ({");
lines.push("  ...product,");
lines.push("  relatedProductIds: rawSikaExcelProducts");
lines.push("    .filter((p) => p.id !== product.id)");
lines.push("    .slice(0, 4)");
lines.push("    .map((p) => p.id),");
lines.push("}));");
lines.push("");

writeFileSync(outPath, lines.join("\n"), "utf8");

console.log(
  JSON.stringify(
    {
      excel: rows.length,
      skipped: skipped.length,
      added: added.length,
      skippedItems: skipped,
      addedItems: added.map((r) => ({
        title: r["Item Name"],
        code: r["ERPNext Item Code"],
      })),
      out: path.relative(root, outPath),
    },
    null,
    2,
  ),
);
