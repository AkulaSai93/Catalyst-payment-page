"use client";

import { useState } from "react";

type Faq = { id: string; question: string; answer: string };

const FAQS: Faq[] = [
  {
    id: "online-version",
    question: "Is uGSOT Catalyst the online version of upGrad School of Technology?",
    answer:
      "No. uGSOT Catalyst is a separate 2-year technology accelerator for students who are already enrolled in a college or university.",
  },
  {
    id: "leave-college",
    question: "Do I leave my current college?",
    answer:
      "No. Catalyst runs alongside your existing B.Tech / B.E. / BCA / B.Sc. program. You stay enrolled where you are and keep attending your own classes and exams — Catalyst is a parallel technology ecosystem, not a transfer.",
  },
  {
    id: "is-a-degree",
    question: "Is Catalyst a degree?",
    answer:
      "No. Catalyst is a 2-year technology accelerator, not a degree programme. Your degree comes from your college; Catalyst builds the technical profile that sits alongside it.",
  },
  {
    id: "issues-degree",
    question: "Will uGSOT issue my B.Tech / BCA?",
    answer:
      "No. Your B.Tech or BCA is awarded by the college or university you are enrolled in. uGSOT does not issue the degree and does not affect how your college awards it.",
  },
  {
    id: "hours-per-week",
    question: "How many hours a week does Catalyst need?",
    answer:
      "Plan for roughly 8 to 10 hours a week. Catalyst is built to run on top of a full college timetable, so the work is spread across the week rather than concentrated into fixed daily hours.",
  },
  {
    id: "live-or-recorded",
    question: "Is it live or recorded?",
    answer:
      "Both. Live sessions and mentor time are scheduled through the week, and the learning material and project work in ProjectBuilder Pro stay available on demand so you can fit them around your college schedule.",
  },
  {
    id: "icpc-guarantee",
    question: "Is ICPC selection guaranteed?",
    answer:
      "No. ICPC selection is decided by the contest, not by us. What Catalyst provides is the preparation — structured practice, regular contests, peer leaderboards and team formation — so that you compete as a serious contender rather than an applicant.",
  },
  {
    id: "gsoc-guarantee",
    question: "Is GSoC selection guaranteed?",
    answer:
      "No. GSoC selection rests with the open-source organisations and their mentors. Catalyst builds the contribution history and developer discipline the application is judged on: reading large codebases, finding issues, landing pull requests and working with maintainers.",
  },
  {
    id: "internship-guarantee",
    question: "Is an internship guaranteed?",
    answer:
      "Yes. But only to the top 20% students who are judged basis their performance.",
  },
  {
    id: "placement-guarantee",
    question: "Is placement guaranteed?",
    answer:
      "No. Catalyst is not a placement programme and does not promise a job. It exists to make you the kind of engineer who gets hired: real shipped projects, a credible GitHub profile, competitive programming depth and career preparation.",
  },
  {
    id: "third-fourth-year",
    question: "Can 3rd or 4th year students join?",
    answer:
      "Yes, but Catalyst is designed primarily for Year 1 and Year 2 students, because the two-year arc is what lets skills, projects and a public profile compound before you graduate. Joining later leaves less runway for that to build.",
  },
  {
    id: "after-two-years",
    question: "What happens after two years?",
    answer:
      "You finish with a technology profile built in public — shipped projects, an open-source contribution record, competitive programming ratings and internship experience — and you carry all of it with you. Your college degree continues on its own timeline.",
  },
  {
    id: "campus-immersion",
    question: "Are campus immersion experiences guaranteed?",
    answer:
      "No. Campus immersions are selective and depend on your progress through the programme. They are an opportunity Catalyst opens up, not an entitlement that comes with enrolment.",
  },
  {
    id: "whats-included",
    question: "What's included in ₹50,000/year?",
    answer:
      "The whole programme, not a module of it: programming and maths, DSA, competitive programming and ICPC preparation, full stack development, systems and cloud, AI and GenAI, open source and GSoC guidance, real projects, free access to ProjectBuilder Pro, the AI Mentor, industry mentorship, competitions, Career OS and the internship ecosystem. The total programme fee is ₹1,00,000 across two years.",
  },
];

/**
 * Answers stay mounted and animate open via grid-template-rows, so they are
 * always in the DOM for search and in-page find.
 */
export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section id="faqs" aria-labelledby="faq-heading" className="relative bg-surface">
      <div className="mx-auto flex max-w-[84rem] flex-col items-start gap-12 px-6 pt-25 pb-30 min-[1000px]:flex-row min-[1000px]:gap-[7rem]">
        <div className="flex w-full flex-col min-[1000px]:sticky min-[1000px]:top-28 min-[1000px]:shrink min-[1000px]:basis-[32.75rem] min-[1000px]:self-start">
          <h2
            id="faq-heading"
            className="type-heading flex flex-col text-[clamp(1.875rem,4.7vw,4.25rem)] font-semibold text-ink"
          >
            <span className="whitespace-nowrap">Got Questions?</span>
            <span className="font-accent font-light whitespace-nowrap text-brand">
              We&apos;ve Got Answers
            </span>
          </h2>

        </div>

        <div className="w-full border-t border-[#e5e5e5] min-[1000px]:flex-1">
          {FAQS.map((faq) => {
            const isOpen = faq.id === openId;

            return (
              <div key={faq.id} className="border-b border-[#e5e5e5]">
                <h3>
                  <button
                    type="button"
                    id={`faq-question-${faq.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left font-display text-[15px] font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-brand transition-transform duration-300 ease-cinematic ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <path d="M10 4v12M4 10h12" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`grid transition-[grid-template-rows] duration-350 ease-cinematic ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[39.625rem] pb-5 font-display text-[15px] leading-[1.65] text-[#555]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
