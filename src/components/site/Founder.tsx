import { motion } from "motion/react";

export function Founder() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[800px] rounded-full conic-glow opacity-30" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-3xl glass-strong depth-shadow overflow-hidden">
              <div className="absolute inset-0" style={{
                background: "radial-gradient(circle at 30% 20%, oklch(0.78 0.13 230 / 0.4), transparent 60%), radial-gradient(circle at 70% 80%, oklch(0.65 0.2 290 / 0.5), transparent 60%)",
              }} />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="w-full rounded-2xl glass p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-electric">Founder & CEO</div>
                  <div className="mt-1 font-display text-xl font-semibold">Raushan Pratap Yadav</div>
                </div>
              </div>
              <div className="absolute top-6 left-6 h-20 w-20 rounded-2xl bg-[var(--gradient-primary)] glow-electric grid place-items-center font-display text-4xl font-black text-background">
                R
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-electric" /> Meet The Founder
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Engineering growth, not <span className="text-gradient">selling marketing</span>.
            </h2>
            <p className="mt-5 text-[15px] md:text-base text-muted-foreground leading-relaxed">
              Raushan founded Adsrahu with one obsession — build performance systems that
              actually move the needle for real estate and modern businesses. Every campaign,
              funnel and automation is engineered around qualified leads, faster follow-ups,
              and predictable revenue.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
              {[
                { v: "100+", l: "Brands scaled" },
                { v: "5K+", l: "Leads generated" },
                { v: "6+", l: "Years experience" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl glass p-3.5">
                  <div className="font-display text-xl font-semibold text-gradient-electric">{s.v}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
