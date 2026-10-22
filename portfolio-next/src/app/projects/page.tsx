"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAdmin } from "@/context/AdminContext";
import { useLanguage } from "@/components/LanguageProvider";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProjectsPage() {
  const { researchInterests } = useAdmin();
  const { language, toggleLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Extract all unique tags
  const allTags = ["All", ...Array.from(new Set(researchInterests.flatMap(item => item.tags || [])))];

  const filteredProjects = researchInterests.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || (item.tags && item.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col">
      {/* Navbar */}
      <header className="border-b border-outline-variant/30 bg-surface-low/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link
            href="/"
            className="font-[var(--font-display)] text-xl font-bold text-primary tracking-tighter flex items-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Waqas Ali Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full hover:bg-surface-high transition-colors text-xs font-bold"
            >
              {language === 'en' ? 'اردو' : 'EN'}
            </button>
            <ThemeToggle />
            <Link
              href="/admin"
              className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-bold hover:bg-primary-container transition-all"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 text-secondary text-sm font-medium mb-4 bg-secondary/5">
            Research & Projects Showcase
          </span>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-on-surface mb-4">
            Explore All Projects & Research
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base">
            Deep dive into Wireless Sensor Networks, AI-based Cyber Defense, Federated Learning, and Industrial IoT architectures.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-3 text-outline">search</span>
            <input
              type="text"
              placeholder="Search research or projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-surface-highest/50 border border-outline-variant/30 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedTag === tag
                    ? "bg-primary text-on-primary shadow-md shadow-primary/20"
                    : "bg-surface-highest/50 text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-6 pb-20 w-full">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-outline mb-3">folder_off</span>
            <h3 className="font-bold text-lg text-on-surface">No projects found</h3>
            <p className="text-sm text-on-surface-variant mt-1">Try adjusting your search query or filter tag.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.title || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">
                      {item.icon || "memory"}
                    </span>
                    {item.badge && (
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {item.features && item.features.length > 0 && (
                    <ul className="space-y-1.5 text-xs text-on-surface-variant mb-6">
                      {item.features.map((feat: string) => (
                        <li key={feat} className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-outline-variant/20">
                    {item.tags.map((tag: string) => (
                      <span key={tag} className="px-2.5 py-1 bg-surface-highest rounded text-xs font-semibold text-on-surface-variant">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-outline-variant/30 text-center text-xs text-on-surface-variant">
        <p>© {new Date().getFullYear()} Waqas Ali. All rights reserved.</p>
      </footer>
    </div>
  );
}
