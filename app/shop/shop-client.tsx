"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/shop/product-grid";
import { SearchBar } from "@/components/ui/search-bar";
import { CATEGORY_ICONS, CATEGORY_LABELS } from "@/lib/constants";
import { products } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ShopClient() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");
  const urlSearch = searchParams.get("search") ?? "";
  const [categoryOverride, setCategoryOverride] = useState<string | null | undefined>(undefined);
  const category = categoryOverride !== undefined ? categoryOverride : urlCategory;

  const filtered = useMemo(() => {
    let result = [...products];
    if (category) {
      result = result.filter((p) => p.category === category);
    }
    if (urlSearch.trim()) {
      const q = urlSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }
    return result;
  }, [category, urlSearch]);

  const categories = Object.entries(CATEGORY_LABELS) as [ProductCategory, string][];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
      <div className="mb-6 rounded-2xl bg-brand-green p-6 text-white sm:p-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Shop All Aisles</h1>
        <p className="mt-2 text-white/75">
          {filtered.length} TXT Products · Delivered across Columbus, Ohio
        </p>
        <div className="mt-4 max-w-lg">
          <SearchBar placeholder="Filter products..." />
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="lg:w-60 shrink-0">
          <div className="sticky top-[140px] space-y-4">
            <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)] ring-1 ring-brand-border/60">
              <p className="text-sm font-bold text-brand-green mb-3">Aisles</p>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                <button
                  onClick={() => setCategoryOverride(null)}
                  className={cn(
                    "rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors text-left",
                    !category
                      ? "bg-brand-walmart text-white"
                      : "text-brand-muted hover:bg-brand-cream"
                  )}
                >
                  All Products
                </button>
                {categories.map(([slug, label]) => (
                  <button
                    key={slug}
                    onClick={() => setCategoryOverride(slug)}
                    className={cn(
                      "rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors text-left flex items-center gap-2",
                      category === slug
                        ? "bg-brand-walmart text-white"
                        : "text-brand-muted hover:bg-brand-cream"
                    )}
                  >
                    <span>{CATEGORY_ICONS[slug]}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <ProductGrid products={filtered} viewAllHref={undefined} />
        </div>
      </div>
    </div>
  );
}
