import Image from "next/image";

type Mentor = {
  image: string;
  name: string;
  role: string;
  background: string;
  /** Tailwind gradient stops for the card's wash. */
  gradient: string;
  width: number;
  height: number;
};

const MENTORS: Mentor[] = [
  {
    image: "/assets/learn_from_people/ICPC_Regionalist.png",
    name: "ICPC Regionalist",
    role: "Competitive Programming Mentor",
    background:
      "Prior: national-ranked competitive programmer, product engineering background.",
    gradient: "from-white via-[#fdf3f3] to-[#f9e0e0]",
    width: 358,
    height: 402,
  },
  {
    image: "/assets/learn_from_people/Senior_BackendEngineer.png",
    name: "Senior Backend Engineer",
    role: "Systems & Architecture Mentor",
    background:
      "Prior: large-scale distributed systems at a high-growth product company.",
    gradient: "from-white via-[#f2f7fe] to-[#dce8fb]",
    width: 437,
    height: 364,
  },
  {
    image: "/assets/learn_from_people/Open_SourceMaintainer.png",
    name: "Open Source Maintainer",
    role: "GSoC / Open Source Mentor",
    background:
      "Prior: maintains active open source projects, past GSoC contributor.",
    gradient: "from-white via-[#f3faf5] to-[#e0efe5]",
    width: 437,
    height: 292,
  },
  {
    image: "/assets/learn_from_people/AI_Engineer.png",
    name: "AI Engineer",
    role: "AI Engineering Mentor",
    background: "Prior: builds production GenAI systems and agentic applications.",
    gradient: "from-white via-[#f7f4fd] to-[#e7e1f8]",
    width: 472,
    height: 393,
  },
];

export default function LearnFromPeopleSection() {
  return (
    <section
      id="learn-from-people"
      aria-labelledby="learn-from-people-heading"
      className="relative bg-surface py-14 lg:py-20"
    >
      <div className="mx-auto max-w-[78rem] px-6 sm:px-8">
        <h2
          id="learn-from-people-heading"
          className="type-heading mx-auto max-w-[37.5rem] text-center type-section-heading font-semibold text-ink"
        >
          Learn From{" "}
          <span className="font-accent font-medium text-brand">People</span> Who
          Have Done It.
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {MENTORS.map((mentor) => (
            <li
              key={mentor.name}
              className={`group flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br px-6 py-7 sm:gap-5 sm:px-8 sm:py-9 ${mentor.gradient}`}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                <h3 className="font-display text-[clamp(1.125rem,1.9vw,1.4375rem)] font-medium text-ink">
                  {mentor.name}
                </h3>
                <p className="font-display text-[clamp(0.8125rem,1.15vw,0.9375rem)] font-medium text-brand">
                  {mentor.role}
                </p>
                <p className="font-display text-[clamp(0.8125rem,1.15vw,0.9375rem)] text-pretty text-ink-muted">
                  {mentor.background}
                </p>
              </div>

              <div
                aria-hidden="true"
                className="h-24 w-25 shrink-0 sm:h-40 sm:w-44 lg:h-44 lg:w-48"
              >
                <Image
                  src={mentor.image}
                  alt=""
                  width={mentor.width}
                  height={mentor.height}
                  sizes="(min-width: 1024px) 12rem, (min-width: 640px) 11rem, 6.25rem"
                  className="h-full w-full object-contain object-center transition-transform duration-700 ease-cinematic group-hover:scale-[1.06] group-hover:-rotate-[1.5deg]"
                />
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-[62rem] text-center font-display text-[clamp(0.9375rem,1.6vw,1.25rem)] text-pretty text-ink lg:mt-14">
          Mentors and the wider hiring network are drawn from upGrad&apos;s
          industry ecosystem, spanning technology, product and engineering teams
          across the country.
        </p>
      </div>
    </section>
  );
}
