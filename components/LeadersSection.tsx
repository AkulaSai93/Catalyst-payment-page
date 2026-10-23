import Image from "next/image";

type Leader = {
  image: string;
  name: string;
  /** Each entry renders on its own line under the name. */
  role: string[];
  bio: string;
};

const LEADERS: Leader[] = [
  {
    image: "/assets/leaders/ronnie-screwvala.png",
    name: "Ronnie Screwvala",
    role: ["Visionary entrepreneur", "Co-founder, upGrad"],
    bio: "Built transformative enterprises and driven innovation in education and media",
  },
  {
    image: "/assets/leaders/vishwa-mohan.png",
    name: "Vishwa Mohan",
    role: ["CEO, upGrad School of Technology"],
    bio: "India's Top 40 CIOs (2023). Ex-CIO PhysicsWallah, LinkedIn, Amazon, PayPal, Walmart, and Oracle",
  },
  {
    image: "/assets/leaders/mehul-khandhedia.png",
    name: "Mehul Khandhedia",
    role: ["CRO, upGrad School of Technology"],
    bio: "Ex-Professor: Mumbai University, ex-Coursera, and PhysicsWallah. Curated 35,000+ career enablements",
  },
];

export default function LeadersSection() {
  return (
    <section
      id="leaders"
      aria-labelledby="leaders-heading"
      className="relative bg-surface"
    >
      <div className="mx-auto max-w-[84rem] px-5 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 lg:pt-25 lg:pb-14">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-5">
          <h2
            id="leaders-heading"
            className="type-heading type-section-heading font-semibold text-balance text-ink"
          >
            <span className="block">
              <span className="font-accent font-medium whitespace-nowrap text-brand">
                Built by Leaders
              </span>{" "}
              Who&apos;ve Shaped
            </span>
            <span className="block">Education and Technology</span>
          </h2>
          <p className="max-w-[55.75rem] font-display text-[clamp(1rem,1.5vw,1.25rem)] text-pretty text-ink">
            <q>
              Education is not about what you study, it&apos;s about who you
              become
            </q>
          </p>
        </div>

        {/* The caption sits on top of the portrait, positioned as a share of
            the card's own width — hence the container query units. */}
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 sm:mt-10 sm:gap-y-8 lg:mt-14 lg:justify-between lg:gap-x-10">
          {LEADERS.map((leader) => (
            <li
              key={leader.name}
              className="w-full max-w-[22.5rem] sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-5rem)/3)]"
            >
              <figure className="@container grid">
                <Image
                  src={leader.image}
                  alt=""
                  width={360}
                  height={571}
                  sizes="(min-width: 640px) 22.5rem, calc(100vw - 2.5rem)"
                  className="col-start-1 row-start-1 h-auto w-full select-none"
                />
                <figcaption className="col-start-1 row-start-1 mt-[112.2%] mr-[8.2%] ml-[49.2%] self-start font-display">
                  <h3 className="text-[clamp(0.9375rem,5cqw,1.125rem)] leading-[1.25] font-bold whitespace-nowrap text-brand">
                    {leader.name}
                  </h3>
                  <p className="mt-[0.43em] text-[clamp(0.75rem,3.61cqw,0.8125rem)] leading-[1.31] font-semibold text-ink">
                    {leader.role.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="mt-[0.27em] text-[clamp(0.75rem,3.61cqw,0.8125rem)] leading-[1.31] text-ink-muted">
                    {leader.bio}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
