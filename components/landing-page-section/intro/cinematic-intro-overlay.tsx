"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const INTRO_SESSION_KEY = "sombra_intro_completed";

interface CinematicIntroOverlayProps {
  onIntroComplete?: () => void;
}

export function CinematicIntroOverlay({ onIntroComplete }: CinematicIntroOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onIntroCompleteRef = useRef(onIntroComplete);
  onIntroCompleteRef.current = onIntroComplete;
  const [isComplete, setIsComplete] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
      } catch {
        return false;
      }
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (sessionStorage.getItem(INTRO_SESSION_KEY) === "true") {
          setIsComplete(true);
          onIntroCompleteRef.current?.();
          return;
        }
      } catch {}
    }
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finishIntro = () => {
      try {
        sessionStorage.setItem(INTRO_SESSION_KEY, "true");
      } catch {}
      setIsComplete(true);
      onIntroCompleteRef.current?.();
    };
    if (reduceMotion) {
      finishIntro();
      return;
    }
    let animationFrameId: number;
    let time = 0;
    const state = { scale: 1 };
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const targetScale = Math.max(1600, Math.ceil(1600 * (window.innerHeight / Math.max(window.innerWidth, 1))));
    const tl = gsap.timeline({
      onComplete: () => {
        finishIntro();
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", resize);
      },
    });
    tl.to({}, { duration: 0.7 })
      .to(state, {
        scale: targetScale,
        duration: 1.15,
        ease: "power2.in",
      })
      .to(
        container,
        {
          opacity: 0,
          duration: 0.35,
          ease: "power1.out",
        },
        "-=0.35",
      )
      .call(() => {
        onIntroCompleteRef.current?.();
      }, [], "-=0.2");
    const fallbackTimer = setTimeout(() => {
      finishIntro();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      tl.kill();
    }, 2600);
    const getFontString = (size: number) =>
      `900 ${size}px "Manrope", "Bodoni Moda", system-ui, -apple-system, sans-serif`;
    const render = () => {
      time += 0.005;
      const w = canvas.width;
      const h = canvas.height;
      const text = "SOMBRA COFFEE LOUNGE";
      ctx.font = getFontString(100);
      const measured = ctx.measureText(text).width;
      const targetWidth = w * 0.94;
      const fontScale = targetWidth / Math.max(measured, 1);
      const fontSize = Math.max(Math.round(100 * fontScale), 32);
      const font = getFontString(fontSize);
      ctx.font = font;
      const totalWidth = ctx.measureText(text).width;
      const prefixWidth = ctx.measureText("SOMBRA CO").width;
      const fWidth = ctx.measureText("F").width;
      const startX = (w - totalWidth) / 2;
      const originX = startX + prefixWidth + fWidth * 0.22;
      const originY = h / 2;
      ctx.save();
      ctx.clearRect(0, 0, w, h);
      ctx.translate(originX, originY);
      ctx.scale(state.scale, state.scale);
      ctx.translate(-originX, -originY);
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#121214";
      ctx.fillRect(-w, -h, w * 3, h * 3);
      const grad1 = ctx.createRadialGradient(
        w * 0.5 + Math.sin(time * 0.7) * w * 0.22,
        h * 0.45 + Math.cos(time * 0.5) * h * 0.22,
        w * 0.05,
        w * 0.5,
        h * 0.5,
        w * 0.85,
      );
      grad1.addColorStop(0, "rgba(168, 153, 126, 0.95)");
      grad1.addColorStop(0.4, "rgba(61, 74, 92, 0.85)");
      grad1.addColorStop(1, "rgba(18, 18, 20, 0.98)");
      ctx.fillStyle = grad1;
      ctx.fillRect(-w, -h, w * 3, h * 3);
      const grad2 = ctx.createRadialGradient(
        w * 0.35 + Math.cos(time * 0.4) * w * 0.18,
        h * 0.55 + Math.sin(time * 0.6) * h * 0.18,
        0,
        w * 0.35,
        h * 0.55,
        w * 0.55,
      );
      grad2.addColorStop(0, "rgba(241, 240, 236, 0.35)");
      grad2.addColorStop(0.5, "rgba(168, 153, 126, 0.2)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(-w, -h, w * 3, h * 3);
      const grad3 = ctx.createRadialGradient(
        w * 0.68 + Math.sin(time * 0.35) * w * 0.18,
        h * 0.35 + Math.cos(time * 0.45) * h * 0.18,
        0,
        w * 0.68,
        h * 0.35,
        w * 0.45,
      );
      grad3.addColorStop(0, "rgba(168, 153, 126, 0.4)");
      grad3.addColorStop(0.5, "rgba(61, 74, 92, 0.25)");
      grad3.addColorStop(1, "transparent");
      ctx.fillStyle = grad3;
      ctx.fillRect(-w, -h, w * 3, h * 3);
      ctx.globalCompositeOperation = "destination-out";
      ctx.font = font;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(text, w / 2, h / 2);
      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      tl.kill();
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] pointer-events-auto cursor-pointer overflow-hidden bg-transparent"
      onClick={() => {
        try {
          sessionStorage.setItem(INTRO_SESSION_KEY, "true");
        } catch {}
        setIsComplete(true);
        onIntroCompleteRef.current?.();
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
