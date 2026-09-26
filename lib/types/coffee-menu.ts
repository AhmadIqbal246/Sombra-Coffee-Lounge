export type MenuCategory = "pourover" | "espresso" | "colddrip" | "pastries";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  origin?: string;
  elevation?: string;
  process?: string;
  notes: string[];
  price: string;
  badge?: string;
  description: string;
  image: string;
}

export interface TastingFlightItem {
  name: string;
  origin: string;
  elevation: string;
  process: string;
  notes: string[];
}

export interface TastingFlight {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  price: string;
  badge: string;
  description: string;
  items: TastingFlightItem[];
  sommelierPairing: string;
}
