import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h2>
            <p className="text-slate-400 text-sm max-w-md">
              {personalInfo.title} based in {personalInfo.location}. Open for research collaborations and professional opportunities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-slate-800 text-slate-300 hover:text-white hover:bg-sky-600 rounded-full transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-slate-300 hover:text-white hover:bg-sky-600 rounded-full transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-slate-300 hover:text-white hover:bg-sky-600 rounded-full transition-all flex items-center justify-center font-bold font-serif"
              aria-label="ORCID"
            >
              iD
            </a>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;