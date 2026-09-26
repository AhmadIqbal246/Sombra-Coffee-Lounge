import { ServicesPage } from "@/components/services/services-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences & Services | Sombra Coffee Lounge",
  description: "Explore Sombra Coffee Lounge experiences: curated tasting flights, master roasting workshops, private lounge reservations, and custom roasting.",
};

export default function Services() {
  return <ServicesPage />;
}
