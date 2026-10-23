"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's background footage. It sits on the wrapper around the hero *and*
 * the enrollment block so it runs behind both on mobile, where the card reads
 * as the tail of the hero rather than a separate section.
 *
 * Decorative only: muted, looping and hidden from assistive tech. The poster
 * fills the box until the first frame decodes, and playback is left paused for
 * anyone who prefers reduced motion.
 */
export default function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (motion.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        // Autoplay can be rejected (e.g. a battery-saving mode); the poster
        // stays visible in that case, so there is nothing to recover.
        void video.play().catch(() => {});
      }
    };

    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  return (
    <div
      aria-hidden="true"
      /* Covering hero *and* the enrollment block with a 16:9 source crops most
         of the frame away. On desktop the media is held to the hero's own
         height so the footage keeps its natural framing; the enrollment block
         there sits on its own opaque background anyway. */
      className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden lg:h-[100svh]"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-[50%_35%] lg:object-center"
        poster="/assets/hero/catalyst-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        tabIndex={-1}
      >
        <source src="/assets/hero/catalyst-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
    </div>
  );
}
