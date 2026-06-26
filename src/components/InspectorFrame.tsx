"use client";

import { motion, useReducedMotion } from "framer-motion";

interface InspectorFrameProps {
  animate?: boolean;
  label?: string;
  className?: string;
  duration?: number;
  fadeOut?: boolean;
  onAnimationComplete?: () => void;
}

export default function InspectorFrame({
  animate = true,
  label,
  className = "",
  duration = 0.5,
  fadeOut = false,
  onAnimationComplete,
}: InspectorFrameProps) {
  const shouldReduceMotion = useReducedMotion();

  const bracketSize = 24;
  const strokeWidth = 1;

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: shouldReduceMotion ? 0 : duration,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ease: "easeInOut" as any,
        },
        opacity: { duration: 0.1 },
      },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4 },
    },
  };

  const labelVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: shouldReduceMotion ? 0 : duration * 0.6,
        duration: shouldReduceMotion ? 0 : 0.3,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.3 },
    },
  };

  const currentState = fadeOut ? "fadeOut" : animate ? "visible" : "hidden";

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        initial="hidden"
        animate={currentState}
        onAnimationComplete={() => {
          if (currentState === "visible" && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
      >
        {/* Top-left bracket */}
        <motion.path
          d={`M ${bracketSize} 0 L 0 0 L 0 ${bracketSize}`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          variants={pathVariants}
        />
        {/* Top-right bracket */}
        <motion.path
          d={`M ${100 - bracketSize} 0 L 100 0 L 100 ${bracketSize}`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          variants={pathVariants}
        />
        {/* Bottom-left bracket */}
        <motion.path
          d={`M 0 ${100 - bracketSize} L 0 100 L ${bracketSize} 100`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          variants={pathVariants}
        />
        {/* Bottom-right bracket */}
        <motion.path
          d={`M 100 ${100 - bracketSize} L 100 100 L ${100 - bracketSize} 100`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          variants={pathVariants}
        />
      </motion.svg>

      {label && (
        <motion.span
          className="absolute -top-6 left-0 font-mono text-[10px] sm:text-xs text-accent/70 whitespace-nowrap"
          variants={labelVariants}
          initial="hidden"
          animate={currentState}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}
