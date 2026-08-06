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

export type SiteContact = {
  name: string;
  /** Job title for team profile cards */
  role: string;
  /** Short channel label for utility bar chips (e.g. Sales / Export) */
  channel: string;
  /** Human-readable phone, e.g. "+91 98430 44445" */
  display: string;
  /** E.164 for tel: links, e.g. "+919843044445" */
  tel: string;
  /** Digits only for wa.me when WhatsApp is enabled */
  whatsapp?: string;
};

/** Primary contact — phone + WhatsApp */
const contactPrimary: SiteContact = {
  name: read("VITE_CONTACT_PRIMARY_NAME", "Niyaz Ahmed"),
  role: read("VITE_CONTACT_PRIMARY_ROLE", "Managing Director"),
  channel: read("VITE_CONTACT_PRIMARY_CHANNEL", "Sales"),
  display: read("VITE_CONTACT_PHONE_DISPLAY", "+91 98430 44445"),
  tel: read("VITE_CONTACT_PHONE_TEL", "+919843044445"),
  whatsapp: read("VITE_WHATSAPP", "919843044445"),
};

/** Secondary contact — phone (+ WhatsApp via same number) */
const contactSecondary: SiteContact = {
  name: read("VITE_CONTACT_SECONDARY_NAME", "Ahamed Fahim"),
  role: read("VITE_CONTACT_SECONDARY_ROLE", "Export Sales Manager"),
  channel: read("VITE_CONTACT_SECONDARY_CHANNEL", "Export"),
  display: read("VITE_CONTACT_SECONDARY_PHONE_DISPLAY", "+91 73588 99766"),
  tel: read("VITE_CONTACT_SECONDARY_PHONE_TEL", "+917358899766"),
  whatsapp: read("VITE_CONTACT_SECONDARY_WHATSAPP", "917358899766"),
};

export const site = {
  name: "HALI EXIMS",
  tagline: "Global Trade Partners",
  /** Public site origin — no trailing slash. Used for canonical + Open Graph URLs. */
  url: read("VITE_SITE_URL", "https://haliexims.com"),
  email: read("VITE_CONTACT_EMAIL", "halieximsindia@gmail.com"),
  /** @deprecated Prefer `contacts` — kept for compact single-line UI. */
  phoneDisplay: contactPrimary.display,
  /** @deprecated Prefer `contacts` — kept for primary tel: links. */
  phoneTel: contactPrimary.tel,
  /** Digits only for wa.me (Niyaz Ahmed). */
  whatsapp: contactPrimary.whatsapp!,
  contacts: [contactPrimary, contactSecondary] as const,
  contactPrimary,
  contactSecondary,
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

export function formatContactLabel(contact: SiteContact): string {
  return `${contact.display} — ${contact.name}`;
}

export const siteLinks = {
  email: `mailto:${site.email}`,
  phone: `tel:${site.phoneTel}`,
  phoneSecondary: `tel:${site.contactSecondary.tel}`,
  whatsapp: `https://wa.me/${site.whatsapp}`,
  linkedin: site.linkedin || null,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.name}, ${site.hqLine}`,
  )}`,
  ogImage: `${site.url}/og-image.png`,
  canonical: site.url,
} as const;
