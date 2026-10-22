"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks as enNavLinks, personalInfo as enPersonalInfo, uiLabels as enUiLabels } from "@/data/portfolioData";
import { urduData } from "@/data/urduData";
import { useLanguage } from "./LanguageProvider";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { language, toggleLanguage } = useLanguage();

  const navLinks = language === 'ur' ? urduData.navLinks : enNavLinks;
  const personalInfo = language === 'ur' ? urduData.personalInfo : enPersonalInfo;
  const uiLabels = language === 'ur' ? urduData.uiLabels : enUiLabels;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-16 py-4 max-w-[1280px] mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="font-[var(--font-display)] text-2xl md:text-[32px] font-bold text-primary tracking-tighter"
        >
          {personalInfo.name}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 rtl:text-base rtl:font-nastaleeq ${
                activeSection === link.href.slice(1)
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-low transition-colors text-on-surface font-bold text-sm"
            aria-label="Toggle language"
            title="Toggle language"
          >
            {language === 'en' ? 'اردو' : 'EN'}
          </button>
          <ThemeToggle />
          <a
            href="/Waqas Ali CV updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-6 py-2 bg-primary text-on-primary text-sm font-medium rounded-full hover:scale-105 active:scale-95 transition-all rtl:font-nastaleeq rtl:text-lg rtl:py-1"
          >
            {uiLabels.downloadCv}
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-surface"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-surface-container/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors rtl:font-nastaleeq rtl:text-lg ${
                    activeSection === link.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Waqas Ali CV updated.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-primary text-on-primary text-sm font-medium rounded-lg text-center rtl:font-nastaleeq rtl:text-lg"
              >
                {uiLabels.downloadCv}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
