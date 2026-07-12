import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { STORE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-[85vh] flex flex-col justify-end overflow-hidden bg-[#0d0c0a]">
      <Image
        src="/hero-market.svg"
        alt=""
        fill
        priority
        className="object-cover object-center scale-105"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0a]/60 via-transparent to-transparent" />

      <div className="absolute top-0 left-0 right-0 z-10 px-5 pt-5 md:pt-8 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2.5 md:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white font-display text-lg font-bold border border-white/15">
            K
          </div>
        </Link>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-32 md:pb-20 pt-24 sm:px-8">
        <div className="max-w-lg">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-4">
            {STORE.location}
          </p>

          <h1 className="font-display text-[2.75rem] sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
            Taste of Home
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/65 leading-relaxed max-w-md">
            Africa&apos;s finest groceries, hand-selected in Columbus and delivered to your door — the market you grew up with, reimagined.
          </p>

          <div className="mt-8">
            <Button
              href="/shop"
              size="lg"
              className="rounded-full border border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 shadow-none"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EditorialFeature() {
  return (
    <section className="bg-[#0d0c0a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 mb-3">
            Featured
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            The TXT Product
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Our signature staple — premium African market essentials sourced for quality,
            freshness, and authentic flavor. Locally stocked on Cleveland Ave and delivered
            across Columbus.
          </p>
          <Button
            href="/shop/txt-product"
            size="lg"
            className="mt-8 rounded-full border border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 shadow-none"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CategoryStrip() {
  const categories = [
    { slug: "grains-flours", label: "Grains" },
    { slug: "spices-seasonings", label: "Spices" },
    { slug: "sauces-condiments", label: "Sauces" },
    { slug: "snacks", label: "Snacks" },
    { slug: "beverages", label: "Drinks" },
    { slug: "frozen", label: "Frozen" },
  ];

  return (
    <section className="py-5 bg-background border-b border-brand-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className="shrink-0 rounded-full border border-brand-border px-4 py-2 text-sm font-medium text-foreground hover:border-foreground/30 hover:bg-brand-cream transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueProps() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-muted mb-3">
              Why Kintampo
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
              Your neighborhood African market, delivered
            </h2>
          </div>
          <div className="space-y-6 text-brand-muted leading-relaxed">
            <p>
              Browse like Walmart, checkout in minutes, and we bring authentic African
              groceries straight from our Columbus warehouse to your door.
            </p>
            <p>
              Same-day delivery in core zones. Free delivery on orders over $75.
              Every item is a TXT Product — our guarantee of quality and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0d0c0a]">
      <div className="absolute inset-0 opacity-30">
        <Image src="/hero-market.svg" alt="" fill className="object-cover" aria-hidden />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0a] via-[#0d0c0a]/80 to-[#0d0c0a]/60" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-lg">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-tight">
            Ready to shop?
          </h2>
          <p className="text-white/55 mt-3 text-sm sm:text-base leading-relaxed">
            500+ TXT Products waiting at our Cleveland Ave warehouse. Order now for Columbus delivery.
          </p>
          <Button
            href="/shop"
            size="lg"
            className="mt-8 rounded-full border border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 shadow-none"
          >
            Start Shopping
          </Button>
        </div>
      </div>
    </section>
  );
}
