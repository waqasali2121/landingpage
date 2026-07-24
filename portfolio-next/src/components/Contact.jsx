"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />

      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              I am always open to discussing new research collaborations,
              speaking opportunities, or academic inquiries. Please use the form
              or reach out via my professional networks.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-highest/30 border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-highest/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold text-sm mb-0.5">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-highest/30 border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-highest/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold text-sm mb-0.5">Phone</h4>
                  <p className="text-on-surface-variant text-sm">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-highest/30 border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-highest/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold text-sm mb-0.5">Location</h4>
                  <p className="text-on-surface-variant text-sm">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-on-surface"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-outline/50 outline-none transition-colors"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-on-surface"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-outline/50 outline-none transition-colors"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-on-surface"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-outline/50 outline-none transition-colors"
                  id="subject"
                  name="subject"
                  placeholder="Collaboration Inquiry"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-on-surface"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-outline/50 outline-none transition-colors resize-none"
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className={`w-full py-4 font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${
                  submitted
                    ? "bg-green-600 text-white"
                    : "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20"
                }`}
                type="submit"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
