import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
      scrolled ? 'bg-white/95 border-border shadow-md' : 'bg-white/80 border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          Alon
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-smooth relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#solutions" className="text-foreground hover:text-primary transition-smooth relative group">
            Solutions
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#developers" className="text-foreground hover:text-primary transition-smooth relative group">
            Developers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-smooth relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        <Button variant="default" size="sm" className="hover:scale-105 transition-transform duration-300">
          Get Your Map
        </Button>
      </div>
    </nav>
  );
};