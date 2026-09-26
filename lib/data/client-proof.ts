import type { ClientProof } from "@/lib/types/client-proof";
export const clientProof: ClientProof = {
  headline: "Specialty Grade Standards in Every Pour",
  before: {
    payment: "78",
    unit: " SCA",
    rate: "Commodity Blend (45+ Days Old)",
  },
  after: {
    payment: "94",
    unit: " SCA",
    rate: "Micro-Lot Reserve (Under 48h Roast)",
  },
  savings: {
    amount: 16,
    prefix: "+",
    suffix: " pts",
    label: "cupping score elevation above specialty benchmark",
  },
  testimonial: {
    quote: "The clarity of terroir in Sombra Geisha Pour Over is unmatched. An exquisite sensorial journey in a tranquil lounge setting.",
    name: "Marcus Vance",
    role: "Specialty Coffee Judge & Food Critic",
  },
  cta: {
    label: "Explore Our Roasting Calculator",
    href: "#calculator",
  },
};
