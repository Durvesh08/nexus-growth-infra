import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Building2, MapPin, Phone, TrendingUp } from "lucide-react";

const services = [
  "Facebook & Instagram Ads",
  "Google Lead Campaigns",
  "High-Converting Landing Pages",
  "CRM Setup & Pipeline",
  "WhatsApp Funnels",
  "Marketing Automation",
  "Lead Tracking Systems",
  "Scaling & Optimization",
];

export function RealEstateSection() {
  return (
    <section id="real-estate" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 h-[700px] w-[1100px] rounded-full conic-glow opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-electric">
            <Building2 size={12} /> Primary Industry · Real Estate
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1]">
            <span className="text-gradient">Real Estate Lead Generation</span>
            <br />
            <span className="text-foreground/90">Experts.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            We build end-to-end lead generation engines for builders, realtors and property
            consultants — paid ads, landing pages, CRM, WhatsApp follow-ups and conversion
            tracking, engineered as one growth system.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Big mockup card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative rounded-3xl p-2 glass-strong depth-shadow"
          >
            <div className="rounded-[20px] overflow-hidden bg-surface border border-border">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Building2 size={13} className="text-electric" /> Real Estate CRM · Live Pipeline
                </div>
                <span className="text-[10px] text-teal flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" /> 42 active deals
                </span>
              </div>
              <div className="p-4 grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Skyline Residences", stage: "Site Visit", price: "₹1.4 Cr", hot: true },
                  { name: "Emerald Heights", stage: "Negotiation", price: "₹85 L" },
                  { name: "Aster Greens Villa", stage: "Qualified", price: "₹2.1 Cr", hot: true },
                  { name: "Marina Bay Towers", stage: "Booking", price: "₹3.2 Cr" },
                ].map((d) => (
                  <div key={d.name} className="rounded-xl glass p-3.5">
                    <div className="flex items-center justify-between">
                      <div className="text-[13px] font-medium">{d.name}</div>
                      {d.hot && <span className="text-[10px] px-1.5 py-0.5 rounded bg-electric/15 text-electric">Hot</span>}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1"><MapPin size={10} /> {d.stage}</span>
                      <span className="text-[12px] font-semibold text-gradient-electric">{d.price}</span>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-white/8 overflow-hidden">
                      <div className="h-full bg-[var(--gradient-primary)]" style={{ width: `${30 + Math.random() * 60}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border p-4 grid grid-cols-3 gap-3">
                {[
                  { l: "Site visits", v: "84" },
                  { l: "Avg CPL", v: "₹128" },
                  { l: "Bookings", v: "11" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-lg font-display font-semibold">{s.v}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3"
          >
            {services.map((s, i) => (
              <div key={s} className="group rounded-2xl glass p-4 hover:bg-white/8 transition-all hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-electric/10 grid place-items-center text-electric mb-3 group-hover:scale-110 transition-transform">
                  <TrendingUp size={14} />
                </div>
                <div className="text-[13px] font-medium leading-snug">{s}</div>
                <div className="text-[10px] text-muted-foreground mt-1">0{i + 1}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/book-a-call"
            className="btn-shine inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-background"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Book Free Strategy Call
          </Link>
          <a
            href="https://wa.me/919999999999"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={14} className="text-teal" /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
