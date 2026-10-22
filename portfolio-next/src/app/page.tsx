"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Timeline from "@/components/Timeline";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Timeline />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
