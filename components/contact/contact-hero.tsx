import { ScrollReveal } from "@/components/shared-components/scroll-reveal";

export function ContactHero() {
  return (
    <section className="relative px-6 pb-12 pt-28 md:px-12 md:pt-32 lg:px-16">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Reservations & Inquiries
          </p>
          <h1 className="font-display text-4xl tracking-tight text-text md:text-5xl lg:text-6xl">
            Connect with Sombra Lounge
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            Reach out for table reservations, guided coffee tasting flights, or private roastery gatherings.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
