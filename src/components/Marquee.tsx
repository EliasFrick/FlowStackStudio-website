"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const marqueeText = t(lang).marquee;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-20 py-16 md:py-24 overflow-hidden" aria-hidden="true">
      <div
        ref={trackRef}
        className="whitespace-nowrap font-display uppercase text-accent/[0.06]"
        style={{
          fontSize: "clamp(6rem, 12vw, 14rem)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {marqueeText}
        {marqueeText}
      </div>
    </div>
  );
}
