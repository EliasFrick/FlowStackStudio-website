"use client";

import ScrollSection from "./ScrollSection";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function AboutSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="about" className="relative z-20 py-32 md:py-48">
      <ScrollSection animation="slide-right" stagger className="section-right">
        <p
          data-animate
          className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4"
        >
          {tr.about.label}
        </p>
        <h2
          data-animate
          className="font-display text-text-primary mb-12"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1 }}
        >
          {tr.about.heading}
        </h2>
        {tr.about.paragraphs.map((text, i) => (
          <p
            key={i}
            data-animate
            className="font-body text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mb-6 last:mb-0"
          >
            {text}
          </p>
        ))}
      </ScrollSection>
    </section>
  );
}
