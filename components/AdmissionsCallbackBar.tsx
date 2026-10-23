"use client";

import { Headset } from "lucide-react";
import { useState } from "react";
import AdmissionsDialog from "./AdmissionsDialog";

/** The dark "talk to a person" bar, with its confirmation dialog. */
export default function AdmissionsCallbackBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-ink-raised px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="flex items-center gap-3 font-display text-[clamp(0.9375rem,1.3vw,1.0625rem)] text-pretty text-white">
          <Headset
            aria-hidden="true"
            strokeWidth={1.75}
            className="h-5 w-5 shrink-0 text-brand"
          />
          Prefer to ask a person directly? Talk to us before you pay.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 font-display text-[0.8125rem] font-medium whitespace-nowrap text-ink transition-[background-color,color,transform] duration-300 ease-cinematic hover:-translate-y-px hover:bg-brand hover:text-white active:bg-brand active:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:gap-2.5 sm:px-5 sm:text-[0.9375rem]"
        >
          Talk to an admissions counsellor
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          >
            <path d="M4.5 11.5 11.5 4.5" />
            <path d="M5.75 4.5h5.75v5.75" />
          </svg>
        </button>
      </div>

      <AdmissionsDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
