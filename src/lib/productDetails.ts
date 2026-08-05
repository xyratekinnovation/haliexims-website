import type { CatalogProduct } from "@/data/catalog/types";
import { getCategoryBySlug } from "@/data/categories";
import { site } from "@/data/site";

/**
 * Generic marketing description based on product category / keywords.
 */
export function generateProductDescription(product: CatalogProduct): string {
  const haystack = [
    product.categorySlug,
    product.badge,
    product.title,
    ...product.specifications.map((s) => `${s.label} ${s.value}`),
  ]
    .join(" ")
    .toLowerCase();

  if (
    product.categorySlug === "warning-tapes" ||
    /safety|warning|glove|ppe|hazard/.test(haystack)
  ) {
    return "Designed for workplace safety and industrial protection with dependable performance.";
  }

  if (
    product.categorySlug === "construction-machinery-site-equipment" ||
    /forklift|genset|jcb|tractor|winch|machinery|equipment/.test(haystack)
  ) {
    return "Reliable industrial equipment designed for heavy-duty applications and long service life.";
  }

  if (
    product.categorySlug === "water-treatment-purification" ||
    /\bhdpe\b|\bpipe\b|coupler|manhole|drain|membrane|waterproof/.test(haystack)
  ) {
    return "Manufactured using premium quality materials for long-lasting performance in industrial and infrastructure projects.";
  }

  if (
    product.categorySlug === "tiles-natural-stone" ||
    /tile|marble|granite|slate|flooring|stone/.test(haystack)
  ) {
    return "Manufactured for demanding construction environments with excellent durability.";
  }

  if (/electrical|lightning|cable|switch/.test(haystack)) {
    return "Engineered for safe and efficient electrical distribution and industrial installations.";
  }

  if (
    product.categorySlug.includes("steel") ||
    product.categorySlug.includes("stainless") ||
    /steel|tmt|rebar|galvaniz|fastener|angle|beam|scaffold/.test(haystack)
  ) {
    return "High-quality steel product engineered for durability and performance. Meets international quality standards for industrial and construction applications.";
  }

  return "Manufactured for demanding construction environments with excellent durability.";
}

/**
 * Feature bullets derived from product specifications (plus sensible defaults).
 */
export function generateProductFeatures(product: CatalogProduct): string[] {
  const haystack = [
    product.title,
    product.badge,
    ...product.specifications.map((s) => `${s.label} ${s.value}`),
    ...product.features,
  ]
    .join(" ")
    .toLowerCase();

  const features: string[] = [];
  const push = (label: string) => {
    if (!features.includes(label)) features.push(label);
  };

  push("High Quality");
  push("Industrial Grade");

  if (/durable|durability|heavy.?duty|high.?load|d400|b125/.test(haystack)) push("Durable");
  if (/corrosion|galvaniz|stainless|ss316|ss304|hdg|\bgi\b|passivat/.test(haystack)) {
    push("Corrosion Resistant");
  }
  if (/heavy.?duty|high.?load|d400|structural|industrial/.test(haystack)) push("Heavy Duty");
  if (/export|international|origin:\s*india/.test(haystack)) push("Export Quality");
  if (/custom|various|all.?sizes|as per|enquiry|cut.?to.?length|mixed/.test(haystack)) {
    push("Custom Sizes Available");
  }
  if (/anti.?slip|r10|safety|warning/.test(haystack)) push("Safety Focused");
  if (/premium|polished|natural|marble|granite/.test(haystack)) push("Premium Finish");

  if (!features.includes("Export Quality")) push("Export Quality");
  if (!features.includes("Durable")) push("Durable");

  return features.slice(0, 7);
}

export function getProductCategoryName(product: CatalogProduct): string {
  return getCategoryBySlug(product.categorySlug)?.title ?? product.badge;
}

/** Safe download filename, e.g. Jute_Cloth.txt */
export function toProductDetailsFileName(productTitle: string): string {
  const base = productTitle
    .normalize("NFKD")
    .replace(/[–—−]/g, " ")
    .replace(/[^\w\s.-]/g, "")
    .trim()
    .replace(/[\s.-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
  return `${base || "Product"}.txt`;
}

function formatToday(): string {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function buildProductDetailsText(product: CatalogProduct): string {
  const description = generateProductDescription(product);
  const features = generateProductFeatures(product);
  const category = getProductCategoryName(product);

  const specLines = product.specifications.map((row) => `${row.label}: ${row.value}`).join("\n\n");
  const featureLines = features.map((f) => `• ${f}`).join("\n");

  return `HALI EXIMS - PRODUCT INFORMATION SHEET
======================================

Product:
${product.title}

Category:
${category}

Date:
${formatToday()}

DESCRIPTION
-----------

${description}

TECHNICAL SPECIFICATIONS
------------------------

${specLines}

KEY FEATURES
------------

${featureLines}

CONTACT INFORMATION
-------------------

${site.addressBlock}

Phone: ${site.phoneDisplay}
Email: ${site.email}
GSTIN: ${site.gstin}

Website:
${site.url}

For quotations and detailed specifications,
please contact our sales team.

======================================

This document is generated automatically.
`;
}

/**
 * Client-side TXT download via Blob + object URL (no server API).
 */
export function downloadProductDetails(product: CatalogProduct): void {
  const content = buildProductDetailsText(product);
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = toProductDetailsFileName(product.title);
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
