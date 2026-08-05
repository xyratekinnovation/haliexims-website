import { Boxes } from "lucide-react";
import { productCategories } from "@/data/categories";
import { CategoryCarousel } from "./CategoryCarousel";

export function ProductCategoriesSection() {
  return (
    <section id="products" className="section-y bg-surface border-y border-border">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">
            <Boxes className="h-3.5 w-3.5" /> Our Product Categories
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy leading-[1.08] text-balance">
            Premium Products for Global Markets
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Explore our diverse range of export-quality products sourced from trusted manufacturers across India. Every
            category is backed by strict quality standards, reliable sourcing, and seamless international logistics.
          </p>
        </div>

        <div className="mt-12 md:mt-14">
          <CategoryCarousel categories={productCategories} />
        </div>
      </div>
    </section>
  );
}
