import { DELIVERY_ZONES, FREE_DELIVERY_THRESHOLD, TAX_RATE } from "./constants";
import type { CartItem, OrderItem } from "./types";

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function getDeliveryFee(subtotal: number, zip: string): number {
  if (subtotal >= FREE_DELIVERY_THRESHOLD) return 0;
  const zone = DELIVERY_ZONES.find((z) =>
    z.zipPrefixes.some((prefix) => zip.startsWith(prefix))
  );
  return zone?.fee ?? 9.99;
}

export function calculateTotals(
  items: { price: number; quantity: number }[],
  zip = "43201"
) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryFee = getDeliveryFee(subtotal, zip);
  const tax = (subtotal + deliveryFee) * TAX_RATE;
  const total = subtotal + deliveryFee + tax;
  return { subtotal, deliveryFee, tax, total };
}

export function cartItemsToOrderItems(
  cartItems: CartItem[],
  productLookup: (id: string) => { name: string; price: number; unit: string } | undefined
): OrderItem[] {
  return cartItems
    .map((item) => {
      const product = productLookup(item.productId);
      if (!product) return null;
      return {
        productId: item.productId,
        name: product.name,
        quantity: item.quantity,
        price: product.price,
        unit: product.unit,
      };
    })
    .filter((item): item is OrderItem => item !== null);
}

export function generateOrderId(): string {
  return `ord-${Math.random().toString(36).slice(2, 11)}`;
}

export function generateOrderNumber(): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `KAM-${num}`;
}

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
