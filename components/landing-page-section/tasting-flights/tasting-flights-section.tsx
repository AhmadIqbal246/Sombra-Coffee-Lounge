"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/shared-components/section-heading";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";
import { tastingFlights } from "@/lib/data/coffee-menu";
import { FlightCard } from "./flight-card";

export function TastingFlightsSection() {
  const sectionRef = useSectionReveal<HTMLElement>({ y: 32, stagger: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="flights"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,153,126,0.07),transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-champagne/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div data-reveal className="mx-auto mb-12 flex max-w-3xl justify-center sm:mb-16">
          <SectionHeading
            tone="cinematic"
            title="Signature Tasting Flights & Terroir Showcase"
            description="Comparative sensorial flights guided by our certified baristas. Explore micro-lot elevations, anaerobic processing, and slow-drip craftsmanship."
            align="center"
            className="mb-0"
          />
        </div>

        <div data-reveal className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tastingFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>

        <div data-reveal className="mt-14 text-center">
          <div className="inline-flex flex-col items-center justify-between gap-4 rounded-2xl border border-[color:var(--color-line)] bg-surface p-6 shadow-sm sm:flex-row sm:px-8 sm:py-5">
            <div className="text-center sm:text-left">
              <p className="font-display text-base font-semibold text-text sm:text-lg">
                Planning a Private Gathering or Corporate Salon?
              </p>
              <p className="text-xs text-muted">
                Our private acoustic reserve room accommodates up to 14 guests with dedicated sommelier guidance.
              </p>
            </div>
            <Link
              href="#booking"
              className="cursor-pointer whitespace-nowrap rounded-xl bg-accent px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-jet sm:text-sm"
            >
              Inquire for Private Room
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
