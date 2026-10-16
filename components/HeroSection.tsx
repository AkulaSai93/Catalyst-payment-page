const FACTS = [
  { value: "2 years", label: "Alongside your degree" },
  { value: "Online", label: "Live + on demand" },
  { value: "8–10 hrs", label: "A week" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex items-center pt-24 pb-8 lg:min-h-[100svh] lg:pt-32 lg:pb-20"
    >
      <div className="mx-auto grid w-full max-w-[84rem] grid-cols-12 items-center gap-x-0 gap-y-10 px-6 sm:px-8 lg:gap-x-12">
        <div className="col-span-12 lg:col-span-7">
          <p className="font-mono text-[0.75rem] tracking-[0.2em] text-white/70 uppercase">
            uGSOT Catalyst <span className="text-brand">·</span> Enrollment
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.06] font-bold tracking-[-0.025em] text-balance text-white"
          >
            Your college gives you a degree.{" "}
            <span className="font-accent font-medium text-brand">Catalyst</span>{" "}
            helps you catalyze it.
          </h1>

          <p className="mt-6 max-w-[38rem] font-display text-[clamp(1rem,1.2vw,1.0625rem)] leading-relaxed text-pretty text-white/80">
            An online 2-year technology accelerator you pursue alongside your
            existing B.Tech / B.E. / BCA / B.Sc. — your parallel technology
            ecosystem, built for ambitious Year 1 &amp; Year 2 students.
          </p>

          <dl className="mt-8 grid max-w-[34rem] grid-cols-3 gap-x-5 border-t border-white/20 pt-5">
            {FACTS.map((fact) => (
              <div key={fact.value}>
                <dt className="font-display text-[1.0625rem] font-bold text-white">
                  {fact.value}
                </dt>
                <dd className="mt-0.5 font-display text-[0.75rem] leading-snug text-white/65">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Invisible slot the enrollment card parks in before it travels down
            into its own section. Reserves the space so the hero stays balanced. */}
        <div
          data-hero-anchor
          aria-hidden="true"
          className="hidden lg:col-span-5 lg:col-start-8 lg:block lg:h-[22rem]"
        />
      </div>
    </section>
  );
}
