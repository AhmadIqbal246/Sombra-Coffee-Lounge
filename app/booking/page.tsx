import type { Metadata } from "next";
import { Navbar } from "@/components/shared-components/navbar";
import { Footer } from "@/components/shared-components/footer";
import { AiVoiceBookingWidget } from "@/components/landing-page-section/booking/ai-voice-booking-widget";

export const metadata: Metadata = {
  title: "Table Reservations & Guided Tastings | Sombra Coffee Lounge",
  description: "Reserve your private table, omakase espresso bar, or guided single-origin coffee tasting at Sombra Coffee Lounge.",
};

export default function BookingPage() {
  return (
    <div className="relative min-h-screen bg-ink text-text">
      <Navbar variant="cinematic" />
      <main className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,153,126,0.12),transparent_65%)]" />
        <AiVoiceBookingWidget />
      </main>
      <Footer variant="cinematic" />
    </div>
  );
}
