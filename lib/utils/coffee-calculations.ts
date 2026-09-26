import type {
  BrewMethod,
  CoffeeCalculatorBreakdown,
  CoffeeCalculatorInputs,
  RoastLevel,
} from "@/lib/types/coffee-calculator";
export const DEFAULT_SERVINGS = 2;
export const DEFAULT_CUP_SIZE = 250;
export const DEFAULT_RATIO = 16;
export const BREW_METHOD_SPECS: Record<
  BrewMethod,
  {
    name: string;
    defaultRatio: number;
    recommendedTemp: number;
    grind: string;
    timeSec: number;
    baseCaffeinePerGram: number;
  }
> = {
  pourover: {
    name: "Pour Over (V60 / Chemex)",
    defaultRatio: 16,
    recommendedTemp: 93,
    grind: "Medium-Fine",
    timeSec: 210,
    baseCaffeinePerGram: 12,
  },
  espresso: {
    name: "Espresso Precision",
    defaultRatio: 2,
    recommendedTemp: 92,
    grind: "Ultra Fine",
    timeSec: 30,
    baseCaffeinePerGram: 14,
  },
  frenchpress: {
    name: "French Press Immersion",
    defaultRatio: 15,
    recommendedTemp: 95,
    grind: "Coarse",
    timeSec: 240,
    baseCaffeinePerGram: 11,
  },
  aeropress: {
    name: "AeroPress Craft",
    defaultRatio: 12,
    recommendedTemp: 88,
    grind: "Medium-Coarse",
    timeSec: 90,
    baseCaffeinePerGram: 13,
  },
  colddrip: {
    name: "Kyoto Slow Cold Drip",
    defaultRatio: 10,
    recommendedTemp: 4,
    grind: "Medium",
    timeSec: 28800,
    baseCaffeinePerGram: 16,
  },
};
export const ROAST_PROFILES: Record<
  RoastLevel,
  {
    name: string;
    notes: string[];
    acidity: number;
    body: number;
    sweetness: number;
  }
> = {
  light: {
    name: "Nordic Light Roast",
    notes: ["Bergamot", "Jasmine Floral", "Crisp Green Apple", "Wild Honey"],
    acidity: 92,
    body: 55,
    sweetness: 86,
  },
  medium_light: {
    name: "Artisan Medium-Light",
    notes: ["Ripe Peach", "Meyer Lemon", "Caramelized Sugars", "Cocoa Nib"],
    acidity: 82,
    body: 70,
    sweetness: 89,
  },
  medium: {
    name: "Signature Sombra Medium",
    notes: ["Dark Chocolate Ganache", "Roasted Hazelnut", "Toffee", "Dried Fig"],
    acidity: 68,
    body: 84,
    sweetness: 94,
  },
  dark: {
    name: "Velvet Espresso Dark",
    notes: ["Smoked Molasses", "Black Cherry", "Dark Truffle", "Cacao 85%"],
    acidity: 42,
    body: 96,
    sweetness: 76,
  },
};
export function calculateCoffeeBreakdown(
  inputs: CoffeeCalculatorInputs,
): CoffeeCalculatorBreakdown {
  const totalWaterMl = Math.round(inputs.servings * inputs.cupSizeMl);
  const ratio = Math.max(1, inputs.brewRatio);
  const totalCoffeeGrams = Math.round((totalWaterMl / ratio) * 10) / 10;
  const spec = BREW_METHOD_SPECS[inputs.brewMethod] || BREW_METHOD_SPECS.pourover;
  const roast = ROAST_PROFILES[inputs.roastLevel] || ROAST_PROFILES.medium;
  const estimatedCaffeineMg = Math.round(totalCoffeeGrams * spec.baseCaffeinePerGram);
  return {
    totalWaterMl,
    totalCoffeeGrams,
    waterRatioDisplay: `1:${inputs.brewRatio}`,
    recommendedTempC: spec.recommendedTemp,
    recommendedGrind: spec.grind,
    extractionTimeSec: spec.timeSec,
    estimatedCaffeineMg,
    flavorNotes: roast.notes,
    acidityScore: roast.acidity,
    bodyScore: roast.body,
    sweetnessScore: roast.sweetness,
  };
}
export function formatGrams(grams: number): string {
  return `${grams.toFixed(1)}g`;
}
export function formatExtractionTime(seconds: number): string {
  if (seconds >= 3600) {
    const hours = Math.round((seconds / 3600) * 10) / 10;
    return `${hours} hrs`;
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) return `${secs}s`;
  if (secs === 0) return `${mins}m`;
  return `${mins}m ${secs}s`;
}
