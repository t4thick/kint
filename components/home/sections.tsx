import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "@/components/ui/search-bar";
import { Button } from "@/components/ui/button";
import { STORE } from "@/lib/constants";

const HERO_IMG =
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1600&q=80";

export function DealsTicker() {
  const deals = [
    "🔥 TXT Product — $12.99 this week",
    "🚚 FREE delivery on orders $75+",
    "🌶️ Jollof Seasoning 2 for $9",
    "⭐ 4.9 rating from Columbus families",
    "🏪 Pickup at Cleveland Ave",
    "📦 Same-day delivery in 43201",
  ];
  const items = [...deals, ...deals];

  return (
    <div className="overflow-hidden bg-brand-gold py-2.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((deal, i) => (
          <span key={i} className="mx-6 text-sm font-bold text-brand-green-dark">
            {deal}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden sm:min-h-[580px]">
      <Image
        src={HERO_IMG}
        alt="African market spices and produce"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/95 via-brand-green/80 to-brand-green-dark/40" />
      <div className="absolute inset-0 pattern-kente opacity-20" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl animate-slide-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
            Columbus, Ohio · African Market · US-Based
          </div>

          <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {STORE.name}
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Shop like Walmart. Eat like home. Premium African groceries delivered across Columbus — every item is a TXT Product.
          </p>

          <div className="mt-6 max-w-lg">
            <SearchBar size="lg" placeholder="Search spices, grains, snacks..." />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/shop" variant="gold" size="lg" className="shadow-[var(--shadow-float)]">
              Shop Now
            </Button>
            <Button
              href="/shop/txt-product"
              size="lg"
              className="border-2 border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-brand-green"
            >
              TXT Product →
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            { value: "500+", label: "Products in stock" },
            { value: "Same Day", label: "Columbus delivery" },
            { value: "4.9★", label: "Customer rating" },
            { value: "$75+", label: "Free delivery" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
            >
              <p className="font-display text-2xl font-bold text-brand-gold-light">{stat.value}</p>
              <p className="text-[11px] font-medium text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuickActions() {
  const actions = [
    { href: "/shop?category=grains-flours", icon: "🌾", label: "Grains", color: "from-amber-100 to-amber-50" },
    { href: "/shop?category=spices-seasonings", icon: "🌶️", label: "Spices", color: "from-red-100 to-orange-50" },
    { href: "/shop?category=snacks", icon: "🥜", label: "Snacks", color: "from-yellow-100 to-amber-50" },
    { href: "/delivery", icon: "🚚", label: "Delivery", color: "from-green-100 to-emerald-50" },
  ];

  return (
    <section className="-mt-6 relative z-10 px-4 sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2 sm:gap-4">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className={`flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-b ${action.color} p-4 shadow-[var(--shadow-soft)] ring-1 ring-brand-border/50 transition-transform active:scale-95 sm:p-5`}
          >
            <span className="text-2xl sm:text-3xl">{action.icon}</span>
            <span className="text-[11px] font-bold text-brand-green sm:text-xs">{action.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CategoryStrip() {
  const categories = [
    { slug: "grains-flours", icon: "🌾", label: "Grains & Flours", count: 4 },
    { slug: "spices-seasonings", icon: "🌶️", label: "Spices", count: 2 },
    { slug: "sauces-condiments", icon: "🫙", label: "Sauces", count: 2 },
    { slug: "snacks", icon: "🥜", label: "Snacks", count: 2 },
    { slug: "beverages", icon: "🥤", label: "Drinks", count: 1 },
    { slug: "frozen", icon: "🧊", label: "Frozen", count: 1 },
  ];

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-brand-green sm:text-3xl">Shop by Aisle</h2>
        <p className="mt-1 text-sm text-brand-muted">Browse the market — just like Walmart</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-[var(--shadow-soft)] ring-1 ring-brand-border/60 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <span className="text-3xl">{cat.icon}</span>
              <p className="mt-3 font-bold text-sm text-foreground group-hover:text-brand-walmart">{cat.label}</p>
              <p className="text-[11px] text-brand-muted">{cat.count} items</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromoBanners() {
  return (
    <section className="pb-10 sm:pb-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
        <Link
          href="/shop/txt-product"
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-terracotta to-brand-gold p-8 shadow-[var(--shadow-card)] sm:p-10"
        >
          <div className="absolute inset-0 pattern-kente opacity-20" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-widest text-white/80">Signature Item</p>
            <h3 className="mt-2 font-display text-3xl font-bold text-white">TXT Product</h3>
            <p className="mt-2 max-w-xs text-sm text-white/85">Columbus&apos;s #1 African market staple. Starting at $12.99.</p>
            <span className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-brand-terracotta transition-transform group-hover:scale-105">
              Shop now →
            </span>
          </div>
        </Link>
        <Link
          href="/delivery"
          className="group relative overflow-hidden rounded-3xl bg-brand-green p-8 shadow-[var(--shadow-card)] sm:p-10"
        >
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-gold/20 blur-2xl" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-widest text-brand-gold-light">Local Delivery</p>
            <h3 className="mt-2 font-display text-3xl font-bold text-white">We bring it to Ohio</h3>
            <p className="mt-2 max-w-xs text-sm text-white/80">Same-day in Columbus core. Free delivery on $75+.</p>
            <span className="mt-4 inline-flex rounded-full bg-brand-gold px-5 py-2 text-sm font-bold text-brand-green-dark transition-transform group-hover:scale-105">
              Delivery zones →
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export function SocialProof() {
  const reviews = [
    { name: "Ama O.", text: "Finally a real African market in Columbus. TXT Product is legit.", stars: 5 },
    { name: "Kwame M.", text: "Delivery was same day. Jollof seasoning tastes like home.", stars: 5 },
    { name: "Fatou D.", text: "Better than driving to multiple stores. Kintampo is the one.", stars: 5 },
  ];

  return (
    <section className="bg-brand-green-dark py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Columbus trusts Kintampo
          </h2>
          <p className="mt-2 text-white/60">Real reviews from real Ohio shoppers</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex gap-0.5 text-brand-gold">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/85">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-xs font-bold text-brand-gold-light">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueProps() {
  const props = [
    { icon: "🛒", title: "Walmart-Style Flow", desc: "Search, browse aisles, cart, checkout — familiar and fast." },
    { icon: "🚚", title: "Ohio Delivery", desc: "We warehouse in Columbus and deliver across the metro." },
    { icon: "✨", title: "TXT Product Standard", desc: "Every item quality-checked. No compromises." },
    { icon: "🇺🇸", title: "US-Based Market", desc: "African soul, Ohio address. Not overseas — right here." },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="rounded-2xl bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-brand-border/50"
            >
              <span className="text-3xl">{prop.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-brand-green">{prop.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-walmart to-brand-green p-10 text-center shadow-[var(--shadow-float)] sm:p-14">
          <div className="absolute inset-0 pattern-kente opacity-10" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to shop Kintampo?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Join hundreds of Columbus families getting African market groceries delivered.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/shop" size="lg" className="bg-white text-brand-walmart hover:bg-brand-cream">
                Browse All Products
              </Button>
              <Button href="/shop/txt-product" variant="gold" size="lg">
                Get TXT Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
