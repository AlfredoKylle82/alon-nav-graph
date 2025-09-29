import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-navigation.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Turn floor plans into routes in{" "}
          <span className="text-nav-accent">24 hours</span>.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Upload DWG/PDF/DXF, auto-detect rooms and doors, review in a lightweight editor, 
          and publish an accessibility-aware map that works offline—no beacons required.
        </p>
        
        {/* Checklist */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 text-sm md:text-base text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-nav-accent">✓</span>
            <span>Works offline</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nav-accent">✓</span>
            <span>Accessibility profiles</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nav-accent">✓</span>
            <span>Open SDKs</span>
          </div>
        </div>

        {/* No beacons pill */}
        <div className="mb-8">
          <span className="inline-block bg-white/10 border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
            No beacons required
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Schedule Demo
          </Button>
          <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
            See Sample Map
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