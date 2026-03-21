"use client";

import { useState, type FormEvent } from "react";
import ScrollSection from "./ScrollSection";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: Wire up to API route or email service to actually send form data
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-20 py-32 md:py-48 px-6">
      <ScrollSection animation="scale-up" persist className="section-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4">
          004 / Contact
        </p>
        <h2
          className="font-display text-text-primary mb-6"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: 1.05,
          }}
        >
          Let&apos;s Build Something
        </h2>
        <p className="font-body text-lg text-text-secondary mb-12 max-w-md">
          Have a project in mind? Tell us about it and we&apos;ll get back to
          you within 24 hours.
        </p>

        {submitted ? (
          <div className="font-body text-xl text-text-primary">
            Thank you. We&apos;ll be in touch.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-6"
          >
            <label className="sr-only" htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full bg-transparent border-b border-text-muted/30 pb-3 font-body text-base text-text-primary placeholder:text-text-muted outline-none focus:border-text-secondary transition-colors"
            />
            <label className="sr-only" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full bg-transparent border-b border-text-muted/30 pb-3 font-body text-base text-text-primary placeholder:text-text-muted outline-none focus:border-text-secondary transition-colors"
            />
            <label className="sr-only" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project"
              className="w-full bg-transparent border-b border-text-muted/30 pb-3 font-body text-base text-text-primary placeholder:text-text-muted outline-none focus:border-text-secondary transition-colors resize-none"
            />
            <button
              type="submit"
              className="mt-4 self-center border border-text-secondary/30 px-10 py-4 font-mono text-xs uppercase tracking-[0.2em] text-text-primary hover:bg-text-primary hover:text-bg-primary transition-all duration-300"
            >
              Start a Project
            </button>
          </form>
        )}
      </ScrollSection>
    </section>
  );
}
