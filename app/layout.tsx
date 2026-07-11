import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import { AdminProvider } from "@/lib/admin-context";
import { CartProvider } from "@/lib/cart-context";
import { STORE } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${STORE.name} | African Grocery Delivery in Columbus, OH`,
    template: `%s | ${STORE.name}`,
  },
  description:
    "Shop Africa's finest groceries at Kintampo African Market. Walmart-style shopping with local delivery across Columbus, Ohio. TXT Products and authentic African market essentials.",
  keywords: [
    "African market",
    "Columbus Ohio",
    "grocery delivery",
    "Kintampo",
    "TXT Product",
    "African food",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <CartProvider>
          <AdminProvider>
            <AppShell>{children}</AppShell>
          </AdminProvider>
        </CartProvider>
      </body>
    </html>
  );
}
