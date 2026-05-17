import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] glass-strong ring-glow p-10 md:p-16 text-center"
        >
          {/* Cinematic background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full blur-3xl"
                 style={{ background: "radial-gradient(circle, oklch(0.78 0.13 230 / 0.45), transparent 60%)" }} />
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full blur-3xl"
                 style={{ background: "radial-gradient(circle, oklch(0.65 0.2 290 / 0.4), transparent 60%)" }} />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-electric animate-pulse" /> Limited 2026 onboarding
          </span>

          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.02]">
            <span className="text-gradient">Scale Your Brand</span>
            <br />
            <span className="text-foreground/95">With Modern Growth Systems.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[15px] md:text-base text-muted-foreground leading-relaxed">
            A 30-minute strategy call. We'll map your growth gaps, sketch the system, and show you the path to compounding returns.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.04]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Book Free Strategy Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://wa.me/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-4 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              WhatsApp us
            </a>
          </div>

          <div className="mt-8 text-[11px] text-muted-foreground">
            Average response time under 4 hours · Mumbai · Bengaluru · Dubai
          </div>
        </motion.div>
      </div>
    </section>
  );
}
