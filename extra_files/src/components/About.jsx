import React from 'react';
import { motion } from 'framer-motion';
import { about, researchInterests, publications } from '../data/portfolioData';
import { Lightbulb, BookOpen, Fingerprint } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm text-sky-600 font-bold tracking-widest uppercase mb-2">Introduction</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h3>
          <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {about}
            </p>
            <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-slate-800 mb-4">
                <Lightbulb className="text-sky-500" size={24} />
                Research Interests
              </h4>
              <ul className="space-y-3">
                {researchInterests.map((interest, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <Fingerprint className="text-sky-400 mt-1 flex-shrink-0" size={16} />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Publications Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h4 className="flex items-center gap-2 text-2xl font-bold text-slate-800 mb-6">
              <BookOpen className="text-sky-500" size={28} />
              Selected Publications
            </h4>
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-sky-200 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-sky-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-sm font-medium text-sky-600 mb-2">{pub.year}</p>
                  <h5 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {pub.title}
                  </h5>
                  <p className="text-slate-600 text-sm mb-3">
                    <span className="font-medium text-slate-800">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-slate-500 text-sm italic">
                    {pub.venue}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;