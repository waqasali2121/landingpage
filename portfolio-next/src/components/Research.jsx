"use client";

import { motion } from "framer-motion";
import { researchInterests } from "@/data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-4">
            Core Research Focus
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchInterests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 rounded-xl flex ${
                item.large
                  ? "md:col-span-2 flex-col md:flex-row gap-8"
                  : "flex-col"
              } hover:border-primary/50 transition-colors group relative overflow-hidden`}
            >
              <div className={item.large ? "flex-1" : ""}>
                <span
                  className={`material-symbols-outlined text-4xl mb-6 inline-block group-hover:scale-110 transition-transform ${
                    item.color === "primary" ? "text-primary" : "text-secondary"
                  }`}
                >
                  {item.icon}
                </span>
                <h3 className="font-[var(--font-display)] text-2xl font-semibold text-on-surface mb-3">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant mb-6 text-justify">
                  {item.description}
                </p>

                {/* Features list */}
                {item.features && (
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-sm">
                          check_circle
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                {item.tags && (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-highest px-3 py-1 rounded text-xs font-semibold text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Badge */}
                {item.badge && (
                  <div className="mt-auto">
                    <span className="text-primary font-bold text-sm">
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Large card decorative area */}
              {item.large && (
                <div className="w-full md:w-1/3 bg-surface-highest/30 rounded-lg flex items-center justify-center min-h-[120px] relative overflow-hidden group-hover:bg-primary/5 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="material-symbols-outlined text-[100px] text-primary/80 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(173,198,255,0.4)]">
                    memory
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
