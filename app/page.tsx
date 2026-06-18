import { HeroSection } from '@/components/hero-section';
import { FeaturesSection, InvestmentSection } from '@/components/features-section';
import { HowItWorks } from '@/components/how-it-works';
import { StatsSection } from '@/components/stats-section';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <InvestmentSection />
      <FinalCTA />
      <StatsSection />
      <Footer />
    </main>
  );
}