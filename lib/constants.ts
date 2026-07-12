import type { ProductCategory } from "./types";

export const STORE = {
  name: "Kintampo African Market",
  shortName: "Kintampo",
  tagline: "Africa's finest groceries, delivered across Columbus",
  location: "Columbus, Ohio",
  address: "2847 Cleveland Ave, Columbus, OH 43211",
  phone: "(614) 555-0198",
  email: "hello@kintampomarket.com",
  deliveryRadius: "Greater Columbus Metro",
  hours: "Mon–Sat 8am–9pm · Sun 9am–7pm",
} as const;

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  "grains-flours": "Grains & Flours",
  "spices-seasonings": "Spices & Seasonings",
  "sauces-condiments": "Sauces & Condiments",
  beverages: "Beverages",
  snacks: "Snacks",
  "fresh-produce": "Fresh Produce",
  frozen: "Frozen",
  household: "Household",
};

export const DELIVERY_ZONES = [
  {
    id: "columbus-core",
    name: "Columbus Core",
    zipPrefixes: ["43201", "43202", "43203", "43204", "43205", "43206"],
    fee: 4.99,
    eta: "Same day",
  },
  {
    id: "greater-columbus",
    name: "Greater Columbus",
    zipPrefixes: ["43207", "43209", "43210", "43211", "43212", "43213", "43214", "43215"],
    fee: 6.99,
    eta: "Next day",
  },
  {
    id: "metro-ohio",
    name: "Metro Ohio",
    zipPrefixes: ["430", "431"],
    fee: 9.99,
    eta: "1–2 days",
  },
] as const;

export const TAX_RATE = 0.0775;
export const FREE_DELIVERY_THRESHOLD = 75;
