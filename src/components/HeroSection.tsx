"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    const heading = headingRef.current;
    if (!el || !heading) return;

    const ctx = gsap.context(() => {
      // Staggered reveal of text lines
      const words = heading.querySelectorAll(".word");
      gsap.set(words, { y: 120, opacity: 0 });
      gsap.to(words, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.3,
      });

      // Fade label + tagline
      const fadeEls = el.querySelectorAll("[data-hero-fade]");
      gsap.set(fadeEls, { opacity: 0, y: 20 });
      gsap.to(fadeEls, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.8,
      });

      // Circle-wipe out on scroll
      gsap.to(el, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const words = SITE.tagline.split(" ");

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6"
    >
      <p
        data-hero-fade
        className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary mb-8"
      >
        {SITE.name}
      </p>
      <h1
        ref={headingRef}
        aria-label={SITE.tagline}
        className="font-display text-center overflow-hidden"
        style={{
          fontSize: "clamp(3.5rem, 12vw, 12rem)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="word inline-block mr-[0.25em]">
            {word}
          </span>
        ))}
      </h1>
      <p
        data-hero-fade
        className="font-body text-lg md:text-xl text-text-secondary mt-8 max-w-md text-center"
      >
        {SITE.description}
      </p>
      <div
        data-hero-fade
        className="mt-16 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-accent/50 animate-pulse" />
      </div>
    </section>
  );
}
