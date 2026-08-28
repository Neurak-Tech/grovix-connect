import { createFileRoute } from "@tanstack/react-router";
import { Building2, User } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { BrandPlaque } from "@/components/site/BrandMark";

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
            <BrandPlaque className="mx-auto w-full max-w-md text-gold" />
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
                <h2 className="mt-4 font-heading text-2xl font-semibold">{SITE.founder.name}</h2>
                <p className="mt-1 text-sm text-gold">{SITE.founder.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{SITE.founder.bio}</p>
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Leadership Team</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">The people behind the plaque</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: SITE.founder.name,
                role: SITE.founder.title,
                focus: "Group strategy and client outcomes",
              },
              {
                name: "Meera Sen",
                role: "Head of Performance, Lead Foundry",
                focus: "Media, creative testing, and ROAS discipline",
              },
              {
                name: "Kabir Dey",
                role: "Head of Product, AiHive",
                focus: "Agents, workflows, and WhatsApp operations",
              },
            ].map((person, i) => (
              <Reveal key={person.name} delay={i * 80}>
                <div className="plaque-card h-full p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 font-heading text-xl text-gold">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm text-gold">{person.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{person.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
