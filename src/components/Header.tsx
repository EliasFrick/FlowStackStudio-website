"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLang();
  const tr = t(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
        scrolled ? "bg-bg-primary/80 backdrop-blur-md" : ""
      }`}
    >
      <Link
        href="/"
        className="font-display text-xl tracking-tight text-text-primary"
      >
        {tr.site.name}
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-accent transition-colors duration-300"
          >
            {tr.nav[link.key]}
          </a>
        ))}
        <div className="ml-2">
          <LanguageToggle />
        </div>
      </nav>

      {/* Mobile: language toggle + menu button */}
      <div className="md:hidden flex items-center gap-3">
        <LanguageToggle compact />

        <button
          className="flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? tr.header.closeMenu : tr.header.openMenu}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-px bg-text-primary transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-text-primary transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-md px-6 flex flex-col gap-6 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 py-8 opacity-100 visible" : "max-h-0 py-0 opacity-0 invisible"
        }`}
        aria-hidden={!mobileOpen}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
            className="font-mono text-sm uppercase tracking-[0.15em] text-text-secondary hover:text-accent transition-colors duration-300"
          >
            {tr.nav[link.key]}
          </a>
        ))}
      </nav>
    </header>
  );
}
