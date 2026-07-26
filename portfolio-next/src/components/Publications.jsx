"use client";

import { motion } from "framer-motion";
import { publications as enPublications, uiLabels as enUiLabels } from "@/data/portfolioData";
import { urduData } from "@/data/urduData";
import { useLanguage } from "./LanguageProvider";

export default function Publications() {
  const { language } = useLanguage();

  const publications = language === 'ur' ? urduData.publications : enPublications;
  const uiLabels = language === 'ur' ? urduData.uiLabels : enUiLabels;

  return (
    <section id="publications" className="py-20">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-12 rtl:font-nastaleeq rtl:text-[40px]"
        >
          {uiLabels.publicationsTitle}
        </motion.h2>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg hover:bg-surface-highest/40 transition-colors border-s-4 border-s-primary group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-secondary text-xs font-semibold mb-1 block rtl:font-nastaleeq rtl:text-sm">
                    {pub.publisher}
                  </span>
                  <h4 className="font-[var(--font-display)] text-lg font-semibold text-on-surface mb-2 rtl:font-nastaleeq rtl:text-2xl">
                    {pub.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm mb-2 italic rtl:font-nastaleeq rtl:text-lg">
                    {language === 'en' ? 'Authors:' : 'مصنفین:'} {pub.authors}
                  </p>
                  <p className="text-outline text-xs rtl:font-nastaleeq rtl:text-sm">{pub.venue}</p>
                </div>
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-primary/30 text-primary hover:bg-primary hover:text-on-primary rounded-lg text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 group-hover:border-primary/60 rtl:font-nastaleeq rtl:text-lg"
                  >
                    {language === 'en' ? 'View Publication' : 'مقالہ دیکھیں'}
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                ) : (
                  <span className="px-5 py-2.5 text-outline text-sm font-bold whitespace-nowrap rtl:font-nastaleeq rtl:text-lg">
                    {language === 'en' ? 'Not Available' : 'دستیاب نہیں'}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
