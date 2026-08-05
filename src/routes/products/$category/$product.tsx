import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import { Breadcrumb } from "@/components/catalog/Breadcrumb";
import { ProductGallery } from "@/components/catalog/ProductGallery";
import { ProductCard, QuoteActions } from "@/components/catalog/ProductCard";
import { getCategoryBySlug, getProduct, getRelatedProducts } from "@/lib/catalog";

export const Route = createFileRoute("/products/$category/$product")({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category);
    const product = getProduct(params.category, params.product);
    if (!category || !product) throw notFound();
    const related = getRelatedProducts(product, 4);
    return { category, product, related };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.product.title} — ${loaderData.category.shortTitle ?? loaderData.category.title} | HALI EXIMS`
          : "Product — HALI EXIMS",
      },
      {
        name: "description",
        content: loaderData?.product.shortDescription ?? "HALI EXIMS export product details.",
      },
    ],
  }),
});

function ProductDetailPage() {
  const { category, product, related } = Route.useLoaderData();
  const categoryLabel = category.shortTitle ?? category.title;

  return (
    <CatalogShell>
      <div className="border-b border-border bg-surface">
        <div className="container-x py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: categoryLabel, href: `/products/${category.slug}` },
              { label: product.title },
            ]}
          />
        </div>
      </div>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <ProductGallery title={product.title} images={product.gallery} />
          </div>

          <div className="lg:col-span-5">
            <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-navy">
              {product.badge}
            </span>
            <h1 className="mt-4 font-display text-3xl md:text-4xl font-extrabold tracking-tight text-navy leading-[1.1]">
              {product.title}
            </h1>
            <p className="mt-2 text-sm font-medium text-muted-foreground">{categoryLabel}</p>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              {product.shortDescription}
            </p>
            <QuoteActions className="mt-8" />

            <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quick specs</p>
              <ul className="mt-3 space-y-2">
                {product.specPreview.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-navy font-medium">
                    <Check className="h-4 w-4 text-royal shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y-tight border-t border-border bg-surface">
        <div className="container-x">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Technical Specifications</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {product.specifications.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-surface/80"}>
                    <th className="w-[38%] px-5 py-3.5 font-semibold text-navy border-b border-border align-top">
                      {row.label}
                    </th>
                    <td className="px-5 py-3.5 text-muted-foreground border-b border-border">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Product Description</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            <h3 className="mt-10 font-display text-xl font-bold text-navy">Applications</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-navy"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8 h-full">
              <h3 className="font-display text-xl font-bold text-navy">Key Features</h3>
              <ul className="mt-5 space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y-tight bg-surface border-y border-border">
        <div className="container-x">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Packaging & Export</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 md:gap-5">
            {[
              { title: "Packaging", body: product.packaging.packing },
              { title: "Shipping", body: product.packaging.shipping },
              { title: "Container Loading", body: product.packaging.containerLoading },
              { title: "Markets", body: product.packaging.markets },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y">
          <div className="container-x">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Related Products</h2>
              <Link
                to="/products/$category"
                params={{ category: category.slug }}
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-royal transition"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-y bg-navy text-white">
        <div className="container-x flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">Need Bulk Orders?</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Share your quantity, destination port, and specifications. Our export team will prepare a competitive
              quotation for {product.title}.
            </p>
          </div>
          <a href="/#contact" className="btn-accent shrink-0">
            Request Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </CatalogShell>
  );
}
