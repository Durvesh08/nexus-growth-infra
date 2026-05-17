import { motion } from "motion/react";
import { SectionHeader } from "./Section";
import { TiltCard } from "./TiltCard";
import {
  MessageCircle,
  Users,
  TrendingUp,
  Zap,
  Target,
  CheckCircle2,
  Send,
  Sparkles,
  ArrowUpRight,
  Filter,
} from "lucide-react";

export function ShowcaseMockups() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.2 290 / 0.6), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 -right-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.13 185 / 0.6), transparent 70%)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Built-in Visual Stack"
          title={
            <>
              Every surface of growth, <span className="text-gradient-electric">engineered as one platform.</span>
            </>
          }
          description="From CRM pipelines to WhatsApp funnels and Meta Ads analytics — visual systems that turn complexity into clarity."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <MockupCard title="CRM Pipeline" tag="Revenue Ops" tone="electric">
            <CrmPipeline />
          </MockupCard>

          <MockupCard title="WhatsApp Funnel" tag="Conversational" tone="teal">
            <WhatsAppFlow />
          </MockupCard>

          <MockupCard title="Meta Ads Analytics" tag="Performance" tone="violet">
            <MetaAdsPanel />
          </MockupCard>

          <MockupCard title="Automation Workflow" tag="AI Systems" tone="electric">
            <AutomationFlow />
          </MockupCard>
        </div>
      </div>
    </section>
  );
}

function MockupCard({
  title,
  tag,
  tone,
  children,
}: {
  title: string;
  tag: string;
  tone: "electric" | "teal" | "violet";
  children: React.ReactNode;
}) {
  const toneColor =
    tone === "electric"
      ? "oklch(0.78 0.13 230 / 0.45)"
      : tone === "teal"
        ? "oklch(0.7 0.13 185 / 0.45)"
        : "oklch(0.65 0.2 290 / 0.5)";

  return (
    <TiltCard intensity={5}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl glass-strong ring-glow overflow-hidden group"
      >
        {/* Edge glow */}
        <div
          className="absolute inset-0 opacity-60 pointer-events-none transition-opacity group-hover:opacity-100"
          style={{
            background: `radial-gradient(800px circle at var(--mx, 50%) var(--my, 0%), ${toneColor}, transparent 40%)`,
          }}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-border/60 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
            </div>
            <span className="text-[11px] text-muted-foreground">adsrahu.app / {title.toLowerCase().replace(/\s+/g, "-")}</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground rounded-full border border-border px-2 py-0.5">
            {tag}
          </span>
        </div>

        {/* Body */}
        <div className="relative p-5">{children}</div>

        {/* Title strip */}
        <div className="relative flex items-center justify-between border-t border-border/60 px-5 py-3">
          <div className="font-display text-sm font-semibold">{title}</div>
          <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-electric transition-colors" />
        </div>
      </motion.div>
    </TiltCard>
  );
}

/* ----------------- CRM PIPELINE ----------------- */

function CrmPipeline() {
  const cols = [
    {
      name: "New",
      color: "oklch(0.78 0.13 230)",
      deals: [
        { c: "Nimbus Studio", v: "₹1.2L", a: "NS" },
        { c: "Halo Labs", v: "₹84K", a: "HL" },
      ],
    },
    {
      name: "Qualified",
      color: "oklch(0.7 0.13 185)",
      deals: [
        { c: "Orbital Co.", v: "₹3.4L", a: "OC" },
        { c: "Vertex Bio", v: "₹2.1L", a: "VB" },
      ],
    },
    {
      name: "Closing",
      color: "oklch(0.65 0.2 290)",
      deals: [{ c: "Zen Realty", v: "₹6.8L", a: "ZR" }],
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {cols.map((col, ci) => (
        <div key={col.name} className="rounded-xl bg-surface-2/60 border border-border/60 p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: col.color }} />
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{col.name}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">{col.deals.length}</span>
          </div>
          <div className="space-y-2">
            {col.deals.map((d, i) => (
              <motion.div
                key={d.c}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 + i * 0.08 }}
                className="rounded-lg glass p-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-6 w-6 rounded-md grid place-items-center text-[10px] font-semibold"
                      style={{ background: `${col.color.replace(")", " / 0.18)")}`, color: col.color }}
                    >
                      {d.a}
                    </div>
                    <span className="text-[11px] font-medium">{d.c}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">Deal</span>
                  <span className="text-[11px] font-semibold text-gradient-electric">{d.v}</span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${40 + (ci + i) * 18}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full"
                    style={{ background: col.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------- WHATSAPP FUNNEL ----------------- */

function WhatsAppFlow() {
  const msgs = [
    { from: "bot", t: "Hey Aarav 👋 — saw your interest in our pricing.", d: "10:02" },
    { from: "user", t: "Yes, I want to know about the Growth plan.", d: "10:03" },
    { from: "bot", t: "Perfect. Quick call at 4 PM or 6 PM today?", d: "10:03" },
    { from: "user", t: "4 PM works for me.", d: "10:04" },
  ];
  return (
    <div className="grid grid-cols-5 gap-4">
      {/* Chat */}
      <div className="col-span-3 rounded-xl bg-surface-2/60 border border-border/60 p-3">
        <div className="flex items-center gap-2 pb-2 border-b border-border/60 mb-3">
          <div className="h-7 w-7 rounded-full grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
            <MessageCircle size={13} className="text-background" />
          </div>
          <div>
            <div className="text-[11px] font-semibold">Aarav Mehta</div>
            <div className="text-[9px] text-teal flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-teal animate-pulse" /> Auto-qualifying
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {msgs.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: m.from === "bot" ? -8 : 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`flex ${m.from === "bot" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-2.5 py-1.5 text-[10.5px] leading-snug ${
                  m.from === "bot"
                    ? "bg-white/5 text-foreground/90 rounded-bl-sm"
                    : "text-background rounded-br-sm"
                }`}
                style={
                  m.from === "user"
                    ? { background: "linear-gradient(135deg, oklch(0.7 0.13 185), oklch(0.78 0.13 230))" }
                    : undefined
                }
              >
                {m.t}
                <div className={`mt-0.5 text-[8px] ${m.from === "bot" ? "text-muted-foreground" : "text-background/70"}`}>
                  {m.d}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5">
          <span className="text-[10px] text-muted-foreground flex-1">Typing reply…</span>
          <Send size={11} className="text-electric" />
        </div>
      </div>

      {/* Funnel stats */}
      <div className="col-span-2 space-y-2">
        {[
          { l: "Sent", v: "12,480", c: "oklch(0.78 0.13 230)", w: "100%" },
          { l: "Opened", v: "11,212", c: "oklch(0.7 0.13 185)", w: "89%" },
          { l: "Replied", v: "6,840", c: "oklch(0.65 0.2 290)", w: "54%" },
          { l: "Qualified", v: "1,284", c: "oklch(0.78 0.13 230)", w: "12%" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg glass p-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">{s.l}</span>
              <span className="text-[11px] font-semibold">{s.v}</span>
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: s.w }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.08 }}
                className="h-full"
                style={{ background: s.c }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ----------------- META ADS PANEL ----------------- */

function MetaAdsPanel() {
  const campaigns = [
    { n: "Spring Lead Gen", s: "Active", r: "5.2x", b: "₹1.8L" },
    { n: "Retargeting Q2", s: "Active", r: "7.1x", b: "₹92K" },
    { n: "Brand Awareness", s: "Scaling", r: "3.4x", b: "₹2.4L" },
  ];
  return (
    <div className="space-y-3">
      {/* KPI row */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { l: "Spend", v: "₹5.1L", i: TrendingUp },
          { l: "ROAS", v: "4.82x", i: Target },
          { l: "CPL", v: "₹42", i: Filter },
          { l: "Leads", v: "1,284", i: Users },
        ].map((k) => (
          <div key={k.l} className="rounded-lg glass p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground">{k.l}</span>
              <k.i size={11} className="text-electric" />
            </div>
            <div className="mt-1 text-sm font-semibold">{k.v}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-xl bg-surface-2/60 border border-border/60 p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-muted-foreground">Performance · 30 days</span>
          <span className="text-[10px] text-teal">+42.6%</span>
        </div>
        <AdsChart />
      </div>

      {/* Campaigns */}
      <div className="rounded-xl bg-surface-2/60 border border-border/60 divide-y divide-border/40">
        {campaigns.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-[11px] font-medium">{c.n}</span>
              <span className="text-[9px] uppercase text-muted-foreground rounded-full border border-border px-1.5 py-0.5">
                {c.s}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-muted-foreground">{c.b}</span>
              <span className="text-[11px] font-semibold text-gradient-electric">{c.r}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AdsChart() {
  const bars = [32, 40, 28, 52, 44, 60, 48, 68, 58, 76, 70, 88];
  return (
    <div className="flex items-end gap-1 h-20">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.04 }}
          className="flex-1 rounded-sm"
          style={{
            background:
              i >= bars.length - 3
                ? "linear-gradient(180deg, oklch(0.78 0.13 230), oklch(0.65 0.2 290))"
                : "linear-gradient(180deg, oklch(0.78 0.13 230 / 0.4), oklch(0.78 0.13 230 / 0.08))",
          }}
        />
      ))}
    </div>
  );
}

/* ----------------- AUTOMATION WORKFLOW ----------------- */

function AutomationFlow() {
  const nodes = [
    { x: 8, y: 30, label: "Ad Click", icon: Target, color: "oklch(0.78 0.13 230)" },
    { x: 32, y: 12, label: "Lead Form", icon: Users, color: "oklch(0.7 0.13 185)" },
    { x: 32, y: 60, label: "AI Score", icon: Sparkles, color: "oklch(0.65 0.2 290)" },
    { x: 60, y: 30, label: "WhatsApp", icon: MessageCircle, color: "oklch(0.7 0.13 185)" },
    { x: 86, y: 14, label: "CRM Sync", icon: Zap, color: "oklch(0.78 0.13 230)" },
    { x: 86, y: 56, label: "Closed Won", icon: CheckCircle2, color: "oklch(0.7 0.13 185)" },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
  ];

  return (
    <div className="relative h-[260px] rounded-xl bg-surface-2/60 border border-border/60 overflow-hidden">
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(oklch(1 0 0 / 0.1) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* SVG edges */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowGrad" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.78 0.13 230)" stopOpacity="0.8" />
            <stop offset="1" stopColor="oklch(0.65 0.2 290)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {edges.map(([a, b], i) => {
          const A = nodes[a];
          const B = nodes[b];
          const midX = (A.x + B.x) / 2;
          return (
            <g key={i}>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.15 }}
                d={`M ${A.x} ${A.y} C ${midX} ${A.y}, ${midX} ${B.y}, ${B.x} ${B.y}`}
                stroke="url(#flowGrad)"
                strokeWidth="0.4"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <motion.circle
                r="0.8"
                fill="oklch(0.98 0 0)"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 2.5, delay: 1 + i * 0.2, repeat: Infinity, ease: "linear" }}
                style={{
                  offsetPath: `path("M ${A.x} ${A.y} C ${midX} ${A.y}, ${midX} ${B.y}, ${B.x} ${B.y}")`,
                } as React.CSSProperties}
              />
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y * 1.25}%` }}
        >
          <div
            className="flex items-center gap-1.5 rounded-lg glass-strong px-2.5 py-1.5 ring-glow"
            style={{ boxShadow: `0 0 24px ${n.color.replace(")", " / 0.25)")}` }}
          >
            <n.icon size={11} style={{ color: n.color }} />
            <span className="text-[10px] font-medium whitespace-nowrap">{n.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
