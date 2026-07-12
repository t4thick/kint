"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconTruck } from "@/components/ui/icons";
import { useCart } from "@/lib/cart-context";
import { STORE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/categories", label: "Categories" },
  { href: "/delivery", label: "Delivery" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return null;

  return (
    <>
      <div className="bg-brand-cream border-b border-brand-border text-center text-xs py-2 px-4 text-brand-muted">
        <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
          <IconTruck className="h-3.5 w-3.5 text-brand-green" />
          Free delivery
        </span>
        {" "}on orders $75+ across Columbus, Ohio
      </div>
      <header className="sticky top-0 z-50 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border shadow-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green text-white font-display text-lg font-bold">
              K
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-base font-semibold text-foreground leading-tight">
                {STORE.shortName}
              </p>
              <p className="text-[10px] text-brand-muted tracking-wide uppercase">
                African Market
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-brand-green bg-brand-green/8"
                    : "text-brand-muted hover:text-foreground hover:bg-brand-cream"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/shop?search="
              className="flex h-10 w-10 items-center justify-center rounded-xl text-brand-muted hover:bg-brand-cream hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-brand-muted hover:bg-brand-cream hover:text-foreground transition-colors"
              aria-label="Cart"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-white">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl text-brand-muted hover:bg-brand-cream"
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-brand-border bg-brand-surface px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium",
                  pathname === link.href
                    ? "text-brand-green bg-brand-green/8"
                    : "text-foreground hover:bg-brand-cream"
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
