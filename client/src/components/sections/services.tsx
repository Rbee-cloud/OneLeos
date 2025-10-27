import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Globe, TrendingUp, Shield, Pill, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: FileCheck,
    title: 'Regulatory Consultation',
    description: 'Expert guidance through complex regulatory pathways. We navigate local requirements, streamline approvals, and ensure compliance across multiple jurisdictions.',
    benefits: ['Faster time to market', 'Reduced compliance risk', 'Local expertise']
  },
  {
    icon: Globe,
    title: 'Market Access Support',
    description: 'Strategic market entry planning for pharmaceutical products. We identify opportunities, assess market dynamics, and create tailored go-to-market strategies.',
    benefits: ['Market intelligence', 'Entry strategy', 'Partner network']
  },
  {
    icon: TrendingUp,
    title: 'Commercialization Strategy',
    description: 'End-to-end support from product launch to market leadership. We develop pricing strategies, distribution models, and growth acceleration plans.',
    benefits: ['Revenue optimization', 'Launch excellence', 'Competitive positioning']
  },
  {
    icon: Shield,
    title: 'Lifecycle Management',
    description: 'Maximize product value throughout its lifecycle. From patent strategies to lifecycle extension, we help sustain competitive advantages.',
    benefits: ['Value maximization', 'Patent strategy', 'Lifecycle extension']
  },
  {
    icon: Pill,
    title: 'Injectable & Critical Care Focus',
    description: 'Specialized expertise in injectable pharmaceuticals and critical care medicines. We understand the unique challenges of these complex product categories.',
    benefits: ['Specialized knowledge', 'Clinical insights', 'Manufacturing expertise']
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description: 'Data-driven insights for informed decision-making. We provide competitive analysis, market forecasting, and strategic recommendations.',
    benefits: ['Competitive intelligence', 'Market forecasts', 'Strategic insights']
  }
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 md:py-32 gradient-bg-section" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide" data-testid="text-services-label">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            Comprehensive Solutions for{' '}
            <span className="gradient-text-primary">Pharma Success</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            From regulatory compliance to market leadership, we provide end-to-end support for your pharmaceutical business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card 
              key={idx} 
              className="hover-elevate active-elevate-2 border-card-border transition-all duration-300 group"
              data-testid={`card-service-${idx}`}
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-semibold text-foreground">Key Benefits:</p>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
