import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AIDashboard } from "@/components/site/AIDashboard";
import { ShowcaseMockups } from "@/components/site/ShowcaseMockups";
import { FinalCTA } from "@/components/site/FinalCTA";
import { motion } from "motion/react";

const systems = [
  { label: "Lead engine uptime", value: "99.9%", note: "Across all funnels" },
  { label: "Avg follow-up time", value: "< 2 min", note: "WhatsApp + CRM automation" },
  { label: "Pipeline visibility", value: "Real-time", note: "Lead-to-booking tracking" },
  { label: "Campaign iterations", value: "Weekly", note: "Creative + audience refresh" },
];

const workflows = [
  { title: "Lead Capture", desc: "Landing page + form + instant CRM push." },
  { title: "Qualification", desc: "WhatsApp bot pre-qualifies on intent & budget." },
  { title: "Routing", desc: "Hot leads routed to sales rep in seconds." },
  { title: "Follow-up", desc: "Automated drip sequences for cold + warm leads." },
  { title: "Tracking", desc: "Full attribution from ad → lead → booking." },
  { title: "Optimization", desc: "Weekly review loop on CPL, CTR, CVR & ROAS." },
];

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Adsrahu | Lead Generation Systems & Workflows" },
      { name: "description", content: "Premium analytics dashboards, lead tracking visuals, automation workflows and conversion metrics built by Adsrahu." },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title={<>Systems engineered for<br /><span className="text-gradient">predictable growth.</span></>}
        description="We don't chase vanity metrics — we build infrastructure that compounds. Here's how our lead engines, automations and tracking workflows perform in production."
        primaryCta={{ label: "Book Strategy Call", to: "/book-a-call" }}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl glass-strong p-6 depth-shadow"
            >
              <div className="text-3xl font-display font-semibold text-gradient-electric">{s.value}</div>
              <div className="mt-2 text-sm font-medium">{s.label}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <ShowcaseMockups />
      <AIDashboard />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-electric" /> Workflows
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Inside our <span className="text-gradient">operating model.</span>
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflows.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl glass p-5 hover:bg-white/8 transition-colors"
              >
                <div className="text-[11px] text-electric font-mono">0{i + 1}</div>
                <div className="mt-2 font-display text-lg font-semibold">{w.title}</div>
                <div className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{w.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
