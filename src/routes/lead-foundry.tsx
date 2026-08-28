import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Crosshair,
  Globe,
  LayoutTemplate,
  Megaphone,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/lead-foundry")({
  head: () => ({
    meta: [
      { title: "Lead Foundry — Performance Marketing | Grovix Ventures" },
      {
        name: "description",
        content:
          "Lead Foundry is the performance marketing arm of Grovix Ventures — Meta & Google Ads, funnels, and ROAS-driven campaigns for Indian SMBs. Get a free ad account audit.",
      },
      { property: "og:title", content: "Lead Foundry — Performance Marketing | Grovix Ventures" },
      {
        property: "og:description",
        content:
          "ROAS-driven Meta & Google Ads, landing pages and funnels for Indian SMBs. Get a free ad account audit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeadFoundryPage,
});

const SERVICES = [
  {
    icon: Megaphone,
    title: "Meta Ads",
    body: "Full-funnel Facebook & Instagram campaigns — creative testing, audience strategy and daily optimisation.",
  },
  {
    icon: Crosshair,
    title: "Google Ads",
    body: "Search, Display and YouTube campaigns built around high-intent keywords and conversion tracking.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages & Funnels",
    body: "Fast, high-converting landing pages and funnel architectures designed to turn clicks into leads.",
  },
  {
    icon: MessageCircle,
    title: "Lead Nurture Handoff",
    body: "Every lead flows straight into AiHive's WhatsApp automation for instant engagement and follow-up.",
  },
  {
    icon: BarChart3,
    title: "Analytics & ROAS Reporting",
    body: "Clear, honest reporting on what every rupee returned — no vanity metrics.",
  },
  {
    icon: Globe,
    title: "Local & Regional Campaigns",
    body: "Geo-targeted and vernacular campaigns for regional markets across India.",
  },
];

const PROCESS = [
  { step: "01", title: "Audit", body: "We review your accounts, creatives, funnels and data to find the leaks." },
  { step: "02", title: "Strategy", body: "A clear plan: channels, budgets, audiences, creatives and KPIs." },
  { step: "03", title: "Launch", body: "Campaigns go live with proper tracking and conversion infrastructure." },
  { step: "04", title: "Scale", body: "Winning combinations get more budget; losers get cut fast." },
  { step: "05", title: "Report", body: "Transparent ROAS reporting and a clear view of what's next." },
];

const INDUSTRIES = [
  "Retail & E-commerce",
  "Hospitality & Restaurants",
  "Education & Coaching",
  "Real Estate",
  "Healthcare & Clinics",
  "Local Services",
];

function LeadFoundryPage() {
  return (
    <>
      <section className="glow-gold pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">A Grovix Ventures Brand</p>
            <h1 className="mt-6 font-heading text-5xl font-semibold sm:text-6xl">
              Lead <span className="text-lf">Foundry</span>
            </h1>
            <p className="mt-4 text-sm tracking-[0.22em] text-lf/90 uppercase">
              Performance Marketing
            </p>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
              We forge pipelines, not just clicks. ROAS-driven Meta and Google Ads campaigns,
              high-converting funnels and reporting you can actually act on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">What we do</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="plaque-card h-full p-6">
                  <s.icon className="h-6 w-6 text-lf" />
                  <h3 className="mt-4 font-heading text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Process</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">How we work</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <li className="plaque-card h-full p-6 text-center">
                  <span className="font-heading text-3xl font-semibold text-gold/70">{p.step}</span>
                  <h3 className="mt-3 font-heading text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Industries</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">Who we serve</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground/90"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">Outcomes, not vanity charts</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Eastwind Hospitality",
                metric: "4.1× ROAS",
                body: "Rebuilt Meta prospecting and a WhatsApp-first booking funnel across four properties in North Bengal.",
              },
              {
                title: "Bristle Education",
                metric: "62% lower CPL",
                body: "Google Search plus vernacular creatives for coaching centres in Kolkata and Siliguri.",
              },
              {
                title: "Kalaari Retail",
                metric: "3.2× repeat rate",
                body: "Catalogue ads paired with AiHive reminder flows for festive collections.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <article className="plaque-card h-full p-6">
                  <p className="font-heading text-3xl font-semibold text-lf">{c.metric}</p>
                  <h3 className="mt-3 font-heading text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="glow-gold py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Free Audit</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">
              Get a free ad account audit.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Share your details and our team will review your ad accounts, funnels and tracking —
              then send you a clear, jargon-free report on where you're losing money and how to fix
              it. No obligations.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="plaque-card p-6 sm:p-8">
              <LeadForm
                sourcePage="lead-foundry"
                defaultBrand="lead-foundry"
                submitLabel="Request Free Audit"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
