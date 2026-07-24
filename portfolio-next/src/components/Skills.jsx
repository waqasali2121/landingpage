"use client";

import { motion } from "framer-motion";
import { skills, awards } from "@/data/portfolioData";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: "security",
    items: skills.cybersecurity,
  },
  {
    title: "AI & Machine Learning",
    icon: "psychology",
    items: skills.aiml,
  },
  {
    title: "Programming",
    icon: "code",
    items: skills.programming,
  },
  {
    title: "Academic",
    icon: "menu_book",
    items: skills.academic,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface-lowest">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-12 text-center"
        >
          Technical & Academic Proficiencies
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">
                  {category.icon}
                </span>
                <h3 className="font-[var(--font-display)] text-lg font-semibold text-on-surface">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-surface-highest rounded-full text-xs font-semibold text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses Taught */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">
              cast_for_education
            </span>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-on-surface">
              Courses Taught
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.coursesTaught.map((course) => (
              <span
                key={course}
                className="px-4 py-2 border border-outline-variant/40 rounded-lg text-sm text-on-surface-variant hover:border-secondary hover:text-secondary hover:-translate-y-0.5 hover:shadow-md hover:bg-secondary/5 transition-all cursor-default"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <span className="material-symbols-outlined text-secondary text-3xl">
              emoji_events
            </span>
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-on-surface">
              Awards & Honours
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 glass-card rounded-xl hover:border-secondary/30 transition-colors"
              >
                <div className="mt-1 p-2 bg-secondary/10 text-secondary rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">
                    military_tech
                  </span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm font-medium">
                  {award}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
