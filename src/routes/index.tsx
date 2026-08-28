import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Cpu, MapPin, Megaphone, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grovix Ventures Pvt Ltd — AI & Automation Solutions" },
      {
        name: "description",
        content:
          "Grovix Ventures Pvt Ltd — Indian holding company behind Lead Foundry (performance marketing) and AiHive (AI & business automation). One partner for growth and AI.",
      },
      { property: "og:title", content: "Grovix Ventures Pvt Ltd — AI & Automation Solutions" },
      {
        property: "og:description",
        content:
          "Performance marketing through Lead Foundry and AI business automation through AiHive — one accountable partner for growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="glow-gold relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">Holding Company · India</p>
            <h1 className="mt-6 font-heading text-5xl leading-tight font-semibold sm:text-6xl lg:text-7xl">
              <span className="text-gold-shimmer">Grovix Ventures</span>
            </h1>
            <div className="divider-ornate mt-6" aria-hidden="true">
              <span>✦</span>
            </div>
            <p className="mt-6 text-lg tracking-[0.22em] text-gold/90 uppercase">{SITE.tagline}</p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A holding company with two specialized arms — performance marketing that fills your
              pipeline, and AI automation that runs your business. One partner, accountable for both.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-gold-bright"
              >
                <a href="#brands">Explore Our Brands</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Brands */}
      <section id="brands" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Our Brands</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">
              Two arms. One mission: your growth.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="plaque-card h-full p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-lf/40 text-lf">
                    <Megaphone className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-3xl font-semibold">
                    Lead <span className="text-lf">Foundry</span>
                  </h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  The performance marketing arm — ROAS-driven campaigns that turn ad spend into
                  predictable revenue.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Meta & Google Ads managed end-to-end",
                    "High-converting landing pages & funnels",
                    "Transparent analytics & ROAS reporting",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lf" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-8 border-lf/50 text-lf hover:bg-lf/10 hover:text-lf"
                >
                  <Link to="/lead-foundry">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="plaque-card h-full p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-ah/40 text-ah">
                    <Bot className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-3xl font-semibold">
                    Ai<span className="text-ah">Hive</span>
                  </h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  The AI &amp; business automation arm — an AI-powered operating system for Indian
                  SMBs that never sleeps.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "WhatsApp AI agents that engage leads instantly",
                    "Lead ingestion from any third-party platform",
                    "Workflow automation & built-in CRM",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ah" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-8 border-ah/50 text-ah hover:bg-ah/10 hover:text-ah"
                >
                  <Link to="/aihive">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Grovix */}
      <section className="border-y border-border/60 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Why Grovix</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">
              Built different, on purpose.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Cpu,
                title: "AI-Native Product Development",
                body: "Our automation tools are built in-house, not bolted on — so they evolve with your business.",
              },
              {
                icon: TrendingUp,
                title: "Performance-Driven Marketing",
                body: "Every rupee of ad spend is tracked, attributed and optimised for return.",
              },
              {
                icon: MapPin,
                title: "India-First SMB Focus",
                body: "WhatsApp-first, multi-language workflows designed for how Indian businesses actually operate.",
              },
              {
                icon: ShieldCheck,
                title: "Single Group Accountability",
                body: "Marketing and automation under one roof — one team answerable for the whole funnel.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="plaque-card h-full p-6">
                  <v.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-heading text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-sm tracking-[0.2em] text-muted-foreground uppercase">
              Trusted by growing Indian businesses
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {[
                { name: "Eastwind", mark: "EW" },
                { name: "Nexora", mark: "NX" },
                { name: "Bristle", mark: "BR" },
                { name: "Harbourline", mark: "HL" },
                { name: "Kalaari", mark: "KL" },
              ].map((client) => (
                <div key={client.name} className="flex items-center gap-2.5 opacity-70">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/30 font-heading text-xs tracking-wider text-gold">
                    {client.mark}
                  </span>
                  <span className="font-heading text-lg tracking-[0.2em] text-muted-foreground uppercase">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { k: "₹18 Cr+", v: "Ad spend managed" },
              { k: "2.4 Lakh+", v: "Leads generated" },
              { k: "41,000+", v: "Hours automated" },
            ].map((s) => (
              <Reveal key={s.v}>
                <p className="font-heading text-5xl font-semibold text-gold">{s.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Client Notes</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">
              What operators tell us.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  "Lead Foundry rebuilt our Meta stack in six weeks. We stopped guessing and started seeing which creatives actually paid the rent.",
                name: "Priya Banerjee",
                role: "Director, Eastwind Hospitality",
              },
              {
                quote:
                  "AiHive’s WhatsApp agent answers in Bangla and Hindi before our front desk opens. Site-visit bookings doubled without adding headcount.",
                name: "Soham Mukherjee",
                role: "Partner, Harbourline Realty",
              },
              {
                quote:
                  "One group owns ads and follow-up. That single accountability is why we stayed after the first quarter.",
                name: "Dr. Ananya Rao",
                role: "Founder, Nexora Clinics",
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <blockquote className="plaque-card flex h-full flex-col p-6 sm:p-8">
                  <p className="flex-1 text-sm leading-relaxed text-foreground/90">“{t.quote}”</p>
                  <footer className="mt-6">
                    <p className="font-heading text-lg font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + lead form */}
      <section className="glow-gold py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Get Started</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">
              Let's build your growth engine.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Tell us about your business and we'll recommend the right path — performance marketing
              through Lead Foundry, AI automation through AiHive, or both working together.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer email?{" "}
              <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">
                {SITE.email}
              </a>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="plaque-card p-6 sm:p-8">
              <LeadForm sourcePage="home" submitLabel="Book a Consultation" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
