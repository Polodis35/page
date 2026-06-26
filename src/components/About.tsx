"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const focusAreas = [
  "Otomasyon",
  "Yazılım Geliştirme",
  "Yapay Zeka",
  "Veri Analizi",
  "Web Geliştirme",
  "Danışmanlık",
];

export default function About() {
  const listRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(listRef, { once: true, margin: "-40px" });

  return (
    <section
      id="hakkimizda"
      className="relative py-section-sm sm:py-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Section eyebrow */}
          <span className="font-mono text-xs sm:text-sm text-accent/70 tracking-wider">
            {"{ Hakkımızda }"}
          </span>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left: Paragraph */}
            <div className="lg:col-span-3">
              <h2
                className="font-display font-bold text-text leading-tight mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Teknolojiyi Değer Yaratan
                <br />
                <span className="text-accent">Çözümlere Dönüştürüyoruz</span>
              </h2>
              <p
                className="text-text-muted leading-relaxed font-body"
                style={{ maxWidth: "65ch" }}
              >
                OSMX, işletmelerin dijital dönüşüm süreçlerini hızlandırmak ve
                sürdürülebilir büyüme elde etmelerini sağlamak amacıyla kurulmuş
                bir yazılım ve teknoloji firmasıdır. Teknolojiyi yalnızca bir
                araç olarak değil, verimlilik, ölçeklenebilirlik ve uzun vadeli
                değer oluşturmanın temel unsurlarından biri olarak görüyoruz. Bu
                anlayışla işletmelerin süreçlerini iyileştiren, maliyetlerini
                azaltan ve rekabet gücünü artıran dijital çözümler
                geliştiriyoruz.
              </p>
            </div>

            {/* Right: Focus areas list */}
            <div className="lg:col-span-2 flex items-start lg:items-center">
              <div className="relative w-full">
                <div className="font-mono text-[10px] sm:text-xs text-text-muted/50 mb-4 tracking-wide uppercase">
                  Odak Alanları
                </div>
                <ul ref={listRef} className="space-y-3">
                  {focusAreas.map((area, i) => (
                    <motion.li
                      key={area}
                      className="flex items-center gap-3 text-text/90 font-mono text-sm sm:text-base"
                      initial={{ opacity: 0, x: -8 }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.35,
                                delay: i * 0.08,
                                ease: "easeOut",
                              },
                            }
                          : {}
                      }
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      {area}
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative bracket */}
                <div
                  className="absolute -left-4 top-8 bottom-0 w-[1px] bg-gradient-to-b from-accent/20 via-accent/10 to-transparent hidden lg:block"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
