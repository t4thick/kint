import { CtaBanner, CategoryStrip, Hero, ValueProps } from "@/components/home/sections";
import { ProductGrid } from "@/components/shop/product-grid";
import { getFeaturedProducts } from "@/lib/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />
      <CategoryStrip />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ProductGrid
            products={featured}
            title="Featured TXT Products"
            subtitle="Hand-picked favorites from our Columbus warehouse"
          />
        </div>
      </section>
      <ValueProps />
      <CtaBanner />
    </>
  );
}
