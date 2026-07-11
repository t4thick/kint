export type ProductType = "txt-product";

export type ProductCategory =
  | "grains-flours"
  | "spices-seasonings"
  | "sauces-condiments"
  | "beverages"
  | "snacks"
  | "fresh-produce"
  | "frozen"
  | "household";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice?: number;
  unit: string;
  category: ProductCategory;
  type: ProductType;
  image: string;
  imageAccent: string;
  inStock: boolean;
  stockCount: number;
  featured: boolean;
  tags: string[];
  origin: string;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "out-for-delivery"
  | "delivered"
  | "cancelled";

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  unit: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  city: string;
  zip: string;
  deliveryNotes?: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

export interface DeliveryZone {
  id: string;
  name: string;
  zipPrefixes: string[];
  fee: number;
  eta: string;
}
