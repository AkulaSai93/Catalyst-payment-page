import Image from "next/image";

/**
 * The hero's background. It lives on the wrapper around the hero *and* the
 * enrollment block so the footage runs behind both on mobile, where the card
 * reads as the tail of the hero rather than a separate section.
 */
export default function HeroMedia() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="/assets/hero/catalyst-video-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
    </div>
  );
}
