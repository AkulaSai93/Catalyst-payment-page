"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Benefit = {
  icon: string;
  /** Newline is intentional — `xl:whitespace-pre-line` keeps the two-line break on wide screens. */
  title: string;
  description: string;
  width: number;
  height: number;
};

const BENEFITS: Benefit[] = [
  {
    icon: "/assets/hackathons/benefit-global.png",
    title: "Global\nOpportunities",
    description: "Explore internships beyond your college and city.",
    width: 112,
    height: 114,
  },
  {
    icon: "/assets/hackathons/benefit-relevant.png",
    title: "Relevant\nRoles",
    description:
      "Discover upto 10,000+ opportunities based on your skills and interests.",
    width: 112,
    height: 107,
  },
  {
    icon: "/assets/hackathons/benefit-remote.png",
    title: "Remote &\nOn‑site",
    description: "Choose from different ways to gain real-world experience.",
    width: 112,
    height: 107,
  },
  {
    icon: "/assets/hackathons/benefit-apply.png",
    title: "Apply & Gain\nExperience",
    description:
      "Take your skills beyond the classroom and start building your career.",
    width: 112,
    height: 107,
  },
];

/**
 * Reveals cards, artwork and benefit rows as the section scrolls into view,
 * staggered in DOM order. Elements render visible when JS or IO is unavailable.
 */
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    targets.forEach((el) => el.setAttribute("data-revealed", "false"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const peers = Array.from(
            el.parentElement?.querySelectorAll<HTMLElement>(
              ":scope > [data-reveal]"
            ) ?? []
          );

          el.style.transitionDelay = `${peers.indexOf(el) * 90}ms`;
          el.setAttribute("data-revealed", "true");
          observer.unobserve(el);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/** Fade-and-rise for cards and benefit rows. */
const reveal =
  "transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] " +
  "data-[revealed=false]:translate-y-8 data-[revealed=false]:opacity-0";

/** Fade-and-scale for the floating 3D artwork. */
const revealArtwork =
  "transition-[opacity,scale] duration-700 delay-150 ease-[cubic-bezier(.22,.61,.36,1)] " +
  "data-[revealed=false]:scale-90 data-[revealed=false]:opacity-0";

export default function HackathonsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="hackathons"
      aria-labelledby="hackathons-heading"
      className="relative bg-surface py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[84rem] px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {/* ── Prize card ───────────────────────────────────────────── */}
          <section
            data-reveal
            aria-labelledby="hackathons-heading"
            className={`relative flex min-h-[26.5rem] flex-col overflow-hidden rounded-2xl bg-[#fce9eb] pb-64 sm:justify-center sm:pb-8 ${reveal}`}
          >
            <div className="relative z-10 px-6 pt-8 sm:max-w-[calc(55%+4rem)] sm:px-8">
              <h2
                id="hackathons-heading"
                className="font-display text-[clamp(2.125rem,3.25vw,2.925rem)] leading-[1.2] font-medium tracking-[-0.01em] text-ink"
              >
                <span className="block whitespace-nowrap">Build. Compete.</span>
                <span className="mt-[0.3em] flex items-center gap-x-[0.2em] whitespace-nowrap">
                  <span className="text-brand">Win.</span>
                  <span className="inline-flex items-center bg-brand px-[0.5em] leading-[1.2] font-bold whitespace-nowrap text-white">
                    ₹1 Cr
                  </span>
                </span>
              </h2>
              <p className="mt-6 font-display text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.3] text-pretty text-[#1e2022]">
                Compete in hackathons conducted every{" "}
                <span className="font-medium whitespace-nowrap text-brand">
                  6 months,
                </span>{" "}
                having a total prize pool of 1 crore over the span of the
                program duration.
              </p>
            </div>

            <div
              data-reveal
              aria-hidden="true"
              className={`pointer-events-none absolute -right-[8%] -bottom-10 flex aspect-[364/359] w-[64%] max-w-[22.75rem] items-center justify-center select-none sm:-right-[13.3%] sm:-bottom-[3.45rem] sm:w-[58.2%] ${revealArtwork}`}
            >
              <Image
                src="/assets/hackathons/trophy.png"
                alt=""
                width={459}
                height={450}
                sizes="(min-width: 1024px) 20rem, 60vw"
                className="w-[87.85%] -rotate-[8.81deg]"
              />
            </div>
          </section>

          {/* ── Right column ─────────────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-6 lg:grid-rows-2 lg:gap-7">
            {/* Paid internship card */}
            <section
              data-reveal
              aria-labelledby="hackathons-reward-heading"
              className={`relative flex min-h-[12.375rem] items-center overflow-hidden rounded-2xl bg-[#fff7ec] px-6 py-7 sm:px-8 ${reveal}`}
            >
              <div className="relative z-10 max-w-[64%]">
                <h2
                  id="hackathons-reward-heading"
                  className="font-display text-[clamp(1.375rem,2.1vw,1.875rem)] leading-[1.2] font-medium tracking-[-0.01em] text-ink"
                >
                  The <span className="font-bold text-brand">Top 20%</span> Get
                  Guaranteed Paid Internships
                </h2>
                <p className="mt-4 font-display text-[clamp(0.9375rem,1.25vw,1.125rem)] leading-[1.3] text-pretty text-[#1e2022]">
                  Do well and you gain hands-on experience while working on
                  real-world projects.
                </p>
              </div>

              <Image
                data-reveal
                src="/assets/hackathons/paid-internship-pass.png"
                alt=""
                aria-hidden="true"
                width={540}
                height={501}
                sizes="(min-width: 1024px) 11.25rem, 30vw"
                className={`pointer-events-none absolute top-1/2 right-[2%] w-[30%] max-w-[11.25rem] -translate-y-1/2 select-none ${revealArtwork}`}
              />
            </section>

            {/* Internshala Pro card */}
            <section
              data-reveal
              aria-labelledby="hackathons-partner-heading"
              className={`relative flex min-h-[12.375rem] flex-col justify-center overflow-hidden rounded-2xl bg-[#f1f6ff] px-6 py-7 sm:px-8 lg:px-[1.8rem] ${reveal}`}
            >
              <h2
                id="hackathons-partner-heading"
                className="font-display text-[clamp(1.375rem,1.875vw,1.6875rem)] leading-[1.2] font-medium tracking-[-0.01em] text-ink"
              >
                <span className="flex flex-wrap items-end gap-x-[0.2em] gap-y-1">
                  <span>Get 6 Months of</span>
                  <Image
                    src="/assets/hackathons/internshala-logo.png"
                    alt="Internshala"
                    width={496}
                    height={152}
                    sizes="10.5rem"
                    className="h-[1.86em] w-auto select-none"
                  />
                  <span>Pro</span>
                </span>
              </h2>

              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:grid-rows-[auto_auto] xl:gap-x-4 xl:gap-y-1">
                {BENEFITS.map((benefit) => (
                  <li
                    key={benefit.title}
                    data-reveal
                    className={`flex min-w-0 items-start gap-1 xl:row-span-2 xl:grid xl:grid-cols-[auto_minmax(0,1fr)] xl:grid-rows-subgrid xl:gap-x-1.5 xl:gap-y-1 ${reveal} data-[revealed=false]:translate-y-6`}
                  >
                    <Image
                      src={benefit.icon}
                      alt=""
                      aria-hidden="true"
                      width={benefit.width}
                      height={benefit.height}
                      className="h-10 w-10 shrink-0 object-contain xl:row-span-2 xl:h-9 xl:w-9"
                    />
                    <div className="min-w-0 xl:contents">
                      <h3 className="font-display text-[0.8125rem] leading-tight font-medium text-[#1e2022] xl:text-[0.6875rem] xl:whitespace-pre-line">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 font-display text-xs leading-tight text-pretty text-[#1e2022]/80 xl:mt-0 xl:text-[0.5625rem]">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
