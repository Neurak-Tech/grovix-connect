import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { LAST_UPDATED, LEGAL_NAV, SITE } from "@/lib/site";

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="glow-gold pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">Legal</p>
            <h1 className="mt-6 font-heading text-5xl font-semibold sm:text-6xl">{title}</h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>
            <p className="mt-4 text-xs tracking-[0.16em] text-gold/80 uppercase">
              Last updated {LAST_UPDATED}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <article className="legal-copy space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {children}
            </article>
          </Reveal>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm">
            <p className="text-muted-foreground">
              Questions?{" "}
              <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">
                {SITE.email}
              </a>
            </p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal documents">
              {LEGAL_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="text-muted-foreground transition-colors hover:text-gold">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
