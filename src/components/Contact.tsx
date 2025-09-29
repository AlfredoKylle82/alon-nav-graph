import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build the Future of Indoor Navigation
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to see Alon in action? Get in touch for a personalized demo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className={`text-center border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Schedule Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                See Alon's capabilities in action with a personalized demonstration.
              </p>
              <Button variant="outline" className="w-full">
                Book Meeting
              </Button>
            </CardContent>
          </Card>

          <Card className={`text-center border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <CardTitle>API Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get early access to our routing API and developer resources.
              </p>
              <Button variant="outline" className="w-full">
                Request Access
              </Button>
            </CardContent>
          </Card>

          <Card className={`text-center border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '600ms' }}>
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explore white-label opportunities for your organization.
              </p>
              <Button variant="outline" className="w-full">
                Partner With Us
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className={`border-0 shadow-elegant transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Organization</label>
              <Input placeholder="Your university or company" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea 
                placeholder="Tell us about your indoor navigation needs..." 
                className="min-h-32"
              />
            </div>
            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};