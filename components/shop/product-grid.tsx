import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl mb-4">🛒</p>
        <p className="font-display text-xl font-semibold text-brand-green">No products found</p>
        <p className="text-sm text-brand-muted mt-2">Try a different search or category.</p>
      </div>
    );
  }

  return (
    <section>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="font-display text-2xl font-semibold text-brand-green">{title}</h2>
          )}
          {subtitle && <p className="text-sm text-brand-muted mt-1">{subtitle}</p>}
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
