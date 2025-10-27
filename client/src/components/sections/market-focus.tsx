import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const markets = [
  {
    country: 'India',
    description: 'South Asia\'s pharmaceutical powerhouse with rapid growth in injectable markets',
    stats: '2nd largest pharma market by volume',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop'
  },
  {
    country: 'Colombia',
    description: 'Strategic gateway to Latin American markets with expanding healthcare infrastructure',
    stats: '4th largest economy in Latin America',
    image: 'https://images.unsplash.com/photo-1568632234168-4e2652160150?q=80&w=2070&auto=format&fit=crop'
  },
  {
    country: 'Brazil',
    description: 'Largest pharmaceutical market in Latin America with strong regulatory framework',
    stats: '$30B+ pharmaceutical market',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop'
  },
  {
    country: 'Portugal',
    description: 'European hub with streamlined access to EU markets and robust healthcare system',
    stats: 'Gateway to 450M EU consumers',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    country: 'Mexico',
    description: 'North America\'s emerging pharma leader with growing critical care sector',
    stats: '2nd largest pharma market in LATAM',
    image: 'https://images.unsplash.com/photo-1518659095211-2d1e7c8c9a0c?q=80&w=2070&auto=format&fit=crop'
  }
];

export function MarketFocus() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="markets" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide" data-testid="text-markets-label">
            Global Market Focus
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            Strategic Presence Across{' '}
            <span className="gradient-text-primary">Five Continents</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Deep local expertise in key pharmaceutical markets, connecting your products with global opportunities.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, idx) => (
            <Card 
              key={idx} 
              className="group overflow-hidden hover-elevate active-elevate-2 border-card-border transition-all duration-300"
              data-testid={`card-market-${idx}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={market.image} 
                  alt={market.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {market.country}
                  </h4>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <p className="text-foreground leading-relaxed">
                  {market.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{market.stats}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global Reach Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-card-border rounded-lg px-8 py-6">
            <p className="text-lg text-foreground font-medium">
              <span className="text-accent font-bold">25+ years</span> of combined regional expertise •{' '}
              <span className="text-primary font-bold">100+ products</span> launched •{' '}
              <span className="text-accent font-bold">5 strategic markets</span> mastered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
