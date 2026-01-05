"use client";

import { LanguageProvider } from "@/components/language-provider";
import { AmbientBackground } from "@/components/ambient-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function AppShell() {
  return (
    <LanguageProvider>
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
