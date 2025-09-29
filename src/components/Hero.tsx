import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-navigation.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          AI Indoor Navigation
          <span className="block text-primary-glow">for Every Campus</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Transform floor plans into intelligent navigation. Parse PDFs, detect rooms, 
          build routing APIs, and deliver seamless indoor experiences for universities worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Schedule Demo
          </Button>
          <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
            View Documentation
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="AI Indoor Navigation Technology" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};