import { PageHero } from "@/components/site/PageHero";
import { motion } from "motion/react";
import type { ReactNode } from "react";

export type LegalSection = { h: string; p: ReactNode };

export function LegalPage({
  title, subtitle, updated, sections,
}: { title: string; subtitle: string; updated: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>{title}</>}
        description={subtitle}
      />
      <section className="pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-6">Last updated · {updated}</div>
          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.h}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
                className="rounded-2xl glass p-6"
              >
                <h2 className="font-display text-xl font-semibold tracking-tight">{s.h}</h2>
                <div className="mt-3 text-[14px] text-muted-foreground leading-relaxed space-y-3">{s.p}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
