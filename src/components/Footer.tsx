import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          <a href="#" className="flex items-center gap-2.5 focus-visible:outline-none group relative">
            <span className="absolute inset-[-4px] border border-transparent group-focus-visible:border-accent pointer-events-none transition-colors" />
            <Image
              src="/logo.png"
              alt="OSMX Logo"
              width={32}
              height={32}
              className="rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-display font-bold text-lg tracking-tight text-text/90 group-hover:text-text transition-colors">
              OSMX
            </span>
          </a>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#hakkimizda" className="text-sm font-medium text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
              Hakkımızda
            </a>
            <a href="#hizmetler" className="text-sm font-medium text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
              Hizmetler
            </a>
            <a href="#surec" className="text-sm font-medium text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
              Süreç
            </a>
            <a href="#iletisim" className="text-sm font-medium text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent">
              İletişim
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50 text-xs font-mono text-text-muted/60">
          <p>&copy; {currentYear} OSMX. Tüm hakları saklıdır.</p>
          <p>Dijital Dönüşümde Akıllı Çözümler</p>
        </div>
      </div>
    </footer>
  );
}
