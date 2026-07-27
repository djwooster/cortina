"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhotoFrame } from "@/components/photo-frame";

const HERO_IMAGE = "/images/cortina-upscaled.png";
// The desktop hero photo is landscape (1672x941), which crops badly on a
// tall mobile viewport. HERO_IMAGE_MOBILE is a portrait-expanded version
// (Photoshop generative fill) used instead on mobile breakpoints.
const HERO_IMAGE_MOBILE: string | undefined = "/images/mobile-hero.png";
// Drop a stitched clip at /public/video/hero.mp4 and pass its path here to
// swap the static hero image for a looping ambient background video.
const HERO_VIDEO: string | undefined = undefined;

const DESKTOP_QUERY = "(min-width: 640px)";
function subscribeDesktopQuery(callback: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function getIsDesktop() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}
function getIsDesktopServerSnapshot() {
  return false;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Scroll-linked parallax is a common source of jank on mobile browsers
  // (viewport-unit shifts as the address bar collapses, choppier scroll
  // timing) — keep it desktop-only and render the hero static on mobile.
  const isDesktop = useSyncExternalStore(
    subscribeDesktopQuery,
    getIsDesktop,
    getIsDesktopServerSnapshot,
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[480px] w-full overflow-hidden"
    >
      <motion.div
        style={isDesktop ? { y: imageY } : undefined}
        className="absolute inset-0 h-[120%]"
      >
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
          <>
            <PhotoFrame
              src={HERO_IMAGE_MOBILE ?? HERO_IMAGE}
              alt="The Cortina entrance sign at dusk, backed by mountains and forest"
              className="h-full w-full sm:hidden"
              priority
              scrim="bottom"
              imageClassName="object-cover object-center"
            />
            <PhotoFrame
              src={HERO_IMAGE}
              alt="The Cortina entrance sign at dusk, backed by mountains and forest"
              className="hidden h-full w-full sm:block"
              priority
              scrim="bottom"
              imageClassName="object-cover object-center"
            />
          </>
        )}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-56 bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-96 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

      <motion.div
        style={isDesktop ? { y: contentY, opacity: contentOpacity } : undefined}
        className="relative z-10 flex h-full flex-col items-end justify-end px-6 pb-8 text-right sm:px-10 sm:pb-28 lg:px-16"
      >
        <h1 className="sr-only">
          Cortina — Blue Ridge Mountains, North Carolina
        </h1>
        <span className="text-[9px] uppercase tracking-[0.2em] text-brass-soft sm:text-xs sm:tracking-[0.35em]">
          Blue Ridge Mountains, North Carolina
        </span>
        <div className="mt-3 h-px w-16 bg-brass" />
        <p className="mt-3 max-w-lg font-display text-lg leading-snug text-paper sm:text-3xl">
          Twenty-two residences. Thirty-six acres.
        </p>
      </motion.div>

      <div className="absolute inset-x-0 bottom-6 z-10 hidden justify-center sm:flex">
        <motion.div
          style={isDesktop ? { opacity: contentOpacity } : undefined}
          className="h-10 w-px bg-paper/30"
        />
      </div>
    </section>
  );
}
