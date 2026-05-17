import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "System", href: "#system" },
  { label: "Case Studies", href: "#cases" },
  { label: "Why Us", href: "#why" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-strong ring-glow" : "border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 rounded-lg bg-[var(--gradient-primary)] glow-electric">
              <span className="absolute inset-0 flex items-center justify-center text-[13px] font-black text-background">
                A
              </span>
            </div>
            <span className="font-display text-base font-semibold tracking-tight">
              Adsrahu
            </span>
            <span className="hidden sm:inline ml-1.5 rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              v2.5
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Book Strategy Call
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden h-9 w-9 grid place-items-center rounded-lg glass"
              aria-label="Menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-border px-3 py-3 grid gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.header>
  );
}
