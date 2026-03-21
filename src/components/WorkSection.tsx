"use client";

import ScrollSection from "./ScrollSection";
import { PROJECTS } from "@/lib/constants";

export default function WorkSection() {
  return (
    <section id="work" className="relative z-20 py-32 md:py-48">
      <ScrollSection animation="clip-reveal" stagger className="section-left">
        <p
          data-animate
          className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4"
        >
          003 / Work
        </p>
        <h2
          data-animate
          className="font-display text-text-primary mb-16"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1 }}
        >
          Selected Projects
        </h2>
        {PROJECTS.map((project, i) => (
          <div key={i} data-animate className="mb-10 last:mb-0">
            <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-1">
              {project.title}
            </h3>
            <p className="font-body text-base text-text-secondary">
              {project.description}
            </p>
            {i < PROJECTS.length - 1 && (
              <div className="mt-10 h-px bg-text-muted/20 max-w-lg" />
            )}
          </div>
        ))}
      </ScrollSection>
    </section>
  );
}
