"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="iletisim" className="relative py-section-sm sm:py-section bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Process Text */}
          <div>
            <ScrollReveal>
              <span className="font-mono text-xs sm:text-sm text-accent/70 tracking-wider">
                {"{ İletişim }"}
              </span>
              <h2
                className="mt-4 font-display font-bold text-text leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Yeni Bir Proje mi
                <br />
                <span className="text-accent">Başlatalım?</span>
              </h2>
              
              <div className="mt-8 sm:mt-12">
                <h3 className="font-display font-semibold text-xl text-text mb-6">
                  Süreç Nasıl İlerliyor?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Formu gönderin, ihtiyacınızı anlatalım",
                    "Kısa bir keşif görüşmesi yapalım",
                    "Size özel çözüm önerimizi paylaşalım",
                    "Onayınızla geliştirme sürecine başlayalım"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted font-body">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact Form */}
          <div>
            <ScrollReveal delay={0.2}>
              <form className="bg-surface border border-border rounded-2xl p-6 sm:p-10 flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs text-text-muted uppercase tracking-wider">
                    İsim Soyisim
                  </label>
                  <div className="inspector-focus">
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text font-body outline-none transition-colors hover:border-border-strong focus:border-transparent relative z-10"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs text-text-muted uppercase tracking-wider">
                    E-posta
                  </label>
                  <div className="inspector-focus">
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text font-body outline-none transition-colors hover:border-border-strong focus:border-transparent relative z-10"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-xs text-text-muted uppercase tracking-wider">
                    Mesajınız
                  </label>
                  <div className="inspector-focus">
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text font-body outline-none transition-colors hover:border-border-strong focus:border-transparent resize-y min-h-[120px] relative z-10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full mt-2 inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent text-bg font-semibold rounded-lg hover:bg-accent-bright transition-colors focus-visible:outline-none"
                >
                  <span className="absolute inset-[-3px] border border-transparent group-focus-visible:border-accent-bright rounded-lg pointer-events-none transition-colors" />
                  <span>Gönder</span>
                </button>

              </form>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
