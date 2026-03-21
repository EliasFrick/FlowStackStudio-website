"use client";

import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <footer className="relative z-20 py-12 px-6 flex flex-col gap-2 items-center md:flex-row md:justify-between border-t border-text-muted/10">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
        &copy; {new Date().getFullYear()} {tr.site.name}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
        {tr.footer.rights}
      </span>
    </footer>
  );
}
