"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const section = wrapper.querySelector("section");
    if (!section) return;

    const ctx = gsap.context(() => {
      // Stagger up + counter
      const items = section.querySelectorAll("[data-stat]");
      gsap.set(items, { y: 60, opacity: 0 });
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Counter animations
      STATS.forEach((stat, i) => {
        if (!numbersRef.current[i]) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            const el = numbersRef.current[i];
            if (el) {
              el.textContent =
                (Number.isInteger(stat.value)
                  ? Math.round(obj.val)
                  : obj.val.toFixed(1)) + stat.suffix;
            }
          },
        });
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef}>
      <section className="relative z-20 py-32 md:py-48 section-center px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-16">
          Numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 max-w-4xl">
          {STATS.map((stat, i) => (
            <div key={i} data-stat className="flex flex-col items-center">
              <span
                ref={(el) => { numbersRef.current[i] = el; }}
                className="font-display text-text-primary block"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 1,
                }}
              >
                0{stat.suffix}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
