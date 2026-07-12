import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-green text-white hover:bg-brand-green-light active:bg-brand-green-dark",
  secondary:
    "bg-foreground text-white hover:bg-foreground/90",
  outline:
    "border border-brand-border text-foreground hover:border-brand-green hover:text-brand-green bg-transparent",
  ghost: "text-brand-muted hover:text-foreground hover:bg-brand-cream",
  gold: "bg-brand-gold text-white hover:bg-brand-gold-light font-semibold",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-6 text-sm rounded-xl",
  lg: "h-13 px-8 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
