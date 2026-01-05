"use client";

import { profile } from "@/content/profile";
import { useLanguage } from "@/components/language-provider";
import { getCopy } from "@/lib/get-copy";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const iconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  email: MailIcon,
};

export function SocialDock() {
  const { dictionary } = useLanguage();

  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 flex-row gap-3 md:bottom-6 md:left-6 md:translate-x-0 md:flex-col">
      {profile.social.map((link) => {
        const Icon = iconMap[link.id];
        return (
          <a
            key={link.id}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={getCopy(dictionary, link.labelKey)}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/20 hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
