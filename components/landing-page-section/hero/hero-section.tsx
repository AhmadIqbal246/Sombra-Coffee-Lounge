"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const COFFEE_IMAGE = "/Sobra coffee lounge.png";

interface HeroSectionProps {
  isIntroFinished?: boolean;
}

export function HeroSection({ isIntroFinished = true }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = [titleRef.current, rowRef.current];
    if (reduceMotion) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
      return;
    }
    if (!isIntroFinished) {
      gsap.set(titleRef.current, { opacity: 0, y: 24 });
      gsap.set(rowRef.current, { opacity: 0, y: 20, scale: 0.94 });
      return;
    }
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 1 },
          0.15,
        )
        .fromTo(
          rowRef.current,
          { opacity: 0, y: 24, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1 },
          "-=0.55",
        );
      if (imageContainerRef.current && !reduceMotion) {
        gsap.to(imageContainerRef.current, {
          y: "-=12",
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, section);
    return () => ctx.revert();
  }, [isIntroFinished]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-4 pt-24 pb-8 sm:px-6 sm:pt-28 sm:pb-12 md:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,153,126,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-champagne/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center">
        <h1
          ref={titleRef}
          className="w-full text-center leading-[0.88] opacity-0"
        >
          <span className="block font-script text-6xl font-normal text-champagne sm:text-8xl md:text-[9.5rem] lg:text-[11.5rem] xl:text-[13.5rem] 2xl:text-[15.5rem]">
            Sombra
          </span>
        </h1>

        <div
          ref={rowRef}
          className="mt-1 grid w-full grid-cols-2 items-center justify-center gap-x-2.5 opacity-0 will-change-transform sm:mt-2 sm:gap-x-4 md:-mt-20 md:flex md:flex-row md:gap-6 lg:-mt-28 lg:gap-8 xl:-mt-36 xl:gap-10 2xl:-mt-44"
        >
          <span className="col-start-1 row-start-1 justify-self-end font-script text-3xl font-normal tracking-wide text-text sm:text-5xl md:text-6xl md:justify-self-auto lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Coffee
          </span>

          <div
            ref={imageContainerRef}
            className="relative col-span-2 col-start-1 row-start-2 mt-6 flex shrink-0 items-center justify-center will-change-transform sm:mt-8 md:mt-0 md:-translate-y-14 lg:-translate-y-16 xl:-translate-y-20"
          >
            <div className="relative h-52 w-52 sm:h-72 sm:w-72 md:h-[28rem] md:w-[28rem] lg:h-[36rem] lg:w-[36rem] xl:h-[44rem] xl:w-[44rem] 2xl:h-[50rem] 2xl:w-[50rem]">
              <Image
                src={COFFEE_IMAGE}
                alt="Sombra Coffee Lounge Signature Artisanal Cup"
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 500px, 800px"
                className="object-contain drop-shadow-[0_24px_50px_rgba(18,18,20,0.24)]"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-4 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-full bg-jet/25 blur-xl sm:-bottom-6 sm:h-12 sm:blur-2xl" />
          </div>

          <span className="col-start-2 row-start-1 justify-self-start font-script text-3xl font-normal tracking-wide text-text sm:text-5xl md:text-6xl md:justify-self-auto lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Lounge
          </span>
        </div>
      </div>
    </section>
  );
}
