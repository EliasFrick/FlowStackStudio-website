"use client";

import { useState, useCallback, useEffect } from "react";
import SmoothScroller from "@/components/SmoothScroller";
import CanvasBackground from "@/components/CanvasBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TryBotSection from "@/components/TryBotSection";
import AboutSection from "@/components/AboutSection";
import Marquee from "@/components/Marquee";
import ContactSection from "@/components/ContactSection";
import { LanguageProvider } from "@/lib/LanguageContext";
import Footer from "@/components/Footer";

export default function PageClient() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  // Fallback: dismiss loader after 8s even if frames fail
  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 8000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LanguageProvider>
      {/* Loader */}
      <div
        className={`fixed inset-0 z-50 bg-bg-primary flex items-center justify-center transition-opacity duration-700 ${
          loaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="font-display text-2xl text-text-primary">
            FlowStack.Studio
          </span>
          <div className="w-32 h-px bg-text-muted/30 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary animate-[loading_1.5s_ease-in-out_infinite] origin-left" />
          </div>
        </div>
      </div>

      <SmoothScroller>
        <CanvasBackground onLoaded={handleLoaded} />
        <Header />
        <main className="relative z-20">
          <HeroSection />
          <ServicesSection />
          <TryBotSection />
          <AboutSection />
          <Marquee />
          <ContactSection />
          <Footer />
        </main>
      </SmoothScroller>
    </LanguageProvider>
  );
}
