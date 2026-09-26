"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/shared-components/section-heading";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";
import type { BrewMethod, RoastLevel } from "@/lib/types/coffee-calculator";
import {
  calculateCoffeeBreakdown,
  DEFAULT_CUP_SIZE,
  DEFAULT_RATIO,
  DEFAULT_SERVINGS,
} from "@/lib/utils/coffee-calculations";
import { CalculatorInputs } from "./calculator-inputs";
import { CalculatorResults } from "./calculator-results";

export function MortgageCalculator() {
  const sectionRef = useSectionReveal<HTMLElement>({ y: 32, stagger: 0.1 });
  const [servings, setServings] = useState(DEFAULT_SERVINGS);
  const [cupSizeMl, setCupSizeMl] = useState(DEFAULT_CUP_SIZE);
  const [brewRatio, setBrewRatio] = useState(DEFAULT_RATIO);
  const [brewMethod, setBrewMethod] = useState<BrewMethod>("pourover");
  const [roastLevel, setRoastLevel] = useState<RoastLevel>("medium");
  const breakdown = useMemo(
    () =>
      calculateCoffeeBreakdown({
        servings,
        cupSizeMl,
        brewRatio,
        brewMethod,
        roastLevel,
      }),
    [servings, cupSizeMl, brewRatio, brewMethod, roastLevel],
  );
  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,153,126,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div data-reveal className="mx-auto mb-10 flex max-w-2xl justify-center sm:mb-14">
          <SectionHeading
            tone="cinematic"
            title="Artisanal Brew & Ratio Customizer"
            description="Fine-tune your brew method, cup yield, and single-origin roast profile to calculate precision extraction recipes."
            align="center"
            className="mb-0"
          />
        </div>
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-surface/90 shadow-[0_24px_72px_rgba(26,26,28,0.08)] backdrop-blur-sm"
        >
          <div className="pointer-events-none absolute inset-0 premium-noise" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent sm:inset-x-12" />
          <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-12">
            <div className="order-1 p-6 sm:p-8 lg:col-span-7 lg:border-r lg:border-[color:var(--color-line)] lg:p-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
                Extraction Parameters
              </p>
              <CalculatorInputs
                servings={servings}
                cupSizeMl={cupSizeMl}
                brewRatio={brewRatio}
                brewMethod={brewMethod}
                roastLevel={roastLevel}
                onServingsChange={setServings}
                onCupSizeChange={setCupSizeMl}
                onBrewRatioChange={setBrewRatio}
                onBrewMethodChange={setBrewMethod}
                onRoastLevelChange={setRoastLevel}
              />
            </div>
            <div className="order-2 border-t border-[color:var(--color-line)] p-6 sm:p-8 lg:col-span-5 lg:border-t-0 lg:sticky lg:top-24 lg:self-start lg:p-8">
              <CalculatorResults breakdown={breakdown} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
