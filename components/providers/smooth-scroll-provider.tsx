"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      ScrollTrigger.config({ ignoreMobileResize: true });
      return;
    }
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    lenis.on("scroll", ScrollTrigger.update);
    lenis.on("scroll", () => {
      window.dispatchEvent(new CustomEvent("protonix:scroll"));
    });
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);
    const handleHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash) as HTMLElement | null;
        if (target) {
          lenis.scrollTo(target, { offset: -90, duration: 1.1 });
        }
      }
    };
    window.addEventListener("hashchange", handleHash);
    const hashTimer = setTimeout(handleHash, 250);
    return () => {
      clearTimeout(hashTimer);
      window.removeEventListener("hashchange", handleHash);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return <>{children}</>;
}
