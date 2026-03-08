"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { LanguageProvider } from "@/components/language-provider";
import { AmbientBackground } from "@/components/ambient-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";

function ScrollProgressBar() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}

export default function AppShell() {
  return (
    <LanguageProvider>
      <ScrollProgressBar />
      <div className="relative min-h-screen overflow-hidden text-foreground">
        <AmbientBackground />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
}
