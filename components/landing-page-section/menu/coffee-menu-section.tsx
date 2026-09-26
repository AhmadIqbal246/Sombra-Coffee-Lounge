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

        <div data-reveal className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-champagne/30 bg-gradient-to-br from-surface via-surface-raised to-surface p-7 shadow-lg sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-champagne/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-champagne/40 bg-champagne/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Curated Cellar & Roastery
                </span>
                <h3 className="mt-3 font-cinzel text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
                  Discover Our Full Artisanal Menu
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
                  Explore rare micro-lot single-origins, precision espresso flights, and house-made viennoiserie, or reserve an intimate table for a sommelier-guided tasting.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
                <Link
                  href="/menu"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-jet px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-accent hover:shadow-xl sm:px-7"
                >
                  <span>Explore Full Menu</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/booking"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--color-line)] bg-surface px-6 py-3.5 text-sm font-semibold text-text shadow-sm transition-all duration-300 hover:border-champagne/60 hover:bg-surface-raised sm:px-7"
                >
                  <svg
                    className="h-4 w-4 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span>Reserve Tasting Table</span>
                </Link>
              </div>
            </div>
            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 border-t border-[color:var(--color-line)] pt-5 text-xs text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                In-house small-batch roasting
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                Whole bean bags to take home
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                Daily scratch pastry pairings
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
