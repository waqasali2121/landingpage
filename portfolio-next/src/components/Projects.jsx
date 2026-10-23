"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { researchInterests as enResearchInterests, uiLabels as enUiLabels } from "@/data/portfolioData";
import { urduData } from "@/data/urduData";
import { useLanguage } from "./LanguageProvider";
import { useAdmin } from "@/context/AdminContext";

export default function Projects() {
  const { language } = useLanguage();
  const { researchInterests: adminResearchInterests } = useAdmin();

  const researchInterests = language === 'ur' ? urduData.researchInterests : (adminResearchInterests || enResearchInterests);
  const uiLabels = language === 'ur' ? urduData.uiLabels : enUiLabels;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(researchInterests.flatMap(item => item.tags || [])))];

  const filteredProjects = researchInterests.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || (item.tags && item.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="py-20 bg-surface-low/30">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 text-secondary text-sm font-medium mb-4 bg-secondary/5">
            {language === 'ur' ? 'تحقیق اور پروجیکٹس' : 'Research & Projects Showcase'}
          </span>
          <h2 className="font-[var(--font-display)] text-[32px] md:text-4xl font-bold text-on-surface mb-4 rtl:font-nastaleeq rtl:text-[40px]">
            {language === 'ur' ? 'پروجیکٹس اور تحقیق' : 'Explore Projects & Research'}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl mx-auto"
        >
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-3 text-outline">search</span>
            <input
              type="text"
              placeholder={language === 'ur' ? "پروجیکٹس یا تحقیق تلاش کریں..." : "Search research or projects..."}
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
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)" }}
                className="glass-card p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">
                      {item.icon || "memory"}
                    </span>
                    {item.badge && (
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold rtl:font-nastaleeq">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-on-surface mb-2 rtl:font-nastaleeq rtl:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed rtl:font-nastaleeq rtl:text-lg rtl:leading-loose">
                    {item.description}
                  </p>

                  {item.features && item.features.length > 0 && (
                    <ul className="space-y-1.5 text-xs text-on-surface-variant mb-6 rtl:font-nastaleeq rtl:text-base">
                      {item.features.map((feat) => (
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
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-surface-highest rounded text-xs font-semibold text-on-surface-variant rtl:font-nastaleeq">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
