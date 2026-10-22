"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo as enPersonalInfo, uiLabels as enUiLabels } from "@/data/portfolioData";
import { urduData } from "@/data/urduData";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { language } = useLanguage();

  const personalInfo = language === 'ur' ? urduData.personalInfo : enPersonalInfo;
  const uiLabels = language === 'ur' ? urduData.uiLabels : enUiLabels;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send to Web3Forms
    const submissionData = new FormData();
    submissionData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY); // Using environment variable
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("subject", formData.subject);
    submissionData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form!");
    }
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
            <h2 className="font-[var(--font-display)] text-[32px] font-semibold text-on-surface mb-6 rtl:font-nastaleeq rtl:text-[40px]">
              {uiLabels.contactTitle}
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed rtl:font-nastaleeq rtl:text-2xl rtl:leading-loose">
              {uiLabels.contactDesc}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-highest/30 border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-highest/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold text-sm mb-0.5 rtl:font-nastaleeq rtl:text-base">{uiLabels.formEmail}</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                    dir="ltr"
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
                  <h4 className="text-on-surface font-bold text-sm mb-0.5 rtl:font-nastaleeq rtl:text-base">{language === 'en' ? 'Phone' : 'فون'}</h4>
                  <p className="text-on-surface-variant text-sm" dir="ltr">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-highest/30 border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-highest/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold text-sm mb-0.5 rtl:font-nastaleeq rtl:text-base">{language === 'en' ? 'Location' : 'پتہ'}</h4>
                  <p className="text-on-surface-variant text-sm rtl:font-nastaleeq rtl:text-base">
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
                    className="text-sm font-medium text-on-surface rtl:font-nastaleeq rtl:text-lg"
                    htmlFor="name"
                  >
                    {uiLabels.formName}
                  </label>
                  <input
                    className="w-full bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-outline/50 outline-none transition-colors rtl:font-nastaleeq rtl:text-lg"
                    id="name"
                    name="name"
                    placeholder={language === 'en' ? "Your name" : "آپ کا نام"}
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-on-surface rtl:font-nastaleeq rtl:text-lg"
                    htmlFor="email"
                  >
                    {uiLabels.formEmail}
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
                  className="text-sm font-medium text-on-surface rtl:font-nastaleeq rtl:text-lg"
                  htmlFor="subject"
                >
                  {language === 'en' ? 'Subject' : 'موضوع'}
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-outline/50 outline-none transition-colors rtl:font-nastaleeq rtl:text-lg"
                  id="subject"
                  name="subject"
                  placeholder={language === 'en' ? "Collaboration Inquiry" : "اشتراک کے حوالے سے"}
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-on-surface rtl:font-nastaleeq rtl:text-lg"
                  htmlFor="message"
                >
                  {uiLabels.formMessage}
                </label>
                <textarea
                  className="w-full bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-outline/50 outline-none transition-colors resize-none rtl:font-nastaleeq rtl:text-lg"
                  id="message"
                  name="message"
                  placeholder={language === 'en' ? "Your message here..." : "اپنا پیغام یہاں لکھیں..."}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className={`w-full py-4 font-bold rounded-lg flex items-center justify-center gap-2 transition-all rtl:font-nastaleeq rtl:text-xl ${
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
                    {uiLabels.messageSent}
                  </>
                ) : (
                  <>
                    {uiLabels.formSubmit}
                    <span className={`material-symbols-outlined ${language === 'ur' ? 'rotate-180' : ''}`}>send</span>
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
