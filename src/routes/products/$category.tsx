import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import { Breadcrumb } from "@/components/catalog/Breadcrumb";
import { ProductCard } from "@/components/catalog/ProductCard";
import { CatalogImg } from "@/components/catalog/CatalogImg";
import { getCategoryBySlug, getCategorySectionGroups, getProductCount } from "@/lib/catalog";

export const Route = createFileRoute("/products/$category")({
  component: CategoryPage,
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category);
    if (!category) throw notFound();
    const sections = getCategorySectionGroups(params.category);
    const productCount = getProductCount(params.category);
    return { category, sections, productCount };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.category.title} — HALI EXIMS`
          : "Product Category — HALI EXIMS",
      },
      {
        name: "description",
        content: loaderData?.category.description ?? "HALI EXIMS product category catalogue.",
      },
    ],
  }),
});

function CategoryPage() {
  const { category, sections, productCount } = Route.useLoaderData();

  return (
    <CatalogShell>
      <section className="relative overflow-hidden bg-navy text-white">
        <CatalogImg
          kind="category"
          src={category.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/80" />
        <div className="relative container-x py-14 md:py-20">
          <div className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span.text-navy]:text-white">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: category.shortTitle ?? category.title },
              ]}
            />
          </div>
          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal/90">Category</p>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08] text-balance">
              {category.title}
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">{category.description}</p>
            <p className="mt-4 text-sm font-semibold text-white/60">
              {productCount} {productCount === 1 ? "product" : "products"} across {sections.length}{" "}
              {sections.length === 1 ? "section" : "sections"}
            </p>
          </div>
        </div>
      </section>

      <div className="section-y">
        <div className="container-x space-y-14 md:space-y-16">
          {sections.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface p-10 md:p-14 text-center">
              <h2 className="font-display text-2xl font-bold text-navy">Products coming soon</h2>
              <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
                This category is part of our expanding catalogue. Contact our team for current availability and
                sourcing options.
              </p>
              <a href="/#contact" className="btn-accent mt-8 inline-flex">
                Request Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ) : (
            sections.map(({ section, products }) => (
              <section key={section.id} id={section.slug} aria-labelledby={`section-${section.slug}`}>
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">Section</p>
                  <h2
                    id={`section-${section.slug}`}
                    className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-navy leading-[1.1]"
                  >
                    {section.title}
                  </h2>
                  {section.description && (
                    <p className="mt-3 text-muted-foreground leading-relaxed">{section.description}</p>
                  )}
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {products.length} {products.length === 1 ? "product" : "products"}
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))
          )}

          <div className="rounded-3xl border border-border bg-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Need a custom specification?</h2>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Share drawings, grades, or packaging requirements — we will coordinate with manufacturing partners and
                respond with a quotation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/#contact" className="btn-accent">
                Get Quote <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/products" className="btn-ghost">
                All categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CatalogShell>
  );
}
