"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // dot — follows instantly
  const dotX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 40 });

  // ring — follows instantly
  const ringX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const ringY = useSpring(mouseY, { stiffness: 600, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
    };
  }, [mouseX, mouseY, visible]);

  return (
    <>
      {/* Ring — lags behind */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-14 w-14 rounded-full border border-primary/50"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Dot — follows instantly */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-3 w-3 rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
