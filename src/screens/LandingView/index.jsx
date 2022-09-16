import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";

export default function LandingView() {
  return (
    <div className="landing-page-view mt-4">
      <HeroSection />
      <TeamSection />
    </div>
  )
}