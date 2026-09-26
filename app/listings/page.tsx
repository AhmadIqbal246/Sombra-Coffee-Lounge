import type { Metadata } from "next";
import { ListingsPage } from "@/components/listings/listings-page";

export const metadata: Metadata = {
  title: "Reserve Micro-Lots & Coffee Menu | Sombra Coffee Lounge",
  description:
    "Explore our seasonal single-origin micro-lots, signature espresso roasts, and reserve tasting flights at Sombra Coffee Lounge.",
};

export default function Listings() {
  return <ListingsPage />;
}
