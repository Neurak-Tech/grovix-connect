import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Grovix Ventures Pvt Ltd" },
      {
        name: "description",
        content:
          "Contact Grovix Ventures Pvt Ltd — performance marketing (Lead Foundry) and AI automation (AiHive). 32, Chowringhee Road, Park Street, Kolkata 700071.",
      },
      { property: "og:title", content: "Contact — Grovix Ventures Pvt Ltd" },
      {
        property: "og:description",
        content:
          "Reach Grovix Ventures for performance marketing, AI automation, or a combined growth engagement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="glow-gold pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 font-heading text-5xl font-semibold sm:text-6xl">
              Let's talk growth.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Whether you need leads, automation, or both — send us a message and we'll respond
              within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="space-y-6">
              <div className="plaque-card p-6">
                <MapPin className="h-6 w-6 text-gold" />
                <h2 className="mt-3 font-heading text-xl font-semibold">Registered Office</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {SITE.legalName}
                  <br />
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </p>
              </div>
              <div className="plaque-card p-6">
                <Mail className="h-6 w-6 text-gold" />
                <h2 className="mt-3 font-heading text-xl font-semibold">Email</h2>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="plaque-card p-6">
                <Phone className="h-6 w-6 text-gold" />
                <h2 className="mt-3 font-heading text-xl font-semibold">Phone / WhatsApp</h2>
                {/* Placeholder number — update SITE.phoneDisplay & whatsappNumber in src/lib/site.ts */}
                <p className="mt-2 text-sm text-muted-foreground">{SITE.phoneDisplay}</p>
              </div>
              {/* Map placeholder — replace with an embedded Google Map before launch. */}
              <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
                Map embed placeholder — {SITE.address.line1}, Kolkata
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="plaque-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold">Send us a message</h2>
              <div className="mt-6">
                <LeadForm sourcePage="contact" submitLabel="Send Message" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
