import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/shop/product-detail";
import { ProductGrid } from "@/components/shop/product-grid";
import { getProductBySlug, products } from "@/lib/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <nav className="text-sm text-brand-muted mb-6">
        <Link href="/" className="hover:text-brand-green">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-brand-green">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <ProductDetail product={product} />

      {related.length > 0 && (
        <div className="mt-16 pt-12 border-t border-brand-border">
          <ProductGrid
            products={related}
            title="You may also like"
            subtitle="More TXT Products from the same aisle"
          />
        </div>
      )}
    </div>
  );
}
