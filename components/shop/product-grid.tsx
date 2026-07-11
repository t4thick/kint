import Link from "next/link";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  horizontal?: boolean;
  viewAllHref?: string;
}

export function ProductGrid({
  products,
  title,
  subtitle,
  horizontal = false,
  viewAllHref = "/shop",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <p className="font-display text-2xl font-bold text-brand-green">No products found</p>
        <p className="text-sm text-brand-muted mt-2">Try a different search or aisle.</p>
      </div>
    );
  }

  if (horizontal) {
    return (
      <section>
        {(title || subtitle) && (
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              {title && (
                <h2 className="font-display text-2xl font-bold text-brand-green sm:text-3xl">{title}</h2>
              )}
              {subtitle && <p className="text-sm text-brand-muted mt-1">{subtitle}</p>}
            </div>
            <Link
              href={viewAllHref}
              className="shrink-0 text-sm font-bold text-brand-walmart hover:underline"
            >
              View all →
            </Link>
          </div>
        )}
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide sm:-mx-6 sm:px-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} layout="row" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      {(title || subtitle) && (
        <div className="mb-6 flex items-end justify-between">
          <div>
            {title && (
              <h2 className="font-display text-2xl font-bold text-brand-green sm:text-3xl">{title}</h2>
            )}
            {subtitle && <p className="text-sm text-brand-muted mt-1">{subtitle}</p>}
          </div>
          {viewAllHref && (
            <Link href={viewAllHref} className="text-sm font-bold text-brand-walmart hover:underline">
              View all →
            </Link>
          )}
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
