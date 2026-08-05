import { Download, X } from "lucide-react";
import type { CatalogProduct } from "@/data/catalog/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CatalogImg } from "@/components/catalog/CatalogImg";
import {
  downloadProductDetails,
  generateProductDescription,
} from "@/lib/productDetails";

type ProductDetailsModalProps = {
  product: CatalogProduct | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  if (!product) return null;

  const description = generateProductDescription(product);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-h-[90vh] w-[calc(100%-1.5rem)] max-w-4xl overflow-y-auto rounded-2xl border-border bg-white p-0 shadow-elevated sm:w-full [&>button]:hidden"
      >
        <DialogHeader className="relative space-y-2 border-b border-border px-5 py-5 text-left sm:px-7 sm:py-6">
          <DialogTitle className="font-display pr-10 text-xl font-bold tracking-tight text-navy sm:text-2xl">
            Product Details
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            Comprehensive specifications and information for {product.title}
          </DialogDescription>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="grid gap-6 px-5 py-5 sm:px-7 sm:py-6 md:grid-cols-2 md:gap-8">
          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <CatalogImg
                kind="product"
                src={product.image}
                alt={product.title}
                className="aspect-[5/3.4] w-full object-cover"
                width={800}
                height={560}
              />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy leading-snug sm:text-xl">
              {product.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>

          <div>
            <h4 className="font-display text-base font-bold tracking-tight text-navy sm:text-lg">
              Technical Specifications
            </h4>
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-left text-[12px] sm:text-[13px]">
                <tbody>
                  {product.specifications.map((row, i) => (
                    <tr key={`${row.label}-${i}`} className={i % 2 === 0 ? "bg-surface/70" : "bg-white"}>
                      <th className="w-[42%] px-3 py-2.5 font-semibold text-navy align-top border-b border-border/70">
                        {row.label}
                      </th>
                      <td className="px-3 py-2.5 text-muted-foreground border-b border-border/70">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-border px-5 py-5 sm:flex-row sm:items-center sm:justify-end sm:px-7">
          <button
            type="button"
            onClick={() => downloadProductDetails(product)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-navy/40"
          >
            <Download className="h-4 w-4" />
            Download Details
          </button>
          <a href="/#contact" onClick={onClose} className="btn-accent justify-center text-sm px-5 py-2.5">
            CONTACT US FOR QUOTE
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
