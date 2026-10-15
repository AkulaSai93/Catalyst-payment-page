import Image from "next/image";
import RotatingWord from "./RotatingWord";

type Social = { href: string; label: string; path: string };

const SOCIALS: Social[] = [
  {
    href: "https://www.facebook.com/profile.php?id=61584595769199",
    label: "Facebook",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z",
  },
  {
    href: "https://www.instagram.com/upgrad_schooloftech/",
    label: "Instagram",
    path: "M12 2c-2.7 0-3.1 0-4.1.1-1.1 0-1.8.2-2.4.4-.7.3-1.2.6-1.8 1.2S2.8 4.8 2.5 5.5c-.2.6-.4 1.3-.4 2.4C2 8.9 2 9.3 2 12s0 3.1.1 4.1c0 1.1.2 1.8.4 2.4.3.7.6 1.2 1.2 1.8s1.1.9 1.8 1.2c.6.2 1.3.4 2.4.4 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1.1 0 1.8-.2 2.4-.4.7-.3 1.2-.6 1.8-1.2s.9-1.1 1.2-1.8c.2-.6.4-1.3.4-2.4.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c0-1.1-.2-1.8-.4-2.4-.3-.7-.6-1.2-1.2-1.8s-1.1-.9-1.8-1.2c-.6-.2-1.3-.4-2.4-.4C15.1 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1.9 0 1.5.2 1.8.3.5.2.8.4 1.1.7.3.3.6.6.7 1.1.1.3.3.9.3 1.8.1 1 .1 1.3.1 4s0 3-.1 4c0 .9-.2 1.5-.3 1.8-.2.5-.4.8-.7 1.1-.3.3-.6.6-1.1.7-.3.1-.9.3-1.8.3-1 .1-1.3.1-4 .1s-3 0-4-.1c-.9 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.6-.7-1.1-.1-.3-.3-.9-.3-1.8-.1-1-.1-1.3-.1-4s0-3 .1-4c0-.9.2-1.5.3-1.8.2-.5.4-.8.7-1.1.3-.3.6-.6 1.1-.7.3-.1.9-.3 1.8-.3 1-.1 1.3-.1 4-.1zm0 3.1a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm6.5-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z",
  },
  {
    href: "https://x.com/uGSOT",
    label: "X",
    path: "M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L4.9 21H1.8l7.3-8.3L1.6 3h6.4l4.4 5.9L17.5 3zm-1.1 16.1h1.7L7.2 4.8H5.4l11 14.3z",
  },
  {
    href: "https://www.linkedin.com/company/upgrad-school-of-technology",
    label: "LinkedIn",
    path: "M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.8 13 12.8 14.3V19h-3V9.5h2.9v1.3c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7V19z",
  },
  {
    href: "https://www.youtube.com/@upGradSchoolofTechnology",
    label: "YouTube",
    path: "M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C15.9 4 12 4 12 4s-3.9 0-6.8.3c-.4 0-1.3 0-2 .9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.5v1.6c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 6.6.3 6.6.3s3.9 0 6.8-.3c.4 0 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.7-.2-3.3-.2-3.3zM9.9 14V8.6l5.2 2.7-5.2 2.7z",
  },
];

/** The footer block cycles through these, in this order, on the live site. */
const ROTATING_WORDS = [
  "Build.",
  "Compete.",
  "Get Hired.",
  "Software Engineers.",
  "Learn.",
];

const DISCLAIMER =
  "uGSOT Catalyst is a technology accelerator by upGrad School of Technology. It runs alongside your existing college degree and does not replace uGSOT Campus, the full-time higher-education experience offered by upGrad School of Technology.";

export default function SiteFooter() {
  return (
    // Red backdrop continues the CTA above, so the rounded top reads as a
    // fold in one block rather than a gap.
    <footer className="bg-brand pt-6">
      <div className="overflow-hidden rounded-t-[clamp(1.75rem,7vw,6.25rem)] bg-ink-raised">
        <div className="flex flex-col items-center gap-10 px-6 py-10 min-[900px]:gap-12 min-[900px]:p-14">
          <div className="flex max-w-[45.25rem] flex-col items-center gap-[30px]">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="type-heading flex flex-col items-center text-[clamp(1.75rem,3.6vw,3.25rem)] font-semibold text-white">
                <span>Now choose how</span>
                <span>far you want to go.</span>
              </h2>
              <p className="font-display text-[15px] leading-[1.65] text-[#e5e5e5]">
                {DISCLAIMER}
              </p>
            </div>

            <div className="flex flex-col items-center gap-[18px]">
              <p className="font-display text-[13px] text-[#e5e5e5]">
                For ambitious{" "}
                <span className="text-brand">Year 1 &amp; Year 2</span> students
                across India.
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative hidden w-full max-w-[71.875rem] min-[900px]:block"
          >
            <Image
              src="/assets/uGSOT-Catayst.png"
              alt=""
              width={3851}
              height={459}
              className="h-auto w-full"
            />
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <p className="max-w-[56rem] font-display text-[clamp(1.625rem,3.6vw,3.25rem)] leading-[1.2] font-medium tracking-[-0.01em] text-white">
              Your college gives you a degree. uGSOT Catalyst helps you catalyze
              it.
            </p>
            <span className="inline-flex items-center overflow-hidden bg-brand px-4 py-0.5 font-accent text-[clamp(1.375rem,3.2vw,3rem)] font-medium text-white">
              <RotatingWord words={ROTATING_WORDS} />
            </span>
          </div>

          <div className="flex flex-col items-center gap-7">
            <Image
              src="/assets/ugsot_x_catalyst_logo_white.png"
              alt="upGrad School of Technology"
              width={441}
              height={56}
              className="h-9 w-auto max-w-full object-contain sm:h-12 lg:h-14"
            />
            <ul className="flex list-none items-center gap-6">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="block text-white/90 transition-colors duration-300 ease-cinematic hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      className="h-[22px] w-[22px]"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full border-t border-white/15 pt-8">
            <p className="mx-auto max-w-[62.5rem] text-center font-display text-xs leading-[1.6] text-white/60">
              {DISCLAIMER}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
