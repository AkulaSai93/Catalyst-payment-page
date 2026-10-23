import AdmissionsCallbackBar from "./AdmissionsCallbackBar";

type Assurance = {
  /** Pulled out large — a parent can read just this row and be answered. */
  figure: string;
  label: string;
  detail: string;
};

const ASSURANCES: Assurance[] = [
  {
    figure: "10M+",
    label: "Learners on upGrad",
    detail: "110K+ placements and 3,000+ hiring partners already on it.",
  },
  {
    figure: "8–10",
    label: "Hours a week",
    detail: "Scheduled around the college timetable, not instead of it.",
  },
  {
    figure: "No change",
    label: "To the degree",
    detail: "Attendance, exams and degree requirements stay exactly as they are.",
  },
  {
    figure: "Jan 4",
    label: "2027 cohort",
    detail: "Enough lead time to plan around college commitments.",
  },
];

export default function ForParentsSection() {
  return (
    <section
      id="for-parents"
      aria-labelledby="for-parents-heading"
      className="relative bg-surface py-10 lg:py-14"
    >
      <div className="mx-auto max-w-[78rem] px-6 sm:px-8">
        <h2
          id="for-parents-heading"
          className="type-heading type-section-heading font-semibold text-balance text-ink"
        >
          For <span className="font-accent font-medium text-brand">parents</span>{" "}
          deciding alongside their child.
        </h2>

        {/* One band, four columns — divided by rules rather than boxed. */}
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-ink/12 pt-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {ASSURANCES.map(({ figure, label, detail }, index) => (
            <div
              key={label}
              className={`min-w-0 ${index > 0 ? "lg:border-l lg:border-ink/12 lg:pl-10" : ""}`}
            >
              <dt className="type-heading text-[clamp(1.5rem,2.4vw,2rem)] leading-none font-bold whitespace-nowrap text-brand">
                {figure}
              </dt>
              <dd className="mt-2">
                <span className="block font-display text-[0.9375rem] font-semibold text-ink">
                  {label}
                </span>
                <span className="mt-1 block font-display text-[0.8125rem] leading-snug text-pretty text-ink-muted">
                  {detail}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Human fallback, for the parent who would rather just ask someone. */}
        <AdmissionsCallbackBar />
      </div>
    </section>
  );
}
