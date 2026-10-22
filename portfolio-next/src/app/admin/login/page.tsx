"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/context/AdminContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAdmin();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      router.push("/admin");
    } else {
      setError("Invalid password. Default password is 'admin123'.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px] animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 rounded-2xl max-w-md w-full border border-outline-variant/30 relative z-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-5xl text-primary mb-3 inline-block">
            admin_panel_settings
          </span>
          <h1 className="font-[var(--font-display)] text-2xl font-bold text-on-surface">
            Admin Control Panel
          </h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Authenticate to manage portfolio & projects
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (default: admin123)"
              className="w-full px-4 py-3 bg-surface-highest/50 border border-outline-variant/30 rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-colors text-sm"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-on-primary font-bold rounded-lg hover:bg-primary-container transition-all shadow-lg text-sm"
          >
            Access Control Panel
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Return to Portfolio Landing Page
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
