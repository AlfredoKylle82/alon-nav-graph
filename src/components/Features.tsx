import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, FileText, Route, Building } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: FileText,
    title: "Smart Floor Plan Parsing",
    description: "Automatically parse PDF, DWG, and DXF files to extract spatial data with AI-powered precision."
  },
  {
    icon: MapPin,
    title: "Room & Door Detection",
    description: "Advanced computer vision identifies rooms, doors, and pathways to create accurate building maps."
  },
  {
    icon: Route,
    title: "Intelligent Routing API",
    description: "Generate optimal indoor routes with real-time pathfinding algorithms and accessibility considerations."
  },
  {
    icon: Building,
    title: "White-Label Solution",
    description: "Deploy branded navigation solutions for universities and campuses with enterprise-grade reliability."
  }
];

export const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Complete Indoor Navigation Stack
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From floor plan analysis to production-ready APIs, Alon provides everything 
            you need to deliver world-class indoor navigation experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};