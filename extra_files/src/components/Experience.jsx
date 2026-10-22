import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm text-sky-600 font-bold tracking-widest uppercase mb-2">Career Path</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Work Experience</h3>
          <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-sky-100 ml-3 md:ml-6 space-y-12 pb-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] md:-left-[11px] top-1.5 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border-4 border-sky-500 shadow-sm"></div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="inline-block py-1 px-3 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-4">
                  {exp.period}
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                  {exp.role}
                </h4>
                <div className="flex items-center text-slate-600 mb-4 font-medium">
                  <Briefcase size={16} className="mr-2" />
                  {exp.company}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;