import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { JuicesSection } from "@/components/juices-section";
import { StorySection } from "@/components/story-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <JuicesSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}
