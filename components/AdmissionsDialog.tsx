"use client";

import { useEffect, useRef, useState } from "react";

/** What happens after the request, mirroring the engagement-session modal. */
const STEPS = [
  {
    title: "An admissions counsellor calls you",
    detail: "They'll reach out on the number linked to your enquiry.",
  },
  {
    title: "Ask anything about the programme",
    detail: "Fees, EMI options, weekly time commitment, eligibility.",
  },
  {
    title: "Enroll when you're ready",
    detail: "No pressure to decide on the call.",
  },
];


/**
 * Confirmation shown after asking admissions to get in touch.
 *
 * Uses the native <dialog> with showModal(), which gives focus trapping, Esc to
 * dismiss and inert background content without extra code.
 */
export default function AdmissionsDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="admissions-confirm-title"
      onClose={onClose}
      /* A backdrop click lands on the dialog itself, not on its contents. */
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="m-auto w-[min(26rem,calc(100vw-2rem))] overflow-hidden rounded-2xl bg-white p-0 shadow-[0_32px_70px_-30px_rgba(10,10,11,0.6)] backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative px-5 pt-6 pb-5 text-center sm:px-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.06] text-ink transition-colors duration-300 ease-cinematic hover:bg-black/[0.12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </button>

        {/* Rendered only while the dialog is open so the animation restarts
            on each visit rather than looping unseen in the background. */}
        <div aria-hidden="true" className="mx-auto h-14 w-14">
          {open && !reducedMotion ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/assets/success.svg"
              alt=""
              width={600}
              height={600}
              className="h-full w-full"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-[#00c985]"
              >
                <path d="M4 10.5 8 14.5 16 6" />
              </svg>
            </span>
          )}
        </div>

        <p className="mt-2 font-mono text-[0.625rem] font-semibold tracking-[0.2em] text-ink-muted uppercase">
          Request received
        </p>
        <h2
          id="admissions-confirm-title"
          className="type-heading mt-1 text-[1.375rem] font-bold text-brand"
        >
          Thanks for reaching out!
        </h2>
        <p className="mx-auto mt-2 max-w-[22rem] font-display text-[0.875rem] leading-relaxed text-pretty text-ink-muted">
          Our admissions team will call you back soon to answer your questions
          and guide you through the next steps.
        </p>

        <ol className="mt-5 border-t border-black/10 pt-4 text-left">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative flex gap-3 pb-3 last:pb-0">
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-7 bottom-0 left-[0.6875rem] w-px bg-black/10"
                />
              )}
              <span
                aria-hidden="true"
                className="relative z-10 flex h-[1.375rem] w-[1.375rem] shrink-0 items-center justify-center rounded-full bg-brand font-display text-[0.6875rem] font-semibold text-white"
              >
                {index + 1}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[0.875rem] font-semibold text-ink">
                  {step.title}
                </span>
                <span className="mt-0.5 block font-display text-[0.8125rem] leading-snug text-pretty text-ink-muted">
                  {step.detail}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-2.5 font-display text-[0.875rem] font-medium text-white transition-colors duration-300 ease-cinematic hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          Done
        </button>
      </div>
    </dialog>
  );
}
