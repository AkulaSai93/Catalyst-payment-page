import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "uGSOT Catalyst — Become a Top Software Engineer",
  description:
    "An online 2-year technology accelerator you pursue alongside your existing B.Tech / B.E. / BCA / B.Sc. program.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable}`}
    >
      <body className="bg-surface antialiased">{children}</body>
    </html>
  );
}
