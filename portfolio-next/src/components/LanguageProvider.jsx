"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('portfolio-language');
    if (savedLang === 'en' || savedLang === 'ur') {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Update HTML attributes for RTL/LTR and language
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === 'ur' ? 'rtl' : 'ltr';

    // Save to localStorage
    localStorage.setItem('portfolio-language', language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en');
  };

  // We must always wrap children in the Provider so they can call useLanguage() during SSR.
  // We can suppress hydration warnings or just render children normally with default language.
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden', display: 'contents' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
