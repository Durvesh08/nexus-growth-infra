import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "motion/react";
import { Building2, GraduationCap, Stethoscope, Store, Wrench, Rocket, User } from "lucide-react";
import { RealEstateSection } from "@/components/site/RealEstateSection";
import { FinalCTA } from "@/components/site/FinalCTA";

const industries = [
  { Icon: GraduationCap, name: "Coaches", desc: "Cohort & high-ticket coaching funnels with WhatsApp nurture sequences." },
  { Icon: Stethoscope, name: "Healthcare", desc: "Patient acquisition systems for clinics, dentists and aesthetic brands." },
  { Icon: Store, name: "Local Businesses", desc: "Hyper-local Google + Meta campaigns with appointment automation." },
  { Icon: Wrench, name: "Service Businesses", desc: "Lead-to-job pipelines for service teams — quotes, CRM, follow-up." },
  { Icon: Rocket, name: "Startups", desc: "Go-to-market growth stacks for early-stage product companies." },
  { Icon: User, name: "Personal Brands", desc: "Audience growth, content engines and conversion funnels for creators." },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Adsrahu Growth Systems" },
      { name: "description", content: "Real estate first — plus coaches, healthcare, local businesses, service businesses, startups and personal brands." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Built for businesses<br /><span className="text-gradient">that need leads.</span></>}
        description="Real estate is our primary focus — but we engineer growth systems for any business with a defined sales motion."
      />
      <RealEstateSection />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-electric" /> Beyond Real Estate
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Other industries we <span className="text-gradient">power.</span>
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map(({ Icon, name, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl glass p-6 hover:bg-white/8 transition-all hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-electric/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-11 w-11 rounded-xl bg-electric/10 grid place-items-center text-electric"><Icon size={16} /></div>
                <div className="mt-4 font-display text-lg font-semibold">{name}</div>
                <div className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl glass-strong p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 depth-shadow">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-[var(--gradient-primary)] grid place-items-center text-background glow-electric"><Building2 size={16} /></div>
              <div>
                <div className="font-display text-lg font-semibold">Real Estate is our deepest expertise</div>
                <div className="text-sm text-muted-foreground">From builders to brokers — we know the pipeline cold.</div>
              </div>
            </div>
            <a href="/services" className="btn-shine inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-background" style={{ background: "var(--gradient-primary)" }}>
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
