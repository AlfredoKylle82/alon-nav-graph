import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, FileText, Route, Building } from "lucide-react";

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
  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Indoor Navigation Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From floor plan analysis to production-ready APIs, Alon provides everything 
            you need to deliver world-class indoor navigation experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
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