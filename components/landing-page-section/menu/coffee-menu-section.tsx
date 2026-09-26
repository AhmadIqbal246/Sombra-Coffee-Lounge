"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/shared-components/section-heading";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";
import { coffeeMenuItems, menuCategories } from "@/lib/data/coffee-menu";
import type { MenuCategory } from "@/lib/types/coffee-menu";
import { MenuItemCard } from "./menu-item-card";

export function CoffeeMenuSection() {
  const sectionRef = useSectionReveal<HTMLElement>({ y: 28, stagger: 0.08 });
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("pourover");

  const filteredItems = useMemo(
    () => coffeeMenuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,153,126,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div data-reveal className="mx-auto mb-6 flex max-w-2xl justify-center sm:mb-8">
          <SectionHeading
            tone="cinematic"
            title="Artisanal Coffee & Lounge Menu"
            description="Hand-poured single-origin micro-lots, precision espresso craft, and slow cold extractions paired with daily scratch pastries."
            align="center"
            className="mb-0"
          />
        </div>

        <div data-reveal className="mb-6 flex justify-center sm:mb-8">
          <div className="inline-flex max-w-full flex-wrap justify-center gap-1.5 rounded-2xl border border-[color:var(--color-line)] bg-surface p-1.5 shadow-sm">
            {menuCategories.map((category) => {
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                    isActive
                      ? "bg-jet text-white shadow-sm"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div data-reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        <div data-reveal className="mt-8 text-center sm:mt-10">
          <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-[color:var(--color-line)] bg-surface/80 p-5 backdrop-blur-sm sm:flex-row sm:gap-6 sm:px-8 sm:py-4">
            <p className="text-xs text-muted sm:text-sm">
              All beans roasted in-house in small batches. Whole bean bags available to take home.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/menu"
                className="cursor-pointer rounded-xl bg-jet px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-accent sm:text-sm"
              >
                Full Menu Page
              </Link>
              <Link
                href="#booking"
                className="cursor-pointer text-xs font-semibold text-accent underline underline-offset-4 transition-colors hover:text-jet sm:text-sm"
              >
                Reserve Table for Tasting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
