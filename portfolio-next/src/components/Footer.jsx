"use client";

import { personalInfo as enPersonalInfo, uiLabels as enUiLabels } from "@/data/portfolioData";
import { urduData } from "@/data/urduData";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();

  const personalInfo = language === 'ur' ? urduData.personalInfo : enPersonalInfo;
  const uiLabels = language === 'ur' ? urduData.uiLabels : enUiLabels;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface-lowest py-12 border-t border-outline-variant/30">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left */}
        <div className="text-center md:text-left rtl:md:text-right">
          <span className="font-[var(--font-display)] text-xl font-semibold text-on-surface block mb-2 rtl:font-nastaleeq rtl:text-2xl">
            {personalInfo.name}
          </span>
          <p className="text-on-surface-variant text-xs rtl:font-nastaleeq rtl:text-base">
            © {new Date().getFullYear()} {personalInfo.title}. {uiLabels.footerText}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors text-xs font-semibold rtl:text-sm relative group"
          >
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href={personalInfo.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors text-xs font-semibold rtl:text-sm relative group"
          >
            ORCID
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-secondary hover:text-primary transition-colors text-xs font-semibold rtl:font-nastaleeq rtl:text-lg relative group"
          >
            {uiLabels.formEmail}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-3 ml-2 bg-surface-high rounded-full text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-lg block">
              arrow_upward
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
