/**
 * Central site configuration.
 * Override via Vite env vars (see `.env.example`).
 * Keep Lovable sync: values here must remain valid defaults for the editor preview.
 */
const env = import.meta.env;

function read(key: string, fallback: string): string {
  const value = env[key];
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

const ADDRESS_LINES = [
  "14, Gandhiji Road",
  "Kurichi",
  "Podanur",
  "Coimbatore",
  "Tamil Nadu – India",
] as const;

export const site = {
  name: "HALI EXIMS",
  tagline: "Global Trade Partners",
  /** Public site origin — no trailing slash. Used for canonical + Open Graph URLs. */
  url: read("VITE_SITE_URL", "https://haliexims.com"),
  email: read("VITE_CONTACT_EMAIL", "halieximsindia@gmail.com"),
  /** Human-readable phone, e.g. "+91 98430 44445" */
  phoneDisplay: read("VITE_CONTACT_PHONE_DISPLAY", "+91 98430 44445"),
  /** E.164 for tel: links, e.g. "+919843044445" */
  phoneTel: read("VITE_CONTACT_PHONE_TEL", "+919843044445"),
  /** Digits only for wa.me, e.g. "919843044445" */
  whatsapp: read("VITE_WHATSAPP", "919843044445"),
  /** Full LinkedIn company URL, or empty to hide the link */
  linkedin: read("VITE_LINKEDIN_URL", ""),
  gstin: "33APDPN4405L2ZY",
  addressLines: ADDRESS_LINES,
  /** Multi-line street address (no company name). */
  addressMultiline: ADDRESS_LINES.join("\n"),
  /** Single-line street address for compact UI. */
  hqLine: ADDRESS_LINES.join(", "),
  hqShort: "Coimbatore, Tamil Nadu · India",
  hqDisplay: ADDRESS_LINES.join(", "),
  /** Full professional block for print / downloadable details. */
  addressBlock: ["HALI EXIMS", "", ...ADDRESS_LINES].join("\n"),
  title: "HALI EXIMS — Engineering Global Trade. Delivering Premium Products Worldwide.",
  description:
    "HALI EXIMS is an Indian import & export company sourcing, manufacturing, and exporting industrial, construction, engineering, agricultural, electrical, and consumer products to 20+ countries worldwide.",
} as const;

export const siteLinks = {
  email: `mailto:${site.email}`,
  phone: `tel:${site.phoneTel}`,
  whatsapp: `https://wa.me/${site.whatsapp}`,
  linkedin: site.linkedin || null,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.name}, ${site.hqLine}`,
  )}`,
  ogImage: `${site.url}/og-image.png`,
  canonical: site.url,
} as const;
