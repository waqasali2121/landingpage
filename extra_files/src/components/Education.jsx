import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm text-sky-600 font-bold tracking-widest uppercase mb-2">Academic Background</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Education</h3>
          <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-sky-200 transition-colors group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-sky-500 mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
                <GraduationCap size={28} />
              </div>

              <div className="text-sm font-bold text-sky-600 mb-2 tracking-wide uppercase">
                {edu.period}
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                {edu.degree}
              </h4>

              <p className="text-lg font-medium text-slate-700 mb-2">
                {edu.institution}
              </p>

              <div className="flex items-center text-slate-500 text-sm mb-4">
                <MapPin size={14} className="mr-1" />
                {edu.location}
              </div>

              <div className="inline-block px-4 py-1.5 bg-slate-200 text-slate-700 font-bold rounded-lg mb-4">
                {edu.grade}
              </div>

              {edu.details && (
                <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4 mt-2">
                  <span className="font-semibold text-slate-800">Thesis:</span> {edu.details.replace('Thesis Title: ', '')}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;