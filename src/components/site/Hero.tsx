import { motion } from "motion/react";

const metrics = [
  { value: "100+", label: "Businesses scaled" },
  { value: "10M+", label: "Impressions" },
  { value: "5,000+", label: "Qualified leads" },
  { value: "4.8x", label: "Avg ROAS" },
];

const badges = ["Meta Ads", "Google Ads", "WhatsApp Automation", "AI Systems", "CRM Solutions"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* glowing orbs */}
        <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
             style={{ background: "radial-gradient(circle, oklch(0.78 0.13 230 / 0.55), transparent 70%)" }} />
        <div className="absolute top-20 right-10 h-[360px] w-[360px] rounded-full blur-3xl opacity-40"
             style={{ background: "radial-gradient(circle, oklch(0.65 0.2 290 / 0.6), transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(circle, oklch(0.7 0.13 185 / 0.5), transparent 70%)" }} />
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

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-center font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.04em] leading-[0.95]"
        >
          <span className="text-gradient">Growth Infrastructure</span>
          <br />
          <span className="text-foreground/95">For Modern Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          We help brands, businesses, startups and creators scale using performance marketing,
          AI automation, conversion systems and premium growth strategies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Book Strategy Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#cases"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors"
          >
            View Case Studies
          </a>
        </motion.div>

        {/* Trust badges marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                className={`absolute ${positions[i]} animate-float`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <div className="glass-strong rounded-2xl px-4 py-3 ring-glow min-w-[160px]">
                  <div className="text-xl font-display font-semibold text-gradient-electric">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{m.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile metrics */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="glass rounded-xl px-4 py-3">
              <div className="text-xl font-display font-semibold text-gradient-electric">{m.value}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      <path
        d="M0,80 C40,70 60,60 90,55 C130,48 160,70 200,55 C240,40 270,25 310,30 C340,33 370,20 400,15 L400,110 L0,110 Z"
        fill="url(#garea)"
      />
      <path
        d="M0,80 C40,70 60,60 90,55 C130,48 160,70 200,55 C240,40 270,25 310,30 C340,33 370,20 400,15"
        stroke="url(#gline)"
        strokeWidth="2"
        fill="none"
      />
      {[
        [90, 55],
        [200, 55],
        [310, 30],
        [400, 15],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="oklch(0.98 0 0)" />
      ))}
    </svg>
  );
}
