"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconStore, IconTruck } from "@/components/ui/icons";
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
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-brand-cream shadow-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          className="object-cover"
        />
        {discount && (
          <span className="absolute top-4 left-4 rounded-full bg-brand-terracotta px-3 py-1.5 text-sm font-semibold text-white">
            Save {discount}%
          </span>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-2">
          <Badge variant="green">{CATEGORY_LABELS[product.category]}</Badge>
          <Badge variant="gold">TXT Product</Badge>
          <Badge variant="outline">Origin: {product.origin}</Badge>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
          {product.name}
        </h1>

        <div className="flex items-baseline gap-3">
          <span className="font-display text-3xl font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-lg text-brand-muted line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          <span className="text-sm text-brand-muted">/ {product.unit}</span>
        </div>

        <p className="text-brand-muted leading-relaxed">{product.longDescription}</p>

        <div className="flex items-center gap-2 text-sm">
          <span
            className={`inline-flex h-2.5 w-2.5 rounded-full ${
              product.inStock ? "bg-green-500" : "bg-red-400"
            }`}
          />
          {product.inStock ? (
            <span className="text-green-700 font-medium">
              In stock — {product.stockCount} available
            </span>
          ) : (
            <span className="text-red-600 font-medium">Out of stock</span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center rounded-xl border border-brand-border overflow-hidden bg-brand-surface">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-11 w-11 items-center justify-center hover:bg-brand-cream transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-11 w-11 items-center justify-center hover:bg-brand-cream transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <Button
            size="lg"
            fullWidth
            disabled={!product.inStock}
            onClick={() => addItem(product.id, quantity)}
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </Button>
        </div>

        {inCartQty > 0 && (
          <p className="text-sm text-brand-green font-medium">
            {inCartQty} already in your cart
          </p>
        )}

        <div className="rounded-2xl bg-brand-cream/80 p-5 space-y-4 mt-2">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
              <IconTruck className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-foreground">Local Columbus Delivery</p>
              <p className="text-brand-muted text-xs">Same-day in Columbus core · Free over $75</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
              <IconStore className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-foreground">Pickup Available</p>
              <p className="text-brand-muted text-xs">2847 Cleveland Ave, Columbus OH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
