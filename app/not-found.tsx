import { Button } from "@/components/ui/button";
import { IconCart } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-cream text-brand-muted mb-4">
        <IconCart className="h-7 w-7" />
      </div>
      <h1 className="font-display text-3xl font-semibold text-foreground">Page not found</h1>
      <p className="text-brand-muted mt-2 mb-8 max-w-md">
        This aisle doesn&apos;t exist. Head back to shop our TXT Products.
      </p>
      <Button href="/" size="lg">Back to Home</Button>
    </div>
  );
}
