import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { LEGAL_NAV, SITE } from "@/lib/site";
import { BrandPlaque } from "@/components/site/BrandMark";

const SOCIAL = [
  { icon: Linkedin, label: "LinkedIn", href: SITE.social.linkedin },
  { icon: Instagram, label: "Instagram", href: SITE.social.instagram },
  { icon: Twitter, label: "X", href: SITE.social.twitter },
  { icon: Youtube, label: "YouTube", href: SITE.social.youtube },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <BrandPlaque className="w-52 text-gold" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {SITE.legalName}
              <br />
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">GSTIN: {SITE.gstin}</p>
            <p className="mt-1 text-xs text-muted-foreground">CIN: {SITE.cin}</p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Our Brands</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/lead-foundry" className="text-muted-foreground transition-colors hover:text-gold">
                  Lead Foundry — Performance Marketing
                </Link>
              </li>
              <li>
                <Link to="/aihive" className="text-muted-foreground transition-colors hover:text-gold">
                  AiHive — AI &amp; Business Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-gold">
                  About Grovix Ventures
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-gold">
                  Contact Us
                </Link>
              </li>
            </ul>
            <h3 className="eyebrow mt-8 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {LEGAL_NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground">
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">
                {SITE.email}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <a href={`tel:+${SITE.whatsappNumber}`} className="transition-colors hover:text-gold">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{SITE.hours}</p>
            <div className="mt-4 flex gap-3" aria-label="Social media">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-ornate mt-12 mb-6" aria-hidden="true">
          <span className="text-xs">✦</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1" aria-label="Footer legal">
            {LEGAL_NAV.map((item) => (
              <Link key={item.to} to={item.to} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
