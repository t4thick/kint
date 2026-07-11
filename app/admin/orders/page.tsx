"use client";

import { useState } from "react";
import { useAdmin } from "@/lib/admin-context";
import type { OrderStatus } from "@/lib/types";
import { formatDate, formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

const statusOptions: { value: OrderStatus; label: string }[] = [
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "preparing", label: "Preparing" },
  { value: "out-for-delivery", label: "Out for Delivery" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  confirmed: "bg-blue-100 text-blue-800",
  preparing: "bg-purple-100 text-purple-800",
  "out-for-delivery": "bg-indigo-100 text-indigo-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useAdmin();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-gray-900">Orders</h1>
          <p className="text-sm text-gray-500 mt-1">{orders.length} total orders</p>
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="h-10 rounded-xl border border-gray-200 px-4 text-sm"
        >
          <option value="all">All Statuses</option>
          {statusOptions.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        {filtered.map((order) => (
          <div key={order.id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === order.id ? null : order.id)}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
            >
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm">{order.orderNumber}</p>
                  <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium", statusColors[order.status])}>
                    {order.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {order.customerName} · {order.address}, {order.city} {order.zip}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm">{formatPrice(order.total)}</p>
                <p className="text-xs text-gray-500">{formatDate(order.createdAt)}</p>
              </div>
            </button>

            {expanded === order.id && (
              <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
                <div className="grid gap-2 sm:grid-cols-2 text-sm">
                  <p><span className="text-gray-500">Email:</span> {order.customerEmail}</p>
                  <p><span className="text-gray-500">Phone:</span> {order.customerPhone}</p>
                  {order.deliveryNotes && (
                    <p className="sm:col-span-2"><span className="text-gray-500">Notes:</span> {order.deliveryNotes}</p>
                  )}
                </div>

                <div className="rounded-xl bg-gray-50 p-4 space-y-2">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold text-sm">
                    <span>Total</span>
                    <span>{formatPrice(order.total)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <label className="text-sm text-gray-500">Update status:</label>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                    className="h-9 rounded-lg border border-gray-200 px-3 text-sm"
                  >
                    {statusOptions.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
