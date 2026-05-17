import { motion, useScroll, useTransform } from "motion/react";

/**
 * Global cinematic background — layered radial gradients, conic auroras,
 * subtle grid + noise. Sits behind all content (fixed, -z-10).
 */
export function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.22 0.08 285 / 0.6), transparent 70%), radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.18 0.07 230 / 0.5), transparent 70%)",
        }}
      />

      {/* Drifting aurora 1 */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-1/4 left-1/2 h-[1100px] w-[1100px] -translate-x-1/2 rounded-full opacity-40"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, oklch(0.78 0.13 230 / 0.45), oklch(0.65 0.2 290 / 0.5), oklch(0.7 0.13 185 / 0.4), oklch(0.78 0.13 230 / 0.45))",
            filter: "blur(120px)",
          }}
        />
      </motion.div>

      {/* Drifting aurora 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] -right-40 h-[700px] w-[700px] rounded-full opacity-30"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.2 290 / 0.7), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute top-[70%] -left-40 h-[600px] w-[600px] rounded-full opacity-30"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.13 185 / 0.7), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
