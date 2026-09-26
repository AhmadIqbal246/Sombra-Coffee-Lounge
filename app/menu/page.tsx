"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/shared-components/navbar";
import { Footer } from "@/components/shared-components/footer";
import { SectionHeading } from "@/components/shared-components/section-heading";
import { MenuItemCard } from "@/components/landing-page-section/menu/menu-item-card";
import { coffeeMenuItems, menuCategories } from "@/lib/data/coffee-menu";
import type { MenuCategory } from "@/lib/types/coffee-menu";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return coffeeMenuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        (item.origin && item.origin.toLowerCase().includes(query)) ||
        item.notes.some((note) => note.toLowerCase().includes(query)) ||
        item.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-ink text-text">
      <Navbar variant="cinematic" />

      <main className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,153,126,0.12),transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
              Sombra Coffee Lounge · Sensory Offerings
            </p>
            <h1 className="mt-2 font-cinzel text-3xl font-bold tracking-[0.04em] text-text sm:text-5xl lg:text-6xl">
              Artisanal Coffee & Confection Menu
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:text-lg">
              Shade-grown single-origin micro-lots, master infrared roasting, 12-hour cold extractions, and morning scratch bakehouse confections.
            </p>
          </div>

          <div className="mx-auto mb-8 max-w-xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search origins, flavor notes, or roasts..."
                className="w-full rounded-2xl border border-[color:var(--color-line)] bg-surface px-5 py-3.5 pr-10 text-sm text-text placeholder-muted/70 shadow-sm outline-none transition-all focus:border-champagne focus:ring-2 focus:ring-champagne/20"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer text-xs font-semibold text-muted hover:text-text"
                >
                  Clear
                </button>
              ) : null}
            </div>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="inline-flex max-w-full flex-wrap justify-center gap-1.5 rounded-2xl border border-[color:var(--color-line)] bg-surface p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  selectedCategory === "all"
                    ? "bg-jet text-white shadow-sm"
                    : "text-muted hover:text-text"
                }`}
              >
                All Offerings ({coffeeMenuItems.length})
              </button>
              {menuCategories.map((category) => {
                const isActive = selectedCategory === category.key;
                const count = coffeeMenuItems.filter((item) => item.category === category.key).length;
                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => setSelectedCategory(category.key)}
                    className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                      isActive
                        ? "bg-jet text-white shadow-sm"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {category.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-md rounded-2xl border border-[color:var(--color-line)] bg-surface p-8 text-center shadow-sm">
              <p className="font-display text-lg font-semibold text-text">No offerings found</p>
              <p className="mt-2 text-xs text-muted">
                No menu items match your search for &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 cursor-pointer rounded-xl bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-jet"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          <div className="mt-14 rounded-3xl border border-[color:var(--color-line)] bg-gradient-to-r from-surface via-surface-raised/60 to-surface p-8 text-center shadow-sm sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
              Reserve Your Private Table or Guided Tasting
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Experience our coffees brewed by master baristas with paired scratch pastries in an acoustic sanctuary designed for mindful sensory immersion.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/#booking"
                className="cursor-pointer rounded-xl bg-accent px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-jet hover:shadow-lg"
              >
                Reserve Lounge Table
              </Link>
              <Link
                href="/#calculator"
                className="cursor-pointer rounded-xl border border-[color:var(--color-line)] bg-surface px-7 py-3 text-sm font-semibold text-text shadow-sm transition-all hover:border-champagne/60"
              >
                Brew & Ratio Customizer
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer variant="cinematic" />
    </div>
  );
}
