import { readFileSync } from "node:fs";

const gen = readFileSync("src/data/sika-excel-products.ts", "utf8");
const titles = [...gen.matchAll(/title: "([^"]+)"/g)].map((m) => m[1]);

function toSlug(title) {
  return title
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[()[\]{}]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const slugs = titles.map(toSlug);
const dup = [...new Set(slugs.filter((s, i) => slugs.indexOf(s) !== i))];
const existing = [
  "sikaflex-221-white-c108-12-ctr300",
  "sikaemaco-s488-repair-mortar-25kg",
  "sika-ferrogard-950-in",
  "sikaemaco-sbr-2-20l",
];
const collide = slugs.filter((s) => existing.includes(s));

console.log(
  JSON.stringify(
    {
      generated: titles.length,
      uniqueSlugs: new Set(slugs).size,
      dupSlugs: dup,
      collideExisting: collide,
      finalChemicals: 4 + titles.length,
    },
    null,
    2,
  ),
);
