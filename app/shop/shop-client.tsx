"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/shop/product-grid";
import { Input } from "@/components/ui/input";
import { CATEGORY_ICONS, CATEGORY_LABELS } from "@/lib/constants";
import { products } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(initialCategory);

  const filtered = useMemo(() => {
    let result = [...products];
    if (category) {
      result = result.filter((p) => p.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }
    return result;
  }, [category, search]);

  const categories = Object.entries(CATEGORY_LABELS) as [ProductCategory, string][];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-brand-green">
          Shop All TXT Products
        </h1>
        <p className="text-brand-muted mt-2">
          {filtered.length} products · Local delivery in Columbus, Ohio
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="lg:w-56 shrink-0">
          <div className="sticky top-24 space-y-6">
            <Input
              label="Search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div>
              <p className="text-sm font-medium mb-3">Categories</p>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                <button
                  onClick={() => setCategory(null)}
                  className={cn(
                    "px-3 py-2 rounded-xl text-sm font-medium transition-colors text-left",
                    !category
                      ? "bg-brand-green text-white"
                      : "text-brand-muted hover:bg-brand-green/5"
                  )}
                >
                  All Products
                </button>
                {categories.map(([slug, label]) => (
                  <button
                    key={slug}
                    onClick={() => setCategory(slug)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-sm font-medium transition-colors text-left flex items-center gap-2",
                      category === slug
                        ? "bg-brand-green text-white"
                        : "text-brand-muted hover:bg-brand-green/5"
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
          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  );
}
