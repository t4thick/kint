import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "gold" | "green" | "red" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-brand-cream text-foreground",
  gold: "bg-brand-gold/15 text-brand-gold",
  green: "bg-brand-green/10 text-brand-green",
  red: "bg-red-50 text-red-700",
  outline: "border border-brand-border text-brand-muted bg-transparent",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
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
