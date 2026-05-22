import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Youtube, Phone, Mail } from "lucide-react";
import logoUrl from "@/assets/adsrahu-logo.png";
import { WhatsAppIcon } from "./Nav";
import { CONTACT, SOCIALS } from "@/lib/contact";

const SOCIAL_ICONS: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

const groups = [
  { title: "Company", links: [
    { l: "About", to: "/about" as const },
    { l: "Team", to: "/team" as const },
    { l: "Results", to: "/results" as const },
    { l: "Blog", to: "/blog" as const },
  ]},
  { title: "Services", links: [
    { l: "Services", to: "/services" as const },
    { l: "Industries", to: "/industries" as const },
    { l: "Book a Call", to: "/book-a-call" as const },
    { l: "Contact", to: "/contact" as const },
  ]},
  { title: "Legal", links: [
    { l: "Privacy Policy", to: "/privacy" as const },
    { l: "Terms & Conditions", to: "/terms" as const },
    { l: "Refund Policy", to: "/refund" as const },
  ]},
];

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative pt-20 sm:pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.13 230 / 0.4), transparent)" }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="rounded-3xl glass-strong p-6 sm:p-8 md:p-12 ring-glow">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Link to="/" className="flex items-center gap-2.5">
                <img src={logoUrl} alt="Adsrahu" className="h-10 w-10 object-contain" />
                <span className="font-display text-lg font-semibold tracking-tight">Adsrahu</span>
              </Link>
              <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
                Real estate lead generation and growth infrastructure — performance, automation
                and AI engineered as one system.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="mt-6 max-w-md">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Growth dispatch · monthly</div>
                <div className="flex items-center gap-2 rounded-xl glass p-1.5">
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbrand.com"
                    className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground/70"
                  />
                  <button type="submit" className="rounded-lg px-4 py-2.5 text-xs font-semibold text-background" style={{ background: "var(--gradient-primary)" }}>
                    Subscribe
                  </button>
                </div>
              </form>

              <div className="mt-6 grid sm:grid-cols-2 gap-2">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-xs font-medium hover:bg-white/10 transition-colors">
                  <Phone size={13} className="text-electric" /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-xs font-medium hover:bg-white/10 transition-colors">
                  <Mail size={13} className="text-electric" /> {CONTACT.email}
                </a>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-background btn-shine"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                  <WhatsAppIcon className="h-3.5 w-3.5" /> Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {groups.map((g) => (
                <div key={g.title}>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{g.title}</div>
                  <ul className="mt-4 space-y-2.5">
                    {g.links.map((l) => (
                      <li key={l.to}>
                        <Link to={l.to} className="text-[13px] text-foreground/80 hover:text-electric transition-colors">
                          {l.l}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Adsrahu. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition-colors">
                  <Icon size={14} className="text-foreground/80" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center hidden sm:block">
          <div className="font-display text-[14vw] leading-none font-semibold tracking-[-0.06em] text-gradient opacity-25 select-none">
            ADSRAHU
          </div>
        </div>
      </div>
    </footer>
  );
}
