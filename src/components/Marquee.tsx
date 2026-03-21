"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_TEXT =
  "DESIGN \u2014 DEVELOP \u2014 DEPLOY \u2014 DESIGN \u2014 DEVELOP \u2014 DEPLOY \u2014 ";

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

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
        className="whitespace-nowrap font-display uppercase text-text-primary/[0.06]"
        style={{
          fontSize: "clamp(6rem, 12vw, 14rem)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {MARQUEE_TEXT}
        {MARQUEE_TEXT}
      </div>
    </div>
  );
}
