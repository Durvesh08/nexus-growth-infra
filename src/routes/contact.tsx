import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Calendar, Linkedin, Instagram, Twitter, Youtube, Loader2 } from "lucide-react";
import { CONTACT, SOCIALS, FORM_ENDPOINT } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/site/Nav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adsrahu" },
      { name: "description", content: "Talk to our growth team — WhatsApp, phone, email or strategy call. Real estate lead generation and modern growth systems." },
    ],
  }),
  component: ContactPage,
});

const SOCIAL_ICONS: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New contact inquiry — ${form.name}`,
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          source: "Adsrahu — Contact form",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build your<br /><span className="text-gradient">growth engine.</span></>}
        description="Tell us about your business. We respond within one business day — usually faster on WhatsApp."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl glass-strong p-6 sm:p-8 depth-shadow"
          >
            {status === "sent" ? (
              <div className="py-16 text-center">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-electric/15 grid place-items-center text-electric mb-4 text-xl">✓</div>
                <h3 className="font-display text-2xl font-semibold">Message sent.</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
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
                {status === "error" && (
                  <div className="text-xs text-red-400">Couldn't send right now — please WhatsApp or email us directly.</div>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-shine mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-background disabled:opacity-70"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                >
                  {status === "sending" ? <><Loader2 size={14} className="animate-spin" /> Sending…</> : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid gap-3"
          >
            {[
              { Icon: WhatsAppIcon, l: "WhatsApp", v: CONTACT.phone, href: CONTACT.whatsappUrl, external: true, glow: true },
              { Icon: Calendar, l: "Book a strategy call", v: "30-min growth audit", href: "/book-a-call" },
              { Icon: Phone, l: "Phone", v: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
              { Icon: Mail, l: "Email", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { Icon: MapPin, l: "Studio", v: "India · Remote-first", href: "#" },
            ].map(({ Icon, l, v, href, external, glow }) => (
              <a
                key={l}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={`group flex items-center gap-4 rounded-2xl glass p-4 hover:bg-white/8 transition-colors ${glow ? "ring-glow" : ""}`}
              >
                <div className="h-11 w-11 rounded-xl bg-electric/10 grid place-items-center text-electric group-hover:scale-110 transition-transform shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{l}</div>
                  <div className="text-sm font-medium mt-0.5 truncate">{v}</div>
                </div>
              </a>
            ))}

            <div className="mt-2 rounded-2xl glass p-4">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Follow Adsrahu</div>
              <div className="flex items-center gap-2">
                {SOCIALS.map((s) => {
                  const Icon = SOCIAL_ICONS[s.key];
                  const isWa = s.key === "whatsapp";
                  return (
                    <a
                      key={s.key}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 hover:text-electric transition-colors"
                    >
                      {isWa ? <WhatsAppIcon className="h-4 w-4" /> : Icon ? <Icon size={15} /> : null}
                    </a>
                  );
                })}
              </div>
            </div>
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
