import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
      scrolled ? 'bg-white/95 border-border shadow-md' : 'bg-white/80 border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold text-primary">
          Alon
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#features" className="text-sm xl:text-base text-foreground hover:text-primary transition-smooth relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#solutions" className="text-sm xl:text-base text-foreground hover:text-primary transition-smooth relative group">
            Solutions
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#developers" className="text-sm xl:text-base text-foreground hover:text-primary transition-smooth relative group">
            Developers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="text-sm xl:text-base text-foreground hover:text-primary transition-smooth relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-smooth relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="default" size="sm" className="hidden lg:inline-flex text-xs sm:text-sm hover:scale-105 transition-transform duration-300">
            Get Your Map
          </Button>
          
          {/* Mobile & Tablet Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-3">
          <a 
            href="#features" 
            className="block py-2 text-foreground hover:text-primary transition-smooth"
            onClick={closeMenu}
          >
            Features
          </a>
          <a 
            href="#solutions" 
            className="block py-2 text-foreground hover:text-primary transition-smooth"
            onClick={closeMenu}
          >
            Solutions
          </a>
          <a 
            href="#developers" 
            className="block py-2 text-foreground hover:text-primary transition-smooth"
            onClick={closeMenu}
          >
            Developers
          </a>
          <a 
            href="#pricing" 
            className="block py-2 text-foreground hover:text-primary transition-smooth"
            onClick={closeMenu}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-foreground hover:text-primary transition-smooth"
            onClick={closeMenu}
          >
            Contact
          </a>
          <Button variant="default" size="sm" className="w-full sm:hidden mt-4">
            Get Your Map
          </Button>
          </div>
        </div>
      )}
    </nav>
  );
};