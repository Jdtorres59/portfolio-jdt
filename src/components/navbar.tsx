"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useScrollSpy } from "@/lib/use-scroll-spy";
import { useLanguage } from "@/components/language-provider";
import { GlobeIcon } from "@/components/icons";

const sectionIds = ["home", "about", "projects", "certifications", "contact"];

export function Navbar() {
  const { dictionary, locale, setLocale } = useLanguage();
  const activeId = useScrollSpy(sectionIds);

  const navItems = [
    { id: "home", label: dictionary.nav.home },
    { id: "about", label: dictionary.nav.about },
    { id: "projects", label: dictionary.nav.projects },
    { id: "certifications", label: dictionary.nav.certifications },
    { id: "contact", label: dictionary.nav.contact },
  ];

  const toggleLocale = () => {
    setLocale(locale === "en" ? "es" : "en");
  };

  return (
    <div className="pointer-events-none fixed top-6 z-50 flex w-full justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] backdrop-blur sm:gap-4 sm:px-4">
        <ul className="flex items-center gap-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              {activeId === item.id ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : null}
              <a
                href={`#${item.id}`}
                className={cn(
                  "relative z-10 block rounded-full px-2 py-1 transition sm:px-3",
                  activeId === item.id
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggleLocale}
          aria-label={dictionary.accessibility.languageToggle}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white sm:px-3 sm:text-xs"
        >
          <GlobeIcon className="h-4 w-4" />
          {dictionary.languages[locale]}
        </button>
      </div>
    </div>
  );
}
