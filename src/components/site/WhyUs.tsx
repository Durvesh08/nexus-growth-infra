import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { SectionHeader } from "./Section";

const rows = [
  ["Strategy", "Generic playbooks reused", "Custom growth OS per brand"],
  ["Automation", "Manual reporting & follow-ups", "AI workflows running 24/7"],
  ["Scalability", "Capped by team bandwidth", "Infrastructure that compounds"],
  ["Analytics", "Vanity metrics & screenshots", "Unified revenue dashboards"],
  ["AI Systems", "Bolt-on tools", "Native AI from day one"],
  ["Conversion", "Set-and-forget funnels", "Continuous experimentation"],
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Adsrahu"
          title={<>Traditional marketing vs. <span className="text-gradient-electric">growth infrastructure.</span></>}
          description="The category has changed. Operators who treat growth as software are pulling away from those who treat it as a service."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-2xl glass-strong ring-glow"
        >
          <div className="grid grid-cols-3 border-b border-border bg-surface-2/40">
            <div className="px-5 py-4 text-[11px] uppercase tracking-widest text-muted-foreground">Capability</div>
            <div className="px-5 py-4 text-[11px] uppercase tracking-widest text-muted-foreground">Traditional Marketing</div>
            <div className="px-5 py-4 text-[11px] uppercase tracking-widest text-electric flex items-center gap-2">
              Adsrahu Growth Systems
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r[0]}
              className={`grid grid-cols-3 items-center ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="px-5 py-5 text-[13px] md:text-sm font-medium">{r[0]}</div>
              <div className="px-5 py-5 text-[12px] md:text-[13px] text-muted-foreground flex items-start gap-2">
                <X size={14} className="mt-0.5 shrink-0 text-muted-foreground/60" />
                <span>{r[1]}</span>
              </div>
              <div className="px-5 py-5 text-[12px] md:text-[13px] text-foreground flex items-start gap-2">
                <Check size={14} className="mt-0.5 shrink-0 text-teal" />
                <span>{r[2]}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
