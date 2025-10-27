import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-bg-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-white text-3xl font-bold">
              L
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              LeoCytte
            </h1>
          </div>

          {/* Tagline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Shaping Pharma Success,{' '}
            <span className="text-accent">Worldwide</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            25+ years of global pharmaceutical expertise. Transforming injectable and critical care products into market leaders across five continents.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent border-accent text-white group"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToAbout}
              className="bg-white/10 backdrop-blur-md border-white/20 text-white"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '5', label: 'Global Markets' },
              { number: '100+', label: 'Products Launched' },
              { number: '50+', label: 'Partners Worldwide' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center" data-testid={`stat-${idx}`}>
                <div className="text-3xl md:text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white hover:text-accent transition-colors"
        data-testid="button-scroll-down"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
