"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-surface via-surface-low to-surface-lowest opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-outline-variant) 1px, transparent 1px), linear-gradient(90deg, var(--color-outline-variant) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/8 blur-[100px] animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 px-5 md:px-16 max-w-[1280px] mx-auto w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl overflow-hidden flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 text-secondary text-sm font-medium mb-6 bg-secondary/5 rtl:font-nastaleeq rtl:text-xl">
              {language === 'en' ? 'Academic & Researcher' : 'ماہرِ تعلیم اور محقق'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-display)] text-[32px] md:text-[56px] font-bold text-on-surface mb-6 leading-tight tracking-tight rtl:font-nastaleeq rtl:leading-loose mx-auto max-w-[800px]"
          >
            {language === 'en' ? (
              <>
                Cybersecurity Researcher, <br />
                <span className="text-primary text-glow">AI Specialist</span>{" "}
                & Computer Science Educator
              </>
            ) : (
              <>
                سائبر سیکیورٹی ریسرچر، <br />
                <span className="text-primary text-glow">AI اسپیشلسٹ</span>{" "}
                اور کمپیوٹر سائنس ایجوکیٹر
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-3xl leading-relaxed mx-auto rtl:font-nastaleeq rtl:text-2xl rtl:leading-loose"
          >
            {language === 'en'
              ? "Advancing the frontiers of secure and intelligent computing through rigorous research and academic excellence. Bridging the gap between theory and real-world resilience."
              : "جامع تحقیق اور تعلیمی مہارت کے ذریعے محفوظ اور ذہین کمپیوٹنگ کی سرحدوں کو آگے بڑھانا۔ نظریہ اور حقیقی دنیا کی لچک کے درمیان خلیج کو ختم کرنا۔"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#research"
              className="px-8 py-4 bg-primary text-on-primary text-sm font-bold tracking-wide rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all duration-300 rtl:font-nastaleeq rtl:text-xl"
            >
              {language === 'en' ? 'Explore Research' : 'تحقیق دریافت کریں'}
              <span className={`material-symbols-outlined text-lg ${language === 'ur' ? 'rotate-180' : ''}`}>
                arrow_forward
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 border border-outline-variant text-on-surface text-sm font-bold tracking-wide rounded-lg flex items-center justify-center gap-2 hover:bg-surface-highest hover:border-primary/50 transition-all duration-300 rtl:font-nastaleeq rtl:text-xl"
            >
              {language === 'en' ? "Let's Connect" : "رابطہ کریں"}
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, staggerChildren: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-outline-variant/30 w-full max-w-2xl"
          >
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <div className="text-2xl font-bold text-primary font-[var(--font-display)]">M.S.</div>
              <div className="text-xs text-on-surface-variant mt-1 rtl:font-nastaleeq rtl:text-base">
                {language === 'en' ? 'Computer Engineering' : 'کمپیوٹر انجینئرنگ'}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <div className="text-2xl font-bold text-secondary font-[var(--font-display)]">2+</div>
              <div className="text-xs text-on-surface-variant mt-1 rtl:font-nastaleeq rtl:text-base">
                {language === 'en' ? 'Publications' : 'مضامین'}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <div className="text-2xl font-bold text-tertiary font-[var(--font-display)]">5+</div>
              <div className="text-xs text-on-surface-variant mt-1 rtl:font-nastaleeq rtl:text-base">
                {language === 'en' ? 'Research Areas' : 'تحقیقی شعبے'}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Terminal Icon */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:block opacity-10"
      >
        <span className="material-symbols-outlined text-[200px] text-primary">
          terminal
        </span>
      </motion.div>
    </section>
  );
}
