import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { site, siteLinks } from "@/data/site";
import { SiteLogo } from "@/components/SiteLogo";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Exports", href: "/#exports" },
  { label: "Commitment", href: "/#commitment" },
  { label: "Contact", href: "/#contact" },
];

export function CatalogHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className={scrolled ? "glass-nav" : "bg-background border-b border-border/60"}>
        <div className="container-x flex h-18 md:h-20 items-center justify-between gap-8 py-3">
          <Link to="/" className="flex items-center shrink-0" aria-label={site.name}>
            <SiteLogo />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) =>
              n.href.startsWith("/#") || n.href === "/" ? (
                <a
                  key={n.href}
                  href={n.href}
                  className="relative text-sm font-medium text-foreground/80 hover:text-navy transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-royal after:transition-all hover:after:w-full"
                >
                  {n.label}
                </a>
              ) : (
                <Link
                  key={n.href}
                  to={n.href}
                  className="relative text-sm font-medium text-foreground/80 hover:text-navy transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-royal after:transition-all hover:after:w-full"
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a href="/#contact" className="hidden md:inline-flex btn-accent">
              Request Quote <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
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
              <a href="/#contact" onClick={() => setOpen(false)} className="btn-accent mt-3 justify-center">
                Request Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function CatalogFooter() {
  return (
    <footer className="bg-[#050f26] text-white/80 mt-auto">
      <div className="container-x py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <Link to="/" className="inline-flex rounded-lg bg-white px-2 py-1.5" aria-label={site.name}>
            <SiteLogo imgClassName="h-10 md:h-11" />
          </Link>
          <p className="mt-2 text-sm text-white/55 max-w-md">
            Indian manufacturing & export partner for industrial and commercial buyers worldwide.
          </p>
          <div className="mt-4 space-y-1 text-sm text-white/70">
            <a href={siteLinks.phone} className="block hover:text-white transition">
              {site.phoneDisplay}
            </a>
            <a href={siteLinks.email} className="block hover:text-white transition">
              {site.email}
            </a>
            <div className="text-white/55 whitespace-pre-line leading-relaxed">{site.addressMultiline}</div>
            <div className="text-white/55">GSTIN: {site.gstin}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <Link to="/products" className="hover:text-white transition">
            Products
          </Link>
          <a href="/#about" className="hover:text-white transition">
            About
          </a>
          <a href="/#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/45">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function CatalogShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-royal/20">
      <CatalogHeader />
      <main className="flex-1">{children}</main>
      <CatalogFooter />
    </div>
  );
}
