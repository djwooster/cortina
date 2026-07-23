"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogoMark } from "@/components/logo-mark";

const LINKS = [
  { href: "#residences", label: "Residences" },
  { href: "#plan", label: "Plan" },
  { href: "#setting", label: "Setting" },
  { href: "#contact", label: "Inquire" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "bg-paper/95 border-brass/30"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className={`flex items-center gap-2.5 font-display text-base tracking-[0.25em] transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          <LogoMark className="h-5 w-auto" />
          CORTINA
        </a>
        <nav className="flex items-center gap-6 sm:gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 hover:text-brass ${
                scrolled ? "text-ink" : "text-paper"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
