"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@/components/icons";
import { getCopy } from "@/lib/get-copy";
import { SocialDock } from "@/components/social-dock";

export function HeroSection() {
  const { dictionary } = useLanguage();
  const role = getCopy(dictionary, profile.roleKey);
  const tagline = getCopy(dictionary, profile.taglineKey);
  const summary = getCopy(dictionary, profile.summaryKey);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-[-10%] top-[-20%] h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b1f2a,transparent_55%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-36 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">
            {role}
          </p>
          <h1 className="mt-6 whitespace-nowrap font-display text-[clamp(1.4rem,4.2vw,5rem)] font-semibold text-white">
            {dictionary.hero.headline}
          </h1>
          <p className="mt-6 text-xl text-white/80 sm:text-2xl">
            {tagline}
          </p>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            {summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">{dictionary.hero.ctaPrimary}</Button>
            <Button href="#contact" variant="secondary">
              {dictionary.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDownIcon className="h-4 w-4" />
        {dictionary.hero.scrollCue}
      </motion.div>

      <SocialDock />
    </section>
  );
}
