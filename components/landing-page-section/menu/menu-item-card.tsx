import Image from "next/image";
import type { MenuItem } from "@/lib/types/coffee-menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className="group relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-xl sm:min-h-[510px] sm:p-5">
      <div className="space-y-4">
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-surface-raised">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
          {item.badge ? (
            <span className="absolute left-3 top-3 rounded-lg border border-white/20 bg-jet/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-champagne shadow-md backdrop-blur-md">
              {item.badge}
            </span>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-semibold tracking-tight text-text transition-colors group-hover:text-accent sm:text-xl">
              {item.name}
            </h3>
            <span className="font-display text-base font-semibold text-accent sm:text-lg">
              {item.price}
            </span>
          </div>
          {item.origin ? (
            <p className="text-xs font-medium text-muted">
              {item.origin}
              {item.elevation ? ` · ${item.elevation}` : ""}
              {item.process ? ` · ${item.process}` : ""}
            </p>
          ) : null}
        </div>

        <p className="text-xs leading-relaxed text-muted line-clamp-3">
          {item.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[color:var(--color-line)] pt-3.5">
        {item.notes.map((note) => (
          <span
            key={note}
            className="rounded-md border border-[color:var(--color-line)] bg-surface-raised px-2.5 py-1 text-[10px] font-medium text-text/80"
          >
            {note}
          </span>
        ))}
      </div>
    </article>
  );
}
