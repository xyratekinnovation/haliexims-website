import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, "../public/images/products");

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
  return `${base || "product"}.png`;
}

const renames = [
  {
    title: 'HDG H-Beam 8" × 6.5"',
    // match loose files that look like this product
    match: (name) => /^HDG-H-Beam/i.test(name),
  },
  {
    title: "Clamps for 1 1/2 GI Pipe",
    match: (name) => /^Clamps-for-1-1-2/i.test(name),
  },
  {
    title: "GI Hot Dip Galvanized Angles (50×3, 50×4, 50×5, 40×5)",
    match: (name) => /^GI-Hot/i.test(name) && /Dip-Galvanized-Angles/i.test(name),
  },
  {
    title: "Concrete Nails – Heavy Duty",
    match: (name) => /^Concrete-Nails/i.test(name),
  },
];

const files = fs.readdirSync(dir);

for (const item of renames) {
  const expected = toProductImageFileName(item.title);
  console.log("\nExpected:", expected);

  const existingExact = files.find((f) => f === expected);
  if (existingExact) {
    console.log("  already correct");
    continue;
  }

  const candidates = files.filter(item.match);
  console.log(
    "  candidates:",
    candidates.map((c) => JSON.stringify(c)),
  );

  if (candidates.length === 0) {
    console.log("  NO FILE FOUND");
    continue;
  }

  const from = path.join(dir, candidates[0]);
  const to = path.join(dir, expected);
  fs.renameSync(from, to);
  console.log("  renamed:", JSON.stringify(candidates[0]), "→", expected);
}
