import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you specialize in real estate?",
    a: "Yes — real estate is our primary focus. We've built end-to-end lead generation systems for builders, realtors and property consultants, including paid ads, landing pages, CRM and WhatsApp follow-up automation.",
  },
  {
    q: "What ad platforms do you run?",
    a: "Primarily Meta (Facebook & Instagram) Ads and Google Ads — performance campaigns built around qualified-lead generation, not vanity metrics.",
  },
  {
    q: "Do you handle CRM and follow-ups?",
    a: "Yes. We set up CRM pipelines, route leads instantly, and automate WhatsApp follow-up sequences so no lead falls through the cracks.",
  },
  {
    q: "Which industries do you serve beyond real estate?",
    a: "Coaches, healthcare, local businesses, service businesses, startups and personal brands — anyone who needs a structured lead engine.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most engagements go live within 7–14 days after the strategy call, including funnel build, ads launch and CRM setup.",
  },
  {
    q: "Do you offer one-time projects?",
    a: "We work best as a long-term growth partner, but we do offer scoped sprints for landing pages, CRM setup and funnel builds.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-electric" /> FAQ
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
            Common questions, <span className="text-gradient">answered.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-2xl glass transition-all ${active ? "ring-glow bg-white/[0.04]" : ""}`}
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`text-[15px] font-medium ${active ? "text-foreground" : "text-foreground/90"}`}>{f.q}</span>
                  <span className={`h-8 w-8 grid place-items-center rounded-lg shrink-0 transition-colors ${active ? "bg-electric/20 text-electric" : "bg-white/5 text-muted-foreground"}`}>
                    {active ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {active && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed"
                  >
                    {f.a}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
