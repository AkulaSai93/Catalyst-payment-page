import Link from "next/link";

const VARIANTS = {
  /** Ink button with a white arrow box — for light backgrounds. */
  dark: {
    body: "bg-ink text-white hover:bg-brand active:bg-brand",
    arrow: "bg-white text-ink",
  },
  /** White button with an ink arrow box — for dark or brand backgrounds. */
  light: {
    body: "bg-white text-ink hover:bg-brand hover:text-white active:bg-brand active:text-white",
    arrow: "bg-ink text-white",
  },
  /** White button that flips to ink on hover — for brand-red surfaces, where
   *  a red hover would vanish into the background. */
  invert: {
    body: "bg-white text-ink hover:bg-ink hover:text-white active:bg-ink active:text-white",
    arrow: "bg-ink text-white group-hover:bg-white group-hover:text-ink",
  },
  /** Stroke only — no fill, for sitting quietly beside a solid button. */
  outline: {
    body: "border border-white text-white hover:bg-white hover:text-brand active:bg-white active:text-brand",
    arrow: "border border-current",
  },
} as const;

const SIZES = {
  sm: { body: "gap-[11px] py-1.5 pr-1.5 pl-[19px] text-[13px]", box: "h-[27px] w-[27px]", icon: "h-3 w-3" },
  md: { body: "gap-4 py-2 pr-2 pl-[26px] text-base", box: "h-10 w-10", icon: "h-[18px] w-[18px]" },
} as const;

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
  /** Renders a <button> instead of a link — for actions that stay on the page. */
  onClick?: () => void;
};

/** The site's square CTA button, with its boxed diagonal arrow. */
export default function CtaButton({
  children,
  href = "#apply",
  variant = "dark",
  size = "md",
  className = "",
  onClick,
}: Props) {
  const v = VARIANTS[variant];
  const s = SIZES[size];

  const classes = `group inline-flex items-center justify-center font-medium whitespace-nowrap transition-[transform,color,background-color,box-shadow] duration-300 ease-cinematic hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${v.body} ${s.body} ${className}`;

  const inner = (
    <>
      {children}
      <span
        className={`flex shrink-0 items-center justify-center transition-colors duration-300 ease-cinematic ${v.arrow} ${s.box}`}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
          aria-hidden="true"
          focusable="false"
          className={s.icon}
        >
          <path d="M4.5 11.5 11.5 4.5" />
          <path d="M5.75 4.5h5.75v5.75" />
        </svg>
      </span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
