import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  primaryCta?: { label: string; to?: string; href?: string };
  secondaryCta?: { label: string; to?: string; href?: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[560px] rounded-full conic-glow opacity-40" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-electric" />
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.02]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            {primaryCta && <CtaButton {...primaryCta} variant="primary" />}
            {secondaryCta && <CtaButton {...secondaryCta} variant="ghost" />}
          </motion.div>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

function CtaButton({
  label, to, href, variant,
}: { label: string; to?: string; href?: string; variant: "primary" | "ghost" }) {
  const cls = variant === "primary"
    ? "btn-shine inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
    : "inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors";
  const style = variant === "primary" ? { background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" } : undefined;
  const content = (
    <>
      {label}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
  if (to) return <Link to={to} className={cls} style={style}>{content}</Link>;
  return <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls} style={style}>{content}</a>;
}
