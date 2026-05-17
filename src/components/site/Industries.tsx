import { motion } from "motion/react";
import { Building2, ShoppingBag, GraduationCap, User, Rocket, Store, Cloud, Gem } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { icon: Building2, name: "Real Estate", note: "High-ticket lead engines" },
  { icon: ShoppingBag, name: "E-commerce", note: "Scaling ROAS at volume" },
  { icon: GraduationCap, name: "Coaches", note: "Authority + funnels" },
  { icon: User, name: "Personal Brands", note: "Content × paid systems" },
  { icon: Rocket, name: "Startups", note: "0 → 1 demand engines" },
  { icon: Store, name: "Local Businesses", note: "Geo-targeted growth" },
  { icon: Cloud, name: "SaaS Brands", note: "Pipeline & retention" },
  { icon: Gem, name: "Luxury Brands", note: "Premium positioning" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-dotted opacity-40" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries"
          title={<>Trusted by category leaders <span className="text-gradient-electric">across verticals.</span></>}
          description="From founders shipping their first campaign to enterprises orchestrating global launches."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative aspect-[5/4] rounded-2xl glass p-5 overflow-hidden hover:bg-white/[0.06] transition-colors"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                   style={{ background: "radial-gradient(circle, oklch(0.78 0.13 230 / 0.4), transparent 70%)" }} />
              <div className="relative h-full flex flex-col justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2">
                  <it.icon size={16} className="text-electric" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold">{it.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{it.note}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
