import { useState } from "react";
import { Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";

const groups = [
  { title: "Services", links: ["Performance Marketing", "Lead Generation", "AI Automation", "CRM & WhatsApp", "Landing Pages"] },
  { title: "Company", links: ["About", "Case Studies", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Playbooks", "Growth Reports", "Templates", "Pricing", "Newsletter"] },
];

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px"
           style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.13 230 / 0.4), transparent)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl glass-strong p-8 md:p-12 ring-glow">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-lg bg-[var(--gradient-primary)] glow-electric grid place-items-center text-background font-black text-sm">A</div>
                <span className="font-display text-lg font-semibold tracking-tight">Adsrahu</span>
              </div>
              <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
                Growth infrastructure for modern businesses. Performance, automation and AI — engineered as one system.
              </p>

              <form
                onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
                className="mt-7 max-w-md"
              >
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">Growth dispatch · monthly</div>
                <div className="flex items-center gap-2 rounded-xl glass p-1.5 focus-within:glow-electric transition-shadow">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="founder@yourbrand.com"
                    className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground/70"
                  />
                  <button
                    type="submit"
                    className="rounded-lg px-4 py-2.5 text-xs font-semibold text-background"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <a
                href="https://wa.me/"
                target="_blank" rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-xs font-medium hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={13} className="text-teal" />
                Chat with us on WhatsApp
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {groups.map((g) => (
                <div key={g.title}>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{g.title}</div>
                  <ul className="mt-4 space-y-2.5">
                    {g.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="text-[13px] text-foreground/80 hover:text-electric transition-colors">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-muted-foreground">
              © {new Date().getFullYear()} Adsrahu Growth Systems. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i} href="#"
                  className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition-colors"
                >
                  <Icon size={14} className="text-foreground/80" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="font-display text-[14vw] leading-none font-semibold tracking-[-0.06em] text-gradient opacity-25 select-none">
            ADSRAHU
          </div>
        </div>
      </div>
    </footer>
  );
}
