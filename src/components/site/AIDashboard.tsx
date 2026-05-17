import { motion } from "motion/react";
import { SectionHeader } from "./Section";
import { MessageCircle, Users, Zap, TrendingUp } from "lucide-react";

export function AIDashboard() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="AI Command Center"
          title={<>The cockpit for <span className="text-gradient-electric">modern growth teams.</span></>}
          description="Real-time campaign signals, automation health, and pipeline velocity — unified into one operating view."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-14 rounded-3xl glass-strong ring-glow p-4 md:p-6 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full blur-3xl opacity-40"
               style={{ background: "radial-gradient(circle, oklch(0.65 0.2 290 / 0.5), transparent 70%)" }} />

          <div className="grid lg:grid-cols-3 gap-4 relative">
            {/* Stat tiles */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              <StatCard icon={TrendingUp} label="Campaign performance" value="4.82x" delta="+18% vs last week" chart />
              <StatCard icon={Users} label="Leads captured" value="1,284" delta="+34%" />
              <StatCard icon={Zap} label="Automations active" value="47" delta="12 triggered/hr" />
              <StatCard icon={MessageCircle} label="WhatsApp inquiries" value="312" delta="98% reply rate" />
            </div>

            {/* Activity */}
            <div className="rounded-2xl glass p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">Live activity</div>
                <span className="flex items-center gap-1.5 text-[10px] text-teal">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" /> Realtime
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { c: "Meta", t: "New lead — Mumbai", v: "₹0 CPL", d: "12s ago" },
                  { c: "WhatsApp", t: "Auto-qualified hot lead", v: "Score 92", d: "48s ago" },
                  { c: "Google", t: "Search campaign scaled +25%", v: "ROAS 5.1x", d: "1m ago" },
                  { c: "CRM", t: "Deal moved to Closed Won", v: "₹2.4L", d: "3m ago" },
                  { c: "AI", t: "Creative variant generated", v: "v.12", d: "4m ago" },
                ].map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[9px] uppercase tracking-widest rounded-md bg-surface-2 border border-border px-1.5 py-0.5 text-muted-foreground">
                        {a.c}
                      </span>
                      <span className="text-[12px] truncate">{a.t}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[11px] text-electric">{a.v}</div>
                      <div className="text-[10px] text-muted-foreground">{a.d}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom chart */}
          <div className="mt-4 rounded-2xl glass p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-muted-foreground">Customer growth — last 90 days</div>
              <div className="text-[11px] text-teal">+42.6%</div>
            </div>
            <BarChart />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon, label, value, delta, chart,
}: {
  icon: typeof TrendingUp; label: string; value: string; delta: string; chart?: boolean;
}) {
  return (
    <div className="rounded-2xl glass p-4 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="text-[11px] text-muted-foreground">{label}</div>
        <Icon size={14} className="text-electric" />
      </div>
      <div className="mt-2 flex items-end justify-between gap-3">
        <div>
          <div className="font-display text-2xl font-semibold">{value}</div>
          <div className="text-[10px] text-teal mt-0.5">{delta}</div>
        </div>
        {chart && <Sparkline />}
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 100 32" className="w-24 h-8">
      <defs>
        <linearGradient id="sp" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.78 0.13 230)" />
          <stop offset="1" stopColor="oklch(0.7 0.13 185)" />
        </linearGradient>
      </defs>
      <path d="M0,25 L15,20 L30,22 L45,12 L60,16 L75,8 L100,4" fill="none" stroke="url(#sp)" strokeWidth="1.6" />
    </svg>
  );
}

function BarChart() {
  const bars = [30, 45, 38, 55, 48, 62, 58, 72, 68, 80, 75, 92];
  return (
    <div className="flex items-end gap-1.5 h-24">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }}
          className="flex-1 rounded-sm"
          style={{
            background: i === bars.length - 1
              ? "linear-gradient(180deg, oklch(0.78 0.13 230), oklch(0.65 0.2 290))"
              : "linear-gradient(180deg, oklch(0.78 0.13 230 / 0.4), oklch(0.78 0.13 230 / 0.1))",
          }}
        />
      ))}
    </div>
  );
}
