"use client";

import { SectionHeading } from "@/components/shared-components/section-heading";
import { benefits } from "@/lib/data/benefits";
import { BenefitStackCard } from "./benefit-stack-card";

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 max-w-7xl mx-auto">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
        <SectionHeading
          tone="cinematic"
          title="The Sombra Artisanal Philosophy"
          description="Elevating daily ritual into sensory art through micro-lot shade cultivation, infrared roasting, and curated lounge comfort."
          align="center"
          className="mb-0"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className="overflow-hidden rounded-[32px] border border-[color:var(--color-line)] bg-surface shadow-sm transition-all duration-300 hover:border-champagne/60 hover:shadow-lg"
          >
            <BenefitStackCard benefit={benefit} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
