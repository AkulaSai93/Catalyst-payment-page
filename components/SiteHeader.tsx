"use client";

import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { href: "#curriculum", label: "What's included" },
  { href: "#payment-plan", label: "Payment plans" },
  { href: "#faqs", label: "FAQs" },
];

/**
 * Fixed header that starts light over the page's grey opening and turns black
 * once scrolled. The logo, links and button all invert with it, so the lockup
 * swaps between its dark and white artwork rather than being tinted.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = "text-white/90 hover:text-brand";

  // Transparent over the hero, but an open menu needs a solid backdrop or the
  // links sit unreadably on top of the hero artwork.
  const filled = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-6 py-4 transition-colors duration-300 ease-cinematic sm:px-8 lg:px-14 lg:py-5 ${
        filled
          ? "border-b border-white/10 bg-ink/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <Link
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="upGrad School of Technology — home"
        >
          <Image
            src="/assets/ugsot_x_catalyst_logo_white.png"
            alt="upGrad School of Technology"
            width={315}
            height={40}
            priority
            className="h-6 w-auto min-[360px]:h-7 sm:h-8 xl:h-10"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-display text-base">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-250 ease-cinematic focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${navLink}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <CtaButton size="sm" variant="light">
              Secure Your Seat
            </CtaButton>
          </span>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] text-white transition-colors duration-300 ease-cinematic focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          >
            <span
              aria-hidden="true"
              className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ease-cinematic ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ease-cinematic ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ease-cinematic ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        id="site-mobile-menu"
        aria-label="Primary mobile"
        hidden={!menuOpen}
        className="mt-6 max-h-[calc(100svh-9rem)] overflow-y-auto border-t border-white/10 pt-6 lg:hidden"
      >
        <ul className="flex flex-col gap-5 font-display text-lg">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block transition-colors duration-250 ease-cinematic ${navLink}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="mt-6 block sm:hidden">
          <CtaButton size="sm" variant="light">
            Secure Your Seat
          </CtaButton>
        </span>
      </nav>
    </header>
  );
}
