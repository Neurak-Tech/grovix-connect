import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";
import plaque from "@/assets/grovix-plaque.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img
              src={plaque.url}
              alt="Grovix Ventures Pvt Ltd — AI and Automation Solutions"
              className="w-52 rounded-md"
              loading="lazy"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {SITE.legalName}
              <br />
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">GSTIN: {SITE.gstin}</p>
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
              <li>
                <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground transition-colors hover:text-gold">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground">
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">
                {SITE.email}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.phoneDisplay}</p>
            {/* Placeholder social links — replace hrefs with real profiles before launch. */}
            <div className="mt-4 flex gap-3" aria-label="Social media">
              {[
                { icon: Linkedin, label: "LinkedIn (coming soon)" },
                { icon: Instagram, label: "Instagram (coming soon)" },
                { icon: Twitter, label: "X / Twitter (coming soon)" },
                { icon: Youtube, label: "YouTube (coming soon)" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  title={label}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-ornate mt-12 mb-6" aria-hidden="true">
          <span className="text-xs">✦</span>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          © {year} {SITE.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
