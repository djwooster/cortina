"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhotoFrame } from "@/components/photo-frame";

const HERO_IMAGE = "/images/hero-aerial.jpeg";
// Drop a stitched clip at /public/video/hero.mp4 and pass its path here to
// swap the static hero image for a looping ambient background video.
const HERO_VIDEO: string | undefined = undefined;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%]">
        {HERO_VIDEO ? (
          <div className="grain-overlay relative h-full w-full overflow-hidden">
            <video
              className="h-full w-full object-cover"
              src={HERO_VIDEO}
              poster={HERO_IMAGE}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/5 to-transparent" />
          </div>
        ) : (
          <PhotoFrame
            src={HERO_IMAGE}
            alt="Aerial view of a Cortina residence set among the forested Blue Ridge mountains"
            className="h-full w-full"
            priority
            scrim="bottom"
          />
        )}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-56 bg-gradient-to-b from-ink/70 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16"
      >
        <span className="mb-5 text-[11px] uppercase tracking-[0.35em] text-brass-soft sm:text-xs">
          Blue Ridge Mountains, North Carolina
        </span>
        <h1 className="font-display text-6xl leading-[0.95] tracking-tight text-paper sm:text-8xl lg:text-[9rem]">
          Cortina
        </h1>
        <div className="mt-7 h-px w-16 bg-brass" />
        <p className="mt-6 max-w-md text-sm text-paper/75 sm:text-base">
          Twenty-two residences. Thirty-six acres. A village apart.
        </p>
      </motion.div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <motion.div
          style={{ opacity: contentOpacity }}
          className="h-10 w-px bg-paper/30"
        />
      </div>
    </section>
  );
}
