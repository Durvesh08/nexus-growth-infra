import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Founder } from "@/components/site/Founder";
import { SystemFlow } from "@/components/site/SystemFlow";
import { WhyUs } from "@/components/site/WhyUs";
import { FinalCTA } from "@/components/site/FinalCTA";
import { motion } from "motion/react";

const values = [
  { title: "Systems over tactics", desc: "We engineer durable growth infrastructure, not one-off campaigns." },
  { title: "Real estate first", desc: "Built deep expertise in builders, realtors and property consultants." },
  { title: "Speed of follow-up", desc: "Every lead routed and answered within minutes — automated end-to-end." },
  { title: "Numbers, not noise", desc: "We measure CPL, CVR and booked revenue — not vanity impressions." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Adsrahu | Growth Infrastructure Company" },
      { name: "description", content: "Founder story, vision and process behind Adsrahu — a modern growth infrastructure company specializing in real estate lead generation." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Built to engineer<br /><span className="text-gradient">predictable growth.</span></>}
        description="Adsrahu is a modern growth infrastructure company. We design, build and operate lead generation systems for real estate and ambitious businesses."
      />
      <Founder />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-electric" /> What We Believe
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Our growth <span className="text-gradient">philosophy.</span>
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl glass p-6 hover:bg-white/8 transition-colors"
              >
                <div className="text-[11px] text-electric font-mono">0{i + 1}</div>
                <div className="mt-2 font-display text-xl font-semibold">{v.title}</div>
                <div className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SystemFlow />
      <WhyUs />
      <FinalCTA />
    </>
  );
}
