"use client";

import { createContext, useContext, useCallback, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { type Lang } from "./translations";

const STORAGE_KEY = "flowstack-lang";

let currentLang: Lang = "en";
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot(): Lang {
  return currentLang;
}

function getServerSnapshot(): Lang {
  return "en";
}

function updateLang(newLang: Lang) {
  currentLang = newLang;
  listeners.forEach((cb) => cb());
}

// Initialize from storage/browser on first client load
if (typeof window !== "undefined") {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "de") {
    currentLang = stored;
  } else {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("de")) currentLang = "de";
  }
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((newLang: Lang) => {
    updateLang(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
