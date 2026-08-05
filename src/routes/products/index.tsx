import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import { Breadcrumb } from "@/components/catalog/Breadcrumb";
import { CatalogCategoryCard } from "@/components/catalog/CatalogCategoryCard";
import { catalogCategories } from "@/lib/catalog";

export const Route = createFileRoute("/products/")({
  component: ProductsIndexPage,
  head: () => ({
    meta: [
      { title: "Product Categories — HALI EXIMS" },
      {
        name: "description",
        content:
          "Browse HALI EXIMS export product categories — construction materials, structural steel, tiles, water treatment, and more from trusted Indian manufacturers.",
      },
    ],
  }),
});

function ProductsIndexPage() {
  return (
    <CatalogShell>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_55%)]" />
        <div className="relative container-x py-14 md:py-20">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <div className="eyebrow text-royal/90">
              <Boxes className="h-3.5 w-3.5" /> Product Catalogue
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08] text-balance">
              Export Product Categories
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              Explore our growing catalogue of export-quality products. Select a category to view detailed product
              listings, specifications, and request a quotation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {catalogCategories.map((category, index) => (
            <CatalogCategoryCard key={category.id} category={category} priority={index < 3} />
          ))}
        </div>
      </section>
    </CatalogShell>
  );
}
