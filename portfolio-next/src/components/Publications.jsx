"use client";

import { motion } from "framer-motion";
import { publications } from "@/data/portfolioData";

export default function Publications() {
  return (
    <section id="publications" className="py-20">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-12"
        >
          Selected Publications
        </motion.h2>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg hover:bg-surface-highest/40 transition-colors border-l-4 border-l-primary group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-secondary text-xs font-semibold mb-1 block">
                    {pub.publisher}
                  </span>
                  <h4 className="font-[var(--font-display)] text-lg font-semibold text-on-surface mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm mb-2 italic">
                    Authors: {pub.authors}
                  </p>
                  <p className="text-outline text-xs">{pub.venue}</p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-primary/30 text-primary hover:bg-primary hover:text-on-primary rounded-lg text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 group-hover:border-primary/60"
                >
                  View Publication
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
