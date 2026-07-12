"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconCart } from "@/components/ui/icons";
import { getProductById } from "@/lib/data/products";
import { useCart } from "@/lib/cart-context";
import { FREE_DELIVERY_THRESHOLD } from "@/lib/constants";
import { calculateTotals, formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, itemCount } = useCart();

  const cartProducts = items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean) as (ReturnType<typeof getProductById> & { quantity: number })[];

  const totals = calculateTotals(
    cartProducts.map((p) => ({ price: p!.price, quantity: p!.quantity }))
  );

  if (itemCount === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-brand-cream text-brand-muted mb-6">
          <IconCart className="h-7 w-7" />
        </div>
        <h1 className="font-display text-2xl font-semibold text-foreground">Your cart is empty</h1>
        <p className="text-brand-muted mt-2 mb-8">
          Browse our TXT Products and add items to get started.
        </p>
        <Button href="/shop" size="lg">
          Start Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Your Cart ({itemCount})
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-brand-muted hover:text-red-600 transition-colors"
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {cartProducts.map((product) => (
            <div
              key={product!.id}
              className="flex gap-4 rounded-2xl bg-brand-surface shadow-card p-4"
            >
              <div className="relative h-20 w-20 shrink-0 rounded-xl overflow-hidden bg-brand-cream">
                <Image
                  src={product!.image}
                  alt={product!.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/shop/${product!.slug}`}
                    className="font-medium text-sm hover:text-brand-green transition-colors line-clamp-1"
                  >
                    {product!.name}
                  </Link>
                  <p className="text-sm font-semibold text-foreground mt-0.5">
                    {formatPrice(product!.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-lg border border-brand-border overflow-hidden">
                    <button
                      onClick={() => updateQuantity(product!.id, product!.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center hover:bg-brand-cream"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{product!.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product!.id, product!.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center hover:bg-brand-cream"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product!.id)}
                    className="text-brand-muted hover:text-red-600 transition-colors"
                    aria-label="Remove item"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl bg-brand-surface shadow-card p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-foreground">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-brand-muted">Subtotal</span>
                <span>{formatPrice(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Delivery</span>
                <span>
                  {totals.deliveryFee === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    formatPrice(totals.deliveryFee)
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Tax (7.75%)</span>
                <span>{formatPrice(totals.tax)}</span>
              </div>
              <div className="border-t border-brand-border pt-2 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>{formatPrice(totals.total)}</span>
              </div>
            </div>

            {totals.subtotal < FREE_DELIVERY_THRESHOLD && (
              <p className="text-xs text-brand-muted bg-brand-cream rounded-lg p-3">
                Add {formatPrice(FREE_DELIVERY_THRESHOLD - totals.subtotal)} more for free delivery!
              </p>
            )}

            <Button href="/checkout" size="lg" fullWidth>
              Proceed to Checkout
            </Button>
            <Button href="/shop" variant="ghost" size="sm" fullWidth>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
