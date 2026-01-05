import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-28 py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">
            {title}
          </p>
          {subtitle ? (
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              {subtitle}
            </h2>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
