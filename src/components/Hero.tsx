import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Flow through buildings{" "}
          <span className="text-nav-accent">effortlessly</span>.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
          From blueprint to navigation in a day. Upload DWG/PDF/DXF, auto-detect rooms and doors, 
          and publish accessibility-aware maps that help students, visitors, and staff navigate with confidence.
        </p>
        <p className="text-base md:text-lg mb-6 text-white/70 max-w-2xl mx-auto">
          No beacons, no confusion—just seamless indoor experiences that work offline.
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
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
            Get Your Map
          </Button>
          <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
            See Sample Map
          </Button>
        </div>
      </div>
    </section>
  );
};