"use client";

import { motion } from "framer-motion";
import { PhotoFrame } from "@/components/photo-frame";
import { ScrollReveal } from "@/components/scroll-reveal";

const RESIDENCES = [
  { index: "01", src: "/images/residence-tofana.jpeg" },
  { index: "02", src: "/images/residence-faloria.jpeg" },
  { index: "03", src: "/images/residence-cristallo.jpeg" },
  { index: "04", src: "/images/residence-sorapis-interior.jpeg" },
  { index: "05", src: "/images/residence-pomagagnon.jpeg" },
  { index: "06", src: "/images/residence-averau.jpeg" },
] as const;

const STATS = [
  { value: "22", label: "Homes" },
  { value: "36", label: "Acres" },
  { value: "$1.5M–$2.0M", label: "Investment" },
];

export function Residences() {
  return (
    <section id="residences" className="border-t border-brass/20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <ScrollReveal>
            <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
              The Residences
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Twenty-two homes across the mountainside.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <dl className="flex gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-l border-brass/30 pl-4">
                  <dd className="font-display text-2xl text-ink sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink-soft/70">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {RESIDENCES.map((residence, i) => (
            <ScrollReveal key={residence.src} delay={(i % 2) * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <PhotoFrame
                  src={residence.src}
                  alt={`Residence ${residence.index}`}
                  className="h-full w-full"
                  scrim="bottom"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <span className="text-xs tracking-[0.2em] text-brass-soft">
                    {residence.index}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
