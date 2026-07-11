"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  size?: "md" | "lg";
}

export function SearchBar({
  className,
  placeholder = "Search TXT Products, spices, snacks...",
  size = "md",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full", className)}>
      <div
        className={cn(
          "flex items-center rounded-full border-2 border-brand-border bg-white shadow-sm transition-all focus-within:border-brand-walmart focus-within:shadow-md",
          size === "lg" ? "h-14 pl-5 pr-2" : "h-11 pl-4 pr-1.5"
        )}
      >
        <svg
          className={cn("shrink-0 text-brand-muted", size === "lg" ? "h-5 w-5" : "h-4 w-4")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "flex-1 bg-transparent outline-none text-foreground placeholder:text-brand-muted/70",
            size === "lg" ? "px-4 text-base" : "px-3 text-sm"
          )}
        />
        <button
          type="submit"
          className={cn(
            "shrink-0 rounded-full bg-brand-walmart font-semibold text-white transition-transform active:scale-95 hover:bg-[#005bb5]",
            size === "lg" ? "h-10 px-6 text-sm" : "h-8 px-4 text-xs"
          )}
        >
          Search
        </button>
      </div>
    </form>
  );
}
