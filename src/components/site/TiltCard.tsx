import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * Interactive card with subtle 3D tilt + spotlight following the cursor.
 * Wraps any content. Disabled on touch devices by default (CSS pointer detection).
 */
export function TiltCard({
  children,
  className = "",
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rx = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 200, damping: 20,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 200, damping: 20,
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    ref.current!.style.setProperty("--mx", `${px * 100}%`);
    ref.current!.style.setProperty("--my", `${py * 100}%`);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
