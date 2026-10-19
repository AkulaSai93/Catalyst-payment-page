import CtaButton from "./CtaButton";

export default function FinalCtaSection() {
  return (
    <section
      id="apply"
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-brand pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
    >
      {/* Faint chevrons, echoing the uGSOT Catalyst panel higher up the page. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -top-[18%] -right-[6%] -z-10 hidden h-[136%] w-[38%] text-white/[0.07] lg:block"
      >
        <path d="M8 0 58 50 8 100 30 100 80 50 30 0Z" fill="currentColor" />
        <path
          d="M52 0 100 48 100 52 52 100 74 100 100 74 100 26 74 0Z"
          fill="currentColor"
        />
      </svg>

      <div className="mx-auto grid max-w-[78rem] grid-cols-1 items-center gap-10 px-6 text-center sm:px-8 sm:text-left lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="final-cta-heading"
            className="type-heading text-[clamp(1.75rem,3.4vw,3rem)] font-bold text-balance text-white"
          >
            Now choose how far you want to go.
          </h2>
          <p className="mx-auto mt-4 max-w-[34rem] font-display text-[clamp(0.9375rem,1.3vw,1.125rem)] text-pretty text-white/80 sm:mx-0">
            For ambitious Year 1 &amp; Year 2 students across India.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-white/25 bg-white/[0.08] px-6 py-8 backdrop-blur-sm sm:px-9 sm:py-9">
          <p className="type-heading text-[clamp(1.5rem,2.6vw,2rem)] font-bold text-white">
            ₹50,000 <span className="font-medium">for Year 1</span>
          </p>
          <p className="mt-2 font-display text-[0.9375rem] text-white/75">
            EMI available · ₹1,00,000 total for 2 years
          </p>

          <p className="mt-5 border-t border-white/20 pt-5 font-display text-[0.9375rem] text-white/75">
            Next cohort starts{" "}
            <span className="font-semibold text-white">January 4, 2027</span>
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <CtaButton variant="invert" href="/login">
              Secure Your Seat
            </CtaButton>
            <CtaButton variant="outline" href="/contact">
              Talk to an Advisor
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
