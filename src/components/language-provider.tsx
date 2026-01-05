"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultLocale, i18n } from "@/content/i18n";
import type { Locale } from "@/content/types";

const STORAGE_KEY = "portfolio-language";

type LanguageContextValue = {
  locale: Locale;
  dictionary: (typeof i18n)[Locale];
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in i18n) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
      return;
    }
    document.documentElement.lang = defaultLocale;
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const dictionary = useMemo(() => i18n[locale], [locale]);

  const value = useMemo(
    () => ({
      locale,
      dictionary,
      setLocale,
    }),
    [locale, dictionary]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
