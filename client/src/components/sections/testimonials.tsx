import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    quote: "LeoCytte's regulatory expertise accelerated our injectable product approval in Brazil by 6 months. Their team's deep understanding of ANVISA requirements was invaluable.",
    author: "Dr. Alexandre Costa",
    position: "VP Regulatory Affairs",
    company: "BioMedica Therapeutics",
    country: "Brazil"
  },
  {
    quote: "Entering the Indian market seemed daunting until we partnered with LeoCytte. Their market intelligence and local connections transformed our critical care product into a category leader.",
    author: "Samantha Williams",
    position: "Chief Commercial Officer",
    company: "MediGlobal Solutions",
    country: "United States"
  },
  {
    quote: "The team's strategic guidance helped us navigate Mexico's complex pharmaceutical landscape with confidence. We achieved market entry 40% faster than projected.",
    author: "Luis Hernandez",
    position: "Managing Director",
    company: "PharmaVida International",
    country: "Mexico"
  },
  {
    quote: "LeoCytte doesn't just consult—they become true partners. Their Colombia market expertise and commercialization strategy drove our injectable portfolio to record growth.",
    author: "Isabella Martinez",
    position: "Head of Latin America",
    company: "CriticalMed Innovations",
    country: "Colombia"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide" data-testid="text-testimonials-label">
            Client Success Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            Trusted by{' '}
            <span className="gradient-text-primary">Industry Leaders</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Real results from pharmaceutical partners who've expanded globally with LeoCytte.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-card-border relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    idx === currentIndex 
                      ? 'opacity-100 block' 
                      : 'opacity-0 hidden'
                  }`}
                  data-testid={`testimonial-${idx}`}
                >
                  <Quote className="w-12 h-12 text-accent mb-6" />
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                data-testid={`button-testimonial-dot-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
