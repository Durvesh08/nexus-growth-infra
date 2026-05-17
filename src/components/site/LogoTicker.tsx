const logos = [
  "Lumen", "Aurora", "Helix", "Nova", "Vertex", "Orbit",
  "Stratos", "Quanta", "Lyric", "Monolith", "Arclight", "Halo",
];

export function LogoTicker() {
  return (
    <section className="relative py-14 border-y border-border bg-surface/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by category-defining teams
        </div>

        <div
          className="relative mt-7 overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
        >
          <div className="flex w-max gap-12 animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                data-cursor="hover"
                className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors whitespace-nowrap"
              >
                <div className="h-2 w-2 rounded-sm rotate-45 bg-gradient-to-br from-electric to-violet" />
                <span className="font-display text-xl font-semibold tracking-tight">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
