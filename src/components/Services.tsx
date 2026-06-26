"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    id: "software",
    title: "Yazılım Geliştirme",
    description:
      "İşletmelerin ihtiyaçlarına özel yazılım çözümleri geliştiriyoruz. Hazır sistemlerin yetersiz kaldığı noktalarda, süreçlerinize uyum sağlayan web, masaüstü ve özel amaçlı uygulamalar tasarlıyoruz.",
    icon: "/yazilim-gelistirme.png",
    gridClass: "col-span-1 md:col-span-12 lg:col-span-8",
    motif: (
      <svg
        className="absolute bottom-4 right-4 w-32 h-32 opacity-5 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "web",
    title: "Web Sitesi Geliştirme",
    description:
      "Markanızı dijital dünyada profesyonel şekilde temsil eden modern web siteleri geliştiriyoruz. Kullanıcı deneyimi, performans ve kurumsal kimlik odaklı çözümler sunuyoruz.",
    icon: "/website.png",
    gridClass: "col-span-1 md:col-span-6 lg:col-span-4",
    motif: (
      <svg
        className="absolute top-4 right-4 w-24 h-24 opacity-5 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "data",
    title: "Veri Analizi",
    description:
      "İşletmenizde oluşan verileri analiz ederek anlamlı içgörülere dönüştürüyoruz. Reklam, pazarlama, SEO ve operasyon verilerini değerlendirerek daha doğru kararlar almanıza yardımcı oluyoruz.",
    icon: "/data-analysis.png",
    gridClass: "col-span-1 md:col-span-6 lg:col-span-4",
    motif: (
      <svg
        className="absolute bottom-0 right-0 w-32 h-32 opacity-5 text-accent"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="4" cy="4" r="1.5" />
        <circle cx="12" cy="4" r="1.5" />
        <circle cx="20" cy="4" r="1.5" />
        <circle cx="4" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="20" cy="12" r="1.5" />
        <circle cx="4" cy="20" r="1.5" />
        <circle cx="12" cy="20" r="1.5" />
        <circle cx="20" cy="20" r="1.5" />
      </svg>
    ),
  },
  {
    id: "automation",
    title: "Otomasyon Sistemleri",
    description:
      "Tekrarlayan iş süreçlerini otomatikleştirerek operasyonel verimliliği artırıyoruz. Müşteri yönetimi, veri işleme, belge analizi ve iş akışı süreçleri için özel otomasyon sistemleri geliştiriyoruz.",
    icon: "/automation.png",
    gridClass: "col-span-1 md:col-span-12 lg:col-span-8",
    motif: (
      <svg
        className="absolute top-1/2 -translate-y-1/2 right-4 w-40 h-40 opacity-5 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "ai",
    title: "Yapay Zeka Ajanları",
    description:
      "İşletmenizin günlük operasyonlarını destekleyen yapay zeka ajanları geliştiriyoruz. Müşteri takibi, raporlama, randevu yönetimi, veri analizi ve benzeri süreçleri otomatik hale getirerek ekiplerin daha verimli çalışmasını sağlıyoruz.",
    icon: "/ai-icon.png",
    gridClass: "col-span-1 md:col-span-6 lg:col-span-6",
    motif: (
      <svg
        className="absolute bottom-4 right-4 w-28 h-28 opacity-5 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "consulting",
    title: "Dijital Danışmanlık",
    description:
      "İşletmelerin dijital dönüşüm süreçlerini planlamalarına ve doğru teknolojileri seçmelerine yardımcı oluyoruz. Süreç analizi, teknoloji değerlendirmesi ve dijital büyüme stratejileri konusunda danışmanlık sunuyoruz.",
    icon: "/consultation.png",
    gridClass: "col-span-1 md:col-span-6 lg:col-span-6",
    motif: (
      <svg
        className="absolute top-4 right-4 w-24 h-24 opacity-5 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <ScrollReveal
      key={service.id}
      className={`group relative overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 ${service.gridClass}`}
      delay={index * 0.1}
    >
      {/* Dynamic Mouse Spotlight Gradient */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-400 pointer-events-none"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147,201,60,0.08), transparent 50%)`,
        }}
      />

      <div
        className="p-8 h-full flex flex-col relative z-10"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Decorative motif */}
        <div className="decorative-layer" aria-hidden="true">
          {service.motif}
        </div>

        {/* Clean Icon Container perfectly matching reference HTML */}
        <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 transition-all duration-400 overflow-hidden group-hover:bg-accent group-hover:shadow-[0_0_32px_rgba(147,201,60,0.45)]">
          <Image
            src={service.icon}
            alt=""
            width={32}
            height={32}
            className="object-contain filter-icon-normal filter-icon-hover transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-6"
          />
        </div>

        <h3 className="font-display font-bold text-[1.5rem] text-text mb-3 leading-[1.15] tracking-[-0.02em]">
          {service.title}
        </h3>
        
        <p className="text-text-muted font-body text-[0.95rem] leading-[1.6] flex-grow">
          {service.description}
        </p>

        {/* Animated Bottom Link */}
        <div className="inline-flex items-center gap-2 mt-6 font-mono text-[0.8rem] text-accent tracking-[0.1em] uppercase transition-[gap] duration-300 group-hover:gap-4">
          {index === 0 ? "SÜRECİMİZİ İNCELEYELİM" : "DETAYLAR"}
          <span>→</span>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section id="hizmetler" className="relative py-section-sm sm:py-section bg-transparent border-t border-border">
      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2
                className="font-display font-bold text-text leading-[1.05] tracking-[-0.03em] max-w-[720px]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                İşletmenize Özel
                <br />
                <span className="text-accent italic font-medium">Dijital Çözümler</span>
              </h2>
            </div>
            <p className="text-text-muted font-body text-[0.95rem] max-w-[360px]">
              Modern teknolojileri kullanarak ihtiyaçlarınıza tam uyum sağlayan,
              ölçeklenebilir sistemler inşa ediyoruz.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
