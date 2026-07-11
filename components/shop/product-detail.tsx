"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { CATEGORY_LABELS } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem, getQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const inCartQty = getQuantity(product.id);
  const discount =
    product.compareAtPrice &&
    Math.round((1 - product.price / product.compareAtPrice) * 100);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="relative">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-brand-cream shadow-[var(--shadow-card)] ring-1 ring-brand-border">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />
          {discount && (
            <span className="absolute left-4 top-4 rounded-lg bg-brand-terracotta px-3 py-1.5 text-sm font-black text-white shadow-lg">
              ROLLBACK — Save {discount}%
            </span>
          )}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {[product.image, product.image, product.image, product.image].map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-xl ring-2 ring-brand-walmart/30">
              <Image src={img} alt="" fill sizes="100px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-2">
          <Badge variant="green">{CATEGORY_LABELS[product.category]}</Badge>
          <Badge variant="gold">TXT Product</Badge>
          <Badge variant="outline">📍 {product.origin}</Badge>
        </div>

        <h1 className="font-display text-3xl font-bold leading-tight text-brand-green sm:text-4xl">
          {product.name}
        </h1>

        <div className="flex items-center gap-2">
          <div className="flex text-brand-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-brand-muted">4.9 (128 reviews)</span>
        </div>

        <div className="flex items-baseline gap-3 rounded-2xl bg-brand-cream p-4">
          <span className="font-display text-4xl font-bold text-brand-green">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xl text-brand-muted line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          <span className="text-sm text-brand-muted">/ {product.unit}</span>
        </div>

        <p className="leading-relaxed text-brand-muted">{product.longDescription}</p>

        <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm">
          <span className="flex h-2.5 w-2.5 rounded-full bg-green-500" />
          <span className="font-semibold text-green-800">
            In stock — {product.stockCount} available at Columbus warehouse
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center rounded-full border-2 border-brand-border overflow-hidden w-fit">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-12 w-12 items-center justify-center text-lg font-bold hover:bg-brand-cream"
            >
              −
            </button>
            <span className="w-14 text-center text-lg font-bold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-12 w-12 items-center justify-center text-lg font-bold hover:bg-brand-cream"
            >
              +
            </button>
          </div>

          <Button
            size="lg"
            fullWidth
            disabled={!product.inStock}
            onClick={() => addItem(product.id, quantity)}
            className="bg-brand-walmart hover:bg-[#005bb5] text-base font-bold"
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </Button>
        </div>

        {inCartQty > 0 && (
          <p className="text-sm font-semibold text-brand-walmart">
            ✓ {inCartQty} in your cart
          </p>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-white p-4">
            <p className="font-bold text-sm">🚚 Columbus Delivery</p>
            <p className="text-xs text-brand-muted mt-1">Same-day core · Free $75+</p>
          </div>
          <div className="rounded-2xl border border-brand-border bg-white p-4">
            <p className="font-bold text-sm">🏪 Store Pickup</p>
            <p className="text-xs text-brand-muted mt-1">2847 Cleveland Ave</p>
          </div>
        </div>
      </div>
    </div>
  );
}
