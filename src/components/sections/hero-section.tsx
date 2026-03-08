"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/content/profile";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { ArrowDownIcon } from "@/components/icons";
import { getCopy } from "@/lib/get-copy";
import { SocialDock } from "@/components/social-dock";

const SCRAMBLE_CHARS = "!@#$%^&*<>?/|";

const MARQUEE_ITEMS = [
  "EZ",
  "MovieScope",
  "AstroNova",
  "CodeBugFixer",
  "Quiz Generator",
  "Speak2Send",
  "Sol & Siembra",
  "PowerPoint Generator",
];

export function HeroSection() {
  const { dictionary } = useLanguage();
  const role = getCopy(dictionary, profile.roleKey);
  const summary = getCopy(dictionary, profile.summaryKey);
  const phrases = dictionary.hero.typewriterPhrases;

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // On touch devices, skip animation — show first phrase statically
    if (window.matchMedia("(pointer: coarse)").matches) {
      setDisplayed(phrases[0]);
      return;
    }

    let frameId: number;
    let holdTimeout: ReturnType<typeof setTimeout>;

    function runPhrase(idx: number) {
      const phrase = phrases[idx];
      let startTime: number | null = null;
      const CHARS_PER_SEC = 18;
      const SCRAMBLE_AHEAD = 4;

      function tick(ts: number) {
        if (startTime === null) startTime = ts;
        const revealed = Math.min(
          Math.floor(((ts - startTime) * CHARS_PER_SEC) / 1000),
          phrase.length,
        );

        setDisplayed(
          Array.from(phrase, (ch, i) =>
            i < revealed
              ? ch
              : i < revealed + SCRAMBLE_AHEAD
                ? SCRAMBLE_CHARS[
                    Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                  ]
                : "\u00A0",
          ).join(""),
        );

        if (revealed < phrase.length) {
          frameId = requestAnimationFrame(tick);
        } else {
          holdTimeout = setTimeout(
            () => runPhrase((idx + 1) % phrases.length),
            2400,
          );
        }
      }

      frameId = requestAnimationFrame(tick);
    }

    runPhrase(0);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(holdTimeout);
    };
  }, [phrases]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-[-10%] top-[-20%] h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b1f2a,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-32 pt-36 sm:px-10">
        {/* Two-column grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl lg:max-w-none"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">
              {role}
            </p>
            <h1 className="mt-6 font-display text-[clamp(1.8rem,4.8vw,5.5rem)] font-semibold tracking-tight text-white">
              {dictionary.hero.headline}
            </h1>
            <p
              aria-live="polite"
              className="mt-5 font-display text-xl text-accent sm:text-2xl"
            >
              {displayed}
              <span className="animate-blink ml-0.5 inline-block text-accent">
                |
              </span>
            </p>
            <p className="mt-4 text-base text-white/60 sm:text-lg">{summary}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Magnetic strength={0.12} threshold={50}>
                <Button href="#projects">{dictionary.hero.ctaPrimary}</Button>
              </Magnetic>
              <Magnetic strength={0.12} threshold={50}>
                <Button href="#contact" variant="secondary">
                  {dictionary.hero.ctaSecondary}
                </Button>
              </Magnetic>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — bento grid, desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex lg:flex-col lg:gap-3"
          >
            {/* Tile A: EZ video (large, floating) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="self-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="rounded-[28px] shadow-[0_0_50px_-10px_rgba(63,214,179,0.35)]"
                style={{ overflow: "hidden" }}
              >
                <video
                  src="/media/projects/videos/EZVideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="block object-cover"
                  style={{
                    aspectRatio: "9/16",
                    maxHeight: "300px",
                    width: "auto",
                    borderRadius: "28px",
                    display: "block",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Tiles B + C: MovieScope + AstroNova */}
            <div className="flex gap-3">
              {[
                {
                  src: "/media/projects/posters/CineScope.png",
                  alt: "MovieScope",
                  delay: 0.45,
                },
                {
                  src: "/media/projects/posters/AstroNova.png",
                  alt: "AstroNova",
                  delay: 0.55,
                },
              ].map(({ src, alt, delay }) => (
                <motion.div
                  key={alt}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                  className="flex-1 overflow-hidden rounded-2xl border border-white/10"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={300}
                    height={188}
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: "16/10" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* MARQUEE STRIP */}
        <div className="absolute bottom-20 left-0 right-0 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 text-[10px] uppercase tracking-[0.35em] text-white/20">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                {item}
                <span className="text-accent/30">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50"
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
