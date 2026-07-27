"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { PhotoFrame } from "@/components/photo-frame";
import { ScrollReveal } from "@/components/scroll-reveal";

const RESIDENCES = [
  { index: "01", src: "/images/residence-01-1600.webp" },
  { index: "02", src: "/images/residence-02-1600.webp" },
  { index: "03", src: "/images/residence-03-1600.webp" },
  { index: "04", src: "/images/residence-04-1600.webp" },
  { index: "05", src: "/images/residence-05-1600.webp" },
  { index: "06", src: "/images/residence-06-1600.webp" },
] as const;

const ACRES = 37;

function AnimatedAcreage({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, "change", setDisplay);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, value, count]);

  return <span ref={ref}>{display}</span>;
}

export function Residences() {
  return (
    <section id="residences" className="border-t border-brass/20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
            The Residences
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Homes across the mountainside.
          </h2>
          <div className="mt-7 h-px w-16 bg-brass/50" />
          <div className="mt-5 flex items-end gap-4">
            <span className="font-display text-6xl leading-none tabular-nums text-ink sm:text-7xl">
              <AnimatedAcreage value={ACRES} />
            </span>
            <span className="mb-1 text-[10px] uppercase leading-[1.6] tracking-[0.3em] text-ink-soft/70">
              Acres of
              <br />
              Mountainside
            </span>
          </div>
        </ScrollReveal>

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
