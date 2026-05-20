import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { PageHero } from "@/components/site/PageHero";
import { Mail, MessageCircle, Phone, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adsrahu" },
      { name: "description", content: "Talk to our growth team. WhatsApp, Calendly and contact form for real estate and modern businesses." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build your<br /><span className="text-gradient">growth engine.</span></>}
        description="Tell us about your business. We respond within one business day — usually faster on WhatsApp."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl glass-strong p-7 md:p-8 depth-shadow"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-electric/15 grid place-items-center text-electric mb-4">✓</div>
                <h3 className="font-display text-2xl font-semibold">Message sent.</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-electric">Project Inquiry</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <Field label="Company / brand" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-muted-foreground mb-2">How can we help?</label>
                  <textarea
                    required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl glass p-4 text-sm outline-none focus:bg-white/8 transition-colors placeholder:text-muted-foreground/70 resize-none"
                    placeholder="Tell us about your business, goals and timelines…"
                  />
                </div>
                <button type="submit" className="btn-shine mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid gap-4"
          >
            {[
              { Icon: MessageCircle, l: "WhatsApp", v: "+91 99999 99999", href: "https://wa.me/919999999999" },
              { Icon: Calendar, l: "Book a strategy call", v: "30-min growth audit", href: "/book-a-call" },
              { Icon: Mail, l: "Email", v: "hello@adsrahu.com", href: "mailto:hello@adsrahu.com" },
              { Icon: Phone, l: "Phone", v: "+91 99999 99999", href: "tel:+919999999999" },
              { Icon: MapPin, l: "Studio", v: "India · Remote-first", href: "#" },
            ].map(({ Icon, l, v, href }) => (
              <a key={l} href={href} className="group flex items-center gap-4 rounded-2xl glass p-4 hover:bg-white/8 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-electric/10 grid place-items-center text-electric group-hover:scale-110 transition-transform">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{l}</div>
                  <div className="text-sm font-medium mt-0.5">{v}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        type={type} required value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:bg-white/8 transition-colors placeholder:text-muted-foreground/70"
      />
    </div>
  );
}
