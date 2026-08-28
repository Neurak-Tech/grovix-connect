import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LEGAL_NAV, PRIMARY_NAV } from "@/lib/site";
import { BrandMark } from "@/components/site/BrandMark";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Grovix Ventures home">
          <BrandMark className="h-9 w-9 text-gold" />
          <span className="hidden font-heading text-lg font-semibold tracking-[0.18em] text-gold lg:inline">
            GROVIX VENTURES
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-7" aria-label="Primary">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-gold-bright">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
          <nav
            className="flex items-center gap-4 border-l border-border/70 pl-5"
            aria-label="Legal"
          >
            {LEGAL_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs text-muted-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {item.short}
              </Link>
            ))}
          </nav>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-4 md:hidden" aria-label="Mobile">
          <ul className="space-y-3">
            {PRIMARY_NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="block text-base text-muted-foreground transition-colors hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="mt-2 w-full bg-primary text-primary-foreground hover:bg-gold-bright">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book a Consultation
                </Link>
              </Button>
            </li>
          </ul>
          <p className="eyebrow mt-6 mb-3">Legal</p>
          <ul className="space-y-3">
            {LEGAL_NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block text-sm text-muted-foreground transition-colors hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
