import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "motion/react";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Raushan Pratap Yadav", role: "Founder & CEO", initial: "R", grad: "linear-gradient(135deg, oklch(0.78 0.13 230), oklch(0.65 0.2 290))" },
  { name: "Performance Lead", role: "Head of Paid Media", initial: "P", grad: "linear-gradient(135deg, oklch(0.7 0.13 185), oklch(0.78 0.13 230))" },
  { name: "Funnel Strategist", role: "Conversion & Landing Pages", initial: "F", grad: "linear-gradient(135deg, oklch(0.65 0.2 290), oklch(0.78 0.13 230))" },
  { name: "Automation Engineer", role: "CRM & WhatsApp Systems", initial: "A", grad: "linear-gradient(135deg, oklch(0.78 0.13 230), oklch(0.7 0.13 185))" },
  { name: "Creative Director", role: "Brand & Ad Creative", initial: "C", grad: "linear-gradient(135deg, oklch(0.65 0.2 290), oklch(0.7 0.13 185))" },
  { name: "Client Success", role: "Strategy & Reporting", initial: "S", grad: "linear-gradient(135deg, oklch(0.7 0.13 185), oklch(0.65 0.2 290))" },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Adsrahu" },
      { name: "description", content: "Meet the Adsrahu growth team — strategists, performance marketers, automation engineers and creatives." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={<>The people behind<br /><span className="text-gradient">your growth engine.</span></>}
        description="A small, senior team obsessed with systems, speed and predictable outcomes."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl glass overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <div className="absolute inset-0" style={{ background: m.grad }} />
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-7xl font-black text-background/80">{m.initial}</span>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-semibold">{m.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{m.role}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a href="#" className="h-8 w-8 grid place-items-center rounded-lg glass hover:bg-white/10"><Linkedin size={12} /></a>
                  <a href="#" className="h-8 w-8 grid place-items-center rounded-lg glass hover:bg-white/10"><Twitter size={12} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
