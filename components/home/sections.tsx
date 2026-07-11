import Link from "next/link";
import { Button } from "@/components/ui/button";
import { STORE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-green pattern-kente">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green to-brand-green-dark opacity-95" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-terracotta/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-sm text-brand-gold-light mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
            Now delivering across Columbus, Ohio
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
            {STORE.name}
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg">
            Shop Africa&apos;s finest groceries like Walmart — browse, order, and we deliver straight to your door in Columbus.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/shop" variant="gold" size="lg">
              Shop TXT Products
            </Button>
            <Button
              href="/delivery"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-brand-green"
            >
              Delivery Zones
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { value: "500+", label: "Products" },
              { value: "Same Day", label: "Delivery" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-xl sm:text-2xl font-bold text-brand-gold-light">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoryStrip() {
  const categories = [
    { slug: "grains-flours", icon: "🌾", label: "Grains" },
    { slug: "spices-seasonings", icon: "🌶️", label: "Spices" },
    { slug: "sauces-condiments", icon: "🫙", label: "Sauces" },
    { slug: "snacks", icon: "🥜", label: "Snacks" },
    { slug: "beverages", icon: "🥤", label: "Drinks" },
    { slug: "frozen", icon: "🧊", label: "Frozen" },
  ];

  return (
    <section className="py-8 border-b border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-brand-border bg-brand-cream/50 px-5 py-4 hover:border-brand-green hover:bg-brand-green/5 transition-all min-w-[88px]"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs font-medium text-brand-green">{cat.label}</span>
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
      icon: "🛒",
      title: "Walmart-Style Shopping",
      desc: "Browse aisles, add to cart, checkout — the familiar flow you know, stocked with African market essentials.",
    },
    {
      icon: "🚚",
      title: "Local Ohio Delivery",
      desc: "We bring it to you in Columbus. Same-day delivery in core zones, next-day across greater metro.",
    },
    {
      icon: "✨",
      title: "TXT Product Quality",
      desc: "Every item is a TXT Product — hand-selected, locally warehoused, and freshness-guaranteed.",
    },
    {
      icon: "🇺🇸",
      title: "US-Based, African Soul",
      desc: "Proudly operating in Columbus, Ohio. Authentic African flavors without leaving the country.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-semibold text-brand-green">
            Why Columbus shops Kintampo
          </h2>
          <p className="text-brand-muted mt-2 max-w-lg mx-auto">
            The African market experience you grew up with — reimagined for modern Ohio living.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="rounded-2xl border border-brand-border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">{prop.icon}</span>
              <h3 className="font-display text-lg font-semibold text-brand-green mt-4">
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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-terracotta to-brand-gold p-8 sm:p-12">
          <div className="absolute inset-0 pattern-kente opacity-30" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              Try our signature TXT Product today
            </h2>
            <p className="text-white/80 mt-3 text-sm sm:text-base">
              Columbus&apos;s #1 African market staple. Order now and taste the difference.
            </p>
            <Button
              href="/shop/txt-product"
              size="lg"
              className="mt-6 bg-white text-brand-green-dark hover:bg-brand-cream"
            >
              Shop TXT Product →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
