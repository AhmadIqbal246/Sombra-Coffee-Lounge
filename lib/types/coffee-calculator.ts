export type BrewMethod = "pourover" | "espresso" | "frenchpress" | "aeropress" | "colddrip";
export type RoastLevel = "light" | "medium_light" | "medium" | "dark";
export interface CoffeeCalculatorInputs {
  servings: number;
  cupSizeMl: number;
  brewRatio: number;
  roastLevel: RoastLevel;
  brewMethod: BrewMethod;
}
export interface CoffeeCalculatorBreakdown {
  totalWaterMl: number;
  totalCoffeeGrams: number;
  waterRatioDisplay: string;
  recommendedTempC: number;
  recommendedGrind: string;
  extractionTimeSec: number;
  estimatedCaffeineMg: number;
  flavorNotes: string[];
  acidityScore: number;
  bodyScore: number;
  sweetnessScore: number;
}
