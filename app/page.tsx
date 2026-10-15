import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import WorkedAtSection from "@/components/WorkedAtSection";
import PaymentPlanSection from "@/components/PaymentPlanSection";
import BeyondCollegeSection from "@/components/BeyondCollegeSection";
import CurriculumSection from "@/components/CurriculumSection";
import HackathonsSection from "@/components/HackathonsSection";
import ForParentsSection from "@/components/ForParentsSection";
import CertificateSection from "@/components/CertificateSection";
import LeadersSection from "@/components/LeadersSection";
import LearnFromPeopleSection from "@/components/LearnFromPeopleSection";
import EcosystemSection from "@/components/EcosystemSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <HeroSection />
        {/* 1 */} <WorkedAtSection />
        {/* 2 */} <PaymentPlanSection />
        {/* 3 */} <BeyondCollegeSection />
        {/* 4 */} <CurriculumSection />
        {/* 5 */} <HackathonsSection />
        {/* 6 */} <ForParentsSection />
        {/* 7 */} <CertificateSection />
        {/* 8 */} <LeadersSection />
        {/* 9 */} <LearnFromPeopleSection />
        <EcosystemSection />
        {/* 10 */} <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
