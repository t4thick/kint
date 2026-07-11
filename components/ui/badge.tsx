import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "green" | "red" | "outline";
  className?: string;
}

const variants = {
  default: "bg-brand-cream text-brand-green-dark",
  gold: "bg-brand-gold/20 text-brand-gold border border-brand-gold/30",
  green: "bg-brand-green/10 text-brand-green",
  red: "bg-red-50 text-red-700",
  outline: "border border-brand-border text-brand-muted",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
