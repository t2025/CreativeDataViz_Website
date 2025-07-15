import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TimelineSection } from "@/components/timeline-section";
import { PoseLibrary } from "@/components/pose-library";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <PoseLibrary />
      <TeamSection />
      <Footer />
    </div>
  );
}
