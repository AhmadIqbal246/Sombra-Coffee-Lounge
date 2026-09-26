"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/landing-page-section/hero/hero-section";
import { CoffeeMenuSection } from "@/components/landing-page-section/menu/coffee-menu-section";
import { WhyChooseUsSection } from "@/components/landing-page-section/why-choose-us/why-choose-us-section";
import { AiVoiceBookingWidget } from "@/components/landing-page-section/booking/ai-voice-booking-widget";
import { TestimonialsSection } from "@/components/landing-page-section/testimonials/testimonials-section";
import { HomepageLuxuryAtmosphere } from "@/components/landing-page-section/homepage-luxury-atmosphere";
import { CinematicIntroOverlay } from "@/components/landing-page-section/intro/cinematic-intro-overlay";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Footer } from "@/components/shared-components/footer";
import { Navbar } from "@/components/shared-components/navbar";

export default function Home() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (sessionStorage.getItem("sombra_intro_completed") === "true") {
          setIsIntroFinished(true);
        }
      } catch {}
    }
  }, []);

  return (
    <SmoothScrollProvider>
      <CinematicIntroOverlay onIntroComplete={() => setIsIntroFinished(true)} />
      <main className="home-cinematic relative isolate overflow-x-clip">
        <HomepageLuxuryAtmosphere />
        <Navbar variant="cinematic" />
        <HeroSection isIntroFinished={isIntroFinished} />
        <CoffeeMenuSection />
        <WhyChooseUsSection />
        <AiVoiceBookingWidget />
        <TestimonialsSection />
        <Footer variant="cinematic" />
      </main>
    </SmoothScrollProvider>
  );
}
