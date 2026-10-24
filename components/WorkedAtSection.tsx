import Image from "next/image";

type Company = {
  src: string;
  name: string;
  /** Intrinsic pixel size of the source file. */
  width: number;
  height: number;
  /** Size of the logo's frame in the design. */
  frameW: number;
  frameH: number;
  /**
   * Crop applied in the design, as percentages of the frame. Present only
   * where the source file carries padding around the mark; omitted when the
   * artwork already fills its frame.
   */
  crop?: { w: string; h: string; left: string; top: string };
};

/** In design order (Figma node 1525:82). */
const COMPANIES: Company[] = [
  {
    src: "/assets/companyLogo/linkedin.png",
    name: "LinkedIn",
    width: 800,
    height: 533,
    frameW: 93.872,
    frameH: 27,
    crop: { w: "125.42%", h: "290.7%", left: "-12.37%", top: "-95.93%" },
  },
  {
    src: "/assets/companyLogo/walmart.png",
    name: "Walmart",
    width: 800,
    height: 450,
    frameW: 104.201,
    frameH: 27,
    crop: { w: "106.87%", h: "232.01%", left: "-3.42%", top: "-66.17%" },
  },
  {
    src: "/assets/companyLogo/paypal.png",
    name: "PayPal",
    width: 800,
    height: 533,
    frameW: 97.554,
    frameH: 27,
    crop: { w: "123.56%", h: "297.62%", left: "-12.03%", top: "-100.6%" },
  },
  {
    src: "/assets/companyLogo/oracle.png",
    name: "Oracle",
    width: 800,
    height: 447,
    frameW: 158.062,
    frameH: 27,
    crop: { w: "112.1%", h: "366.67%", left: "-6.76%", top: "-129.17%" },
  },
  {
    src: "/assets/companyLogo/physicswallah.png",
    name: "PhysicsWallah",
    width: 793,
    height: 800,
    frameW: 29.762,
    frameH: 30,
  },
  {
    src: "/assets/companyLogo/hotstar.png",
    name: "Hotstar",
    width: 800,
    height: 267,
    frameW: 89.72,
    frameH: 30,
  },
  {
    src: "/assets/companyLogo/vmware.png",
    name: "VMware",
    width: 800,
    height: 480,
    frameW: 153.217,
    frameH: 30,
    crop: { w: "100%", h: "306.48%", left: "0", top: "-120.95%" },
  },
  {
    src: "/assets/companyLogo/microsoft.png",
    name: "Microsoft",
    width: 800,
    height: 294,
    frameW: 124.8,
    frameH: 30,
    crop: { w: "123.08%", h: "188.13%", left: "-11.54%", top: "-45.81%" },
  },
  {
    src: "/assets/companyLogo/digitalocean.png",
    name: "DigitalOcean",
    width: 800,
    height: 800,
    frameW: 30,
    frameH: 30,
  },
  {
    src: "/assets/companyLogo/pinnium.png",
    name: "Pinnium",
    width: 800,
    height: 373,
    frameW: 64.249,
    frameH: 30,
  },
  {
    src: "/assets/companyLogo/hcltech.png",
    name: "HCLTech",
    width: 800,
    height: 800,
    frameW: 30,
    frameH: 30,
  },
  {
    src: "/assets/companyLogo/ibm.png",
    name: "IBM",
    width: 800,
    height: 298,
    frameW: 80.335,
    frameH: 30,
  },
  {
    src: "/assets/companyLogo/google.png",
    name: "Google",
    width: 800,
    height: 333,
    frameW: 82.615,
    frameH: 30,
    crop: { w: "104.75%", h: "120.19%", left: "-2.79%", top: "-10.77%" },
  },
  {
    src: "/assets/companyLogo/tiger-analytics.png",
    name: "Tiger Analytics",
    width: 800,
    height: 400,
    frameW: 60,
    frameH: 30,
  },
  {
    src: "/assets/companyLogo/maybank.png",
    name: "Maybank",
    width: 800,
    height: 800,
    frameW: 137.143,
    frameH: 30,
    crop: { w: "100%", h: "457.14%", left: "0", top: "-179.46%" },
  },
  {
    src: "/assets/companyLogo/salesforce.png",
    name: "Salesforce",
    width: 800,
    height: 560,
    frameW: 38.571,
    frameH: 27,
  },
  {
    src: "/assets/companyLogo/partner-mark.png",
    name: "Hiring partner",
    width: 800,
    height: 800,
    frameW: 53.554,
    frameH: 36,
    crop: { w: "111.11%", h: "165.29%", left: "-11.11%", top: "-26.45%" },
  },
  {
    src: "/assets/companyLogo/barclays.png",
    name: "Barclays",
    width: 800,
    height: 533,
    frameW: 153.632,
    frameH: 30,
    crop: { w: "123.33%", h: "421.05%", left: "-11.72%", top: "-159.47%" },
  },
  {
    src: "/assets/companyLogo/cisco.png",
    name: "Cisco",
    width: 800,
    height: 455,
    frameW: 52.67,
    frameH: 30,
  },
  {
    src: "/assets/companyLogo/ineuron.png",
    name: "iNeuron",
    width: 800,
    height: 218,
    frameW: 129.232,
    frameH: 35.279,
  },
];

/** Three identical tracks: one on screen, two feeding the seamless loop. */
const TRACKS = [0, 1, 2];

const track =
  "flex w-max shrink-0 items-center motion-safe:marquee-left [@media(hover:hover)]:group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-5";

/**
 * Every track loads eagerly: the duplicates reuse the first track's URLs, so
 * the extra requests are cache hits and no copy scrolls in half-painted.
 */
function Logo({ company, labelled }: { company: Company; labelled: boolean }) {
  const alt = labelled ? company.name : "";
  // The crop blows the artwork up past its frame, so the frame width alone
  // would under-request and serve a soft image.
  const renderedWidth = Math.ceil(
    company.frameW * (company.crop ? parseFloat(company.crop.w) / 100 : 1),
  );

  return (
    <span
      className="relative block shrink-0 overflow-hidden"
      style={{ width: `${company.frameW}px`, height: `${company.frameH}px` }}
    >
      <Image
        src={company.src}
        alt={alt}
        width={company.width}
        height={company.height}
        sizes={`${renderedWidth}px`}
        loading="eager"
        className="absolute max-w-none object-cover"
        style={
          company.crop
            ? {
                width: company.crop.w,
                height: company.crop.h,
                left: company.crop.left,
                top: company.crop.top,
              }
            : { inset: 0, width: "100%", height: "100%" }
        }
      />
    </span>
  );
}

export default function WorkedAtSection() {
  return (
    <section
      id="worked-at"
      aria-labelledby="worked-at-heading"
      className="relative bg-surface py-12 sm:py-14 lg:py-16"
    >
      <h2
        id="worked-at-heading"
        className="type-heading px-6 text-center type-section-heading font-bold text-balance text-ink"
      >
        <span className="font-accent font-medium text-brand">
          Built by people
        </span>{" "}
        who&apos;ve worked at
      </h2>

      {/* Full-bleed rail, faded out at both edges. */}
      <div className="group relative mt-8 sm:mt-10">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-visible motion-reduce:[mask-image:none]">
          {TRACKS.map((index) => (
            <ul
              key={index}
              aria-hidden={index > 0}
              style={{ "--marquee-duration": "48s" } as React.CSSProperties}
              className={`${track} ${index > 0 ? "motion-reduce:hidden" : ""}`}
            >
              {COMPANIES.map((company) => (
                <li
                  key={company.name}
                  className="flex shrink-0 items-center pr-10 sm:pr-14"
                >
                  <Logo company={company} labelled={index === 0} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
