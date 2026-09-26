"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const COFFEE_IMAGE = "/Sobra coffee lounge.png";

interface HeroSectionProps {
  isIntroFinished?: boolean;
}

export function HeroSection({ isIntroFinished = true }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = [
      titleRef.current,
      copyRef.current,
      ctaRef.current,
    ];
    if (reduceMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, { opacity: 1, y: 0, scale: 1 });
      }
      return;
    }
    if (!isIntroFinished) {
      gsap.set(targets, { opacity: 0, y: 24 });
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, { opacity: 0, y: 35, scale: 0.92 });
      }
      return;
    }
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1 },
          0.15,
        )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.55",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.4",
        );
      if (imageContainerRef.current) {
        intro.fromTo(
          imageContainerRef.current,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            onComplete: () => {
              if (imageContainerRef.current && !reduceMotion) {
                gsap.to(imageContainerRef.current, {
                  y: -12,
                  duration: 3.2,
                  ease: "sine.inOut",
                  repeat: -1,
                  yoyo: true,
                });
              }
            },
          },
          0.2,
        );
      }
    }, section);
    return () => ctx.revert();
  }, [isIntroFinished]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-20 md:pb-10 lg:pb-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,153,126,0.14),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-champagne/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-30 w-full px-6 sm:px-10 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-10 2xl:pl-16 2xl:pr-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          <div className="-mt-4 space-y-6 text-center sm:-mt-6 lg:-mt-10 xl:-mt-14 lg:col-span-7 lg:text-left xl:col-span-7 2xl:col-span-7">
            <h1
              ref={titleRef}
              className="leading-[0.85] tracking-wide text-text opacity-0"
            >
              <span className="block font-script text-7xl font-normal text-champagne sm:text-8xl md:text-[9.5rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[14.5rem]">
                Sombra
              </span>
              <span className="mt-2 block font-cinzel text-3xl font-bold uppercase tracking-[0.03em] text-text sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.25rem] sm:mt-3">
                Coffee Lounge
              </span>
            </h1>
            <p
              ref={copyRef}
              className="mx-auto max-w-xl text-base leading-relaxed text-text/85 opacity-0 md:text-lg lg:mx-0"
            >
              Artisanal shade-grown single-origin micro-lots, master infrared roasting, and an acoustic sanctuary for sensory exploration. Reserve your table or tasting flight.
            </p>
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center justify-center gap-4 pt-2 opacity-0 lg:justify-start"
            >
              <Link
                href="#booking"
                className="cursor-pointer rounded-xl bg-accent px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-jet hover:shadow-xl"
              >
                Reserve Lounge Table
              </Link>
              <Link
                href="#calculator"
                className="cursor-pointer rounded-xl border border-[color:var(--color-line)] bg-surface/90 px-8 py-3.5 font-semibold text-text shadow-sm backdrop-blur-sm transition-all hover:border-champagne/50 hover:bg-surface"
              >
                Brew & Ratio Customizer
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-span-5 lg:justify-end xl:col-span-5 2xl:col-span-5">
            <div
              ref={imageContainerRef}
              className="relative flex items-center justify-center opacity-0 will-change-transform lg:translate-x-6 xl:translate-x-10 2xl:translate-x-14"
            >
              <div className="relative h-[400px] w-[400px] sm:h-[520px] sm:w-[520px] md:h-[600px] md:w-[600px] lg:h-[680px] lg:w-[680px] xl:h-[780px] xl:w-[780px] 2xl:h-[860px] 2xl:w-[860px]">
                <Image
                  src={COFFEE_IMAGE}
                  alt="Sombra Coffee Lounge Signature Artisanal Cup"
                  fill
                  priority
                  sizes="(max-width: 768px) 400px, (max-width: 1024px) 680px, 860px"
                  className="object-contain drop-shadow-[0_24px_50px_rgba(18,18,20,0.24)]"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 h-16 w-4/5 rounded-full bg-jet/25 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
