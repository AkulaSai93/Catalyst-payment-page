import Image from "next/image";

type Company = { src: string; name: string; width: number; height: number };

const COMPANIES: Company[] = [
  { src: "/assets/companyLogo/Google.png", name: "Google", width: 486, height: 177 },
  { src: "/assets/companyLogo/Accenture.png", name: "Accenture", width: 623, height: 177 },
  { src: "/assets/companyLogo/Adobe.png", name: "Adobe", width: 590, height: 177 },
  { src: "/assets/companyLogo/amazon.png", name: "Amazon", width: 552, height: 177 },
  { src: "/assets/companyLogo/Cisco.png", name: "Cisco", width: 310, height: 177 },
  { src: "/assets/companyLogo/Dell.png", name: "Dell", width: 444, height: 177 },
  { src: "/assets/companyLogo/Microsoft.png", name: "Microsoft", width: 734, height: 177 },
  { src: "/assets/companyLogo/Paypal.png", name: "PayPal", width: 638, height: 177 },
  { src: "/assets/companyLogo/Oracle.png", name: "Oracle", width: 1033, height: 177 },
  { src: "/assets/companyLogo/Walmart.png", name: "Walmart", width: 681, height: 177 },
];

/** Three identical tracks: one on screen, two feeding the seamless loop. */
const TRACKS = [0, 1, 2];

const track =
  "flex w-max shrink-0 items-center motion-safe:marquee-left group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-5";

export default function WorkedAtSection() {
  return (
    <section
      id="worked-at"
      aria-labelledby="worked-at-heading"
      className="relative bg-surface py-12 sm:py-14 lg:py-16"
    >
      <h2
        id="worked-at-heading"
        className="type-heading px-6 text-center text-[clamp(1.375rem,2.6vw,2rem)] font-bold text-balance text-ink"
      >
        Built by people who&apos;ve worked at
      </h2>

      {/* Full-bleed rail, faded out at both edges. */}
      <div className="group relative mt-8 sm:mt-10">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-visible motion-reduce:[mask-image:none]">
          {TRACKS.map((index) => (
            <ul
              key={index}
              aria-hidden={index > 0}
              style={{ "--marquee-duration": "30s" } as React.CSSProperties}
              className={`${track} ${index > 0 ? "motion-reduce:hidden" : ""}`}
            >
              {COMPANIES.map((company) => (
                <li key={company.name} className="shrink-0 pr-10 sm:pr-14">
                  <Image
                    src={company.src}
                    alt={index === 0 ? company.name : ""}
                    width={company.width}
                    height={company.height}
                    className="h-7 w-auto object-contain sm:h-8"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
