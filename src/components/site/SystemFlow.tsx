import { motion } from "motion/react";
import { SectionHeader } from "./Section";

const stages = [
  { k: "01", t: "Ads", d: "Meta · Google · YouTube" },
  { k: "02", t: "Landing", d: "Cinematic funnels" },
  { k: "03", t: "CRM", d: "Unified pipeline" },
  { k: "04", t: "WhatsApp", d: "Conversational nurture" },
  { k: "05", t: "Automation", d: "AI workflows" },
  { k: "06", t: "Conversion", d: "Optimized close rate" },
  { k: "07", t: "Scaling", d: "Compounding ROAS" },
];

export function SystemFlow() {
  return (
    <section id="system" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(circle, oklch(0.65 0.2 290 / 0.5), transparent 70%)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Growth System"
          title={<>One <span className="text-gradient-electric">closed-loop system</span> from impression to revenue.</>}
          description="Every stage instrumented, every signal feeding the next. No leaks, no guesswork."
        />

        <div className="mt-16 relative">
          {/* Desktop flow */}
          <div className="hidden lg:block">
            <div className="relative grid grid-cols-7 gap-4">
              {stages.map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="glass-strong rounded-2xl p-4 ring-glow relative z-10">
                    <div className="text-[10px] text-muted-foreground tracking-widest">{s.k}</div>
                    <div className="mt-2 font-display text-lg font-semibold">{s.t}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{s.d}</div>
                    <div className="mt-3 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 + i * 0.08 }}
                        className="h-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </div>
                  {i < stages.length - 1 && (
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-4 h-px overflow-hidden">
                      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, oklch(0.78 0.13 230), transparent)" }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet flow */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-3">
            {stages.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="text-xl font-display font-semibold text-gradient-electric">{s.k}</div>
                <div className="flex-1">
                  <div className="font-display text-[15px] font-semibold">{s.t}</div>
                  <div className="text-[11px] text-muted-foreground">{s.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
