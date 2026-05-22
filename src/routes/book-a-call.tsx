import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "motion/react";
import { Check, Calendar, Clock, Video, Loader2 } from "lucide-react";
import { CONTACT, FORM_ENDPOINT } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/site/Nav";

const includes = [
  "Funnel & ad audit",
  "CRM gap analysis",
  "Lead-to-booking workflow review",
  "Growth roadmap for next 90 days",
  "Honest fit assessment — no pressure",
];

// Generate next 6 working days dynamically
function nextSlots() {
  const out: { day: string; date: string; iso: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (out.length < 6) {
    const day = d.toLocaleDateString("en-US", { weekday: "short" });
    out.push({
      day,
      date: String(d.getDate()).padStart(2, "0"),
      iso: d.toISOString().split("T")[0],
    });
    d.setDate(d.getDate() + 1);
  }
  return out;
}

const times = ["10:00", "11:30", "14:00", "15:30", "17:00", "18:30"];

export const Route = createFileRoute("/book-a-call")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — Adsrahu" },
      { name: "description", content: "Book a free 30-minute strategy call with Adsrahu. Real estate lead generation, ads, CRM and WhatsApp automation." },
    ],
  }),
  component: BookCallPage,
});

function BookCallPage() {
  const slots = nextSlots();
  const [selectedDate, setSelectedDate] = useState(slots[2].iso);
  const [selectedTime, setSelectedTime] = useState(times[2]);
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New strategy call booking — ${form.name}`,
          type: "Strategy Call Booking",
          name: form.name,
          business: form.business,
          phone: form.phone,
          email: form.email,
          slot_date: selectedDate,
          slot_time: `${selectedTime} IST`,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Strategy Call"
        title={<>Book your free<br /><span className="text-gradient">growth audit.</span></>}
        description="30 minutes. No pitch deck. Walk away with a clear plan for your funnel, ads and lead system — whether or not we work together."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl glass p-6 sm:p-7"
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
              href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer"
              className="btn-shine mt-7 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-background w-full justify-center"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <WhatsAppIcon className="h-4 w-4" /> Prefer WhatsApp? Chat now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl glass-strong p-6 sm:p-7 depth-shadow"
          >
            {status === "sent" ? (
              <div className="py-16 text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-electric/15 grid place-items-center text-electric mb-5 text-2xl ring-glow">✓</div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Request submitted.</h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Your strategy call request has been submitted successfully.
                  Our team will contact you shortly to confirm your slot.
                </p>
                <a
                  href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/8 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 text-teal" /> Speed it up on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Select a slot</div>
                    <h3 className="mt-1.5 font-display text-xl font-semibold">This week</h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} /> IST
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {slots.map((s) => {
                    const active = s.iso === selectedDate;
                    return (
                      <button
                        type="button" key={s.iso}
                        onClick={() => setSelectedDate(s.iso)}
                        className={`rounded-xl glass p-3 text-center hover:bg-white/8 transition-colors ${active ? "ring-glow bg-electric/10" : ""}`}
                      >
                        <div className="text-[10px] uppercase text-muted-foreground tracking-wider">{s.day}</div>
                        <div className={`mt-1 font-display text-lg font-semibold ${active ? "text-electric" : ""}`}>{s.date}</div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Available times</div>
                <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {times.map((t) => {
                    const active = t === selectedTime;
                    return (
                      <button
                        type="button" key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`rounded-lg glass px-3 py-2.5 text-sm hover:bg-electric/10 transition-colors ${active ? "bg-electric/15 text-electric ring-glow" : ""}`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <BField label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <BField label="Business name" value={form.business} onChange={(v) => setForm({ ...form, business: v })} />
                  <BField label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  <BField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>

                {status === "error" && (
                  <div className="mt-4 text-xs text-red-400">Couldn't submit right now — please WhatsApp us at {CONTACT.phone}.</div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-shine mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-background disabled:opacity-70"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                >
                  {status === "sending" ? <><Loader2 size={14} className="animate-spin" /> Submitting…</> : <><Calendar size={14} /> Confirm Booking</>}
                </button>
                <div className="mt-3 text-[11px] text-muted-foreground text-center">
                  Once confirmed, our team will reach out within one business day.
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function BField({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">{label}</label>
      <input
        type={type} required value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg glass px-3.5 py-2.5 text-sm outline-none focus:bg-white/8 transition-colors"
      />
    </div>
  );
}
