"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CoffeeCalculatorBreakdown } from "@/lib/types/coffee-calculator";
import { formatExtractionTime, formatGrams } from "@/lib/utils/coffee-calculations";
import { CalculatorFlavorChart } from "./calculator-flavor-chart";

interface CalculatorResultsProps {
  breakdown: CoffeeCalculatorBreakdown;
}

export function CalculatorResults({ breakdown }: CalculatorResultsProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--color-line)] bg-jet p-6 text-white shadow-[0_28px_80px_rgba(18,18,20,0.22)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,153,126,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent sm:inset-x-8" />
      <div className="relative space-y-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne">
            Required Specialty Coffee Dose
          </p>
          <motion.div
            key={breakdown.totalCoffeeGrams}
            initial={{ opacity: 0.6, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-2 flex items-baseline gap-2"
          >
            <span className="font-display text-5xl tracking-tight sm:text-6xl">
              {formatGrams(breakdown.totalCoffeeGrams)}
            </span>
            <span className="text-sm font-medium text-white/55">ground coffee</span>
          </motion.div>
          <p className="mt-2 text-xs text-white/50">
            For {breakdown.totalWaterMl}ml filtered water at {breakdown.recommendedTempC}°C · Ratio {breakdown.waterRatioDisplay}
          </p>
        </div>
        <CalculatorFlavorChart breakdown={breakdown} />
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Grind</p>
            <p className="mt-1 font-display text-sm font-semibold text-white">{breakdown.recommendedGrind}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Brew Time</p>
            <p className="mt-1 font-display text-sm font-semibold text-white">
              {formatExtractionTime(breakdown.extractionTimeSec)}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Caffeine</p>
            <p className="mt-1 font-display text-sm font-semibold text-white">~{breakdown.estimatedCaffeineMg}mg</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Tasting Notes</p>
          <div className="flex flex-wrap gap-1.5">
            {breakdown.flavorNotes.map((note) => (
              <span
                key={note}
                className="rounded-md border border-champagne/30 bg-champagne/10 px-2.5 py-1 text-[11px] text-champagne"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
        <Link
          href="#booking"
          className="block w-full cursor-pointer rounded-xl bg-champagne py-3.5 text-center text-sm font-semibold text-jet transition-colors hover:bg-white"
        >
          Reserve Lounge Table & Tasting Flight
        </Link>
        <p className="text-center text-[11px] leading-relaxed text-white/40">
          Calibrated for Sombra small-batch single-origin coffees.
        </p>
      </div>
    </div>
  );
}
