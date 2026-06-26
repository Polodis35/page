"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<
    "frame-draw" | "typewriter" | "fade-out" | "complete"
  >(shouldReduceMotion ? "complete" : "frame-draw");

  const typewriterText = "// osmx.dijital-cozumler";
  const [displayedChars, setDisplayedChars] = useState(
    shouldReduceMotion ? typewriterText.length : 0
  );

  // Orchestrated animation sequence
  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    // Phase 1: Frame draws in (handled by Framer Motion, ~800ms)
    const frameTimer = setTimeout(() => {
      setPhase("typewriter");
    }, 900);

    return () => clearTimeout(frameTimer);
  }, [shouldReduceMotion]);

  // Typewriter effect
  useEffect(() => {
    if (phase !== "typewriter" || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setDisplayedChars((prev) => {
        if (prev >= typewriterText.length) {
          clearInterval(interval);
          // After typewriter completes, wait then fade out
          setTimeout(() => setPhase("fade-out"), 400);
          setTimeout(() => setPhase("complete"), 900);
          return prev;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [phase, shouldReduceMotion]);

  const bracketSize = 20;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(147,201,60,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Inspector Frame around heading */}
        <div className="relative inline-block">
          {/* SVG Bracket Frame */}
          {phase !== "complete" && (
            <motion.svg
              className="absolute pointer-events-none"
              style={{
                top: "-16px",
                left: "-20px",
                right: "-20px",
                bottom: "-16px",
                width: "calc(100% + 40px)",
                height: "calc(100% + 32px)",
              }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              initial={{ opacity: 1 }}
              animate={{
                opacity: phase === "fade-out" ? 0 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Top-left */}
              <motion.path
                d={`M ${bracketSize} 0 L 0 0 L 0 ${bracketSize}`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: "easeInOut",
                }}
              />
              {/* Top-right */}
              <motion.path
                d={`M ${100 - bracketSize} 0 L 100 0 L 100 ${bracketSize}`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: "easeInOut",
                  delay: shouldReduceMotion ? 0 : 0.1,
                }}
              />
              {/* Bottom-left */}
              <motion.path
                d={`M 0 ${100 - bracketSize} L 0 100 L ${bracketSize} 100`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: "easeInOut",
                  delay: shouldReduceMotion ? 0 : 0.15,
                }}
              />
              {/* Bottom-right */}
              <motion.path
                d={`M 100 ${100 - bracketSize} L 100 100 L ${100 - bracketSize} 100`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: "easeInOut",
                  delay: shouldReduceMotion ? 0 : 0.2,
                }}
              />
            </motion.svg>
          )}

          {/* Mono label - typewriter effect */}
          {phase !== "complete" && (
            <motion.div
              className="absolute -top-10 left-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity:
                  phase === "typewriter"
                    ? 1
                    : phase === "fade-out"
                    ? 0
                    : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-mono text-[11px] sm:text-xs text-accent/60 tracking-wide">
                {typewriterText.slice(0, displayedChars)}
                {phase === "typewriter" && (
                  <span className="caret-blink text-accent">▌</span>
                )}
              </span>
            </motion.div>
          )}

          {/* Main Heading */}
          <motion.h1
            className="font-display font-bold leading-[1.1] tracking-tight text-text"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            }}
            initial={shouldReduceMotion ? {} : { opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            Dijital Dönüşümde
            <br />
            <span className="text-accent">Akıllı Çözümler</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-6 sm:mt-8 text-text-muted font-body max-w-2xl mx-auto leading-relaxed"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
          }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 1.8,
          }}
        >
          Yazılım, otomasyon ve yapay zeka çözümleriyle işletmenizin dijital
          dönüşüm süreçlerini hızlandırıyoruz.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 2.1,
          }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="#iletisim"
            id="hero-cta"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-semibold rounded-lg hover:bg-accent-bright transition-colors focus-visible:outline-none"
          >
            <span className="absolute inset-[-3px] border border-transparent group-focus-visible:border-accent-bright rounded-lg pointer-events-none transition-colors" />
            <span>İletişime Geç</span>
            <span className="relative w-[2px] h-[18px] bg-bg/60 group-hover:caret-blink transition-opacity" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 2.5,
          }}
        >
          <motion.div
            className="w-5 h-8 border border-text-muted rounded-full flex justify-center"
            aria-hidden="true"
          >
            <motion.div
              className="w-1 h-2 bg-text-muted rounded-full mt-1.5"
              animate={
                shouldReduceMotion
                  ? {}
                  : { y: [0, 8, 0] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
