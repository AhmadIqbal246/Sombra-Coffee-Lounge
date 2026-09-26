import type { CoffeeCalculatorBreakdown } from "@/lib/types/coffee-calculator";
interface CalculatorFlavorChartProps {
  breakdown: CoffeeCalculatorBreakdown;
}
interface FlavorSegment {
  key: string;
  label: string;
  value: number;
  color: string;
}
export function CalculatorFlavorChart({ breakdown }: CalculatorFlavorChartProps) {
  const segments: FlavorSegment[] = [
    {
      key: "sweetness",
      label: "Natural Sweetness",
      value: breakdown.sweetnessScore,
      color: "bg-champagne",
    },
    {
      key: "acidity",
      label: "Origin Acidity / Brightness",
      value: breakdown.acidityScore,
      color: "bg-white",
    },
    {
      key: "body",
      label: "Crema & Mouthfeel Body",
      value: breakdown.bodyScore,
      color: "bg-white/40",
    },
  ];
  const total = segments.reduce((sum, seg) => sum + seg.value, 0) || 1;
  return (
    <div className="space-y-4">
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        {segments.map((segment) => {
          const width = (segment.value / total) * 100;
          if (width <= 0) return null;
          return (
            <div
              key={segment.key}
              className={`${segment.color} transition-all duration-500 ease-out`}
              style={{ width: `${width}%` }}
            />
          );
        })}
      </div>
      <div className="space-y-2">
        {segments.map((segment) => (
          <div key={segment.key} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-white/60">
              <span className={`h-2 w-2 shrink-0 rounded-full ${segment.color}`} />
              <span>{segment.label}</span>
            </div>
            <span className="font-semibold text-white">{segment.value} / 100</span>
          </div>
        ))}
      </div>
    </div>
  );
}
