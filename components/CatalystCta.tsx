import Link from "next/link";

const VARIANTS = {
  dark: {
    button: "bg-ink text-white hover:bg-brand hover:-translate-y-px",
    arrow: "bg-white text-ink",
  },
  light: {
    button: "bg-white text-ink hover:bg-brand hover:text-white hover:-translate-y-px",
    arrow: "bg-ink text-white",
  },
} as const;

type Props = {
  variant?: keyof typeof VARIANTS;
  href?: string;
  children?: React.ReactNode;
};

/** The site-wide "Apply to uGSOT Catalyst" button, with its boxed arrow. */
export default function CatalystCta({
  variant = "dark",
  href = "/login",
  children = "Apply to uGSOT Catalyst",
}: Props) {
  const styles = VARIANTS[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-4 py-2 pr-2 pl-[26px] text-base font-medium whitespace-nowrap transition-[transform,color,background-color,box-shadow] duration-300 ease-cinematic focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${styles.button}`}
    >
      {children}
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center ${styles.arrow}`}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
          aria-hidden="true"
          focusable="false"
          className="h-[18px] w-[18px]"
        >
          <path d="M4.5 11.5 11.5 4.5" />
          <path d="M5.75 4.5h5.75v5.75" />
        </svg>
      </span>
    </Link>
  );
}
