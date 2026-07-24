"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 bg-surface-lowest">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 relative group"
          >
            <div className="absolute -inset-4 bg-primary/15 rounded-xl blur-2xl group-hover:bg-primary/25 transition-all duration-500" />
            <div className="relative rounded-xl overflow-hidden border border-outline-variant/30 aspect-square bg-surface-container flex items-center justify-center">
              {!imgError ? (
                <Image
                  src="/profile.jpg"
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  onError={() => setImgError(true)}
                />
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <h2 className="font-[var(--font-display)] text-[32px] font-semibold text-primary mb-6">
              Expertise & Vision
            </h2>
            <p className="text-lg text-on-surface mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              {personalInfo.vision}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-lg">
                <h4 className="text-secondary font-bold mb-1">WSN</h4>
                <p className="text-xs text-on-surface-variant">
                  Sensor network optimization & security protocols.
                </p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="text-secondary font-bold mb-1">IoT</h4>
                <p className="text-xs text-on-surface-variant">
                  Securing decentralized intelligent devices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
