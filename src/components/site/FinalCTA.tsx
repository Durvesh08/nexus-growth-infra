import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";
import { WhatsAppIcon } from "./Nav";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] glass-strong ring-glow p-8 sm:p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[380px] w-[600px] rounded-full hidden sm:block"
                 style={{ background: "radial-gradient(circle, oklch(0.78 0.13 230 / 0.4), transparent 60%)", filter: "blur(80px)" }} />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-electric" /> Limited 2026 onboarding
          </span>

          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.05]">
            <span className="text-gradient">Scale Your Brand</span>
            <br />
            <span className="text-foreground/95">With Modern Growth Systems.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[14px] sm:text-base text-muted-foreground leading-relaxed">
            A 30-minute strategy call. We'll map your growth gaps, sketch the system, and show you the path to compounding returns.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href="/book-a-call"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Phone size={15} strokeWidth={2.5} />
              Book Free Strategy Call
            </a>
            <a
              href="https://wa.me/917485022937" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4 text-teal" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] sm:text-[13px] text-muted-foreground">
            <a href="tel:+917485022937" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone size={12} className="text-electric" /> +91 74850 22937
            </a>
            <a href="mailto:contact@adsrahu.com" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail size={12} className="text-electric" /> contact@adsrahu.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
