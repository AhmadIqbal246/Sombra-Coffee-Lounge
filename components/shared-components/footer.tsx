import Link from "next/link";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Coffee Menu", href: "/menu" },
  { label: "Philosophy", href: "/#why-choose-us" },
  { label: "Reserve Table", href: "/#booking" },
];

interface FooterProps {
  variant?: "default" | "cinematic";
}

export function Footer({ variant = "default" }: FooterProps) {
  const isCinematic = variant === "cinematic";
  return (
    <footer
      className={`relative border-t px-6 pb-28 pt-12 sm:pb-16 md:px-12 md:py-14 lg:px-16 ${
        isCinematic
          ? "border-[color:var(--color-line)] bg-surface/90 backdrop-blur-sm"
          : "border-[color:var(--color-line)] bg-surface/80 backdrop-blur-sm"
      }`}
    >
      <ScrollReveal variant="fade-up">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="mx-auto max-w-sm text-center md:mx-0 md:text-left space-y-2">
            <p className="font-display text-2xl font-semibold tracking-tight text-text">
              Sombra Coffee Lounge
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Artisanal roastery and acoustic coffee sanctuary. Dedicated to shade-grown micro-lots, master craft brewing, and mindful connection.
            </p>
            <p className="text-xs text-muted/70 pt-1">
              Specialty Coffee Association member. All micro-lots ethically sourced via direct farm partnerships.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="text-center md:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent text-center md:text-left">
              Explore
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 sm:gap-6 md:justify-start">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm font-medium text-text transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-[color:var(--color-line)] pt-6 text-center text-sm text-muted md:border-t-0 md:pt-0 md:text-left space-y-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Lounge & Hours
            </p>
            <p className="font-medium text-text">420 Artisan Boulevard, Suite 100</p>
            <p className="text-xs font-semibold text-accent">
              Phone: <a href="tel:+14477866095" className="hover:underline">+1 (447) 786-6095</a>
            </p>
            <p className="text-xs text-muted">Mon - Sat: 7am - 9pm | Sun: 8am - 7pm</p>
            <p className="text-xs text-emerald-800 font-semibold pt-1">AI Voice Concierge: 24/7 Available</p>
          </div>
        </div>
        <div className="mt-10 border-t border-[color:var(--color-line)] pt-6 text-center text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Sombra Coffee Lounge. All rights reserved.</p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
