import type { LucideIcon } from "lucide-react";
import { Handshake, Headphones, Globe } from "lucide-react";

/**
 * Trust pillars shown until official client testimonials are available.
 * Do not invent quotes, names, titles, or ratings.
 */
export type TrustPillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * Shape for real testimonials — drop in verified entries later and
 * set `trustSectionMode` to "testimonials" in TrustSection.
 */
export type ClientTestimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  /** Optional 1–5; omit if not provided by the client */
  rating?: number;
};

export const trustPillars: TrustPillar[] = [
  {
    id: "relationships",
    title: "Trusted Business Relationships",
    description:
      "We focus on building long-term partnerships by delivering consistent quality, transparent communication, and dependable export support.",
    icon: Handshake,
  },
  {
    id: "customer-centric",
    title: "Customer-Centric Approach",
    description:
      "Every requirement is carefully understood and managed with dedicated support, ensuring a smooth experience from sourcing to final delivery.",
    icon: Headphones,
  },
  {
    id: "export-experience",
    title: "Reliable Export Experience",
    description:
      "Our commitment to quality, timely coordination, and professional service helps businesses source confidently from India.",
    icon: Globe,
  },
];

/** Empty until the client supplies verified testimonials. */
export const clientTestimonials: ClientTestimonial[] = [];
