"use client";

import type { BrewMethod, RoastLevel } from "@/lib/types/coffee-calculator";
import { BREW_METHOD_SPECS, ROAST_PROFILES } from "@/lib/utils/coffee-calculations";
import { CalculatorSliderField } from "./calculator-slider-field";

const SERVING_PRESETS = [1, 2, 4, 6];
const CUP_PRESETS = [180, 250, 350];

interface CalculatorInputsProps {
  servings: number;
  cupSizeMl: number;
  brewRatio: number;
  brewMethod: BrewMethod;
  roastLevel: RoastLevel;
  onServingsChange: (value: number) => void;
  onCupSizeChange: (value: number) => void;
  onBrewRatioChange: (value: number) => void;
  onBrewMethodChange: (method: BrewMethod) => void;
  onRoastLevelChange: (roast: RoastLevel) => void;
}

export function CalculatorInputs({
  servings,
  cupSizeMl,
  brewRatio,
  brewMethod,
  roastLevel,
  onServingsChange,
  onCupSizeChange,
  onBrewRatioChange,
  onBrewMethodChange,
  onRoastLevelChange,
}: CalculatorInputsProps) {
  const brewMethods: BrewMethod[] = ["pourover", "espresso", "frenchpress", "aeropress", "colddrip"];
  const roastLevels: RoastLevel[] = ["light", "medium_light", "medium", "dark"];
  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <label className="text-sm font-medium text-text">Brew Method</label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {brewMethods.map((method) => {
            const spec = BREW_METHOD_SPECS[method];
            const isSelected = brewMethod === method;
            return (
              <button
                key={method}
                type="button"
                onClick={() => {
                  onBrewMethodChange(method);
                  onBrewRatioChange(spec.defaultRatio);
                }}
                className={`cursor-pointer rounded-xl border p-3 text-left transition-all ${
                  isSelected
                    ? "border-jet bg-jet text-white shadow-[0_8px_20px_rgba(18,18,20,0.18)]"
                    : "border-[color:var(--color-line)] bg-surface text-muted hover:border-champagne/40 hover:text-text"
                }`}
              >
                <p className="text-xs font-semibold leading-tight">{spec.name.split(" (")[0]}</p>
                <p className={`mt-1 text-[10px] ${isSelected ? "text-white/60" : "text-muted/80"}`}>
                  Grind: {spec.grind}
                </p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="space-y-4">
        <CalculatorSliderField
          id="servings"
          label="Cups / Servings"
          displayValue={`${servings} ${servings === 1 ? "Cup" : "Cups"}`}
          min={1}
          max={8}
          step={1}
          value={servings}
          onChange={onServingsChange}
          hint="Calculates total brewed beverage output for yourself or tasting guests."
        />
        <div className="flex flex-wrap gap-2">
          {SERVING_PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => onServingsChange(preset)}
              className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                servings === preset
                  ? "border-jet bg-jet text-white"
                  : "border-[color:var(--color-line)] bg-surface text-muted hover:border-champagne/40 hover:text-text"
              }`}
            >
              {preset} {preset === 1 ? "Cup" : "Cups"}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div className="space-y-3">
          <CalculatorSliderField
            id="cup-size"
            label="Cup Volume"
            displayValue={`${cupSizeMl} ml`}
            min={120}
            max={450}
            step={10}
            value={cupSizeMl}
            onChange={onCupSizeChange}
          />
          <div className="flex gap-2">
            {CUP_PRESETS.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => onCupSizeChange(size)}
                className={`cursor-pointer rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition-all ${
                  cupSizeMl === size
                    ? "border-jet bg-jet text-white"
                    : "border-[color:var(--color-line)] bg-surface text-muted hover:border-champagne/40 hover:text-text"
                }`}
              >
                {size}ml
              </button>
            ))}
          </div>
        </div>
        <CalculatorSliderField
          id="brew-ratio"
          label="Coffee-to-Water Ratio"
          displayValue={`1:${brewRatio}`}
          min={brewMethod === "espresso" ? 1 : 8}
          max={brewMethod === "espresso" ? 4 : 22}
          step={0.5}
          value={brewRatio}
          onChange={onBrewRatioChange}
          hint={brewRatio === 16 ? "1:16 Golden Cup Specialty standard." : "Higher ratio yields lighter cup."}
        />
      </div>
      <div className="space-y-3">
        <label className="text-sm font-medium text-text">Single-Origin Roast Profile</label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {roastLevels.map((level) => {
            const profile = ROAST_PROFILES[level];
            const isSelected = roastLevel === level;
            return (
              <button
                key={level}
                type="button"
                onClick={() => onRoastLevelChange(level)}
                className={`cursor-pointer rounded-xl border p-3 text-center transition-all ${
                  isSelected
                    ? "border-jet bg-jet text-white shadow-[0_8px_20px_rgba(18,18,20,0.18)]"
                    : "border-[color:var(--color-line)] bg-surface text-muted hover:border-champagne/40 hover:text-text"
                }`}
              >
                <p className="text-xs font-semibold leading-tight">{profile.name.replace(" Roast", "")}</p>
                <span className={`mt-1 block text-[10px] ${isSelected ? "text-champagne" : "text-muted/70"}`}>
                  Sweetness {profile.sweetness}%
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
