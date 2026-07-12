import type { FC } from "react";
import type { ProductCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function IconTruck({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h8M3 9h11v8H3V9zm11 0h3l3 4v4h-6V9z" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function IconCart({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

export function IconStore({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l1-5h16l1 5M5 9v10h14V9M9 19v-6h6v6" />
    </svg>
  );
}

export function IconBag({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
    </svg>
  );
}

export function IconSparkles({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.8 3.8 6.2 3.8 9s-1.3 6.2-3.8 9M12 3c-2.5 2.8-3.8 6.2-3.8 9s1.3 6.2 3.8 9" />
    </svg>
  );
}

function IconGrains({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconSpices({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c1.5 3 1.5 5 0 8-1.5-3-1.5-5 0-8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14c-2 2-3 4-3 6h14c0-2-1-4-3-6" />
    </svg>
  );
}

function IconSauce({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="8" y="4" width="8" height="16" rx="2" />
      <path strokeLinecap="round" d="M10 8h4" />
    </svg>
  );
}

function IconDrinks({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8l-2 16H10L8 4z" />
      <path strokeLinecap="round" d="M7 8h10" />
    </svg>
  );
}

function IconSnacks({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="5" y="7" width="14" height="10" rx="2" />
      <path strokeLinecap="round" d="M9 7V5a3 3 0 016 0v2" />
    </svg>
  );
}

function IconProduce({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-3-7-6-7-10a7 7 0 1114 0c0 4-3 7-7 10z" />
      <path strokeLinecap="round" d="M12 7v4" />
    </svg>
  );
}

function IconFrozen({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

function IconHousehold({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
    </svg>
  );
}

const CATEGORY_ICON_MAP: Record<ProductCategory, FC<IconProps>> = {
  "grains-flours": IconGrains,
  "spices-seasonings": IconSpices,
  "sauces-condiments": IconSauce,
  beverages: IconDrinks,
  snacks: IconSnacks,
  "fresh-produce": IconProduce,
  frozen: IconFrozen,
  household: IconHousehold,
};

interface CategoryIconProps extends IconProps {
  category: ProductCategory;
}

export function CategoryIcon({ category, className }: CategoryIconProps) {
  const Icon = CATEGORY_ICON_MAP[category];
  return <Icon className={className} />;
}
