import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "motion/react";
import { Check, Calendar, Clock, Video, MessageCircle } from "lucide-react";

const includes = [
  "Funnel & ad audit",
  "CRM gap analysis",
  "Lead-to-booking workflow review",
  "Growth roadmap for next 90 days",
  "Honest fit assessment — no pressure",
];

const slots = [
  { day: "Mon", date: "12" }, { day: "Tue", date: "13" }, { day: "Wed", date: "14" },
  { day: "Thu", date: "15" }, { day: "Fri", date: "16" }, { day: "Sat", date: "17" },
];
const times = ["10:00", "11:30", "14:00", "15:30", "17:00", "18:30"];

export const Route = createFileRoute("/book-a-call")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — Adsrahu" },
      { name: "description", content: "Book a free 30-minute strategy call with the Adsrahu team. Real estate lead generation, ads, CRM and WhatsApp automation." },
    ],
  }),
  component: BookCallPage,
});

function BookCallPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategy Call"
        title={<>Book your free<br /><span className="text-gradient">growth audit.</span></>}
        description="30 minutes. No pitch deck. Walk away with a clear plan for your funnel, ads and lead system — whether or not we work together."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl glass p-7"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-electric">
              <Video size={12} /> 30 min · Google Meet
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold">Growth Audit Call</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We'll review your current ads, funnel, CRM and follow-up flow — then give you a
              prioritized 90-day plan.
            </p>
            <ul className="mt-6 space-y-2.5">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 h-5 w-5 rounded-md bg-electric/15 grid place-items-center text-electric shrink-0"><Check size={12} /></span>
                  {i}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919999999999" target="_blank" rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl glass px-4 py-3 text-sm hover:bg-white/8 transition-colors w-full justify-center"
            >
              <MessageCircle size={14} className="text-teal" /> Prefer WhatsApp? Chat now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl glass-strong p-7 depth-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Select a slot</div>
                <h3 className="mt-1.5 font-display text-xl font-semibold">This week</h3>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} /> IST
              </div>
            </div>

            <div className="mt-6 grid grid-cols-6 gap-2">
              {slots.map((s, i) => (
                <button key={s.date} className={`rounded-xl glass p-3 text-center hover:bg-white/8 transition-colors ${i === 2 ? "ring-glow bg-white/[0.04]" : ""}`}>
                  <div className="text-[10px] uppercase text-muted-foreground tracking-wider">{s.day}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{s.date}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Available times</div>
            <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
              {times.map((t, i) => (
                <button key={t} className={`rounded-lg glass px-3 py-2.5 text-sm hover:bg-electric/10 transition-colors ${i === 2 ? "bg-electric/15 text-electric" : ""}`}>
                  {t}
                </button>
              ))}
            </div>

            <button className="mt-7 btn-shine w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-background"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              <Calendar size={14} /> Confirm Booking
            </button>
            <div className="mt-3 text-[11px] text-muted-foreground text-center">
              Once confirmed, you'll receive a Google Meet invite by email.
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
