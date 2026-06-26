"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import InspectorFrame from "./InspectorFrame";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  showFrame?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  showFrame = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const [frameFading, setFrameFading] = useState(false);

  const handleFrameComplete = () => {
    setTimeout(() => setFrameFading(true), 100);
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      {showFrame && isInView && (
        <InspectorFrame
          animate={isInView}
          fadeOut={frameFading}
          duration={shouldReduceMotion ? 0 : 0.4}
          onAnimationComplete={handleFrameComplete}
        />
      )}
      <motion.div
        className="relative z-1"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : delay + 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }
            : {}
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
