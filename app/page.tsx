"use client";

import { useState } from "react";
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
import { ScrollZoom } from "@/components/shared-components/scroll-zoom";

export default function Home() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  return (
    <SmoothScrollProvider>
      <CinematicIntroOverlay onIntroComplete={() => setIsIntroFinished(true)} />
      <main className="home-cinematic relative isolate overflow-x-clip">
        <HomepageLuxuryAtmosphere />
        <Navbar variant="cinematic" />
        <ScrollZoom>
          <div data-scroll-zoom className="w-full will-change-transform">
            <HeroSection isIntroFinished={isIntroFinished} />
          </div>
          <div data-scroll-zoom className="w-full will-change-transform">
            <CoffeeMenuSection />
          </div>
          <div className="w-full">
            <WhyChooseUsSection />
          </div>
          <div data-scroll-zoom className="w-full will-change-transform">
            <AiVoiceBookingWidget />
          </div>
          <div data-scroll-zoom className="w-full will-change-transform">
            <TestimonialsSection />
          </div>
          <Footer variant="cinematic" />
        </ScrollZoom>
      </main>
    </SmoothScrollProvider>
  );
}
