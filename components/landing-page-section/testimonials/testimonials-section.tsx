"use client";

import { SectionHeading } from "@/components/shared-components/section-heading";
import { testimonials } from "@/lib/data/testimonials";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";
import { TestimonialCarousel } from "./testimonial-carousel";

export function TestimonialsSection() {
  const sectionRef = useSectionReveal<HTMLElement>();
  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-transparent px-6 py-6 md:px-12 md:py-10 lg:px-16"
    >
      <div data-reveal className="mx-auto mb-6 flex max-w-2xl justify-center md:mb-8">
        <SectionHeading
          tone="cinematic"
          title="Impressions & Critic Reviews"
          description="Reflections from culinary writers, specialty coffee judges, and our dedicated patrons."
          align="center"
          className="mb-0"
        />
      </div>
      <div data-reveal className="mx-auto max-w-6xl">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
