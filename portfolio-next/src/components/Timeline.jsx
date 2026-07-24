"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/data/portfolioData";

export default function Timeline() {
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
              className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-12 flex items-center gap-4"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                school
              </span>
              Education
            </motion.h2>

            <div className="space-y-12 relative timeline-track pl-8 ml-2 mt-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pb-4"
                >
                  <div className="timeline-node" />
                  <span className="text-secondary text-sm font-bold tracking-wider uppercase mb-3 block">
                    {edu.period}
                  </span>
                  <h3 className="font-[var(--font-display)] text-2xl font-bold text-on-surface mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-on-surface-variant text-lg font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-outline flex items-center gap-1.5 mb-5">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    {edu.location}
                  </p>

                  <div className="bg-surface-highest/50 border border-outline-variant/20 rounded-lg p-4 mt-4">
                    <span className="inline-block px-3 py-1 bg-surface-highest rounded text-xs font-bold text-on-surface mb-3 shadow-sm border border-outline-variant/30">
                      {edu.grade}
                    </span>
                    {edu.details && (
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        <span className="font-semibold text-primary mr-1">Thesis:</span>
                        {edu.details.replace('Thesis Title: ', '').replace('Thesis Title:', '')}
                      </p>
                    )}
                  </div>
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
              className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-12 flex items-center gap-4"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                work
              </span>
              Experience
            </motion.h2>

            <div className="space-y-12 relative timeline-track pl-8 ml-2 mt-4">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pb-4"
                >
                  <div className="timeline-node" />
                  <span className="text-secondary text-sm font-bold tracking-wider uppercase mb-3 block">
                    {exp.period}
                  </span>
                  <h3 className="font-[var(--font-display)] text-2xl font-bold text-on-surface mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-on-surface-variant text-lg font-medium mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">business</span>
                    {exp.company}
                  </p>

                  <div className="bg-surface-highest/50 border border-outline-variant/20 rounded-lg p-4">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
