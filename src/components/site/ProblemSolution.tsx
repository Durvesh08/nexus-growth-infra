import { motion } from "motion/react";
import { X, Check } from "lucide-react";

const problems = [
  "Low quality leads",
  "Wasted ad budget",
  "Poor follow-up systems",
  "No automation",
  "Low conversion rates",
  "Inconsistent inquiries",
];
const solutions = [
  "High-converting lead funnels",
  "CRM & WhatsApp automation",
  "Smart targeting systems",
  "Faster, structured follow-ups",
  "Better lead tracking",
  "Scalable growth systems",
];

export function ProblemSolution() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-electric" /> The Shift
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
            From scattered marketing to a <span className="text-gradient">single growth engine</span>.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass p-7 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-destructive/10 blur-3xl" />
            <div className="text-[11px] uppercase tracking-[0.18em] text-destructive/80">Without a system</div>
            <h3 className="mt-2 font-display text-2xl font-semibold">Traditional Marketing</h3>
            <ul className="mt-6 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 h-5 w-5 rounded-md bg-destructive/10 grid place-items-center text-destructive shrink-0">
                    <X size={12} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-strong p-7 relative overflow-hidden depth-shadow"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-electric/15 blur-3xl" />
            <div className="text-[11px] uppercase tracking-[0.18em] text-electric">With Adsrahu</div>
            <h3 className="mt-2 font-display text-2xl font-semibold">Growth Infrastructure</h3>
            <ul className="mt-6 space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 h-5 w-5 rounded-md bg-electric/15 grid place-items-center text-electric shrink-0">
                    <Check size={12} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
