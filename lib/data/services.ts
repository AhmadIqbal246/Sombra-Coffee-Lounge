import type { Service } from "@/lib/types/service";

export interface ServiceItem extends Service {
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: "1",
    icon: "tasting",
    title: "Curated Tasting Flights",
    description: "Guided sensory journeys across rare shade-grown micro-lots, highlighting origin terroir and precision brewing.",
  },
  {
    id: "2",
    icon: "roasting",
    title: "Master Roasting Workshops",
    description: "Hands-on masterclasses in green bean selection, infrared roast profiles, and SCA cupping protocols.",
  },
  {
    id: "3",
    icon: "events",
    title: "Private Lounge Reservations",
    description: "Host private morning meetings, evening coffee tastings, or intimate cultural gatherings in our acoustic sanctuary.",
  },
  {
    id: "4",
    icon: "wholesale",
    title: "Wholesale & Custom Roasting",
    description: "Bespoke roast curves, seasonal micro-lot bean subscriptions, and barista training for boutique venues.",
  },
];
