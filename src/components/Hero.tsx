import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.svg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Map background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-foreground">
          Flow through buildings{" "}
          <span className="text-primary">effortlessly</span>.
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-foreground/80 max-w-3xl mx-auto leading-relaxed px-2">
          From blueprint to navigation in a day. Upload DWG/PDF/DXF, auto-detect rooms and doors, 
          and publish accessibility-aware maps that help students, visitors, and staff navigate with confidence.
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-muted-foreground max-w-2xl mx-auto px-2">
          No beacons, no confusion—just seamless indoor experiences that work offline.
        </p>
        
        {/* Checklist */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base text-foreground/70 px-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-primary text-sm sm:text-base">✓</span>
            <span>Works offline</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-primary text-sm sm:text-base">✓</span>
            <span>Accessibility profiles</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-primary text-sm sm:text-base">✓</span>
            <span>Open SDKs</span>
          </div>
        </div>

        {/* No beacons pill */}
        <div className="mb-6 sm:mb-8">
          <span className="inline-block bg-primary/15 border border-primary/40 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
            No beacons required
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button variant="default" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-300 shadow-lg w-full sm:w-auto">
            Get Your Map
          </Button>
          <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-300 border-2 w-full sm:w-auto">
            See Sample Map
          </Button>
        </div>
      </div>
    </section>
  );
};