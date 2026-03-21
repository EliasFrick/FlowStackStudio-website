"use client";

import ScrollSection from "./ScrollSection";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const PHONE_NUMBERS = [
  {
    country: { en: "Germany", de: "Deutschland" },
    flag: "\u{1F1E9}\u{1F1EA}",
    number: "+49 123 456 7890",
    tel: "+491234567890",
  },
  {
    country: { en: "United States", de: "Vereinigte Staaten" },
    flag: "\u{1F1FA}\u{1F1F8}",
    number: "+1 (555) 123-4567",
    tel: "+15551234567",
  },
];

export default function TryBotSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="try-bot" className="relative z-20 py-32 md:py-48 px-6">
      <ScrollSection animation="fade-up" stagger className="section-center">
        <p
          data-animate
          className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4"
        >
          {tr.tryBot.label}
        </p>
        <h2
          data-animate
          className="font-display text-text-primary mb-6"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: 1.05,
          }}
        >
          {tr.tryBot.heading}
        </h2>
        <p
          data-animate
          className="font-body text-lg text-text-secondary mb-16 max-w-sm md:max-w-md"
        >
          {tr.tryBot.subtitle}
        </p>

        <div
          data-animate
          className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center"
        >
          {PHONE_NUMBERS.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="group flex-1 flex flex-col items-center gap-4 rounded-2xl border border-text-muted/15 bg-bg-elevated/50 backdrop-blur-sm px-8 py-10 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_var(--accent)]"
            >
              <span className="text-4xl">{phone.flag}</span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                {phone.country[lang]}
              </span>
              <span className="font-display text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors duration-300">
                {phone.number}
              </span>
              <span className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent/70 group-hover:text-accent transition-colors duration-300">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {tr.tryBot.callNow}
              </span>
            </a>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
}
