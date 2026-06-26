"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#surec", label: "Süreç" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group relative focus-visible:outline-none"
            id="nav-logo"
          >
            <span className="absolute inset-[-4px] border border-transparent group-focus-visible:border-accent pointer-events-none transition-colors" />
            <Image
              src="/logo.png"
              alt="OSMX Logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-display font-bold text-lg tracking-tight text-text">
              OSMX
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-${link.href.slice(1)}`}
                className="relative px-4 py-2 text-sm font-medium text-text-muted hover:text-text transition-colors focus-visible:outline-none group"
              >
                <span className="absolute inset-0 border border-transparent group-focus-visible:border-accent pointer-events-none transition-colors" />
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              id="nav-cta"
              className="relative ml-4 px-5 py-2 text-sm font-semibold text-bg bg-accent rounded-md hover:bg-accent-bright transition-colors focus-visible:outline-none group"
            >
              <span className="absolute inset-[-2px] border border-transparent group-focus-visible:border-accent-bright rounded-md pointer-events-none transition-colors" />
              İletişime Geç
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-text focus-visible:outline-none group"
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
            id="nav-mobile-toggle"
          >
            <span className="absolute inset-0 border border-transparent group-focus-visible:border-accent pointer-events-none transition-colors" />
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] bg-text transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-text transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-bg-elevated border-b border-border"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative px-4 py-3 text-base font-medium text-text-muted hover:text-text hover:bg-surface/50 rounded-lg transition-colors focus-visible:outline-none group"
                >
                  <span className="absolute inset-0 border border-transparent group-focus-visible:border-accent rounded-lg pointer-events-none transition-colors" />
                  {link.label}
                </a>
              ))}
              <a
                href="#iletisim"
                onClick={() => setIsOpen(false)}
                className="relative mt-2 px-4 py-3 text-base font-semibold text-bg bg-accent rounded-lg text-center hover:bg-accent-bright transition-colors focus-visible:outline-none group"
              >
                <span className="absolute inset-[-2px] border border-transparent group-focus-visible:border-accent-bright rounded-lg pointer-events-none transition-colors" />
                İletişime Geç
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
