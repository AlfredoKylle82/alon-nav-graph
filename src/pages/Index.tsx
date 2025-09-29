import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Solutions />
      <Contact />
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-primary-glow mb-4">Alon</div>
          <p className="text-background/80">
            Transforming indoor navigation with AI-powered floor plan analysis.
          </p>
          <p className="text-background/60 text-sm mt-4">
            © 2024 Alon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
