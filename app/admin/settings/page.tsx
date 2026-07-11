"use client";

import { STORE } from "@/lib/constants";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 pb-20 md:pb-0 max-w-2xl">
      <div>
        <h1 className="font-display text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Store configuration</p>
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
        <h2 className="font-semibold">Store Information</h2>
        <div className="grid gap-3 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Store Name</span>
            <span className="font-medium">{STORE.name}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Location</span>
            <span className="font-medium">{STORE.location}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Address</span>
            <span className="font-medium">{STORE.address}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Phone</span>
            <span className="font-medium">{STORE.phone}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Hours</span>
            <span className="font-medium">{STORE.hours}</span>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 space-y-3">
        <h2 className="font-semibold text-amber-900">Coming Soon</h2>
        <ul className="text-sm text-amber-800 space-y-2">
          <li>• Database integration (PostgreSQL / Supabase)</li>
          <li>• Payment processing (Stripe)</li>
          <li>• Real-time inventory sync</li>
          <li>• Email order notifications</li>
          <li>• Customer accounts & order history</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="font-semibold mb-3">Admin Access</h2>
        <p className="text-sm text-gray-500">
          Demo login: admin@kintampomarket.com / kintampo2026
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Replace with proper authentication when deploying to production.
        </p>
      </section>
    </div>
  );
}
