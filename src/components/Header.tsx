"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md" : ""
      }`}
    >
      <a
        href="/"
        className="font-display text-xl tracking-tight text-text-primary"
      >
        {SITE.name}
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
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

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-md py-8 px-6 flex flex-col gap-6 md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
