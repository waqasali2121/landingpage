import React from 'react';
import { motion } from 'framer-motion';
import { skills, awards } from '../data/portfolioData';
import { Shield, Code, PenTool, BookOpen, Trophy } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Techniques",
      icon: <Shield size={24} />,
      items: skills.techniques,
      color: "text-emerald-500",
      bg: "bg-emerald-50 border-emerald-100"
    },
    {
      title: "Programming",
      icon: <Code size={24} />,
      items: skills.languages,
      color: "text-blue-500",
      bg: "bg-blue-50 border-blue-100"
    },
    {
      title: "Tools & Software",
      icon: <PenTool size={24} />,
      items: skills.tools,
      color: "text-purple-500",
      bg: "bg-purple-50 border-purple-100"
    },
    {
      title: "Academic Courses Taught",
      icon: <BookOpen size={24} />,
      items: skills.coursesTaught,
      color: "text-amber-500",
      bg: "bg-amber-50 border-amber-100"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full blur-3xl -z-10 opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Skills Section */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-sm text-sky-600 font-bold tracking-widest uppercase mb-2">Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Technical Skills</h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border ${category.bg} shadow-sm`}
                >
                  <div className={`flex items-center gap-3 mb-4 ${category.color}`}>
                    {category.icon}
                    <h4 className="font-bold text-slate-800">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-lg shadow-sm border border-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 lg:mt-0 mt-8"
            >
              <h2 className="text-sm text-amber-500 font-bold tracking-widest uppercase mb-2">Achievements</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Awards & Honours</h3>
            </motion.div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mt-1 p-2 bg-amber-50 text-amber-500 rounded-lg flex-shrink-0">
                    <Trophy size={20} />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {award}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;