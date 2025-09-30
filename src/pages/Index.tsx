import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CredibilityStrip />
      <Features />
      <Solutions />
      <Contact />
      <footer className="bg-foreground text-background py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xl sm:text-2xl font-bold text-primary-glow mb-3 sm:mb-4">Alon</div>
          <p className="text-background/80 text-sm sm:text-base px-4">
            Transforming indoor navigation with AI-powered floor plan analysis.
          </p>
          <p className="text-background/60 text-xs sm:text-sm mt-3 sm:mt-4">
            © 2025 Alon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
