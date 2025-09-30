import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building2, Hospital, ShoppingBag } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const solutions = [
  {
    icon: GraduationCap,
    title: "Universities",
    description: "Help students and visitors navigate complex campus buildings with ease. Reduce confusion and improve accessibility.",
    benefits: ["Student orientation", "Campus tours", "Emergency routing", "Accessibility compliance"]
  },
  {
    icon: Building2,
    title: "Corporate Campuses",
    description: "Streamline employee and visitor navigation across multi-building corporate environments.",
    benefits: ["Employee onboarding", "Visitor management", "Meeting room finding", "Space optimization"]
  },
  {
    icon: Hospital,
    title: "Healthcare Facilities",
    description: "Guide patients and families through complex medical facilities to reduce stress and improve experiences.",
    benefits: ["Patient wayfinding", "Emergency routing", "Staff efficiency", "Visitor assistance"]
  },
  {
    icon: ShoppingBag,
    title: "Retail & Venues",
    description: "Enhance customer experiences in shopping centers, airports, and large event venues.",
    benefits: ["Store locating", "Event navigation", "Crowd management", "Personalized experiences"]
  }
];

export const Solutions = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Powering Navigation Across Industries
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From university campuses to corporate headquarters, Alon's white-label solution 
            adapts to your unique navigation challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-lg">{solution.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-muted-foreground mb-8">
            Join leading organizations already using Alon for smarter indoor navigation.
          </p>
          <Button variant="default" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
            Start Your Pilot Program
          </Button>
        </div>
      </div>
    </section>
  );
};