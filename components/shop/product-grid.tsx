import { IconCart } from "@/components/ui/icons";
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
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-cream text-brand-muted mb-4">
          <IconCart className="h-6 w-6" />
        </div>
        <p className="font-display text-xl font-semibold text-foreground">No products found</p>
        <p className="text-sm text-brand-muted mt-2">Try a different search or category.</p>
      </div>
    );
  }

  return (
    <section>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>
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
