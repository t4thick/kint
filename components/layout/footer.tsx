"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STORE } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <footer className="mt-auto bg-brand-green-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold text-brand-green-dark font-display text-xl font-bold">
                K
              </div>
              <div>
                <p className="font-display font-semibold">{STORE.name}</p>
                <p className="text-xs text-white/60">{STORE.location}</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your neighborhood African market in Columbus. Fresh groceries, authentic flavors, delivered to your door.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-brand-gold-light">Shop</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=grains-flours" className="hover:text-white transition-colors">Grains & Flours</Link></li>
              <li><Link href="/shop?category=spices-seasonings" className="hover:text-white transition-colors">Spices</Link></li>
              <li><Link href="/shop?category=snacks" className="hover:text-white transition-colors">Snacks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-brand-gold-light">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/delivery" className="hover:text-white transition-colors">Delivery Info</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-brand-gold-light">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{STORE.address}</li>
              <li>{STORE.phone}</li>
              <li>{STORE.email}</li>
              <li className="text-brand-gold-light/80">{STORE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {STORE.name}. All rights reserved.</p>
          <p>Proudly serving Columbus, Ohio 🇺🇸</p>
        </div>
      </div>
    </footer>
  );
}
