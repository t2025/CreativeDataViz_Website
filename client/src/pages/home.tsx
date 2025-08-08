import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TimelineSection } from "@/components/timeline-section";
import { PoseLibrary } from "@/components/pose-library";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";
import { CulturalElementGrid } from "@/components/cultural-components";
import { PipelineSection } from "@/components/pipeline";
import { AICoDanceSection } from "@/components/AICoDanceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutSection />
      <AICoDanceSection/>
      <PipelineSection/>
      <HeroSection />
      <CulturalElementGrid/>
      <PoseLibrary />
      {/* <TeamSection /> */}
      <Footer />
    </div>
  );
}
