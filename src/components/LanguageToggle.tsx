"use client";

import { useLang } from "@/lib/LanguageContext";

export default function LanguageToggle({ compact }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  const px = compact ? "px-2.5" : "px-3";
  const py = compact ? "py-1" : "py-1.5";

  return (
    <div
      className="flex items-center border border-text-muted/20 rounded-full overflow-hidden"
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`font-mono text-[10px] uppercase tracking-[0.1em] ${px} ${py} min-h-[32px] transition-colors duration-300 ${
          lang === "en"
            ? "bg-accent text-bg-primary"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        className={`font-mono text-[10px] uppercase tracking-[0.1em] ${px} ${py} min-h-[32px] transition-colors duration-300 ${
          lang === "de"
            ? "bg-accent text-bg-primary"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        DE
      </button>
    </div>
  );
}
