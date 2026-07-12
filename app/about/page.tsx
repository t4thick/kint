import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CategoryIcon } from "@/components/ui/icons";
import { CATEGORY_LABELS, STORE } from "@/lib/constants";
import type { ProductCategory } from "@/lib/types";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="text-center mb-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-white font-display text-3xl font-bold mb-6">
          K
        </div>
        <h1 className="font-display text-4xl font-semibold text-foreground">
          About {STORE.name}
        </h1>
        <p className="text-brand-muted mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Columbus, Ohio&apos;s premier African market — bringing the flavors of home to your doorstep.
        </p>
      </div>

      <div className="space-y-8 text-brand-muted leading-relaxed">
        <section className="rounded-2xl bg-brand-surface shadow-card p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Our Story</h2>
          <p>
            Kintampo African Market was born from a simple idea: Columbus families shouldn&apos;t have to
            drive across town or wait weeks for the African groceries they love. Named after the vibrant
            Kintampo tradition of community and trade, we built a modern, Walmart-style shopping experience
            rooted in authentic African market culture — right here in Ohio.
          </p>
          <p className="mt-4">
            We&apos;re not based in Ghana or anywhere overseas. We&apos;re a US business, headquartered in
            Columbus, serving the African diaspora and anyone who appreciates bold, authentic flavors.
            Every product on our shelves is a TXT Product — our guarantee of quality, freshness, and care.
          </p>
        </section>

        <section className="rounded-2xl bg-brand-surface shadow-card p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">What We Offer</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
              <Link
                key={slug}
                href={`/shop?category=${slug}`}
                className="flex items-center gap-3 rounded-xl bg-brand-cream/60 p-4 hover:bg-brand-cream transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                  <CategoryIcon category={slug as ProductCategory} className="h-5 w-5" />
                </div>
                <span className="font-medium text-foreground">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-brand-green text-white p-8 text-center">
          <h2 className="font-display text-2xl font-semibold mb-3">Visit Us in Columbus</h2>
          <p className="text-white/70">{STORE.address}</p>
          <p className="text-white/70 mt-1">{STORE.hours}</p>
          <p className="text-white/70 mt-1">{STORE.phone}</p>
          <Button
            href="/shop"
            size="lg"
            className="mt-6 bg-white text-brand-green hover:bg-brand-cream shadow-none"
          >
            Shop Now
          </Button>
        </section>
      </div>
    </div>
  );
}
