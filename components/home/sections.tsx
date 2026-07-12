import Link from "next/link";
import { CategoryIcon, IconBag, IconGlobe, IconSparkles, IconTruck } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { STORE } from "@/lib/constants";
import type { ProductCategory } from "@/lib/types";

export function Hero() {
  return (
    <section className="bg-brand-green">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 mb-6">
            <IconTruck className="h-4 w-4" />
            Now delivering across Columbus, Ohio
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
            {STORE.name}
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-white/75 leading-relaxed max-w-lg">
            Shop Africa&apos;s finest groceries — browse, order, and we deliver straight to your door in Columbus.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              href="/shop"
              size="lg"
              className="bg-white text-brand-green hover:bg-brand-cream shadow-none"
            >
              Shop TXT Products
            </Button>
            <Button
              href="/delivery"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              Delivery Zones
            </Button>
          </div>

          <div className="mt-10 flex gap-8 max-w-md">
            {[
              { value: "500+", label: "Products" },
              { value: "Same Day", label: "Delivery" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl sm:text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/55 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoryStrip() {
  const categories: { slug: ProductCategory; label: string }[] = [
    { slug: "grains-flours", label: "Grains" },
    { slug: "spices-seasonings", label: "Spices" },
    { slug: "sauces-condiments", label: "Sauces" },
    { slug: "snacks", label: "Snacks" },
    { slug: "beverages", label: "Drinks" },
    { slug: "frozen", label: "Frozen" },
  ];

  return (
    <section className="py-6 border-b border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className="flex shrink-0 flex-col items-center gap-2.5 rounded-xl px-5 py-3.5 hover:bg-brand-cream transition-colors min-w-[88px]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/8 text-brand-green">
                <CategoryIcon category={cat.slug} className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-foreground">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueProps() {
  const props = [
    {
      icon: IconBag,
      title: "Walmart-Style Shopping",
      desc: "Browse aisles, add to cart, checkout — the familiar flow you know, stocked with African market essentials.",
    },
    {
      icon: IconTruck,
      title: "Local Ohio Delivery",
      desc: "We bring it to you in Columbus. Same-day delivery in core zones, next-day across greater metro.",
    },
    {
      icon: IconSparkles,
      title: "TXT Product Quality",
      desc: "Every item is a TXT Product — hand-selected, locally warehoused, and freshness-guaranteed.",
    },
    {
      icon: IconGlobe,
      title: "US-Based, African Soul",
      desc: "Proudly operating in Columbus, Ohio. Authentic African flavors without leaving the country.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Why Columbus shops Kintampo
          </h2>
          <p className="text-brand-muted mt-2 max-w-lg mx-auto">
            The African market experience you grew up with — reimagined for modern Ohio living.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="rounded-2xl bg-brand-cream/60 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <prop.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mt-4">
                {prop.title}
              </h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl bg-brand-green p-8 sm:p-12">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              Try our signature TXT Product today
            </h2>
            <p className="text-white/70 mt-3 text-sm sm:text-base">
              Columbus&apos;s #1 African market staple. Order now and taste the difference.
            </p>
            <Button
              href="/shop/txt-product"
              size="lg"
              className="mt-6 bg-white text-brand-green hover:bg-brand-cream shadow-none"
            >
              Shop TXT Product →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
