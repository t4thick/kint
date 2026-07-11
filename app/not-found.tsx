import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-6xl mb-4">🛒</p>
      <h1 className="font-display text-3xl font-semibold text-brand-green">Page not found</h1>
      <p className="text-brand-muted mt-2 mb-8 max-w-md">
        This aisle doesn&apos;t exist. Head back to shop our TXT Products.
      </p>
      <Button href="/" size="lg">Back to Home</Button>
    </div>
  );
}
