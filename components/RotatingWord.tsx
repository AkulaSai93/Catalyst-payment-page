"use client";

import { useEffect, useState } from "react";

const HOLD_MS = 1600;
const FADE_MS = 340;

/**
 * Cycles the footer's red block through its phrases with the site's slide-up
 * fade. Renders the first word on the server and holds it when the viewer
 * prefers reduced motion.
 */
export default function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let swap: ReturnType<typeof setTimeout>;

    const cycle = setInterval(() => {
      setVisible(false);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS);

    return () => {
      clearInterval(cycle);
      clearTimeout(swap);
    };
  }, [words.length]);

  return (
    <span
      className="inline-block whitespace-nowrap transition-[opacity,transform] ease-cinematic"
      style={{
        transitionDuration: `${FADE_MS}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      {words[index]}
    </span>
  );
}
