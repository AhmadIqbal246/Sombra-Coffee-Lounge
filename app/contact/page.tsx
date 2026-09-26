import { ContactPage } from "@/components/contact/contact-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reservations | Sombra Coffee Lounge",
  description: "Contact Sombra Coffee Lounge for table reservations, private tasting inquiries, and roastery visits.",
};

export default function Contact() {
  return <ContactPage />;
}
