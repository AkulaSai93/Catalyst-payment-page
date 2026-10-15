import Image from "next/image";

export default function CertificateSection() {
  return (
    <section
      id="certificate"
      aria-labelledby="certificate-heading"
      className="relative bg-[linear-gradient(to_bottom,transparent_35%,#f4f4f5)]"
    >
      <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-10 px-5 py-16 sm:gap-12 sm:px-6 sm:py-20 lg:gap-15 lg:py-20">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-5">
          <h2
            id="certificate-heading"
            className="type-heading text-[clamp(1.75rem,7vw,2rem)] font-semibold text-balance text-ink sm:text-[clamp(2rem,4vw,3.25rem)]"
          >
            Earn a Completion{" "}
            <span className="font-accent font-medium whitespace-nowrap text-brand">
              Certificate
            </span>
          </h2>
          <p className="max-w-[47rem] font-display text-[clamp(1rem,1.8vw,1.5rem)] text-pretty text-[#1e2022]">
            Complete the 2-year program and earn a certificate that recognizes
            your learning, projects, and progress in technology.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <Image
            src="/assets/certificate/completion-certificate.jpg"
            alt="Sample of the uGSoT Catalyst certificate of completion from upGrad School of Technology, signed by Vishwa Mohan and Mehul Khandhedia"
            width={2400}
            height={1696}
            sizes="(min-width: 1088px) 1021px, 100vw"
            className="h-auto w-full"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
          >
            <span className="-rotate-[24deg] font-display text-[clamp(1.25rem,5vw,3.25rem)] leading-none font-bold tracking-[0.12em] text-ink/20 uppercase">
              Sample
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
