import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
