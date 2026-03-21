"use client";

import { useState, type FormEvent } from "react";
import ScrollSection from "./ScrollSection";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLang();
  const tr = t(lang);

  // TODO: Wire up to API route or email service to actually send form data
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-20 py-32 md:py-48 px-6">
      <ScrollSection animation="scale-up" persist className="section-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4">
          {tr.contact.label}
        </p>
        <h2
          className="font-display text-text-primary mb-6"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: 1.05,
          }}
        >
          {tr.contact.heading}
        </h2>
        <p className="font-body text-lg text-text-secondary mb-12 max-w-sm md:max-w-md">
          {tr.contact.subtitle}
        </p>

        {submitted ? (
          <div className="font-body text-xl text-text-primary">
            {tr.contact.success}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm md:max-w-md flex flex-col gap-6"
          >
            <label className="sr-only" htmlFor="contact-name">{tr.contact.name}</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder={tr.contact.name}
              className="w-full min-h-[44px] bg-transparent border-b border-text-muted/30 pb-3 font-body text-base text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors"
            />
            <label className="sr-only" htmlFor="contact-email">{tr.contact.email}</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder={tr.contact.email}
              className="w-full min-h-[44px] bg-transparent border-b border-text-muted/30 pb-3 font-body text-base text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors"
            />
            <label className="sr-only" htmlFor="contact-message">{tr.contact.messageLabel}</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder={tr.contact.message}
              className="w-full min-h-[44px] bg-transparent border-b border-text-muted/30 pb-3 font-body text-base text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="mt-4 self-center border border-accent/30 px-10 py-4 min-h-[44px] font-mono text-xs uppercase tracking-[0.2em] text-text-primary hover:bg-accent hover:text-bg-primary transition-all duration-300"
            >
              {tr.contact.submit}
            </button>
          </form>
        )}
      </ScrollSection>
    </section>
  );
}
