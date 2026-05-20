import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Counter } from "./Counter";

const metrics = [
  { v: 100, suffix: "+", label: "Businesses scaled" },
  { v: 10, suffix: "M+", label: "Impressions" },
  { v: 5000, suffix: "+", label: "Qualified leads" },
  { v: 4.8, suffix: "x", label: "Avg ROAS", decimals: 1 },
];

const badges = ["Meta Ads", "Google Ads", "WhatsApp Automation", "AI Systems", "CRM Solutions"];

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  // Parallax depths
  const o1x = useTransform(sx, [-1, 1], [-30, 30]);
  const o1y = useTransform(sy, [-1, 1], [-20, 20]);
  const o2x = useTransform(sx, [-1, 1], [22, -22]);
  const o2y = useTransform(sy, [-1, 1], [16, -16]);
  const cardX = useTransform(sx, [-1, 1], [-12, 12]);
  const cardY = useTransform(sy, [-1, 1], [-8, 8]);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1;
      const y = ((e.clientY - r.top) / r.height) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        {/* Conic aura */}
        <motion.div
          style={{ x: o1x, y: o1y }}
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[640px] w-[640px] rounded-full conic-glow opacity-50"
        />
        <motion.div
          style={{ x: o1x, y: o1y }}
          className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
        >
          <div className="h-full w-full rounded-full"
               style={{ background: "radial-gradient(circle, oklch(0.78 0.13 230 / 0.55), transparent 70%)" }} />
        </motion.div>
        <motion.div
          style={{ x: o2x, y: o2y }}
          className="absolute top-20 right-10 h-[360px] w-[360px] rounded-full blur-3xl opacity-40"
        >
          <div className="h-full w-full rounded-full"
               style={{ background: "radial-gradient(circle, oklch(0.65 0.2 290 / 0.6), transparent 70%)" }} />
        </motion.div>
        <motion.div
          style={{ x: o2x, y: o2y }}
          className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full blur-3xl opacity-30"
        >
          <div className="h-full w-full rounded-full"
               style={{ background: "radial-gradient(circle, oklch(0.7 0.13 185 / 0.5), transparent 70%)" }} />
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric" />
          </span>
          New — AI Growth Operating System for 2026
          <span className="text-foreground/60">→</span>
        </motion.div>

        {/* Headline — staggered words */}
        <h1 className="mt-7 text-center font-display text-[40px] sm:text-5xl md:text-6xl lg:text-[78px] font-semibold tracking-[-0.045em] leading-[1.02]">
          <AnimatedLine delay={0.05} className="text-gradient">Performance Marketing</AnimatedLine>
          <br />
          <AnimatedLine delay={0.2} className="text-foreground/95">&amp; Lead Generation</AnimatedLine>
          <br />
          <AnimatedLine delay={0.35} className="text-foreground/70">For Real Estate.</AnimatedLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-7 max-w-2xl text-center text-[15px] md:text-lg text-muted-foreground leading-relaxed"
        >
          We help builders, realtors and businesses generate qualified leads using
          Facebook Ads, Google Ads, CRM automation and WhatsApp funnels.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/book-a-call"
            className="btn-shine group relative inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Book Free Strategy Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank" rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Trust badges marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mt-14 overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}
        >
          <div className="flex w-max gap-3 animate-marquee">
            {[...badges, ...badges, ...badges].map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground whitespace-nowrap"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                {b}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ x: cardX, y: cardY }}
          className="relative mt-16 mx-auto max-w-5xl"
        >
          <DashboardMock />

          {/* Floating metric cards */}
          {metrics.map((m, i) => {
            const positions = [
              "hidden md:block -top-6 -left-8",
              "hidden md:block -top-2 -right-10",
              "hidden md:block -bottom-6 -left-12",
              "hidden md:block -bottom-2 -right-6",
            ];
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                className={`absolute ${positions[i]} animate-float`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <div className="glass-strong rounded-2xl px-4 py-3 ring-glow min-w-[170px]">
                  <Counter
                    to={m.v}
                    suffix={m.suffix}
                    decimals={m.decimals ?? 0}
                    className="text-xl font-display font-semibold text-gradient-electric"
                  />
                  <div className="text-[11px] text-muted-foreground mt-0.5">{m.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile metrics with counters */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="glass rounded-xl px-4 py-3">
              <Counter
                to={m.v}
                suffix={m.suffix}
                decimals={m.decimals ?? 0}
                className="text-xl font-display font-semibold text-gradient-electric"
              />
              <div className="text-[11px] text-muted-foreground mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedLine({
  children, delay = 0, className = "",
}: { children: string; delay?: number; className?: string }) {
  const words = children.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {w}{i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function DashboardMock() {
  return (
    <div className="relative rounded-[28px] p-2 glass-strong ring-glow">
      <div className="rounded-[22px] overflow-hidden bg-surface border border-border">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="text-[11px] text-muted-foreground">adsrahu.app / growth</div>
          <div className="text-[11px] text-electric flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" /> Live
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 p-4">
          {/* Sidebar */}
          <div className="col-span-3 hidden md:flex flex-col gap-1.5">
            {["Overview", "Campaigns", "Leads", "Automation", "CRM"].map((s, i) => (
              <div
                key={s}
                className={`rounded-lg px-3 py-2 text-xs ${
                  i === 0 ? "bg-white/8 text-foreground" : "text-muted-foreground"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="col-span-12 md:col-span-9 grid gap-3">
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "ROAS", v: "4.82x", d: "+18%" },
                { l: "CPL", v: "₹42", d: "-22%" },
                { l: "Leads", v: "1,284", d: "+34%" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl glass p-3">
                  <div className="text-[10px] text-muted-foreground">{s.l}</div>
                  <div className="mt-1 text-lg font-semibold">{s.v}</div>
                  <div className="text-[10px] text-teal mt-0.5">{s.d}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl glass p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs text-muted-foreground">Campaign performance</div>
                <div className="flex gap-1">
                  {["7D", "30D", "90D"].map((t, i) => (
                    <span
                      key={t}
                      className={`text-[10px] px-2 py-0.5 rounded-md ${
                        i === 1 ? "bg-white/10 text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ChartLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartLine() {
  return (
    <svg viewBox="0 0 400 110" className="w-full h-24">
      <defs>
        <linearGradient id="gline" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="oklch(0.78 0.13 230)" />
          <stop offset="1" stopColor="oklch(0.65 0.2 290)" />
        </linearGradient>
        <linearGradient id="garea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.78 0.13 230)" stopOpacity="0.4" />
          <stop offset="1" stopColor="oklch(0.78 0.13 230)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.1, ease: "easeOut" }}
        d="M0,80 C40,70 60,60 90,55 C130,48 160,70 200,55 C240,40 270,25 310,30 C340,33 370,20 400,15"
        stroke="url(#gline)"
        strokeWidth="2"
        fill="none"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        d="M0,80 C40,70 60,60 90,55 C130,48 160,70 200,55 C240,40 270,25 310,30 C340,33 370,20 400,15 L400,110 L0,110 Z"
        fill="url(#garea)"
      />
      {[
        [90, 55], [200, 55], [310, 30], [400, 15],
      ].map(([x, y], i) => (
        <motion.circle
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6 + i * 0.1 }}
          cx={x} cy={y} r="3" fill="oklch(0.98 0 0)"
        />
      ))}
    </svg>
  );
}
