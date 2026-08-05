// Generates a flat dotted world-map SVG (real geography, equirectangular-ish)
// cropped to the HALI EXIMS export corridor: East Africa -> Arabia -> India -> SE Asia.
// Run: node scripts/generate-world-map.mjs
// Output: src/assets/export-map-dots.svg + pin coordinates printed to stdout.
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const DottedMap = require("dotted-map").default;

const region = { lat: { min: -14, max: 44 }, lng: { min: 24, max: 104 } };

const map = new DottedMap({ height: 64, grid: "diagonal", region });

const svg = map.getSVG({
  radius: 0.24,
  color: "#7fb0f5",
  shape: "circle",
  backgroundColor: "transparent",
});

writeFileSync("src/assets/export-map-dots.svg", svg, "utf8");

const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
console.log("viewBox:", viewBox);

const pins = {
  india: { lat: 19.076, lng: 72.877 }, // Mumbai
  dubai: { lat: 25.204, lng: 55.271 },
  maldives: { lat: 4.175, lng: 73.509 }, // Malé
};

for (const [name, p] of Object.entries(pins)) {
  const pin = map.getPin({ lat: p.lat, lng: p.lng });
  console.log(name, JSON.stringify(pin));
}
