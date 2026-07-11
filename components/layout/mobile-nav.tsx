"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { href: "/shop", label: "Shop", icon: "M4 6h16M4 12h16M4 18h16" },
  { href: "/cart", label: "Cart", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
  { href: "/delivery", label: "Deliver", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m0 0a2 2 0 104 0m-4 0a2 2 0 114 0m6-6h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-2a2 2 0 104 0m-4 0a2 2 0 114 0" },
];

export function MobileNav() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  if (pathname.startsWith("/admin")) return null;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-brand-border bg-white/95 backdrop-blur-lg pb-safe">
      <div className="flex h-[62px] items-stretch">
        {tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "relative flex flex-1 flex-col items-center justify-center gap-0.5 transition-colors",
                active ? "text-brand-walmart" : "text-brand-muted"
              )}
            >
              {active && (
                <span className="absolute top-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-brand-walmart" />
              )}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.5 : 2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
              </svg>
              <span className="text-[10px] font-bold">{tab.label}</span>
              {tab.href === "/cart" && itemCount > 0 && (
                <span className="absolute right-[calc(50%-20px)] top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-terracotta px-1 text-[9px] font-black text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
