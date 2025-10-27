import { useEffect, useRef, useState } from "react";
import { Building2, Globe2, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Globe2, end: 5, suffix: '+', label: 'Global Markets', color: 'text-primary' },
  { icon: Rocket, end: 100, suffix: '+', label: 'Products Launched', color: 'text-accent' },
  { icon: Building2, end: 25, suffix: '+', label: 'Years Experience', color: 'text-primary' },
  { icon: Users, end: 50, suffix: '+', label: 'Partners Worldwide', color: 'text-accent' }
];

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now();
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
      {count}{suffix}
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 gradient-bg-hero" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide" data-testid="text-stats-label">
            Our Impact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Delivering Results That Matter
          </h3>
          <p className="text-lg text-white/90">
            Numbers that reflect our commitment to pharmaceutical excellence across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center space-y-4 group"
              data-testid={`stat-counter-${idx}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <stat.icon className={`w-8 h-8 ${stat.color === 'text-primary' ? 'text-white' : 'text-accent'}`} />
              </div>
              <div className={`${stat.color === 'text-primary' ? 'text-white' : 'text-accent'}`}>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
