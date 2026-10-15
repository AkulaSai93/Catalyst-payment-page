import Image from "next/image";
import {
  BarChart3,
  BookOpen,
  Code2,
  FileText,
  GraduationCap,
  Landmark,
  Lightbulb,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";

type Item = { icon: LucideIcon; title: string; detail: string };

const COLLEGE: Item[] = [
  { icon: GraduationCap, title: "Your degree", detail: "A recognized qualification" },
  { icon: Users, title: "Your professors", detail: "Learn from experienced faculty" },
  { icon: FileText, title: "Your exams", detail: "Structured academic journey" },
  { icon: Landmark, title: "Your campus", detail: "A vibrant learning environment" },
  {
    icon: BookOpen,
    title: "Your university experience",
    detail: "Exposure, networks and holistic growth",
  },
];

const CATALYST: Item[] = [
  {
    icon: Rocket,
    title: "Your technology accelerator",
    detail: "Future-ready, industry-aligned learning",
  },
  {
    icon: Code2,
    title: "Coding & competitive programming",
    detail: "Build real-world tech skills",
  },
  { icon: Lightbulb, title: "Building & AI", detail: "Work on modern tech like GenAI" },
  {
    icon: Users,
    title: "Open Source & Mentorship",
    detail: "Learn, build and grow with experts",
  },
  {
    icon: BarChart3,
    title: "Internships & Career Prep",
    detail: "Get hands-on experience and career support",
  },
];

const panel =
  "relative isolate flex h-full flex-col overflow-hidden rounded-2xl p-5 pt-14 shadow-[0_18px_40px_-28px_rgba(10,10,11,0.34)] sm:rounded-[1.75rem] sm:p-8 sm:pt-20 sm:shadow-[0_34px_80px_-46px_rgba(10,10,11,0.42)] lg:p-9 lg:pt-24";

const ghostLabel =
  "type-heading pointer-events-none absolute top-3 left-5 -z-10 text-[clamp(4rem,8vw,7rem)] leading-[0.8] font-extrabold tracking-[-0.04em] [mask-image:linear-gradient(to_bottom,#000_55%,transparent_100%)] select-none sm:top-5 sm:left-8 lg:left-9";

const row =
  "group -mx-1.5 flex items-center gap-3 rounded-xl px-1.5 py-2.5 transition-colors duration-300 ease-cinematic sm:-mx-2 sm:gap-4 sm:rounded-2xl sm:px-2 sm:py-3";

const iconTile =
  "flex size-11 shrink-0 items-center justify-center rounded-xl transition-[background-color,transform] duration-300 ease-cinematic group-hover:scale-105 sm:size-[3.25rem] sm:rounded-[0.9375rem]";

export default function BeyondCollegeSection() {
  return (
    <section
      id="beyond-college"
      aria-labelledby="beyond-college-heading"
      className="relative isolate overflow-hidden bg-surface py-12 sm:py-20 lg:py-24"
    >
      {/* Soft colour wash behind the panels. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[18%] right-[-6%] h-[38rem] w-[38rem] rounded-full bg-brand/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-8%] h-[32rem] w-[32rem] rounded-full bg-[#8a93a5]/[0.10] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[96rem] px-5 sm:px-6">
        <div className="mx-auto flex max-w-[52rem] flex-col items-center text-center">
          <h2
            id="beyond-college-heading"
            className="type-heading text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold text-balance text-ink"
          >
            Already chosen your college?{" "}
            <span className="font-accent text-brand">Perfect.</span>
          </h2>
          <p className="mt-3 max-w-[46rem] text-[clamp(0.875rem,1.2vw,1.0625rem)] leading-relaxed text-balance text-ink-muted sm:mt-4">
            Your college handles your degree, professors, exams, campus, and
            university experience. uGSOT Catalyst adds the technology
            accelerator you need to build your career alongside it.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-14 sm:gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-2">
          {/* Your college */}
          <div className={`${panel} bg-white ring-1 ring-black/[0.05]`}>
            <span aria-hidden="true" className={`${ghostLabel} text-black/[0.07]`}>
              YOUR
            </span>
            <p className="type-heading text-[clamp(1.25rem,2vw,1.875rem)] font-extrabold text-ink">
              YOUR COLLEGE
            </p>
            <span
              aria-hidden="true"
              className="mt-2.5 block h-[3px] w-9 rounded-full bg-brand sm:mt-3 sm:w-11"
            />
            <p className="mt-2.5 text-sm text-ink-muted sm:mt-3 sm:text-[0.9375rem]">
              Gives you the foundation
            </p>

            <ul className="mt-4 flex list-none flex-col sm:mt-6">
              {COLLEGE.map(({ icon: Icon, title, detail }, i) => (
                <li
                  key={title}
                  className={`${row} hover:bg-black/[0.02] ${i > 0 ? "border-t border-black/[0.06]" : ""}`}
                >
                  <span
                    className={`${iconTile} bg-[#f3f4f6] text-ink group-hover:bg-[#eceef1]`}
                  >
                    <Icon
                      strokeWidth={1.75}
                      aria-hidden="true"
                      className="h-[1.375rem] w-[1.375rem] sm:h-[1.625rem] sm:w-[1.625rem]"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm leading-snug font-semibold text-ink sm:text-[0.9375rem]">
                      {title}
                    </span>
                    <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-muted sm:mt-1 sm:text-[0.9375rem]">
                      {detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Student cut-out bridging the two panels */}
          <div className="relative z-10 hidden items-end justify-center lg:-ml-10 lg:flex lg:w-[clamp(18rem,30vw,34rem)]">
            <Image
              src="/assets/college_student.png"
              alt="Same college. Bigger future."
              width={546}
              height={608}
              sizes="30vw"
              className="h-auto w-full object-contain object-bottom"
            />
          </div>

          {/* uGSOT Catalyst */}
          <div
            className={`${panel} bg-[linear-gradient(147deg,#ee1a24_0%,#e6161f_40%,#b90c14_100%)] ring-1 ring-white/10`}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -top-[12%] -right-[18%] -z-10 hidden h-[62%] w-[58%] text-white/[0.07] sm:block"
            >
              <path d="M8 0 58 50 8 100 30 100 80 50 30 0Z" fill="currentColor" />
              <path
                d="M52 0 100 48 100 52 52 100 74 100 100 74 100 26 74 0Z"
                fill="currentColor"
              />
            </svg>
            <span aria-hidden="true" className={`${ghostLabel} text-white/[0.14]`}>
              uGSOT
            </span>
            <p className="type-heading text-[clamp(1.25rem,2vw,1.875rem)] font-extrabold text-white">
              uGSOT CATALYST
            </p>
            <span
              aria-hidden="true"
              className="mt-2.5 block h-[3px] w-9 rounded-full bg-white/55 sm:mt-3 sm:w-11"
            />
            <p className="mt-2.5 text-sm text-white/80 sm:mt-3 sm:text-[0.9375rem]">
              Helps you go further
            </p>

            <ul className="mt-4 flex list-none flex-col sm:mt-6">
              {CATALYST.map(({ icon: Icon, title, detail }, i) => (
                <li
                  key={title}
                  className={`${row} hover:bg-white/[0.07] ${i > 0 ? "border-t border-white/15" : ""}`}
                >
                  <span
                    className={`${iconTile} bg-white/15 text-white group-hover:bg-white/25`}
                  >
                    <Icon
                      strokeWidth={1.75}
                      aria-hidden="true"
                      className="h-[1.375rem] w-[1.375rem] sm:h-[1.625rem] sm:w-[1.625rem]"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm leading-snug font-semibold text-white sm:text-[0.9375rem]">
                      {title}
                    </span>
                    <span className="mt-0.5 block text-[0.8125rem] leading-snug text-white/85 sm:mt-1 sm:text-[0.9375rem]">
                      {detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 sm:mt-14 sm:gap-7">
          <span aria-hidden="true" className="h-px flex-1 bg-black/12" />
          <p className="type-heading text-center text-[clamp(1rem,2.2vw,1.75rem)] font-bold text-balance text-ink">
            Don&apos;t replace your degree.{" "}
            <span className="font-accent text-brand">Catalyze it.</span>
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-black/12" />
        </div>
      </div>
    </section>
  );
}
