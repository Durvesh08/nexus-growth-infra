import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    quote: "Adsrahu rebuilt our growth engine end-to-end. Within 90 days our pipeline tripled and our CAC dropped by half. They operate like an in-house team — only sharper.",
    name: "Aarav Mehta",
    role: "Founder, Lumen D2C",
    initials: "AM",
  },
  {
    quote: "The most thoughtful performance team we've worked with. The AI nurture systems they deployed feel three years ahead of anything else in market.",
    name: "Priya Iyer",
    role: "CMO, Helix SaaS",
    initials: "PI",
  },
  {
    quote: "It stopped feeling like marketing and started feeling like infrastructure. Predictable, measurable, compounding revenue every quarter.",
    name: "Rohan Khanna",
    role: "Director, Aurora Estates",
    initials: "RK",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Operators trust us with their <span className="text-gradient-electric">most important number.</span></>}
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl glass-strong p-6 flex flex-col gap-5 ring-glow"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={13} className="fill-electric text-electric" />
                ))}
              </div>
              <blockquote className="text-[14px] leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-3 border-t border-border">
                <div className="h-9 w-9 rounded-full grid place-items-center text-xs font-semibold text-background"
                     style={{ background: "var(--gradient-primary)" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-medium">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
