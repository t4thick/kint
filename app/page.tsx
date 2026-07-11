import {
  CategoryStrip,
  CtaBanner,
  DealsTicker,
  Hero,
  PromoBanners,
  QuickActions,
  SocialProof,
  ValueProps,
} from "@/components/home/sections";
import { ProductGrid } from "@/components/shop/product-grid";
import { getFeaturedProducts, products } from "@/lib/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const deals = products.filter((p) => p.compareAtPrice).slice(0, 6);

  return (
    <>
      <DealsTicker />
      <Hero />
      <QuickActions />
      <section className="pt-10 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ProductGrid
            products={featured}
            title="Featured TXT Products"
            subtitle="Top picks from our Columbus warehouse"
            horizontal
            viewAllHref="/shop"
          />
        </div>
      </section>
      <PromoBanners />
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ProductGrid
            products={deals}
            title="Rollback Deals"
            subtitle="Save on African market favorites this week"
            horizontal
            viewAllHref="/shop"
          />
        </div>
      </section>
      <CategoryStrip />
      <ValueProps />
      <SocialProof />
      <CtaBanner />
    </>
  );
}
