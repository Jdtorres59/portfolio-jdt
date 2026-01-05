"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/content/certifications";
import type { CertificationCategory } from "@/content/types";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getCopy } from "@/lib/get-copy";

const filters: Array<CertificationCategory | "all"> = [
  "all",
  "ai",
  "software",
  "systems",
];

export function CertificationsSection() {
  const { dictionary } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<
    CertificationCategory | "all"
  >("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return certifications;
    return certifications.filter(
      (cert) => cert.category && cert.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <Section
      id="certifications"
      title={dictionary.certifications.title}
      subtitle={dictionary.certifications.subtitle}
    >
      <div className="space-y-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const label = dictionary.certifications.filters[filter];
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border-accent/40 bg-accent/15 text-accent"
                    : "border-white/10 text-white/60 hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <Card className="flex items-center justify-center py-16 text-sm text-white/60">
            {dictionary.certifications.empty}
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cert, index) => {
              const previewUrl = cert.credentialUrl?.endsWith(".pdf")
                ? `${cert.credentialUrl}#toolbar=0&navpanes=0&scrollbar=0`
                : cert.credentialUrl;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                >
                  <Card className="h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {getCopy(dictionary, cert.titleKey)}
                        </h3>
                        <p className="mt-2 text-sm text-white/60">
                          {getCopy(dictionary, cert.issuerKey)}
                        </p>
                        {cert.credentialId ? (
                          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            {dictionary.certifications.credentialIdLabel}{" "}
                            <span className="text-white/60">
                              {cert.credentialId}
                            </span>
                          </p>
                        ) : null}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                        {cert.year}
                      </span>
                    </div>
                    {cert.category ? (
                      <div className="mt-4">
                        <Badge variant="outline">
                          {dictionary.certifications.filters[cert.category]}
                        </Badge>
                      </div>
                    ) : null}
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-accent/80"
                      >
                        {dictionary.certifications.credentialLabel}
                      </a>
                    ) : null}
                    {cert.credentialUrl ? (
                      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                        <object
                          data={previewUrl}
                          type="application/pdf"
                          className="h-56 w-full"
                          aria-label={dictionary.certifications.credentialLabel}
                        >
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-56 items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-accent/80"
                          >
                            {dictionary.certifications.credentialLabel}
                          </a>
                        </object>
                      </div>
                    ) : null}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
