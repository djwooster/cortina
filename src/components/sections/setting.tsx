"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhotoFrame } from "@/components/photo-frame";
import { ScrollReveal } from "@/components/scroll-reveal";

const DETAILS = [
  { label: "Elevation", value: "3,200 ft" },
  { label: "Setting", value: "Old-growth hardwood" },
  { label: "Access", value: "Private ridge trails" },
];

export function Setting() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <section id="setting" className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <ScrollReveal className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.35em] text-brass">
            The Setting
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Ridge lines. Long views. Quiet.
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-14" y={40}>
        <div
          ref={ref}
          className="h-[60vh] min-h-[380px] w-full overflow-hidden"
        >
          <motion.div style={{ scale }} className="h-full w-full">
            <PhotoFrame
              src="/images/setting-forest.jpeg"
              alt="A Cortina residence nestled among dense forest on the mountainside"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 sm:px-10 lg:px-16">
        {DETAILS.map((detail, i) => (
          <ScrollReveal key={detail.label} delay={i * 0.1}>
            <div className="border-t border-brass/30 pt-4">
              <span className="font-display text-xl text-ink sm:text-2xl">
                {detail.value}
              </span>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-soft/70">
                {detail.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
