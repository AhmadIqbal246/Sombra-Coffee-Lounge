import { AboutPage } from "@/components/about/about-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sombra Coffee Lounge",
  description: "Learn about Sombra Coffee Lounge: our shade-grown sourcing, roasting philosophy, master baristas, and acoustic sanctuary.",
};

export default function About() {
  return <AboutPage />;
}
