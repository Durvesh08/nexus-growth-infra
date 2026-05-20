import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  { tag: "Real Estate", title: "Why most realtor ads fail — and the 5-step funnel that fixes it", date: "May 2026", read: "8 min", featured: true },
  { tag: "Automation", title: "WhatsApp funnels: the new follow-up engine for high-ticket sales", date: "May 2026", read: "6 min" },
  { tag: "Meta Ads", title: "The CPL playbook: how we cut real estate cost-per-lead by 60%", date: "Apr 2026", read: "7 min" },
  { tag: "CRM", title: "Designing a CRM pipeline builders actually use", date: "Apr 2026", read: "5 min" },
  { tag: "Growth", title: "From lead to booking: the 7-touch sequence that converts", date: "Mar 2026", read: "9 min" },
  { tag: "Landing Pages", title: "Anatomy of a high-converting real estate landing page", date: "Mar 2026", read: "6 min" },
  { tag: "Google Ads", title: "Search vs Performance Max for property campaigns", date: "Feb 2026", read: "8 min" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Adsrahu Growth Playbooks" },
      { name: "description", content: "Playbooks on real estate lead generation, CRM, WhatsApp automation, Meta and Google ads, and conversion optimization." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Growth playbooks for<br /><span className="text-gradient">modern businesses.</span></>}
        description="Tactical breakdowns on real estate funnels, CRM, automation and performance marketing."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.a
            href="#" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="group block rounded-3xl glass-strong overflow-hidden depth-shadow"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                <div className="absolute inset-0" style={{
                  background: "radial-gradient(circle at 30% 40%, oklch(0.78 0.13 230 / 0.5), transparent 60%), radial-gradient(circle at 70% 60%, oklch(0.65 0.2 290 / 0.5), transparent 60%)",
                }} />
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-electric">
                  Featured · {featured.tag}
                </div>
              </div>
              <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{featured.date} · {featured.read} read</div>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] leading-[1.15] group-hover:text-gradient transition-colors">
                    {featured.title}
                  </h2>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-electric">
                  Read article <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </motion.a>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <motion.a
                key={p.title} href="#"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl glass p-6 hover:bg-white/8 transition-colors flex flex-col"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-electric/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-electric">{p.tag}</div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-foreground">{p.title}</h3>
                <div className="mt-auto pt-6 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {p.read}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
