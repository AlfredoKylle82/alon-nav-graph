export const CredibilityStrip = () => {
  return (
    <section className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-6 animate-fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white/80">
          <div className="flex items-center gap-2 text-sm md:text-base hover:text-white transition-colors duration-300">
            <span className="w-2 h-2 bg-nav-accent rounded-full animate-bounce-subtle"></span>
            <span>&lt;24h to first map</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base hover:text-white transition-colors duration-300">
            <span className="w-2 h-2 bg-nav-accent rounded-full animate-bounce-subtle [animation-delay:200ms]"></span>
            <span>No beacons required</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base hover:text-white transition-colors duration-300">
            <span className="w-2 h-2 bg-nav-accent rounded-full animate-bounce-subtle [animation-delay:400ms]"></span>
            <span>Multi-building routing</span>
          </div>
        </div>
      </div>
    </section>
  );
};