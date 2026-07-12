import Link from "next/link";
import { CategoryIcon } from "@/components/ui/icons";
import { CATEGORY_LABELS } from "@/lib/constants";
import { products } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/types";

export default function CategoriesPage() {
  const categories = Object.entries(CATEGORY_LABELS) as [ProductCategory, string][];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl font-semibold text-foreground mb-3">Categories</h1>
      <p className="text-brand-muted mb-10">Browse our African market aisles</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(([slug, label]) => {
          const count = products.filter((p) => p.category === slug).length;
          return (
            <Link
              key={slug}
              href={`/shop?category=${slug}`}
              className="group rounded-2xl bg-brand-surface shadow-card p-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <CategoryIcon category={slug} className="h-6 w-6" />
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground mt-4 group-hover:text-brand-green transition-colors">
                {label}
              </h2>
              <p className="text-sm text-brand-muted mt-1">{count} TXT Products</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
