"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#182133,transparent_55%),radial-gradient(circle_at_80%_20%,rgba(201,163,106,0.12),transparent_55%),linear-gradient(180deg,#0b0e13_0%,#0a1118_55%,#0b0e13_100%)]" />
      <motion.div
        className="absolute -left-1/4 top-[-20%] h-[520px] w-[520px] rounded-full bg-accent/16 blur-[180px]"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-20%] top-[10%] h-[460px] w-[460px] rounded-full bg-white/8 blur-[190px]"
        animate={{
          x: [0, -35, 0],
          y: [0, -25, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[25%] h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-[170px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[10%] top-[30%] h-[360px] w-[360px] rounded-full bg-amber-200/10 blur-[160px]"
        animate={{
          x: [0, 24, 0],
          y: [0, -18, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] [background-size:3px_3px]" />
    </div>
  );
}
