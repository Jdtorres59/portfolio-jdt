"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { useLanguage } from "@/components/language-provider";
import { getCopy } from "@/lib/get-copy";

export function AboutSection() {
  const { dictionary } = useLanguage();

  return (
    <Section
      id="about"
      title={dictionary.about.title}
      subtitle={dictionary.about.lead}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="h-full">
              <p className="text-base text-white/70 sm:text-lg">
                {dictionary.about.body}
              </p>
            </Card>
          </motion.div>
          {profile.photo ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              <Card className="overflow-hidden p-0">
                <div className="relative aspect-square w-full">
                  <Image
                    src={profile.photo.src}
                    alt={getCopy(dictionary, profile.photo.altKey)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, (min-width: 768px) 60vw, 90vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </Card>
            </motion.div>
          ) : null}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Card className="h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {dictionary.education.title}
                </h3>
                <p className="text-sm text-white/60">
                  {dictionary.education.subtitle}
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-white/80">
                    {item.institution}
                  </p>
                  <p className="text-base text-white">
                    {getCopy(dictionary, item.degreeKey)}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {getCopy(dictionary, item.locationKey)}
                  </p>
                  <div className="mt-4 border-t border-white/10 pt-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-2">
                        {dictionary.education.focusAreasLabel}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["AI / ML", "Full-Stack", "Embedded Systems"].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-white/50">
                      <span className="text-accent/70">★</span>{" "}
                      {dictionary.education.scholarship}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
