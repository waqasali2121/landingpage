import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-200/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sky-600 font-medium tracking-wide uppercase mb-3">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-4">
            {personalInfo.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl md:text-2xl text-slate-600 font-medium mb-2">
            {personalInfo.title}
          </h3>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            {personalInfo.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/Waqas Ali CV updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 bg-sky-600 text-white font-medium rounded-full shadow-lg shadow-sky-200 hover:bg-sky-700 hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto justify-center"
          >
            <FileText size={20} />
            Download CV
          </a>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3.5 text-slate-500 hover:text-sky-600 bg-white shadow-sm rounded-full hover:shadow-md transition-all hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 text-slate-500 hover:text-sky-600 bg-white shadow-sm rounded-full hover:shadow-md transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={personalInfo.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 text-slate-500 hover:text-sky-600 bg-white shadow-sm rounded-full hover:shadow-md transition-all hover:-translate-y-0.5 flex items-center justify-center font-bold font-serif"
              aria-label="ORCID"
              title="ORCID"
            >
              iD
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;