"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo as enPersonalInfo } from "@/data/portfolioData";
import { urduData } from "@/data/urduData";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const [imgError, setImgError] = useState(false);
  const { language } = useLanguage();

  const personalInfo = language === 'ur' ? urduData.personalInfo : enPersonalInfo;

  return (
    <section id="about" className="py-20 bg-surface-lowest">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative group"
          >
            <div className="absolute -inset-4 bg-primary/15 rounded-xl blur-2xl group-hover:bg-primary/25 transition-all duration-700" />
            <div className="relative rounded-xl overflow-hidden border border-outline-variant/30 aspect-square bg-surface-container flex items-center justify-center">
              {!imgError ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile.png`}
                    alt={`Portrait of ${personalInfo.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                    onError={() => setImgError(true)}
                  />
                </motion.div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-surface-high to-surface-container flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl font-bold text-primary/30 font-[var(--font-display)]">
                      WA
                    </div>
                    <div className="text-sm text-on-surface-variant mt-2">
                      {personalInfo.title}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <h2 className="font-[var(--font-display)] text-[32px] font-semibold text-primary mb-6 rtl:font-nastaleeq rtl:text-[40px]">
              {language === 'en' ? 'Expertise & Vision' : 'مہارت اور وژن'}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-justify text-on-surface mb-6 leading-relaxed rtl:font-nastaleeq rtl:text-2xl rtl:leading-loose"
            >
              {personalInfo.bio}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-justify text-on-surface-variant mb-8 leading-relaxed rtl:font-nastaleeq rtl:text-xl rtl:leading-loose"
            >
              {personalInfo.vision}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-4 rounded-lg">
                <h4 className="text-secondary font-bold mb-1 rtl:font-nastaleeq rtl:text-lg">WSN</h4>
                <p className="text-xs text-on-surface-variant rtl:font-nastaleeq rtl:text-base">
                  {language === 'en' ? 'Sensor network optimization & security protocols.' : 'سینسر نیٹ ورک آپٹیمائزیشن اور سیکیورٹی پروٹوکولز۔'}
                </p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="text-secondary font-bold mb-1 rtl:font-nastaleeq rtl:text-lg">IoT</h4>
                <p className="text-xs text-on-surface-variant rtl:font-nastaleeq rtl:text-base">
                  {language === 'en' ? 'Securing decentralized intelligent devices.' : 'غیر مرکزی اور ذہین آلات کو محفوظ بنانا۔'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
