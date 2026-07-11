"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SearchBar } from "@/components/ui/search-bar";
import { useCart } from "@/lib/cart-context";
import { STORE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/categories", label: "Aisles" },
  { href: "/delivery", label: "Delivery" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <div className="kente-stripe" />
      <div className="bg-brand-green-dark text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] sm:text-xs">
          <p className="truncate">
            <span className="font-bold text-brand-gold-light">FREE delivery</span> on $75+ · Columbus, OH
          </p>
          <p className="hidden sm:block text-white/60">{STORE.hours}</p>
          <p className="font-medium text-brand-gold-light/90">📍 {STORE.location}</p>
        </div>
      </div>

      <header className="sticky top-0 z-50 glass border-b border-brand-border/80 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-[60px] items-center gap-3 sm:gap-5">
            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand-green shadow-md">
                <span className="font-display text-lg font-bold text-brand-gold">K</span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-gold" />
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-[15px] font-bold leading-none text-brand-green">
                  Kintampo
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  African Market
                </p>
              </div>
            </Link>

            <div className="hidden flex-1 md:block max-w-xl">
              <SearchBar />
            </div>

            <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "bg-brand-green text-white"
                      : "text-brand-muted hover:bg-brand-cream hover:text-brand-green"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/cart"
              className="relative flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-xl bg-brand-green px-3 text-white shadow-md transition-transform active:scale-95 hover:bg-brand-green-light"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden text-sm font-bold sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-gold px-1 text-[10px] font-black text-brand-green-dark">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border lg:hidden"
              aria-label="Menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="pb-3 md:hidden">
            <SearchBar size="md" />
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-brand-border bg-white px-4 py-3 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-semibold",
                  pathname === link.href ? "bg-brand-green text-white" : "hover:bg-brand-cream"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
