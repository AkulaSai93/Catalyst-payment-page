import Link from "next/link";
import CtaButton from "./CtaButton";

/** Everything the single fee covers. */
const COVERED = [
  "Programming & Engineering Mathematics",
  "DSA, problem-solving & competitive programming (ICPC prep)",
  "Full stack software development",
  "Systems, cloud & software engineering",
  "AI engineering & GenAI",
  "Open source & GSoC guidance",
  "Real-world projects every semester",
  "Free access to ProjectBuilder Pro",
  "The AI Mentor, available anytime",
  "Industry mentorship",
  "Hackathons & coding competitions",
  "Career OS — tracking, readiness & prep",
  "Internship ecosystem access",
];

/** The enrollment card. Reflows into a row once its own box is wide enough. */
export default function EnrollCard() {
  return (
    <div className="@container relative isolate overflow-hidden rounded-2xl bg-brand p-6 sm:p-7">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -top-[18%] -right-[12%] -z-10 h-[136%] w-[52%] text-white/[0.09]"
      >
        <path d="M8 0 58 50 8 100 30 100 80 50 30 0Z" fill="currentColor" />
        <path
          d="M52 0 100 48 100 52 52 100 74 100 100 74 100 26 74 0Z"
          fill="currentColor"
        />
      </svg>

      <div className="@[44rem]:flex @[44rem]:items-end @[44rem]:justify-between @[44rem]:gap-12">
        <div className="@[44rem]:max-w-[34rem]">
          <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-white/75 uppercase">
            Enroll
          </p>

          <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
            <span className="font-display text-[2.5rem] leading-none font-bold tracking-[-0.03em] text-white">
              ₹50,000
            </span>
            <span className="font-display text-[0.9375rem] text-white/80">
              / Year 1
            </span>
          </p>
          <p className="mt-3 font-display text-[0.8125rem] leading-relaxed text-white/80">
            ≈ ₹137 a day, billed once to start the year. Year 2 billed
            separately — ₹1,00,000 across both years.
          </p>
        </div>

        <div className="mt-6 space-y-3 @[44rem]:mt-0 @[44rem]:shrink-0">
          <CtaButton
            href="/login"
            variant="invert"
            className="w-full @[44rem]:w-auto"
          >
            Secure Your Seat
          </CtaButton>
          <Link
            href="/brochure"
            className="block text-center font-display text-[0.875rem] text-white underline decoration-white/60 decoration-2 underline-offset-4 transition-colors duration-300 ease-cinematic hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Download brochure
          </Link>
        </div>
      </div>

      <div className="mt-6 space-y-2 border-t border-white/25 pt-5 @[44rem]:flex @[44rem]:items-center @[44rem]:justify-between @[44rem]:space-y-0">
        <p className="font-display text-[0.8125rem] text-white/80">
          Next cohort starts{" "}
          <span className="font-semibold text-white">January 4, 2027</span>
        </p>
        <Link
          href="#payment-plan"
          className="inline-flex items-center gap-1.5 font-display text-[0.8125rem] font-medium text-white transition-opacity duration-300 ease-cinematic hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          View payment &amp; EMI options
          <span aria-hidden="true">↓</span>
        </Link>
      </div>

      <div
        className="mt-8 hidden border-t border-white/25 pt-8 @[44rem]:block"
        style={{ opacity: "calc(1 - var(--away, 0))" }}
      >
        <h2 className="font-display text-[clamp(1.375rem,2vw,1.75rem)] font-bold tracking-[-0.01em] text-white">
          Become a Complete Techie.
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-x-12 gap-y-1 @[44rem]:grid-cols-2 @[68rem]:grid-cols-3">
          {COVERED.map((item) => (
            <li key={item} className="flex items-start gap-3 py-2.5">
              <span
                aria-hidden="true"
                className="mt-[0.1rem] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white"
              >
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-2.5 w-2.5 text-brand"
                >
                  <path d="M2.5 6.2 4.8 8.5 9.5 3.8" />
                </svg>
              </span>
              <span className="font-display text-[0.9375rem] leading-[1.45] font-medium text-pretty text-white">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
