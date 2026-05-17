import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-14 w-14 rounded-2xl glow-electric"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="absolute inset-0 grid place-items-center font-display text-xl font-black text-background">
                A
              </span>
              <motion.span
                className="absolute -inset-2 rounded-3xl border border-electric/40"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <div className="font-display text-sm tracking-[0.4em] text-muted-foreground">
                ADSRAHU
              </div>
              <div className="h-px w-32 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/2"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
