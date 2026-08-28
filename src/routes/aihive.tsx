import { createFileRoute } from "@tanstack/react-router";
import { Bot, Cpu, Database, KanbanSquare, Languages, Plug, Workflow } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/aihive")({
  head: () => ({
    meta: [
      { title: "AiHive — AI & Business Automation | Grovix Ventures" },
      {
        name: "description",
        content:
          "AiHive is the AI & business automation arm of Grovix Ventures — WhatsApp AI agents, workflow automation and CRM for Indian SMBs. Book a demo.",
      },
      { property: "og:title", content: "AiHive — AI & Business Automation | Grovix Ventures" },
      {
        property: "og:description",
        content:
          "An AI-powered business OS for Indian SMBs: WhatsApp AI agents, lead ingestion from any platform, workflow automation and CRM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiHivePage,
});

const PILLARS = [
  {
    icon: Cpu,
    title: "AI Business OS",
    body: "A single operating layer for your business — leads, conversations, follow-ups and tasks in one place.",
  },
  {
    icon: Languages,
    title: "WhatsApp AI Agent",
    body: "Multi-language AI agents that respond to every enquiry instantly, 24/7, on the channel your customers already use.",
  },
  {
    icon: Plug,
    title: "Lead Ingestion",
    body: "Pull leads automatically from any third-party platform — Meta, Google, websites, marketplaces and more.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Automate repetitive operations — follow-ups, reminders, assignments, updates — without writing code.",
  },
  {
    icon: Database,
    title: "Built-in CRM",
    body: "A lightweight CRM tuned for SMBs: pipelines, stages, notes and history, synced with every conversation.",
  },
  {
    icon: KanbanSquare,
    title: "Team Visibility",
    body: "Owners and teams see the same live picture — who owns which lead, and what happens next.",
  },
];

const STEPS = [
  { step: "01", title: "Connect your channels", body: "Link WhatsApp, ad platforms, website forms and more in minutes." },
  { step: "02", title: "AI agent engages leads", body: "Every new enquiry gets an instant, intelligent response in the customer's language." },
  { step: "03", title: "Automated follow-up & CRM sync", body: "Conversations, reminders and stages update themselves — nothing falls through." },
  { step: "04", title: "You close more deals", body: "Your team talks only to warm, qualified leads with full context." },
];

const USE_CASES = [
  {
    title: "Real Estate",
    body: "Instantly qualify property enquiries on WhatsApp and schedule site visits automatically.",
  },
  {
    title: "Education & Coaching",
    body: "Answer admission questions 24/7 and nurture enquiries through the enrolment funnel.",
  },
  {
    title: "Hospitality",
    body: "Handle booking enquiries, menus and feedback across languages without extra staff.",
  },
  {
    title: "Retail & Clinics",
    body: "Turn walk-in and online enquiries into appointments with automated reminders.",
  },
];

function AiHivePage() {
  return (
    <>
      <section className="glow-gold pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">A Grovix Ventures Brand</p>
            <h1 className="mt-6 font-heading text-5xl font-semibold sm:text-6xl">
              Ai<span className="text-ah">Hive</span>
            </h1>
            <p className="mt-4 text-sm tracking-[0.22em] text-ah/90 uppercase">
              AI &amp; Business Automation
            </p>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
              An AI-powered business operating system for Indian SMBs. Your leads get answered in
              seconds, your workflows run themselves, and your team focuses on closing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Product Pillars</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">Everything in one hive</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="plaque-card h-full p-6">
                  <p.icon className="h-6 w-6 text-ah" />
                  <h3 className="mt-4 font-heading text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">From enquiry to close</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 70}>
                <li className="plaque-card h-full p-6 text-center">
                  <span className="font-heading text-3xl font-semibold text-gold/70">{s.step}</span>
                  <h3 className="mt-3 font-heading text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">Use Cases</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">Built for SMB verticals</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {USE_CASES.map((u, i) => (
              <Reveal key={u.title} delay={i * 70}>
                <div className="plaque-card h-full p-6">
                  <Bot className="h-6 w-6 text-ah" />
                  <h3 className="mt-4 font-heading text-xl font-semibold">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="glow-gold py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Book a Demo</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">See AiHive in action.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Tell us about your business and we'll walk you through a live demo tailored to your
              industry — WhatsApp AI agent, automations and CRM included.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="plaque-card p-6 sm:p-8">
              <LeadForm sourcePage="aihive" defaultBrand="aihive" submitLabel="Book a Demo" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
