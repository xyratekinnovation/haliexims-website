import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Globe,
  Menu,
  X,
  ShieldCheck,
  Ship,
  Factory,
  BadgeCheck,
  Sparkles,
  Search,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  FileText,
  FileCheck,
  Handshake,
  ClipboardCheck,
  Headphones,
  ChevronRight,
  Plus,
  Minus,
  ArrowUp,
} from "lucide-react";

import aboutMfg from "@/assets/about-manufacturing.jpg";
import { site, siteLinks } from "@/data/site";
import { HeroSlider } from "@/components/landing/HeroSlider";
import { StatsSection } from "@/components/landing/StatsSection";
import { AuthorizedDealerSection } from "@/components/landing/AuthorizedDealerSection";
import { ProductCategoriesSection } from "@/components/landing/ProductCategoriesSection";
import { ExportNetworkSection } from "@/components/landing/ExportNetworkSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { SiteLogo } from "@/components/SiteLogo";
import { FooterContactsPanel } from "@/components/FooterContactsPanel";

export const Route = createFileRoute("/")({
  component: Landing,
});

/* ------------------------------ DATA ------------------------------ */

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "/products" },
  { label: "Exports", href: "#exports" },
  { label: "Commitment", href: "#commitment" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: 15, suffix: "+", label: "Years of excellence" },
  { value: 500, suffix: "+", label: "Products in catalogue" },
  { value: 100, suffix: "+", label: "Manufacturing partners" },
  { value: 98, suffix: "%", label: "On-time delivery" },
];

const WHY = [
  {
    icon: Search,
    title: "Reliable Sourcing",
    desc: "Vetted network of Indian manufacturers with proven production capability.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Third-party inspections at every production and pre-shipment stage.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    desc: "Direct factory pricing with transparent, all-in-cost quotations.",
  },
  {
    icon: Ship,
    title: "Export Logistics",
    desc: "Reliable coordination with trusted logistics partners for safe, compliant, and timely international deliveries.",
  },
  {
    icon: Factory,
    title: "Manufacturing Network",
    desc: "100+ partner factories across steel, engineering, and consumer sectors.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "98% on-time performance backed by shipment tracking and reporting.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "One export manager per account — from RFQ to final delivery.",
  },
  {
    icon: FileCheck,
    title: "Export Compliance",
    desc: "Ensuring products and documentation meet customer specifications and applicable international export requirements.",
  },
];

const COMMITMENTS = [
  {
    icon: Handshake,
    title: "Trusted Manufacturing Partners",
    desc: "We work with carefully selected manufacturing partners known for consistent quality, production capability, and reliable delivery.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Products undergo thorough inspections throughout production and before shipment to ensure they meet customer requirements.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    desc: "Direct sourcing and efficient procurement enable us to offer competitive pricing without compromising quality.",
  },
  {
    icon: FileText,
    title: "Reliable Export Process",
    desc: "From sourcing and documentation to shipment coordination, every export order is managed with precision and transparency.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We coordinate closely with manufacturing and logistics partners to ensure products are delivered according to agreed timelines.",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Support",
    desc: "Our team provides continuous communication and assistance throughout the sourcing, production, and export process.",
  },
];

const FAQS = [
  {
    q: "What products does HALI EXIMS export?",
    a: "HALI EXIMS exports a wide range of products across multiple industries. Our portfolio includes industrial, engineering, consumer, agricultural, and customized products sourced from trusted manufacturing partners across India.",
  },
  {
    q: "Can you supply customized products?",
    a: "Yes. We work closely with manufacturing partners to provide customized products based on customer specifications, drawings, branding, packaging, and quantity requirements wherever applicable.",
  },
  {
    q: "How do you ensure product quality?",
    a: "Every order is carefully coordinated with trusted manufacturing partners and undergoes quality checks before shipment to ensure it meets customer requirements and agreed specifications.",
  },
  {
    q: "Do you handle export documentation?",
    a: "Yes. We assist with the complete export process, including commercial documentation, shipping coordination, and other export-related requirements to ensure a smooth international transaction.",
  },
  {
    q: "Which countries do you export to?",
    a: "HALI EXIMS serves international customers across various global markets. Contact our team to discuss your destination country and product requirements.",
  },
  {
    q: "How can I request a quotation?",
    a: "Simply contact our team through the website or share your product requirements by email or WhatsApp. We will review your inquiry and provide a competitive quotation based on your specifications.",
  },
];


/* --------------------------- COMPONENTS --------------------------- */

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

/* ------------------------------ TOP ------------------------------ */

function UtilityChip({
  href,
  icon: Icon,
  children,
  external,
}: {
  href: string;
  icon: typeof Mail;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 text-[11px] font-semibold text-white/85 transition hover:border-royal/40 hover:bg-white/10 hover:text-white"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-royal/25 text-royal transition group-hover:bg-royal group-hover:text-white">
        <Icon className="h-3 w-3" aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap">{children}</span>
    </a>
  );
}

function TopContactBar() {
  return (
    <div className="hidden lg:block bg-navy text-navy-foreground/90">
      <div className="container-x flex h-12 items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0 overflow-x-auto py-1">
          <UtilityChip href={siteLinks.email} icon={Mail}>
            {site.email}
          </UtilityChip>
          <span className="h-4 w-px shrink-0 bg-white/15" aria-hidden="true" />
          <UtilityChip href={siteLinks.phone} icon={Phone}>
            {site.contactPrimary.channel}
            <span className="ml-1.5 font-medium text-white/70">{site.contactPrimary.display}</span>
          </UtilityChip>
          <span className="h-4 w-px shrink-0 bg-white/15" aria-hidden="true" />
          <UtilityChip href={siteLinks.phoneSecondary} icon={Phone}>
            {site.contactSecondary.channel}
            <span className="ml-1.5 font-medium text-white/70">{site.contactSecondary.display}</span>
          </UtilityChip>
          <span className="h-4 w-px shrink-0 bg-white/15" aria-hidden="true" />
          <UtilityChip href={siteLinks.whatsapp} icon={MessageCircle} external>
            WhatsApp
          </UtilityChip>
          {siteLinks.linkedin ? (
            <>
              <span className="h-4 w-px shrink-0 bg-white/15" aria-hidden="true" />
              <UtilityChip href={siteLinks.linkedin} icon={Linkedin} external>
                LinkedIn
              </UtilityChip>
            </>
          ) : null}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/75">
            <Globe className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
            Coimbatore, Tamil Nadu, India
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-royal/30 bg-royal/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-100">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Responds within 24 Hours
          </span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <TopContactBar />
      <div className={scrolled ? "glass-nav" : "bg-background border-b border-border/60"}>
        <div className="container-x flex h-18 md:h-20 items-center justify-between gap-8 py-3">
          <a href="#home" className="flex items-center shrink-0" aria-label={site.name}>
            <SiteLogo />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-navy transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-royal after:transition-all hover:after:w-full"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex btn-accent">
              Request Quote <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-x py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-base font-medium">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-accent mt-3 justify-center">
                Request Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------ HERO ------------------------------ */

function Hero() {
  return <HeroSlider />;
}

/* ---------------------------- ABOUT ---------------------------- */

const ABOUT_VALUES = [
  "Quality First",
  "Transparency",
  "Customer Commitment",
  "Integrity",
  "Long-Term Partnerships",
];

function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="image-zoom rounded-3xl">
            <img
              src={aboutMfg}
              alt="Manufacturing facility with sparks from precision fabrication"
              className="w-full h-auto rounded-3xl shadow-elevated"
              loading="lazy"
              width={1400}
              height={1600}
            />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
              <div className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-navy">15+</div>
              <div className="mt-1.5 text-sm text-muted-foreground leading-snug">Years of Industry Experience</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
              <div className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-navy">2010</div>
              <div className="mt-1.5 text-sm text-muted-foreground leading-snug">Established</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> About HALI EXIMS
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy leading-[1.08] text-balance">
            Your Trusted Manufacturing & Export Partner Since 2010
          </h2>

          <div className="mt-6 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2010, HALI EXIMS is a trusted Indian manufacturing and export company committed to delivering
              quality products to businesses across global markets.
            </p>
            <p>
              We work closely with reliable manufacturing partners, maintain strict quality standards, and manage every
              stage of the export processâ€”from sourcing and production to documentation, logistics, and timely delivery.
            </p>
            <p>
              Our focus is to build long-term partnerships through consistency, transparency, and dependable service.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border bg-white p-5 md:p-6 hover:border-navy/40 hover:shadow-soft transition">
              <div className="text-sm font-semibold text-royal">Mission</div>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">
                To deliver high-quality products from India to global markets through reliable manufacturing, ethical
                business practices, and seamless export solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 md:p-6 hover:border-navy/40 hover:shadow-soft transition">
              <div className="text-sm font-semibold text-royal">Vision</div>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">
                To become a globally trusted export partner recognized for quality, reliability, and long-term customer
                relationships.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 md:p-6 hover:border-navy/40 hover:shadow-soft transition">
              <div className="text-sm font-semibold text-royal">Core Values</div>
              <ul className="mt-3 space-y-1.5">
                {ABOUT_VALUES.map((value) => (
                  <li key={value} className="flex items-start gap-2 text-[15px] leading-snug text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" aria-hidden="true" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------- WHY ---------------------------- */

function WhyChoose() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">
            <BadgeCheck className="h-3.5 w-3.5" /> Why HALI EXIMS
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy leading-[1.08] text-balance">
            Why Global Buyers Choose HALI EXIMS
          </h2>
          <p className="mt-5 max-w-[37.5rem] text-base md:text-lg text-muted-foreground leading-relaxed">
            From sourcing and quality assurance to export documentation and timely delivery, HALI EXIMS provides
            dependable solutions that help international buyers source confidently from India.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {WHY.map((w, i) => (
            <div
              key={w.title}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:p-7 hover:border-navy/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            >
              <div className="text-xs font-semibold tracking-wider text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-105">
                <w.icon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-navy">{w.title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed grow">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- COMMITMENT --------------------------- */

function Commitment() {
  return (
    <section id="commitment" className="section-y bg-surface border-y border-border">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">
            <ShieldCheck className="h-3.5 w-3.5" /> Our Commitment
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy leading-[1.08] text-balance">
            Why Businesses Trust HALI EXIMS
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            HALI EXIMS is committed to delivering reliable export solutions through trusted manufacturing partnerships,
            transparent communication, consistent quality checks, and dependable customer service. Our focus is on
            building long-term relationships by delivering products that meet customer expectations every time.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {COMMITMENTS.map((c) => (
            <div
              key={c.title}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:p-7 hover:border-navy/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-all duration-300 group-hover:bg-royal group-hover:scale-105">
                <c.icon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-navy">{c.title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed grow">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y bg-surface border-y border-border">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="eyebrow">
            <FileText className="h-3.5 w-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy leading-[1.08] text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Have questions about sourcing products from India? Here are answers to some of the most common questions
            from our global buyers. If you need further assistance, our team is always ready to help.
          </p>
          <p className="mt-6 text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="text-royal font-semibold hover:underline">
              Contact our export specialists
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-8 space-y-3" role="list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-white overflow-hidden" role="listitem">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-5 sm:px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-inset"
                >
                  <span className="font-semibold text-navy text-base sm:text-lg leading-snug">{f.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-navy transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 -mt-1 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */

function Footer() {
  return (
    <footer className="bg-[#050f26] text-white/80">
      <div className="container-x py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <a href="#home" className="inline-flex rounded-lg bg-white px-2 py-1.5" aria-label={site.name}>
              <SiteLogo imgClassName="h-10 md:h-11" />
            </a>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm">
            An Indian export house sourcing, manufacturing and shipping industrial, construction, engineering and
            consumer goods to 20+ countries.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {siteLinks.linkedin && (
              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-royal hover:border-royal transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            <a
              href={siteLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-royal hover:border-royal transition"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={siteLinks.email}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-royal hover:border-royal transition"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol
          title="Products"
          items={[
            { label: "Construction & Stainless Steel", href: "/products/construction-stainless-steel-structural-materials" },
            { label: "All Categories", href: "/products" },
            { label: "Tiles & Stones", href: "/products/tiles-natural-stones" },
            { label: "Electrical", href: "/products/electrical-products" },
            { label: "Pipes & Fittings", href: "/products/pipes-fittings" },
            { label: "Agricultural", href: "/products/agricultural-products" },
          ]}
        />
        <FooterCol
          title="Company"
          items={[
            { label: "About", href: "#about" },
            { label: "Products", href: "/products" },
            { label: "Commitment", href: "#commitment" },
            { label: "Exports", href: "#exports" },
            { label: "Contact", href: "#contact" },
          ]}
        />
        <div className="lg:col-span-3">
          <div className="font-display text-lg font-bold text-white">Newsletter</div>
          <p className="text-sm text-white/60 mt-2">Quarterly updates on categories, capacities and market intel.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex rounded-full border border-white/15 bg-white/5 p-1">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-transparent px-4 text-sm placeholder:text-white/40 focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-12 md:py-14">
          <FooterContactsPanel />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="font-display text-sm font-bold text-white uppercase tracking-widest">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="text-white/60 hover:text-white transition inline-flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-royal" /> {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------- FLOATING UI -------------------------- */

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-border shadow-elevated text-navy hover:bg-navy hover:text-white transition"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={siteLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
      <div className="h-full bg-royal transition-[width] duration-150" style={{ width: `${p}%` }} />
    </div>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-royal/20">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <StatsSection stats={STATS} />
        <AuthorizedDealerSection />
        <About />
        <ProductCategoriesSection />
        <ExportNetworkSection />
        <WhyChoose />
        <Commitment />
        <TrustSection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
