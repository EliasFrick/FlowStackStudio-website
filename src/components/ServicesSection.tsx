"use client";

import ScrollSection from "./ScrollSection";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-20 py-32 md:py-48">
      <ScrollSection animation="fade-up" stagger className="section-left">
        <p
          data-animate
          className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4"
        >
          001 / Services
        </p>
        <h2
          data-animate
          className="font-display text-text-primary mb-16"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1 }}
        >
          What We Do
        </h2>
        {SERVICES.map((service, i) => (
          <div key={i} data-animate className="mb-10 last:mb-0">
            <h3 className="font-body text-xl md:text-2xl font-semibold text-text-primary mb-2">
              {service.title}
            </h3>
            <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
              {service.description}
            </p>
            {i < SERVICES.length - 1 && (
              <div className="mt-10 h-px bg-text-muted/20 max-w-lg" />
            )}
          </div>
        ))}
      </ScrollSection>
    </section>
  );
}
