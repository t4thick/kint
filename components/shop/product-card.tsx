"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { CATEGORY_LABELS } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const discount =
    product.compareAtPrice &&
    Math.round((1 - product.price / product.compareAtPrice) * 100);

  return (
    <article className="group flex flex-col rounded-2xl bg-brand-surface shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover">
      <Link href={`/shop/${product.slug}`} className="relative aspect-square overflow-hidden bg-brand-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {discount && (
          <span className="absolute top-3 left-3 rounded-full bg-brand-terracotta px-2.5 py-1 text-xs font-semibold text-white">
            -{discount}%
          </span>
        )}
        {product.featured && (
          <span className="absolute top-3 right-3">
            <Badge variant="gold">Featured</Badge>
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4 gap-1.5">
        <p className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">
          {CATEGORY_LABELS[product.category]}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-medium text-sm leading-snug text-foreground group-hover:text-brand-green transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-brand-muted line-clamp-1">{product.description}</p>

        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice && (
              <p className="text-xs text-brand-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            )}
            <p className="text-[10px] text-brand-muted">per {product.unit}</p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product.id);
            }}
            disabled={!product.inStock}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green text-white hover:bg-brand-green-light active:scale-95 transition-all disabled:opacity-40"
            aria-label={`Add ${product.name} to cart`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
