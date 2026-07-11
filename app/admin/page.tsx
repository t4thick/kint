"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useAdmin } from "@/lib/admin-context";
import { formatDate, formatPrice } from "@/lib/utils";

const statusColors: Record<string, "default" | "gold" | "green" | "red" | "outline"> = {
  pending: "gold",
  confirmed: "green",
  preparing: "gold",
  "out-for-delivery": "green",
  delivered: "green",
  cancelled: "red",
};

export default function AdminDashboard() {
  const { stats, orders, products } = useAdmin();
  const recentOrders = orders.slice(0, 5);
  const lowStock = products.filter((p) => p.stockCount < 50);

  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <div>
        <h1 className="font-display text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Kintampo African Market overview</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Revenue", value: formatPrice(stats.totalRevenue), icon: "💰", color: "bg-green-50 text-green-700" },
          { label: "Total Orders", value: stats.totalOrders.toString(), icon: "🛍️", color: "bg-blue-50 text-blue-700" },
          { label: "Pending Orders", value: stats.pendingOrders.toString(), icon: "⏳", color: "bg-amber-50 text-amber-700" },
          { label: "Low Stock Items", value: stats.lowStock.toString(), icon: "⚠️", color: "bg-red-50 text-red-700" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <span className="text-xl">{stat.icon}</span>
            </div>
            <p className={`font-display text-2xl font-bold mt-2 ${stat.color.split(" ")[1]}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Recent Orders</h2>
            <Link href="/admin/orders" className="text-sm text-brand-green hover:underline">
              View all
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentOrders.map((order) => (
              <div key={order.id} className="px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{order.orderNumber}</p>
                  <p className="text-xs text-gray-500">{order.customerName} · {formatDate(order.createdAt)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{formatPrice(order.total)}</p>
                  <Badge variant={statusColors[order.status] ?? "outline"}>
                    {order.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Low Stock Alert</h2>
            <Link href="/admin/products" className="text-sm text-brand-green hover:underline">
              Manage
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {lowStock.length === 0 ? (
              <p className="px-5 py-8 text-sm text-gray-500 text-center">All products well stocked ✓</p>
            ) : (
              lowStock.map((product) => (
                <div key={product.id} className="px-5 py-3 flex items-center justify-between">
                  <p className="text-sm font-medium">{product.name}</p>
                  <Badge variant="red">{product.stockCount} left</Badge>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
