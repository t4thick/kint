import Link from "next/link";
import { CATEGORY_ICONS, CATEGORY_LABELS } from "@/lib/constants";
import { products } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/types";

export default function CategoriesPage() {
  const categories = Object.entries(CATEGORY_LABELS) as [ProductCategory, string][];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl font-semibold text-brand-green mb-3">Categories</h1>
      <p className="text-brand-muted mb-10">Browse our African market aisles</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(([slug, label]) => {
          const count = products.filter((p) => p.category === slug).length;
          return (
            <Link
              key={slug}
              href={`/shop?category=${slug}`}
              className="group rounded-2xl border border-brand-border bg-white p-6 hover:border-brand-green hover:shadow-lg transition-all"
            >
              <span className="text-4xl">{CATEGORY_ICONS[slug]}</span>
              <h2 className="font-display text-lg font-semibold text-brand-green mt-4 group-hover:underline">
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
