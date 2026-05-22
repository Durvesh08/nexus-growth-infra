import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "motion/react";
import { Linkedin, Instagram, Mail, Phone, Sparkles } from "lucide-react";
import founderImg from "@/assets/founder.png";
import { CONTACT, SOCIALS } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/site/Nav";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Founder — Adsrahu" },
      { name: "description", content: "Meet Raushan Pratap Yadav, founder of Adsrahu — engineering growth systems for real estate and modern businesses." },
    ],
  }),
  component: TeamPage,
});

const stats = [
  { v: "100+", l: "Brands scaled" },
  { v: "5K+", l: "Leads generated" },
  { v: "6+", l: "Years experience" },
];

function TeamPage() {
  const linkedin = SOCIALS.find((s) => s.key === "linkedin")?.url ?? "#";
  const instagram = SOCIALS.find((s) => s.key === "instagram")?.url ?? "#";

  return (
    <>
      <PageHero
        eyebrow="Founder"
        title={<>The mind behind<br /><span className="text-gradient">Adsrahu.</span></>}
        description="One founder. One obsession — build performance systems that actually move the needle for real estate and modern businesses."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
            className="relative rounded-[28px] sm:rounded-[32px] glass-strong ring-glow depth-shadow overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute -top-32 -right-20 h-[400px] w-[400px] rounded-full hidden sm:block"
                   style={{ background: "radial-gradient(circle, oklch(0.78 0.13 230 / 0.35), transparent 60%)", filter: "blur(80px)" }} />
              <div className="absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full hidden sm:block"
                   style={{ background: "radial-gradient(circle, oklch(0.65 0.2 290 / 0.3), transparent 60%)", filter: "blur(80px)" }} />
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 md:p-10 items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-glow depth-shadow">
                  <img
                    src={founderImg}
                    alt="Raushan Pratap Yadav — Founder of Adsrahu"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="rounded-2xl glass-strong p-4">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-electric">
                        <Sparkles size={10} /> Founder of Adsrahu
                      </div>
                      <div className="mt-1.5 font-display text-lg sm:text-xl font-semibold">Raushan Pratap Yadav</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-electric" /> Meet The Founder
                </div>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.06]">
                  Engineering growth,<br /><span className="text-gradient">not selling marketing.</span>
                </h2>
                <p className="mt-5 text-[14px] sm:text-base text-muted-foreground leading-relaxed">
                  Raushan founded Adsrahu with a single mission — build modern growth
                  infrastructure for real estate brands and ambitious businesses.
                  Every campaign, funnel and automation is engineered around qualified
                  leads, faster follow-ups, and predictable revenue.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
                  {stats.map((s) => (
                    <div key={s.l} className="rounded-xl glass p-3.5 ring-glow">
                      <div className="font-display text-lg sm:text-xl font-semibold text-gradient-electric">{s.v}</div>
                      <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 hover:text-electric transition-colors">
                    <Linkedin size={15} />
                  </a>
                  <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 hover:text-electric transition-colors">
                    <Instagram size={15} />
                  </a>
                  <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 hover:text-electric transition-colors">
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                  <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 hover:text-electric transition-colors">
                    <Mail size={15} />
                  </a>
                  <a href={`tel:${CONTACT.phoneRaw}`} aria-label="Phone" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 hover:text-electric transition-colors">
                    <Phone size={15} />
                  </a>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/book-a-call"
                    className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-background"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                  >
                    Book Strategy Call
                  </Link>
                  <a
                    href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-medium hover:bg-white/8 transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-teal" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
