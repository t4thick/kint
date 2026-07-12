import { Button } from "@/components/ui/button";
import { IconTruck } from "@/components/ui/icons";
import { DELIVERY_ZONES, FREE_DELIVERY_THRESHOLD, STORE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-semibold text-foreground">Delivery</h1>
        <p className="text-brand-muted mt-3 text-lg">
          We bring African market groceries straight to your door in {STORE.deliveryRadius}.
        </p>
      </div>

      <div className="rounded-2xl bg-brand-green text-white p-8 mb-10">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <IconTruck className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold">Free Delivery on Orders {formatPrice(FREE_DELIVERY_THRESHOLD)}+</h2>
            <p className="text-white/70 text-sm mt-1">Across all Columbus delivery zones</p>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Delivery Zones</h2>
        <div className="space-y-4">
          {DELIVERY_ZONES.map((zone) => (
            <div
              key={zone.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-brand-surface shadow-card p-6"
            >
              <div>
                <h3 className="font-semibold text-foreground">{zone.name}</h3>
                <p className="text-sm text-brand-muted mt-1">
                  ZIP prefixes: {zone.zipPrefixes.join(", ")}
                  {zone.zipPrefixes.length > 4 && "..."}
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="font-semibold text-foreground">{formatPrice(zone.fee)}</p>
                  <p className="text-brand-muted text-xs">Delivery fee</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-brand-green">{zone.eta}</p>
                  <p className="text-brand-muted text-xs">Estimated</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-brand-cream/80 p-8 space-y-4">
        <h2 className="font-display text-xl font-semibold text-foreground">How It Works</h2>
        <ol className="space-y-4">
          {[
            "Browse TXT Products and add to your cart — just like Walmart.",
            "Checkout with your Columbus delivery address.",
            "We pick, pack, and deliver from our Cleveland Ave warehouse.",
            "Enjoy authentic African market groceries at your doorstep.",
          ].map((step, i) => (
            <li key={i} className="flex gap-4 text-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green text-white text-xs font-bold">
                {i + 1}
              </span>
              <span className="text-brand-muted pt-1">{step}</span>
            </li>
          ))}
        </ol>
        <Button href="/shop" size="lg" className="mt-4">
          Start Shopping
        </Button>
      </section>
    </div>
  );
}
