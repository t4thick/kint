"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAdmin } from "@/lib/admin-context";
import { STORE } from "@/lib/constants";

export default function AdminLoginPage() {
  const { login, isAuthenticated } = useAdmin();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) {
    router.replace("/admin");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(email, password);
    if (ok) {
      router.push("/admin");
    } else {
      setError("Invalid credentials. Use the demo login below.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-green pattern-kente px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-green-dark opacity-95" />
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-brand-green-dark font-display text-2xl font-bold mb-4">
            K
          </div>
          <h1 className="font-display text-2xl font-semibold text-white">{STORE.name}</h1>
          <p className="text-white/60 text-sm mt-1">Admin Dashboard</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-2xl space-y-5"
        >
          <Input
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@kintampomarket.com"
          />
          <Input
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" size="lg" fullWidth>
            Sign In
          </Button>

          <div className="rounded-xl bg-brand-cream p-4 text-xs text-brand-muted space-y-1">
            <p className="font-medium text-brand-green">Demo Credentials</p>
            <p>Email: admin@kintampomarket.com</p>
            <p>Password: kintampo2026</p>
          </div>
        </form>
      </div>
    </div>
  );
}
