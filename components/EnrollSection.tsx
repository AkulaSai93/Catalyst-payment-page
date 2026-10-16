"use client";

import { useEffect, useRef } from "react";
import EnrollCard from "./EnrollCard";

/**
 * The enrollment card lives here, in its own section below the hero. On load
 * it is transformed up into the hero's right-hand slot; as the page scrolls it
 * travels down and widens into place, so it reads as settling out of the hero
 * and becoming its own section.
 *
 * The start box is measured from an invisible anchor in the hero, so the two
 * stay aligned at any viewport.
 */
export default function EnrollSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const card = section.querySelector<HTMLElement>("[data-enroll-card]");
    const anchor = document.querySelector<HTMLElement>("[data-hero-anchor]");
    if (!card) return;

    const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

    const rest = () => {
      card.style.setProperty("--away", "0");
      card.style.setProperty("--dx", "0px");
      card.style.setProperty("--dy", "0px");
      card.style.setProperty("--sw", "100%");
    };

    if (!anchor || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rest();
      return;
    }

    let ticking = false;
    let distance = 1;

    const measure = () => {
      if (!isDesktop()) {
        rest();
        return;
      }
      card.style.setProperty("--away", "0");

      const scrollY = window.scrollY;
      const cardRect = card.getBoundingClientRect();
      const anchorRect = anchor.getBoundingClientRect();

      card.style.setProperty("--dx", `${Math.round(anchorRect.left - cardRect.left)}px`);
      card.style.setProperty(
        "--dy",
        `${Math.round(anchorRect.top + scrollY - (cardRect.top + scrollY))}px`
      );
      card.style.setProperty("--sw", `${Math.round(anchorRect.width)}px`);

      distance = Math.max(260, window.innerHeight * 0.7);
    };

    const update = () => {
      ticking = false;
      if (!isDesktop()) return;
      // 1 while parked in the hero, easing to 0 as it settles into place.
      const progress = Math.min(1, Math.max(0, window.scrollY / distance));
      card.style.setProperty("--away", (1 - progress).toFixed(4));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="enroll"
      aria-label="Enrollment"
      className="relative z-10 pt-0 pb-10 lg:bg-surface lg:py-20"
    >
      <div className="mx-auto max-w-[84rem] px-6 sm:px-8">
        <div
          data-enroll-card
          style={
            {
              "--away": 0,
              "--dx": "0px",
              "--dy": "0px",
              "--sw": "100%",
            } as React.CSSProperties
          }
          className="will-change-transform lg:[width:calc(100%_+_var(--away)*(var(--sw)_-_100%))] lg:[transform:translate(calc(var(--away)*var(--dx)),calc(var(--away)*var(--dy)))]"
        >
          <EnrollCard />
        </div>
      </div>
    </section>
  );
}
