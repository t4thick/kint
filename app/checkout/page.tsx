"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProductById } from "@/lib/data/products";
import { useAdmin } from "@/lib/admin-context";
import { useCart } from "@/lib/cart-context";
import {
  calculateTotals,
  cartItemsToOrderItems,
  formatPrice,
  generateOrderNumber,
  generateOrderId,
} from "@/lib/utils";
import type { Order } from "@/lib/types";

export default function CheckoutPage() {
  const { items, clearCart, itemCount } = useCart();
  const { addOrder } = useAdmin();
  const [loading, setLoading] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Columbus",
    zip: "43201",
    notes: "",
  });

  const cartProducts = items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean);

  const totals = calculateTotals(
    cartProducts.map((p) => ({ price: p!.price, quantity: p!.quantity })),
    form.zip
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 800));

    const num = generateOrderNumber();
    const orderItems = cartItemsToOrderItems(items, (id) => {
      const p = getProductById(id);
      return p ? { name: p.name, price: p.price, unit: p.unit } : undefined;
    });

    const order: Order = {
      id: generateOrderId(),
      orderNumber: num,
      customerName: form.name,
      customerEmail: form.email,
      customerPhone: form.phone,
      address: form.address,
      city: form.city,
      zip: form.zip,
      deliveryNotes: form.notes || undefined,
      items: orderItems,
      subtotal: totals.subtotal,
      deliveryFee: totals.deliveryFee,
      tax: totals.tax,
      total: totals.total,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    addOrder(order);
    clearCart();
    setOrderNumber(num);
    setPlaced(true);
    setLoading(false);
  };

  if (itemCount === 0 && !placed) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <p className="text-5xl mb-6">📦</p>
        <h1 className="font-display text-2xl font-semibold text-brand-green">Nothing to checkout</h1>
        <p className="text-brand-muted mt-2 mb-8">Add items to your cart first.</p>
        <Button href="/shop" size="lg">Go to Shop</Button>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl mb-6">
          ✓
        </div>
        <h1 className="font-display text-2xl font-semibold text-brand-green">Order Placed!</h1>
        <p className="text-brand-muted mt-2">
          Your order <span className="font-semibold text-foreground">{orderNumber}</span> is confirmed.
          We&apos;ll deliver to your Columbus address soon.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <Button href="/shop" size="lg">Continue Shopping</Button>
          <Button href="/" variant="outline" size="md">Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="font-display text-3xl font-semibold text-brand-green mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-2xl border border-brand-border bg-white p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold">Contact Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                label="Phone"
                type="tel"
                required
                placeholder="(614) 555-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <Input
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </section>

          <section className="rounded-2xl border border-brand-border bg-white p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold">Delivery Address</h2>
            <p className="text-xs text-brand-muted">We deliver across Columbus, Ohio metro area</p>
            <Input
              label="Street Address"
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="City"
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
              <Input
                label="ZIP Code"
                required
                value={form.zip}
                onChange={(e) => setForm({ ...form, zip: e.target.value })}
              />
            </div>
            <Input
              label="Delivery Notes (optional)"
              placeholder="Gate code, apartment number, etc."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </section>

          <section className="rounded-2xl border border-brand-border bg-white p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold">Payment</h2>
            <div className="rounded-xl bg-brand-cream p-4 text-sm text-brand-muted">
              <p className="font-medium text-brand-green mb-1">Demo Mode</p>
              Payment processing will be integrated later. Your order will be saved and visible in admin.
            </div>
          </section>
        </div>

        <div>
          <div className="sticky top-24 rounded-2xl border border-brand-border bg-white p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-brand-green">Order Summary</h2>

            <div className="space-y-3 max-h-48 overflow-y-auto">
              {cartProducts.map((p) => (
                <div key={p!.id} className="flex justify-between text-sm">
                  <span className="text-brand-muted">
                    {p!.name} × {p!.quantity}
                  </span>
                  <span>{formatPrice(p!.price * p!.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-brand-muted">Subtotal</span>
                <span>{formatPrice(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Delivery</span>
                <span>{totals.deliveryFee === 0 ? "FREE" : formatPrice(totals.deliveryFee)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Tax</span>
                <span>{formatPrice(totals.tax)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-1">
                <span>Total</span>
                <span className="text-brand-green">{formatPrice(totals.total)}</span>
              </div>
            </div>

            <Button type="submit" size="lg" fullWidth disabled={loading}>
              {loading ? "Placing Order..." : `Place Order — ${formatPrice(totals.total)}`}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
