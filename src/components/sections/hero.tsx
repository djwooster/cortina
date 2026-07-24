"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhotoFrame } from "@/components/photo-frame";

const HERO_IMAGE = "/images/cortina-upscaled.png";
// Drop a stitched clip at /public/video/hero.mp4 and pass its path here to
// swap the static hero image for a looping ambient background video.
const HERO_VIDEO: string | undefined = undefined;

// --- Mobile crop tuning ---
// The hero photo is landscape (1672x941) but the mobile hero is a tall
// full-height box, so only a narrow vertical slice of the photo's width is
// ever visible. These three values control exactly which slice.
//
// HERO_OBJECT_POSITION: horizontal crop position, "0%"–"100%".
//   Lower = shows more of the LEFT side of the photo (crops the right).
//   Higher = shows more of the RIGHT side (crops the left).
//   The "CORTINA" wordmark sits roughly between 27%-56% of the photo's
//   width, so this needs to land in that range — but on narrow phones
//   the visible slice can be narrower than the wordmark itself, in which
//   case some clipping on one edge is unavoidable and this just picks
//   which edge.
const HERO_OBJECT_POSITION = "40% center";

// HERO_MOBILE_ZOOM: extra zoom on top of the crop, as a Tailwind scale
// class (e.g. "scale-100" = none, "scale-110" = 10% zoomed in). Higher
// values crop more off whichever edge HERO_MOBILE_ORIGIN is anchored to.
const HERO_MOBILE_ZOOM = "scale-110";

// HERO_MOBILE_ORIGIN: which edge the zoom crops from, as a Tailwind
// origin class. "origin-bottom" keeps the bottom edge fixed and crops
// the TOP (pushes the sign higher in frame). "origin-top" does the
// opposite. "origin-center" zooms evenly on both edges.
const HERO_MOBILE_ORIGIN = "origin-bottom";

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
          <PhotoFrame
            src={HERO_IMAGE}
            alt="The Cortina entrance sign at dusk, backed by mountains and forest"
            className="h-full w-full"
            priority
            scrim="bottom"
            objectPosition={HERO_OBJECT_POSITION}
            imageClassName={`${HERO_MOBILE_ZOOM} ${HERO_MOBILE_ORIGIN} sm:scale-100 sm:origin-center`}
          />
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
        <span className="text-[11px] uppercase tracking-[0.35em] text-brass-soft sm:text-xs">
          Blue Ridge Mountains, North Carolina
        </span>
        <div className="mt-3 h-px w-16 bg-brass" />
        <p className="mt-3 max-w-lg font-display text-2xl leading-snug text-paper sm:text-3xl">
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
