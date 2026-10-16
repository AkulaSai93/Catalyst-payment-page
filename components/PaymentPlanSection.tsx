"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

type PlanId = "full" | "emi";

type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  amount: string;
  cadence: string;
  /** Rendered in lighter grey after the amount, as on a price tag. */
  decimals: string;
  badge?: string;
  includesLabel: string;
  includes: string[];
  cta: string;
  /** Gradient for the card's icon tile. */
  icon: string;
};

const PLANS: Plan[] = [
  {
    id: "full",
    name: "Pay in Full",
    tagline: "Billed once at the start of each year",
    amount: "₹50,000",
    decimals: "",
    cadence: "/Year",
    badge: "Best Value",
    includesLabel: "What's included:",
    includes: [
      "Covers the full year's programme",
      "Nothing extra to buy",
      "No interest or processing fees",
      "Simplest way to pay",
    ],
    cta: "Choose Pay in Full",
    icon: "bg-brand",
  },
  {
    id: "emi",
    name: "EMI Plan",
    tagline: "For spreading the cost across the year",
    amount: "From ₹[ X,XXX ]",
    decimals: "",
    cadence: "/Month",
    includesLabel: "Everything in Pay in Full, plus:",
    includes: [
      "Split the ₹50,000 annual fee into [ 3 / 6 / 9 ] instalments",
      "Through [ financing partner name ]",
      "[ CONFIRM: interest / processing terms ]",
      "Same programme access from day one",
    ],
    cta: "Choose EMI Plan",
    icon: "bg-brand/12 ring-1 ring-brand/30",
  },
];

/**
 * Two selectable plans. A hidden native radio per card keeps arrow-key
 * navigation and posts the choice as `payment_plan` inside a form; the card
 * itself is the label, so the whole surface — button included — is the target.
 */
export default function PaymentPlanSection() {
  const [selected, setSelected] = useState<PlanId>("full");

  return (
    <section
      id="payment-plan"
      aria-labelledby="payment-plan-heading"
      className="relative bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-[72rem] px-6 sm:px-8">
        <h2
          id="payment-plan-heading"
          className="type-heading text-center text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold text-ink"
        >
          Choose how you pay.
        </h2>
        <p className="mx-auto mt-3 max-w-[42rem] text-center text-[clamp(0.9375rem,1.2vw,1.0625rem)] leading-relaxed text-pretty text-ink-muted">
          ₹50,000 covers Year 1 in full. The same amount is billed again for
          Year 2 when it begins — ₹1,00,000 across the full 2-year program.
        </p>

        <fieldset className="mt-8 sm:mt-10">
          <legend className="sr-only">Choose how you pay</legend>

          {/* Lightly recessed tray; both cards stay white on top of it. */}
          <div className="rounded-[2rem] bg-surface p-3 sm:p-4">
            <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
              {PLANS.map((plan) => {
                const isSelected = plan.id === selected;

                return (
                  <label
                    key={plan.id}
                    className={`group relative flex cursor-pointer flex-col rounded-[1.5rem] p-6 transition-[background-color,box-shadow,transform] duration-300 ease-cinematic sm:p-7 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-brand ${
                      isSelected
                        ? "bg-white shadow-[0_24px_50px_-30px_rgba(230,22,31,0.45)] ring-2 ring-brand"
                        : "bg-white ring-1 ring-black/10 hover:ring-brand/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_plan"
                      value={plan.id}
                      checked={isSelected}
                      onChange={() => setSelected(plan.id)}
                      className="sr-only"
                    />

                    <div className="flex items-start justify-between gap-3">
                      <span
                        aria-hidden="true"
                        className={`flex h-11 w-11 items-center justify-center rounded-[0.875rem] ${plan.icon}`}
                      >
                        <span className={`h-3.5 w-3.5 rounded-full ${plan.id === "emi" ? "bg-brand" : "bg-white"}`} />
                      </span>

                      {plan.badge && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand/8 px-3 py-1.5 text-[0.75rem] font-medium text-brand">
                          <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 text-[1.125rem] font-semibold text-ink">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-[0.875rem] text-ink-muted">
                      {plan.tagline}
                    </p>

                    <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
                      <span className="type-heading text-[clamp(2rem,3.6vw,2.75rem)] font-bold text-ink">
                        {plan.amount}
                      </span>
                      <span className="text-[0.9375rem] text-ink-muted">
                        {plan.cadence}
                      </span>
                    </p>

                    <hr className="mt-6 border-black/10" />

                    <p className="mt-5 text-[0.8125rem] font-semibold text-ink">
                      {plan.includesLabel}
                    </p>
                    <ul className="mt-3 flex list-none flex-col gap-2">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
                          />
                          <span className="text-[0.8125rem] leading-snug text-pretty text-ink-muted">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Styled as the card's CTA; the label above is what's
                        actually clickable, so this stays a span. */}
                    <span
                      aria-hidden="true"
                      className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[0.9375rem] font-medium transition-colors duration-300 ease-cinematic ${
                        isSelected
                          ? "bg-brand text-white"
                          : "border border-black/15 bg-white text-ink group-hover:border-brand/50 group-hover:text-brand"
                      }`}
                    >
                      {isSelected ? "Selected" : plan.cta}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </fieldset>
      </div>
    </section>
  );
}
