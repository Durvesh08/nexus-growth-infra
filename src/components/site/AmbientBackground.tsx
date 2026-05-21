/**
 * Global cinematic background — static layered gradients.
 * Lightweight: no scroll listeners, no animated transforms, no large blurs on mobile.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.22 0.08 285 / 0.5), transparent 70%), radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.18 0.07 230 / 0.45), transparent 70%)",
        }}
      />

      {/* Static glows — small + medium blur, hidden behind heavy effects on mobile */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-30 hidden sm:block"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.13 230 / 0.5), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-[60%] -right-32 h-[400px] w-[400px] rounded-full opacity-25 hidden sm:block"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.2 290 / 0.55), transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="absolute inset-0 bg-grid opacity-15" />
    </div>
  );
}
