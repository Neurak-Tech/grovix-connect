import { createFileRoute } from "@tanstack/react-router";
import { Building2, User } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import plaque from "@/assets/grovix-plaque.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Grovix Ventures Pvt Ltd" },
      {
        name: "description",
        content:
          "Grovix Ventures Pvt Ltd is an Indian holding company with two specialized arms: Lead Foundry (performance marketing) and AiHive (AI & business automation).",
      },
      { property: "og:title", content: "About — Grovix Ventures Pvt Ltd" },
      {
        property: "og:description",
        content:
          "One holding company, two specialized arms — performance marketing and AI automation for Indian SMBs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="glow-gold pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <img
              src={plaque.url}
              alt="Grovix Ventures Pvt Ltd full logo — AI and Automation Solutions"
              className="mx-auto w-full max-w-md rounded-lg"
            />
            <h1 className="mt-10 font-heading text-4xl font-semibold sm:text-5xl">
              About Grovix Ventures
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Grovix Ventures Pvt Ltd was founded in {SITE.foundingCity} with a simple
                observation: Indian small and mid-sized businesses are expected to master both
                modern marketing and modern technology — usually with neither the time nor the team
                to do it.
              </p>
              <p>
                So we built a holding company with two specialized arms that solve both halves of
                the problem. <strong className="text-foreground">Lead Foundry</strong> fills the
                pipeline with performance marketing.{" "}
                <strong className="text-foreground">AiHive</strong> makes sure no lead is wasted,
                with AI agents and automation handling engagement, follow-up and operations.
              </p>
              <p>
                Because both arms belong to one group, our clients get something rare: a single
                partner accountable for the entire journey from first click to closed deal.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-6 font-heading text-2xl leading-relaxed font-medium text-foreground sm:text-3xl">
              "To give every Indian SMB the growth engine of a large enterprise — marketing that
              performs, and AI that works while you sleep."
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="plaque-card h-full p-8">
                <User className="h-6 w-6 text-gold" />
                <h2 className="mt-4 font-heading text-2xl font-semibold">Leadership</h2>
                <p className="mt-1 text-sm text-gold">Founder &amp; Director</p>
                {/* Placeholder bio — to be replaced with the real founder profile. */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Founder profile to be added. Grovix Ventures is led by its Founder &amp; Director,
                  who oversees both the Lead Foundry and AiHive arms of the company.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="plaque-card h-full p-8">
                <Building2 className="h-6 w-6 text-gold" />
                <h2 className="mt-4 font-heading text-2xl font-semibold">Registered Details</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground">Legal Name</dt>
                    <dd>{SITE.legalName}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground">Registered Office</dt>
                    <dd>
                      {SITE.address.line1}, {SITE.address.line2}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground">Origin</dt>
                    <dd>{SITE.foundingCity}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground">GSTIN</dt>
                    <dd>{SITE.gstin}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground">CIN</dt>
                    <dd>{SITE.cin}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
