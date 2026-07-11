"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products as defaultProducts } from "@/lib/data/products";
import { seedOrders } from "@/lib/data/orders";
import type { Order, OrderStatus, Product } from "@/lib/types";

const PRODUCTS_KEY = "kintampo-admin-products";
const ORDERS_KEY = "kintampo-admin-orders";
const AUTH_KEY = "kintampo-admin-auth";

const ADMIN_CREDENTIALS = { email: "admin@kintampomarket.com", password: "kintampo2026" };

interface AdminContextValue {
  products: Product[];
  orders: Order[];
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  addOrder: (order: Order) => void;
  stats: {
    totalRevenue: number;
    totalOrders: number;
    pendingOrders: number;
    lowStock: number;
  };
}

const AdminContext = createContext<AdminContextValue | null>(null);

function loadProducts(): Product[] {
  if (typeof window === "undefined") return defaultProducts;
  try {
    const raw = localStorage.getItem(PRODUCTS_KEY);
    return raw ? (JSON.parse(raw) as Product[]) : defaultProducts;
  } catch {
    return defaultProducts;
  }
}

function loadOrders(): Order[] {
  if (typeof window === "undefined") return seedOrders;
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? (JSON.parse(raw) as Order[]) : seedOrders;
  } catch {
    return seedOrders;
  }
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [orders, setOrders] = useState<Order[]>(seedOrders);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client hydration from localStorage
    setProducts(loadProducts());
    setOrders(loadOrders());
    setIsAuthenticated(localStorage.getItem(AUTH_KEY) === "true");
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  }, [products, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders, hydrated]);

  const login = useCallback((email: string, password: string) => {
    const ok =
      email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
    if (ok) {
      localStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  }, []);

  const updateProduct = useCallback((id: string, updates: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  }, []);

  const updateOrderStatus = useCallback((id: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );
  }, []);

  const addOrder = useCallback((order: Order) => {
    setOrders((prev) => [order, ...prev]);
  }, []);

  const stats = useMemo(() => ({
    totalRevenue: orders
      .filter((o) => o.status !== "cancelled")
      .reduce((sum, o) => sum + o.total, 0),
    totalOrders: orders.length,
    pendingOrders: orders.filter((o) =>
      ["pending", "confirmed", "preparing"].includes(o.status)
    ).length,
    lowStock: products.filter((p) => p.stockCount < 50).length,
  }), [orders, products]);

  const value = useMemo(
    () => ({
      products,
      orders,
      isAuthenticated,
      login,
      logout,
      updateProduct,
      updateOrderStatus,
      addOrder,
      stats,
    }),
    [
      products,
      orders,
      isAuthenticated,
      login,
      logout,
      updateProduct,
      updateOrderStatus,
      addOrder,
      stats,
    ]
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
