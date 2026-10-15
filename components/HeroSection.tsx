import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";

const INCLUDED = [
  "Programming, Maths, DSA & Competitive Programming",
  "Full Stack, Systems & Cloud",
  "AI Engineering & GenAI",
  "Free ProjectBuilder Pro + AI Mentor",
  "Industry mentorship & Career OS",
  "Internship ecosystem access",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate bg-surface pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Soft brand wash behind the headline. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[8%] h-[34rem] w-[34rem] rounded-full bg-brand/[0.07] blur-[130px]" />
      </div>

      <div className="mx-auto grid max-w-[84rem] grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-16">
        {/* ── Pitch ─────────────────────────────────────────────── */}
        <div>
          <p className="font-mono text-[0.8125rem] tracking-[0.18em] text-ink-muted uppercase">
            uGSOT Catalyst <span className="text-brand">·</span> Enrollment
          </p>

          <h1
            id="hero-heading"
            className="mt-5 max-w-[20ch] font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.06] font-bold tracking-[-0.02em] text-balance text-ink"
          >
            Your college gives you a degree.{" "}
            <span className="font-accent font-medium text-brand">
              uGSOT Catalyst
            </span>{" "}
            helps you catalyze it.
          </h1>

          <p className="mt-6 max-w-[46rem] font-display text-[clamp(1rem,1.4vw,1.1875rem)] leading-relaxed text-pretty text-ink-muted">
            An online 2-year technology accelerator you pursue alongside your
            existing B.Tech / B.E. / BCA / B.Sc. program. We become your
            parallel technology ecosystem — designed primarily for ambitious
            Year 1 &amp; Year 2 students.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            {/* The price is dropped on narrow screens, where the full label
                is wider than the column. */}
            <CtaButton href="/login">
              Secure Your Seat
              <span className="hidden sm:inline">&nbsp;— ₹50,000 for Year 1</span>
            </CtaButton>
            <Link
              href="/brochure"
              className="font-display text-[0.9375rem] text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors duration-300 ease-cinematic hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Download brochure
            </Link>
          </div>

          <figure className="relative mt-12 overflow-hidden rounded-2xl bg-ink">
            <Image
              src="/assets/hero/catalyst-video-poster.jpg"
              alt="Inside the uGSOT Catalyst programme"
              width={1280}
              height={720}
              priority
              sizes="(min-width: 1024px) 52rem, 92vw"
              className="aspect-[16/11] w-full object-cover opacity-90"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4 text-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="font-display text-[0.875rem] text-white/90">
                What is uGSOT Catalyst?
              </span>
            </figcaption>
          </figure>
        </div>

        {/* ── Order summary ─────────────────────────────────────── */}
        <aside
          aria-label="Order summary"
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.07]">
            <span aria-hidden="true" className="block h-1 w-full bg-brand" />

            <div className="p-6 sm:p-7">
              <p className="font-mono text-[0.75rem] tracking-[0.18em] text-ink-muted uppercase">
                Order Summary
              </p>

              <h2 className="type-heading mt-3 text-[1.25rem] font-bold text-ink">
                uGSOT Catalyst
              </h2>
              <p className="mt-1 font-display text-[0.875rem] text-pretty text-ink-muted">
                2-Year Technology Accelerator · Online, alongside your degree
              </p>

              <div className="mt-5 rounded-xl bg-surface p-4">
                <p className="flex flex-wrap items-baseline gap-x-2">
                  <span className="type-heading text-[2rem] leading-none font-bold text-ink">
                    ₹50,000
                  </span>
                  <span className="font-display text-[0.9375rem] text-ink-muted">
                    / Year 1
                  </span>
                </p>
                <p className="mt-2 font-display text-[0.8125rem] leading-relaxed text-ink-muted">
                  ≈ ₹137 / day · billed once to start the year
                  <br />
                  Year 2 billed separately (₹50,000) · ₹1,00,000 total across 2
                  years
                </p>
              </div>

              <Link
                href="#payment-plan"
                className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.875rem] font-medium text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors duration-300 ease-cinematic hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                View payment &amp; EMI options
                <span aria-hidden="true">↓</span>
              </Link>

              <hr className="mt-6 border-black/10" />

              <p className="mt-5 font-display text-[0.9375rem] font-semibold text-ink">
                What&apos;s included
              </p>
              <ul className="mt-3 flex list-none flex-col gap-2.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="mt-[0.3rem] h-2.5 w-2.5 flex-none text-brand"
                    >
                      <path d="M4 2.5 8 6l-4 3.5" />
                    </svg>
                    <span className="font-display text-[0.875rem] leading-snug text-pretty text-ink-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#curriculum"
                className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.875rem] font-medium text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors duration-300 ease-cinematic hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                See everything included
                <span aria-hidden="true">↓</span>
              </Link>

              <div className="mt-7">
                <CtaButton href="/login" className="w-full">
                  Secure Your Seat
                </CtaButton>
              </div>

              <p className="mt-4 text-center font-display text-[0.8125rem] text-ink-muted">
                Next cohort starts{" "}
                <span className="font-semibold text-ink">January 4, 2027</span>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
