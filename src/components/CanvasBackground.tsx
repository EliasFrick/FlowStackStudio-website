"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FRAME_COUNT, IMAGE_SCALE } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function CanvasBackground({ onLoaded }: { onLoaded?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const failedFramesRef = useRef<Set<number>>(new Set());
  const scrollFrameRef = useRef({ current: 0 });
  const onLoadedRef = useRef(onLoaded);
  const [loaded, setLoaded] = useState(false);

  onLoadedRef.current = onLoaded;

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = framesRef.current[frameIndex];
    if (!img || !img.naturalWidth || failedFramesRef.current.has(frameIndex)) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const canvasW = canvas.width;
    const canvasH = canvas.height;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    // Padded cover mode
    const scale =
      Math.max(canvasW / imgW, canvasH / imgH) * IMAGE_SCALE;
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const drawX = (canvasW - drawW) / 2;
    const drawY = (canvasH - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  useEffect(() => {
    let completedCount = 0;
    const images: HTMLImageElement[] = [];

    const onComplete = () => {
      completedCount++;
      if (completedCount === FRAME_COUNT) {
        setLoaded(true);
        onLoadedRef.current?.();
        drawFrame(0);
      }
    };

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const num = String(i).padStart(4, "0");
      img.src = `/frames/frame_${num}.png`;
      img.onload = onComplete;
      img.onerror = () => {
        failedFramesRef.current.add(i - 1);
        onComplete();
      };
      images.push(img);
    }
    framesRef.current = images;
  }, [drawFrame]);

  useEffect(() => {
    if (!loaded) return;

    const frameObj = scrollFrameRef.current;
    frameObj.current = 0;

    const container = containerRef.current;
    const ctx = gsap.context(() => {
      gsap.to(frameObj, {
        current: FRAME_COUNT - 1,
        ease: "none",
        snap: "current",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: () => {
            const idx = Math.round(frameObj.current);
            drawFrame(idx);
          },
        },
      });
    }, container || undefined);

    return () => ctx.revert();
  }, [loaded, drawFrame]);

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (loaded) {
        drawFrame(Math.round(scrollFrameRef.current.current));
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [loaded, drawFrame]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{ opacity: 0.1, filter: "blur(2px)" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      {/* Dark scrim over canvas */}
      <div className="absolute inset-0 bg-[#0a0a0a]/88" />
    </div>
  );
}
