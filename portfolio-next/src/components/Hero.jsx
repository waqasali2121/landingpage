"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
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
      <div className="relative z-10 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 text-secondary text-sm font-medium mb-6 bg-secondary/5"
          >
            Academic & Researcher
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[var(--font-display)] text-[32px] md:text-[48px] font-bold text-on-surface mb-6 leading-tight tracking-tight"
          >
            Cybersecurity Researcher, <br />
            <span className="text-primary text-glow">AI Specialist</span>{" "}
            & Computer Science Educator
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed"
          >
            Advancing the frontiers of secure and intelligent computing through
            rigorous research and academic excellence. Bridging the gap between
            theory and real-world resilience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#research"
              className="px-8 py-4 bg-primary text-on-primary text-sm font-bold tracking-wide rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Research
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-outline-variant text-on-surface text-sm font-bold tracking-wide rounded-lg flex items-center justify-center gap-2 hover:bg-surface-highest hover:border-primary/50 transition-all duration-300"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-8 mt-16 pt-8 border-t border-outline-variant/30"
          >
            <div>
              <div className="text-2xl font-bold text-primary font-[var(--font-display)]">M.S.</div>
              <div className="text-xs text-on-surface-variant mt-1">Computer Engineering</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary font-[var(--font-display)]">2+</div>
              <div className="text-xs text-on-surface-variant mt-1">Publications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-tertiary font-[var(--font-display)]">5+</div>
              <div className="text-xs text-on-surface-variant mt-1">Research Areas</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Terminal Icon */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-10">
        <span className="material-symbols-outlined text-[200px] text-primary">
          terminal
        </span>
      </div>
    </section>
  );
}
