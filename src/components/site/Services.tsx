import { motion } from "motion/react";
import {
  TrendingUp, Target, Megaphone, Sparkles, MessageSquare, Palette, MousePointer2, Gauge,
} from "lucide-react";
import { SectionHeader } from "./Section";
import { TiltCard } from "./TiltCard";

const services = [
  { icon: TrendingUp, title: "Performance Marketing", desc: "ROI-obsessed media buying with predictive bidding and creative testing engines." },
  { icon: Target, title: "Lead Generation", desc: "High-intent lead systems engineered for cost efficiency and conversion velocity." },
  { icon: Megaphone, title: "Meta & Google Ads", desc: "Cross-channel ad operations with full-funnel attribution and creative iteration." },
  { icon: Sparkles, title: "AI Automation Systems", desc: "Custom AI workflows that qualify, nurture and convert leads on autopilot." },
  { icon: MessageSquare, title: "CRM & WhatsApp Funnels", desc: "Conversational funnels that close deals where your customers already are." },
  { icon: Palette, title: "Branding & Social Media", desc: "Brand systems and content engines built for compounding cultural momentum." },
  { icon: MousePointer2, title: "Landing Page Funnels", desc: "Cinematic, conversion-tuned landing pages with built-in A/B infrastructure." },
  { icon: Gauge, title: "Conversion Optimization", desc: "Experimentation programs that compound revenue from existing traffic." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>The full <span className="text-gradient-electric">growth stack</span>, engineered as one system.</>}
          description="Eight disciplines, one operating layer. Built to compound brand, demand and revenue together."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              data-cursor="hover"
            >
              <TiltCard
                intensity={5}
                className="group relative rounded-2xl glass p-5 overflow-hidden transition-colors duration-500 hover:bg-white/[0.06] h-full"
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.13 230 / 0.22), transparent 60%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(1 0 0 / 0.08), transparent 35%)",
                  }}
                />

                <div className="relative" style={{ transform: "translateZ(40px)" }}>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 border border-border group-hover:glow-electric transition-shadow">
                    <s.icon size={18} className="text-electric" />
                  </div>
                  <h3 className="mt-5 text-[15px] font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>

                  <div className="mt-5 flex items-center gap-1.5 text-[12px] text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
