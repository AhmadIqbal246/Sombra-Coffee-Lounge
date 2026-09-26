import Link from "next/link";
import type { TastingFlight } from "@/lib/types/coffee-menu";

interface FlightCardProps {
  flight: TastingFlight;
}

export function FlightCard({ flight }: FlightCardProps) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-surface p-6 shadow-[0_20px_60px_rgba(26,26,28,0.06)] transition-all duration-300 hover:border-champagne/50 hover:shadow-lg sm:p-8">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent sm:inset-x-12" />
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-block rounded border border-champagne/40 bg-surface-raised px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-champagne">
              {flight.badge}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
              {flight.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-accent sm:text-sm">
              {flight.tagline}
            </p>
          </div>
          <div className="text-right">
            <span className="font-display text-xl font-semibold text-text sm:text-2xl">
              {flight.price}
            </span>
            <p className="text-[11px] font-medium text-muted">
              {flight.duration}
            </p>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-muted sm:text-sm">
          {flight.description}
        </p>

        <div className="space-y-3 border-t border-[color:var(--color-line)] pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-champagne">
            Curated 3-Cup Flight
          </p>
          <div className="space-y-3">
            {flight.items.map((item, index) => (
              <div
                key={item.name}
                className="flex flex-col gap-1.5 rounded-xl border border-[color:var(--color-line)] bg-surface-raised p-3.5 transition-colors hover:border-champagne/40 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-bold text-accent">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-text sm:text-sm">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-muted">
                      {item.origin} · {item.process}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.notes.map((note) => (
                    <span
                      key={note}
                      className="rounded bg-surface px-2 py-0.5 text-[10px] font-medium text-muted"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-champagne/30 bg-champagne/5 p-4 text-xs leading-relaxed text-text/85">
          <span className="font-semibold text-text">Sommelier Pairing: </span>
          {flight.sommelierPairing}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[color:var(--color-line)]">
        <Link
          href="#booking"
          className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-jet py-3.5 text-center text-xs font-semibold text-white shadow-sm transition-colors hover:bg-accent sm:text-sm"
        >
          Reserve This Tasting Flight
        </Link>
      </div>
    </article>
  );
}
