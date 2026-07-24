"use client";

import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-12 bg-surface-lowest border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 max-w-[1280px] mx-auto gap-8">
        {/* Left */}
        <div className="text-center md:text-left">
          <span className="font-[var(--font-display)] text-xl font-semibold text-on-surface block mb-2">
            {personalInfo.name}
          </span>
          <p className="text-on-surface-variant text-xs">
            © {new Date().getFullYear()} {personalInfo.title}. All rights
            reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors text-xs font-semibold"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors text-xs font-semibold"
          >
            ORCID
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-secondary hover:text-primary transition-colors text-xs font-semibold"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 bg-surface-high rounded-full text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_upward
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
