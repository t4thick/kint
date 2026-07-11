import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CATEGORY_ICONS, CATEGORY_LABELS, STORE } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="text-center mb-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-white font-display text-3xl font-bold mb-6">
          K
        </div>
        <h1 className="font-display text-4xl font-semibold text-brand-green">
          About {STORE.name}
        </h1>
        <p className="text-brand-muted mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Columbus, Ohio&apos;s premier African market — bringing the flavors of home to your doorstep.
        </p>
      </div>

      <div className="prose-custom space-y-8 text-brand-muted leading-relaxed">
        <section className="rounded-2xl border border-brand-border bg-white p-8">
          <h2 className="font-display text-2xl font-semibold text-brand-green mb-4">Our Story</h2>
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

        <section className="rounded-2xl border border-brand-border bg-white p-8">
          <h2 className="font-display text-2xl font-semibold text-brand-green mb-4">What We Offer</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
              <Link
                key={slug}
                href={`/shop?category=${slug}`}
                className="flex items-center gap-3 rounded-xl border border-brand-border p-4 hover:border-brand-green hover:bg-brand-green/5 transition-all"
              >
                <span className="text-2xl">{CATEGORY_ICONS[slug as keyof typeof CATEGORY_ICONS]}</span>
                <span className="font-medium text-foreground">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-brand-green text-white p-8 text-center">
          <h2 className="font-display text-2xl font-semibold mb-3">Visit Us in Columbus</h2>
          <p className="text-white/80">{STORE.address}</p>
          <p className="text-white/80 mt-1">{STORE.hours}</p>
          <p className="text-white/80 mt-1">{STORE.phone}</p>
          <Button href="/shop" variant="gold" size="lg" className="mt-6">
            Shop Now
          </Button>
        </section>
      </div>
    </div>
  );
}
