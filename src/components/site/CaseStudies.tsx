import { motion } from "motion/react";
import { SectionHeader } from "./Section";

const cases = [
  {
    tag: "E-commerce",
    title: "Premium D2C skincare brand",
    quote: "Generated 4.8x ROAS and 1,200+ qualified leads in 90 days.",
    stats: [
      { l: "ROAS", v: "4.8x" },
      { l: "CPL", v: "₹38" },
      { l: "Leads", v: "1,200+" },
      { l: "Impressions", v: "3.2M" },
    ],
  },
  {
    tag: "Real Estate",
    title: "Luxury residences, Tier-1 cities",
    quote: "Built a CRM-driven funnel converting 3.4% of cold traffic to site visits.",
    stats: [
      { l: "Conv.", v: "3.4%" },
      { l: "CPL", v: "₹420" },
      { l: "Leads", v: "860" },
      { l: "Closes", v: "₹14Cr" },
    ],
  },
  {
    tag: "SaaS",
    title: "Vertical B2B SaaS, India + GCC",
    quote: "Scaled MQL pipeline 6x while reducing CAC by 41% with AI nurture.",
    stats: [
      { l: "Pipeline", v: "6x" },
      { l: "CAC", v: "-41%" },
      { l: "MQLs", v: "2,400" },
      { l: "Demo→Win", v: "22%" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Case Studies"
          title={<>Results that <span className="text-gradient-electric">compound quarterly.</span></>}
          description="Snapshots from the operating systems we've shipped for ambitious brands."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-strong ring-glow p-6"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                   style={{ background: "radial-gradient(circle, oklch(0.78 0.13 230 / 0.5), transparent 70%)" }} />

              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 border border-border px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-teal" /> {c.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">"{c.quote}"</p>

                <div className="mt-6 grid grid-cols-4 gap-2">
                  {c.stats.map((s) => (
                    <div key={s.l} className="rounded-lg bg-surface-2/50 border border-border p-2">
                      <div className="text-[9px] text-muted-foreground uppercase tracking-wider">{s.l}</div>
                      <div className="mt-0.5 text-[13px] font-semibold">{s.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[12px] text-electric">
                  Read the full breakdown
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
