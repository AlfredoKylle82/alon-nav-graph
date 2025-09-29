import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          Alon
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-smooth">
            Features
          </a>
          <a href="#solutions" className="text-foreground hover:text-primary transition-smooth">
            Solutions
          </a>
          <a href="#developers" className="text-foreground hover:text-primary transition-smooth">
            Developers
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-smooth">
            Pricing
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
            Contact
          </a>
        </div>
        <Button variant="default" size="sm">
          Get Your Map
        </Button>
      </div>
    </nav>
  );
};