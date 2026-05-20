import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Services", to: "/services" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Results", to: "/results" as const },
  { label: "Case Studies", to: "/case-studies" as const },
  { label: "About", to: "/about" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact", to: "/contact" as const },
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
      className="fixed top-0 inset-x-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <div className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${scrolled ? "glass-strong ring-glow" : "border border-transparent"}`}>
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 rounded-lg bg-[var(--gradient-primary)] glow-electric">
              <span className="absolute inset-0 flex items-center justify-center text-[13px] font-black text-background">A</span>
            </div>
            <span className="font-display text-base font-semibold tracking-tight">Adsrahu</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "rounded-lg px-3 py-2 text-[13px] text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/book-a-call"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-background btn-shine transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Book Call
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden h-9 w-9 grid place-items-center rounded-lg glass" aria-label="Menu">
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                {open ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border px-3 py-3 grid gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/team" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5">Team</Link>
          </div>
        )}
      </div>
    </motion.header>
  );
}
