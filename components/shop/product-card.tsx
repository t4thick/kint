"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { CATEGORY_LABELS } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  layout?: "grid" | "row";
}

function Stars({ rating = 4.8 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex text-brand-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="h-3 w-3" fill={i < Math.floor(rating) ? "currentColor" : "none"} viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-[10px] font-medium text-brand-muted">({rating})</span>
    </div>
  );
}

export function ProductCard({ product, layout = "grid" }: ProductCardProps) {
  const { addItem } = useCart();
  const discount =
    product.compareAtPrice &&
    Math.round((1 - product.price / product.compareAtPrice) * 100);

  if (layout === "row") {
    return (
      <article className="card-shine group flex w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] sm:w-[300px]">
        <Link href={`/shop/${product.slug}`} className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="300px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {discount && (
            <span className="absolute left-3 top-3 rounded-md bg-brand-terracotta px-2 py-1 text-[11px] font-black text-white shadow">
              ROLLBACK {discount}%
            </span>
          )}
          <span className="absolute bottom-3 left-3 rounded-md bg-brand-gold px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-brand-green-dark">
            TXT Product
          </span>
        </Link>
        <div className="flex flex-1 flex-col p-4">
          <Stars />
          <Link href={`/shop/${product.slug}`}>
            <h3 className="mt-1.5 font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-brand-walmart">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 font-display text-2xl font-bold text-brand-green">
            {formatPrice(product.price)}
            {product.compareAtPrice && (
              <span className="ml-2 text-sm font-normal text-brand-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </p>
          <button
            onClick={() => addItem(product.id)}
            disabled={!product.inStock}
            className="mt-3 w-full rounded-full bg-brand-walmart py-2.5 text-sm font-bold text-white shadow transition-all hover:bg-[#005bb5] active:scale-[0.98] disabled:opacity-40"
          >
            + Add to cart
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="card-shine group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)] ring-1 ring-brand-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <Link href={`/shop/${product.slug}`} className="relative aspect-square overflow-hidden bg-brand-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {discount && (
          <span className="absolute left-2 top-2 rounded-md bg-brand-terracotta px-2 py-0.5 text-[10px] font-black text-white">
            -{discount}%
          </span>
        )}
        {product.featured && (
          <span className="absolute right-2 top-2 rounded-md bg-brand-green px-2 py-0.5 text-[10px] font-bold text-white">
            HOT
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-brand-terracotta">
          {CATEGORY_LABELS[product.category]}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mt-1 text-sm font-semibold leading-snug line-clamp-2 group-hover:text-brand-walmart">
            {product.name}
          </h3>
        </Link>
        <Stars />

        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div>
            <p className="font-display text-xl font-bold text-brand-green">
              {formatPrice(product.price)}
            </p>
            {product.compareAtPrice && (
              <p className="text-xs text-brand-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product.id);
            }}
            disabled={!product.inStock}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-walmart text-white shadow-md transition-all hover:bg-[#005bb5] active:scale-90 disabled:opacity-40"
            aria-label={`Add ${product.name} to cart`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
