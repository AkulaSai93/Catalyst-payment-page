"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Project = { image: string; title: string; description: string };

type Semester = {
  id: string;
  label: string;
  title: string;
  projects: Project[];
  subjects: string[];
};

const P = "/assets/curriculum_project";

const SEMESTERS: Semester[] = [
  {
    id: "foundations",
    label: "Semester 1",
    title: "Computing & Programming Foundations",
    projects: [
      {
        image: `${P}/EnterpriseIntegrationHub&DataOrchestrationPlatform.png`,
        title: "Enterprise Integration Hub & Data Orchestration Platform",
        description:
          "Connect enterprise systems and automate data flow and synchronisation.",
      },
      {
        image: `${P}/(LSAMS).png`,
        title: "Linux Security Audit & Monitoring Suite (LSAMS)",
        description:
          "Audit Linux systems for security risks and continuously monitor critical system activities and configurations.",
      },
      {
        image: `${P}/FoodDelivery_App.png`,
        title: "Food Delivery App",
        description:
          "Build a responsive food-delivery homepage with restaurant and food sections, navigation, cards, and Tailwind CSS styling.",
      },
      {
        image: `${P}/PersonalPortfolio_Page.png`,
        title: "Personal Portfolio Page",
        description:
          "Build a responsive Web portfolio showcasing your profile, skills, projects, and contact information.",
      },
    ],
    subjects: [
      "Programming Foundations (Python)",
      "Engineering Mathematics- I",
      "Linux Fundamentals",
      "Git & GitHub",
      "Web Essentials (HTML, CSS & Tailwind CSS)",
      "Communication Skills",
    ],
  },
  {
    id: "full-stack",
    label: "Semester 2",
    title: "Full Stack Software Development",
    projects: [
      {
        image: `${P}/CodeTutor_AI.png`,
        title: "CodeTutor AI — Coding Problem Assistant",
        description:
          "Build an AI coding-guidance platform where learners solve problems, get graded hints, and track their progress and streaks.",
      },
      {
        image: `${P}/Git-Lytics.png`,
        title: "Git-Lytics — Code Review & Analytics Platform",
        description:
          "Connect to GitHub, analyse pull requests for review quality and code metrics, and surface the results as live dashboards.",
      },
      {
        image: `${P}/Real-TimeBidding_AuctionPlatform.png`,
        title: "Real-Time Bidding & Auction Platform",
        description:
          "Create a live auction system where users join rooms and place bids in real time over WebSockets, with instant updates.",
      },
      {
        image: `${P}/AI-PoweredLearning_PathGenerator.png`,
        title: "AI-Powered Learning Path Generator",
        description:
          "Build an AI assistant that turns a learner's goals into a personalised roadmap of courses, exercises, and next steps.",
      },
    ],
    subjects: [
      "Engineering Mathematics- II",
      "Operating Systems",
      "JavaScript",
      "React.js, NextJS",
      "Backend Development (Node.js & Express.js)",
      "Data Structures & Algorithms I",
      "Communication Skills",
    ],
  },
  {
    id: "cloud",
    label: "Semester 3",
    title: "Software Engineering & Cloud",
    projects: [
      {
        image: `${P}/Multi-TenantSaaSPlatform_Cloud-Native_GitOpsManagementSystem.png`,
        title: "Multi-Tenant SaaS Platform & Cloud-Native GitOps System",
        description:
          "Run a multi-tenant service on a cloud-native stack, with GitOps automation driving every deployment.",
      },
      {
        image: `${P}/Real-TimePredictive_OperationsIntelligencePlatform.png`,
        title: "Real-Time Predictive Operations Intelligence Platform",
        description:
          "Analyse streaming time-series data to forecast incidents, detect anomalies, and alert before things break.",
      },
      {
        image: `${P}/EnterpriseBusinessPerformance_DecisionIntelligencePlatform.png`,
        title:
          "Enterprise Business Performance & Decision Intelligence Platform",
        description:
          "Unify business data into the real-time insights and dashboards leaders actually make decisions on.",
      },
    ],
    subjects: [
      "Computer Networks",
      "Cloud Computing Fundamentals",
      "Data Visualization",
      "Introduction to Machine Learning",
      "DevOps & CI/CD",
      "System Design",
      "Data Structures & Algorithms II",
      "Communication Skills",
    ],
  },
  {
    id: "ai",
    label: "Semester 4",
    title: "AI Engineering & Career Accelerator",
    projects: [
      {
        image: `${P}/AutonomousResearch_Assistant.png`,
        title: "Autonomous AI Research Assistant",
        description:
          "An AI agent that plans, searches, synthesises, and compiles multi-source research into structured, cited reports.",
      },
      {
        image: `${P}/Multi-AgentCustomer_SupportSystem.png`,
        title: "Multi-Agent Customer Support System",
        description:
          "A team of specialised agents that triage, resolve, and escalate customer queries with quality supervision built in.",
      },
      {
        image: `${P}/AIProductManagerAgent.png`,
        title: "AI Product Manager Agent",
        description:
          "An autonomous agent that turns a raw product idea into a PRD, a roadmap, user stories, and a sprint board.",
      },
      {
        image: `${P}/Domain-Specific RAG Chatbot with Fine-Tuning.png`,
        title: "Domain-Specific RAG Chatbot with Fine-Tuning",
        description:
          "A fine-tuned, retrieval-augmented assistant that gives accurate, grounded answers for one specialised domain.",
      },
    ],
    subjects: [
      "Generative AI",
      "Agentic AI Systems",
      "Resume Building, LinkedIn, Mock Interviews, Aptitude, HR Interview Preparation",
      "Industry AI Capstone Project",
      "Data Structures & Algorithms III",
    ],
  },
];


/**
 * Horizontal project rail. The arrow appears only while there is more to the
 * right, and nudges one card per press.
 */
function ProjectRail({ projects }: { projects: Project[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanScrollRight(
      rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 8
    );
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync, projects]);

  const scrollOneCard = () => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("article");
    const step = card ? card.clientWidth + 16 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <div className="relative mt-4 [--curriculum-card:15.5rem] sm:[--curriculum-card:17.5rem] lg:[--curriculum-card:19rem]">
      <div
        ref={railRef}
        onScroll={sync}
        role="group"
        aria-label="Semester projects"
        tabIndex={0}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-4 px-4 pb-2 sm:-mx-6 sm:scroll-pl-6 sm:px-6 lg:-mx-7 lg:scroll-pl-7 lg:px-7"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex w-[var(--curriculum-card)] flex-none snap-start flex-col rounded-xl bg-surface p-3"
          >
            <div className="relative aspect-[566/358] w-full overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 256px, 232px"
                className="object-cover"
              />
            </div>
            <h4 className="mt-3.5 font-display text-[0.8125rem] leading-snug font-semibold text-ink sm:text-sm">
              {project.title}
            </h4>
            <p className="mt-1.5 font-display text-xs leading-relaxed text-ink-muted">
              {project.description}
            </p>
          </article>
        ))}
      </div>

      <button
        type="button"
        aria-label="Show more projects"
        onClick={scrollOneCard}
        className={`absolute right-1 top-[calc(0.75rem_+_(var(--curriculum-card)_-_1.5rem)_*_0.3163)] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/85 text-white shadow-[0_6px_20px_-6px_rgba(10,10,11,0.55)] ring-1 ring-white/25 backdrop-blur-sm transition-opacity duration-300 ease-cinematic ${
          canScrollRight ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 21 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
          aria-hidden="true"
          focusable="false"
          className="h-[18px] w-[24px] nudge-right motion-reduce:animate-none"
        >
          <path d="M1 8h19" />
          <path d="M15.5 3.5 20 8 15.5 12.5" />
        </svg>
      </button>
    </div>
  );
}

/**
 * Semester tabs on desktop, an accordion on mobile — one shared panel either
 * way, so the open semester's content follows its header on small screens.
 */
export default function CurriculumSection() {
  const [openId, setOpenId] = useState(SEMESTERS[0].id);

  return (
    <section
      id="curriculum"
      aria-labelledby="curriculum-heading"
      className="relative bg-surface py-14 lg:py-20"
    >
      <div className="mx-auto max-w-[72rem] px-6 sm:px-8">
        <div className="mx-auto flex max-w-[44rem] flex-col items-center gap-3 text-center">
          <h2
            id="curriculum-heading"
            className="type-heading text-[clamp(1.625rem,3.2vw,2.5rem)] font-semibold text-balance text-ink"
          >
            A <span className="font-accent font-medium text-brand">Curriculum</span>{" "}
            Built Around How Engineers Actually Learn.
          </h2>
          <p className="font-display text-[clamp(0.9375rem,1.3vw,1.0625rem)] text-pretty text-ink-muted">
            Learn the fundamentals. Build real projects. Grow your career.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-[0_18px_44px_-28px_rgba(10,10,11,0.2)] lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {SEMESTERS.map((semester, index) => {
              const isOpen = semester.id === openId;

              return (
                <div key={semester.id} className="contents">
                  <button
                    type="button"
                    id={`curriculum-panel-header-${semester.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`curriculum-panel-${semester.id}`}
                    onClick={() => setOpenId(semester.id)}
                    // Column placement is desktop-only; on mobile the tabs
                    // stack as an accordion in a single-column grid.
                    style={{ "--tab-col": index + 1 } as React.CSSProperties}
                    className={`group flex w-full items-center justify-between gap-3 border-b border-hairline px-4 py-3 text-left transition-colors duration-300 ease-cinematic lg:row-start-1 lg:flex-col lg:items-start lg:gap-1.5 lg:py-3.5 lg:[grid-column-start:var(--tab-col)] ${
                      isOpen
                        ? "bg-brand text-white"
                        : "bg-white text-ink hover:bg-surface lg:border-r lg:border-hairline lg:last:border-r-0"
                    }`}
                  >
                    <span className="flex min-w-0 flex-1 items-center gap-2.5 lg:flex-col lg:items-start lg:gap-1.5">
                      <span
                        className={`flex-none font-display text-[0.625rem] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
                          isOpen ? "text-white/90" : "text-ink-muted"
                        }`}
                      >
                        {semester.label}
                      </span>
                      <span className="font-display text-[0.8125rem] leading-snug font-medium sm:text-sm">
                        {semester.title}
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-cinematic lg:hidden ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`curriculum-panel-${semester.id}`}
                      role="region"
                      aria-labelledby={`curriculum-panel-header-${semester.id}`}
                      className="flex flex-col gap-7 border-b border-hairline px-4 py-6 sm:px-6 lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:gap-8 lg:border-b-0 lg:px-7 lg:py-7"
                    >
                      <div>
                        <h3 className="font-display text-[0.9375rem] font-medium text-ink sm:text-base">
                          Projects you&apos;ll be working on:
                        </h3>

                        <ProjectRail projects={semester.projects} />
                      </div>

                      <div className="border-t border-hairline pt-7 lg:pt-8">
                        <div className="rounded-xl border border-hairline p-4 sm:p-5">
                          <div className="flex items-center gap-2">
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                              focusable="false"
                              className="h-[1.125rem] w-[1.125rem] text-brand"
                            >
                              <path d="M4.5 2.75h11a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75v-13a.75.75 0 0 1 .75-.75Z" />
                              <path d="M7 6.5h6M7 10h6M7 13.5h3.5" />
                            </svg>
                            <h3 className="font-display text-[0.9375rem] font-medium text-ink">
                              All Subjects
                            </h3>
                          </div>
                          <ul className="mt-3.5 grid list-none grid-cols-1 gap-x-8 sm:grid-cols-2">
                            {semester.subjects.map((subject) => (
                              <li
                                key={subject}
                                className="flex items-start gap-2.5 py-1.5"
                              >
                                <svg
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="mt-[0.25rem] h-2.5 w-2.5 flex-none text-brand"
                                >
                                  <path d="M4 2.5 8 6l-4 3.5" />
                                </svg>
                                <span className="font-display text-xs leading-relaxed text-ink sm:text-[0.8125rem]">
                                  {subject}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
