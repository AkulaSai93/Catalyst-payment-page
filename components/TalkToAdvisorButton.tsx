"use client";

import { useState } from "react";
import AdmissionsDialog from "./AdmissionsDialog";
import CtaButton from "./CtaButton";

/** "Talk to an Advisor" — opens the same confirmation as the admissions bar. */
export default function TalkToAdvisorButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CtaButton variant="outline" onClick={() => setOpen(true)}>
        Talk to an Advisor
      </CtaButton>
      <AdmissionsDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
