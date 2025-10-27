import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300" />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="LeoCytte team collaboration"
              className="relative rounded-lg shadow-lg w-full h-[400px] object-cover"
              data-testid="img-about"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wide" data-testid="text-about-label">
                About LeoCytte
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                Global Expertise,{' '}
                <span className="gradient-text-primary">Local Impact</span>
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 25 years, LeoCytte has been the trusted partner for pharmaceutical companies seeking to expand their footprint in critical global markets. We combine deep regulatory knowledge with strategic market insights to accelerate your success.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our lion-hearted approach embodies confidence, reach, and modern expertise. We don't just consult—we become your strategic partner, navigating complex regulatory landscapes and unlocking market opportunities across India, Colombia, Brazil, Portugal, and Mexico.
            </p>

            {/* Key Values */}
            <div className="space-y-4 pt-4">
              {[
                'Integrity: Transparent, ethical guidance in every engagement',
                'Collaboration: Your success is our mission',
                'Innovation: Cutting-edge strategies for modern markets',
                'Global Reach: Deep local expertise in 5+ strategic regions',
                'Tailored Solutions: Customized approaches for your unique needs'
              ].map((value, idx) => (
                <div key={idx} className="flex items-start gap-3" data-testid={`value-${idx}`}>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
