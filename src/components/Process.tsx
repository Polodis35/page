"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Keşif & Analiz",
    description: "İhtiyaçlarınızı dinliyor, süreçlerinizi analiz ediyoruz.",
  },
  {
    number: "02",
    title: "Planlama & Tasarım",
    description: "Teknik mimariyi ve çözüm yolunu birlikte belirliyoruz.",
  },
  {
    number: "03",
    title: "Geliştirme & Test",
    description: "Çözümü iteratif olarak geliştirip test ediyoruz.",
  },
  {
    number: "04",
    title: "Teslim & Destek",
    description: "Sistemi devreye alıyor, sürekli destek sağlıyoruz.",
  },
];

export default function Process() {
  return (
    <section id="surec" className="relative py-section-sm sm:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-24">
            <span className="font-mono text-xs sm:text-sm text-accent/70 tracking-wider">
              {"{ Süreç }"}
            </span>
            <h2
              className="mt-4 font-display font-bold text-text leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Fikirden Ürüne
              <br />
              <span className="text-accent">Şeffaf İlerleme</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline container */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                delay={index * 0.15}
                className="relative"
                showFrame={false} // Clean look for steps
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    <span className="font-mono text-4xl font-light text-accent opacity-80">
                      {step.number}
                    </span>
                    <div
                      className="h-[1px] bg-border flex-1 md:w-full"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-2 md:mt-4 md:pr-6">
                    <h3 className="font-display font-semibold text-lg text-text mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-muted font-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
