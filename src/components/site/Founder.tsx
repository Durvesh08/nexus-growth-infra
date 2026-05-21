import { motion } from "motion/react";
import founderImg from "@/assets/founder.png";

export function Founder() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-3xl glass-strong depth-shadow overflow-hidden">
              <img
                src={founderImg}
                alt="Raushan Pratap Yadav — Founder, Adsrahu"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <div className="rounded-2xl glass-strong p-4 ring-glow">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-electric">Founder & CEO</div>
                  <div className="mt-1 font-display text-lg sm:text-xl font-semibold">Raushan Pratap Yadav</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-electric" /> Meet The Founder
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.08]">
              Engineering growth, not <span className="text-gradient">selling marketing</span>.
            </h2>
            <p className="mt-5 text-[14px] sm:text-base text-muted-foreground leading-relaxed">
              Raushan founded Adsrahu with one obsession — build performance systems that
              actually move the needle for real estate and modern businesses. Every campaign,
              funnel and automation is engineered around qualified leads, faster follow-ups,
              and predictable revenue.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
              {[
                { v: "100+", l: "Brands scaled" },
                { v: "5K+", l: "Leads generated" },
                { v: "6+", l: "Years experience" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl glass p-3.5">
                  <div className="font-display text-lg sm:text-xl font-semibold text-gradient-electric">{s.v}</div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
