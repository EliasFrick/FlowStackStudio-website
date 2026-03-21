"use client";

import ScrollSection from "./ScrollSection";
import { ABOUT_TEXT } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 py-32 md:py-48">
      <ScrollSection animation="slide-right" stagger className="section-right">
        <p
          data-animate
          className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4"
        >
          002 / About
        </p>
        <h2
          data-animate
          className="font-display text-text-primary mb-12"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1 }}
        >
          Why FlowStack
        </h2>
        {ABOUT_TEXT.map((text, i) => (
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
