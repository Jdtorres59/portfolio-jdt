"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { getCopy } from "@/lib/get-copy";

const formatUrl = (value: string) =>
  value.replace(/^https?:\/\//, "").replace(/\/$/, "");

const contactItems = [
  {
    id: "email",
    labelKey: "contact.emailLabel",
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    display: profile.email,
  },
  {
    id: "linkedin",
    labelKey: "contact.linkedinLabel",
    href: profile.social.find((item) => item.id === "linkedin")?.href ?? "",
    icon: LinkedInIcon,
  },
  {
    id: "github",
    labelKey: "contact.githubLabel",
    href: profile.social.find((item) => item.id === "github")?.href ?? "",
    icon: GitHubIcon,
  },
].map((item) => ({
  ...item,
  display: item.display ?? formatUrl(item.href),
}));

export function ContactSection() {
  const { dictionary } = useLanguage();

  return (
    <Section
      id="contact"
      title={dictionary.contact.title}
      subtitle={dictionary.contact.subtitle}
    >
      <div className="space-y-8">
        <Card>
          <p className="text-lg text-white/70">{dictionary.contact.cta}</p>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5 text-white/70 transition hover:border-white/20 hover:text-white"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                  {getCopy(dictionary, item.labelKey)}
                </p>
                <p className="mt-2 text-sm text-white/50">{item.display}</p>
              </div>
              <item.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
