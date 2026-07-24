"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhotoFrame } from "@/components/photo-frame";

const HERO_IMAGE = "/images/cortina-upscaled.png";
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
            alt="The Cortina entrance sign at dusk, backed by mountains and forest"
            className="h-full w-full"
            priority
            scrim="bottom"
          />
        )}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-56 bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-96 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-end justify-end px-6 pb-20 text-right sm:px-10 sm:pb-28 lg:px-16"
      >
        <h1 className="sr-only">Cortina — Blue Ridge Mountains, North Carolina</h1>
        <span className="text-[11px] uppercase tracking-[0.35em] text-brass-soft sm:text-xs">
          Blue Ridge Mountains, North Carolina
        </span>
        <div className="mt-3 h-px w-16 bg-brass" />
        <p className="mt-3 max-w-lg font-display text-2xl leading-snug text-paper sm:text-3xl">
          Twenty-two residences. Thirty-six acres.
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
