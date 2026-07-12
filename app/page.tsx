import { CategoryStrip, CtaBanner, EditorialFeature, Hero, ValueProps } from "@/components/home/sections";
import { ProductGrid } from "@/components/shop/product-grid";
import { getFeaturedProducts } from "@/lib/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />
      <EditorialFeature />
      <CategoryStrip />
      <section className="py-12 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-muted mb-2">
              This week
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              Featured picks
            </h2>
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>
      <ValueProps />
      <CtaBanner />
    </>
  );
}
