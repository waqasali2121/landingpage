"use client";

import { motion } from "framer-motion";
import { education as enEducation, experience as enExperience, uiLabels as enUiLabels } from "@/data/portfolioData";
import { urduData } from "@/data/urduData";
import { useLanguage } from "./LanguageProvider";

export default function Timeline() {
  const { language } = useLanguage();

  const education = language === 'ur' ? urduData.education : enEducation;
  const experience = language === 'ur' ? urduData.experience : enExperience;
  const uiLabels = language === 'ur' ? urduData.uiLabels : enUiLabels;

  return (
    <section id="experience" className="py-20 bg-surface-low">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-12 flex items-center gap-4 rtl:font-nastaleeq rtl:text-[40px]"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                school
              </span>
              {uiLabels.educationTitle}
            </motion.h2>

            <div className="space-y-16 relative timeline-track ps-12 ms-4 mt-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pb-4 group"
                >
                  <div className="absolute -left-[56px] top-0 w-8 h-8 rounded-full bg-surface-highest border-2 border-primary flex items-center justify-center text-xs font-bold text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-[0_0_15px_rgba(173,198,255,0.2)]">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <span className="text-secondary text-sm font-bold tracking-wider uppercase mb-3 block rtl:font-nastaleeq rtl:text-lg">
                    {edu.period}
                  </span>
                  <h3 className="font-[var(--font-display)] text-2xl font-bold text-on-surface mb-2 rtl:font-nastaleeq rtl:text-3xl">
                    {edu.degree}
                  </h3>
                  <p className="text-on-surface-variant text-lg font-medium mb-2 rtl:font-nastaleeq rtl:text-xl">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-outline flex items-center gap-1.5 mb-5 rtl:font-nastaleeq rtl:text-base">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    {edu.location}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "var(--color-surface-highest)" }}
                    className="bg-surface-highest/50 border border-outline-variant/20 rounded-lg p-4 mt-4 transition-colors"
                  >
                    <span className="inline-block px-3 py-1 bg-surface-highest rounded text-xs font-bold text-on-surface mb-3 shadow-sm border border-outline-variant/30 rtl:font-nastaleeq rtl:text-sm">
                      {edu.grade}
                    </span>
                    {edu.details && (
                      <p className="text-sm text-on-surface-variant leading-relaxed rtl:font-nastaleeq rtl:text-lg">
                        <span className="font-semibold text-primary me-1">{language === 'en' ? 'Thesis:' : 'مقالہ:'}</span>
                        {edu.details.replace('Thesis Title: ', '').replace('Thesis Title:', '').replace('مقالے کا عنوان: ', '')}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-12 flex items-center gap-4 rtl:font-nastaleeq rtl:text-[40px]"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                work
              </span>
              {uiLabels.experienceTitle}
            </motion.h2>

            <div className="space-y-16 relative timeline-track ps-12 ms-4 mt-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pb-4 group"
                >
                  <div className="absolute -left-[56px] top-0 w-8 h-8 rounded-full bg-surface-highest border-2 border-secondary flex items-center justify-center text-xs font-bold text-on-surface group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300 shadow-[0_0_15px_rgba(76,215,246,0.2)]">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <span className="text-secondary text-sm font-bold tracking-wider uppercase mb-3 block rtl:font-nastaleeq rtl:text-lg">
                    {exp.period}
                  </span>
                  <h3 className="font-[var(--font-display)] text-2xl font-bold text-on-surface mb-2 rtl:font-nastaleeq rtl:text-3xl">
                    {exp.role}
                  </h3>
                  <p className="text-on-surface-variant text-lg font-medium mb-4 flex items-center gap-2 rtl:font-nastaleeq rtl:text-xl">
                    <span className="material-symbols-outlined text-[18px]">business</span>
                    {exp.company}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "var(--color-surface-highest)" }}
                    className="bg-surface-highest/50 border border-outline-variant/20 rounded-lg p-4 transition-colors"
                  >
                    <p className="text-sm text-on-surface-variant leading-relaxed rtl:font-nastaleeq rtl:text-lg rtl:leading-loose">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
