"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const themes = [
  { key: "light", icon: "light_mode", label: "Light" },
  { key: "dark", icon: "dark_mode", label: "Dark" },
  { key: "system", icon: "desktop_windows", label: "System" },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentIcon =
    themes.find((t) => t.key === theme)?.icon || "dark_mode";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-high transition-all"
        aria-label="Toggle theme"
        title={`Theme: ${theme}`}
      >
        <span className="material-symbols-outlined text-xl">{currentIcon}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 glass-card rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 p-1.5 min-w-[140px] shadow-xl z-50"
          >
            {themes.map((t) => (
              <button
                key={t.key}
                onClick={() => {
                  setTheme(t.key);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  theme === t.key
                    ? "text-primary bg-primary/10"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-high"
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {t.icon}
                </span>
                {t.label}
                {theme === t.key && (
                  <span className="material-symbols-outlined text-primary text-sm ml-auto">
                    check
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
