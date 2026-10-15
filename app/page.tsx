import WorkedAtSection from "@/components/WorkedAtSection";
import HackathonsSection from "@/components/HackathonsSection";
import BeyondCollegeSection from "@/components/BeyondCollegeSection";
import CurriculumSection from "@/components/CurriculumSection";
import LeadersSection from "@/components/LeadersSection";
import LearnFromPeopleSection from "@/components/LearnFromPeopleSection";
import CertificateSection from "@/components/CertificateSection";
import EcosystemSection from "@/components/EcosystemSection";

export default function Home() {
  return (
    <main className="bg-surface">
      <WorkedAtSection />
      <HackathonsSection />
      <BeyondCollegeSection />
      <CurriculumSection />
      <LeadersSection />
      <LearnFromPeopleSection />
      <CertificateSection />
      <EcosystemSection />
    </main>
  );
}
