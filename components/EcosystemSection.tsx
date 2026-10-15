import Image from "next/image";

type Brand = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Degrees at full fan; scaled down by `--fan` on narrow screens. */
  rotate: number;
};

const BRANDS: Brand[] = [
  { src: "/assets/ecosystem/upgrad.png", alt: "upGrad", width: 74, height: 87, rotate: -27 },
  { src: "/assets/ecosystem/internshala.png", alt: "Internshala", width: 121, height: 37, rotate: 18 },
  { src: "/assets/ecosystem/upgrad_enterprise.png", alt: "upGrad Enterprise", width: 90, height: 90, rotate: 12 },
  { src: "/assets/ecosystem/upgrad_abroad.png", alt: "upGrad Abroad", width: 123, height: 38, rotate: -13 },
  { src: "/assets/ecosystem/upgrad_rekrut.png", alt: "upGrad Rekrut", width: 122, height: 62, rotate: -3 },
  { src: "/assets/ecosystem/upgrad_knowledgehut.png", alt: "upGrad KnowledgeHut", width: 124, height: 45, rotate: -8 },
];

const STATS = [
  { label: "Learners", value: "10 M+" },
  { label: "Hiring Partners", value: "3000+" },
  { label: "Global Universities", value: "300+" },
  { label: "Countries", value: "70+" },
  { label: "Placements", value: "110K+" },
  { label: "Corporate clients trained annually", value: "600+" },
  { label: "Internships Enabled", value: "28L+" },
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="relative bg-ink-raised"
    >
      <div className="mx-auto flex max-w-[80rem] flex-col items-center gap-10 px-6 pt-18 pb-24 min-[700px]:gap-15 min-[700px]:pt-25 min-[700px]:pb-30">
        <div className="flex max-w-[63rem] flex-col items-center gap-6 text-center">
          <h2
            id="ecosystem-heading"
            className="type-heading text-[clamp(1.875rem,3.8vw,2.75rem)] font-semibold text-white"
          >
            Built on{" "}
            <span className="font-accent font-medium text-brand">upGrad&apos;s</span>
            <span className="whitespace-normal sm:whitespace-pre-line">
              {" "}
              Legacy. Designed for the Future of Tech.
            </span>
          </h2>
          <p className="max-w-[55.75rem] font-display text-[clamp(1rem,1.8vw,1.5rem)] text-white">
            uGSOT builds on upGrad&apos;s broader education ecosystem to deliver
            focused technology education. While uGSOT Campus offers a full-time
            campus experience, uGSOT Catalyst helps students pursuing degrees
            elsewhere accelerate their technology skills.
          </p>
        </div>

        {/* Fanned brand cards — `--fan` flattens the rotation as the row wraps. */}
        <ul className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-8 py-2 [--fan:0.5] [perspective:1000px] min-[360px]:gap-x-3 min-[600px]:gap-x-4 min-[600px]:gap-y-11 min-[600px]:py-5 min-[600px]:[--fan:0.75] min-[901px]:-mb-5 min-[901px]:flex-nowrap min-[901px]:gap-0 min-[901px]:[--fan:1]">
          {BRANDS.map((brand, index) => (
            <li
              key={brand.alt}
              style={{ "--rotate": brand.rotate } as React.CSSProperties}
              className={`flex h-[clamp(5rem,26vw,9.375rem)] w-[clamp(5rem,26vw,9.375rem)] flex-none items-center justify-center rounded-[14px] border-[3px] border-ink-raised bg-white p-2 shadow-[0_12px_28px_-8px_rgba(0,0,0,0.5)] [transform:rotate(calc(var(--rotate)*var(--fan)*1deg))] [transform-style:preserve-3d] transition-transform duration-500 ease-cinematic will-change-transform hover:z-10 hover:[transform:translateY(-14px)_rotate(calc(var(--rotate)*var(--fan)*1deg))_rotateY(-4.2deg)_rotateX(4.2deg)_scale(1.12)] min-[600px]:rounded-[22px] min-[600px]:border-4 min-[600px]:p-3 ${
                index > 0 ? "min-[901px]:-ml-3.5" : ""
              }`}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="h-full w-full object-contain"
              />
            </li>
          ))}
        </ul>

        <dl className="grid w-full grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-10 xl:grid-cols-7 xl:gap-y-0">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse items-center justify-end gap-3 px-2 text-center md:gap-5 xl:px-4 ${
                index > 0 ? "xl:border-l xl:border-white/15" : ""
              } ${index === STATS.length - 1 ? "max-md:col-span-2" : ""}`}
            >
              <dt className="font-display text-sm text-white md:text-base">
                {stat.label}
              </dt>
              <dd className="m-0 font-display text-[clamp(2rem,6vw,2.5rem)] leading-none font-semibold whitespace-nowrap text-brand">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="type-heading max-w-[65rem] text-center text-[clamp(1.125rem,2.2vw,1.75rem)] font-bold text-balance text-white">
          The <span className="text-brand">uGSOT technology</span> ecosystem now
          accessible from wherever you study.
        </p>
      </div>
    </section>
  );
}
