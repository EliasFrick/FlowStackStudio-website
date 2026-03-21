"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "rotate-in"
  | "stagger-up"
  | "clip-reveal";

const animationConfigs: Record<
  AnimationType,
  { from: gsap.TweenVars; to: gsap.TweenVars }
> = {
  "fade-up": {
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  },
  "slide-left": {
    from: { x: -80, opacity: 0 },
    to: { x: 0, opacity: 1 },
  },
  "slide-right": {
    from: { x: 80, opacity: 0 },
    to: { x: 0, opacity: 1 },
  },
  "scale-up": {
    from: { scale: 0.85, opacity: 0 },
    to: { scale: 1, opacity: 1 },
  },
  "rotate-in": {
    from: { y: 40, rotation: 3, opacity: 0 },
    to: { y: 0, rotation: 0, opacity: 1 },
  },
  "stagger-up": {
    from: { y: 60, opacity: 0 },
    to: { y: 0, opacity: 1 },
  },
  "clip-reveal": {
    from: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
    to: { clipPath: "inset(0% 0 0 0)", opacity: 1 },
  },
};

export default function ScrollSection({
  children,
  animation = "fade-up",
  className = "",
  stagger = false,
  persist = false,
}: {
  children: React.ReactNode;
  animation?: AnimationType;
  className?: string;
  stagger?: boolean;
  persist?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const config = animationConfigs[animation];

    const ctx = gsap.context(() => {
      if (stagger) {
        const animateEls = el.querySelectorAll("[data-animate]");
        gsap.set(animateEls, config.from);
        gsap.to(animateEls, {
          ...config.to,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.set(el, config.from);
        gsap.to(el, {
          ...config.to,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [animation, stagger, persist]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
