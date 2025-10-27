import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const team = [
  {
    name: 'Dr. Maria Santos',
    role: 'Regulatory Affairs Director',
    region: 'Brazil & Portugal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    bio: '15+ years navigating LATAM and EU regulatory landscapes for injectable pharmaceuticals.',
    initials: 'MS'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Market Access Strategist',
    region: 'India',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    bio: 'Expert in Indian pharmaceutical market dynamics with deep industry connections.',
    initials: 'RK'
  },
  {
    name: 'Carlos Mendoza',
    role: 'Commercial Strategy Lead',
    region: 'Colombia & Mexico',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    bio: 'Proven track record launching critical care products across Latin American markets.',
    initials: 'CM'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Clinical Affairs Advisor',
    region: 'Global',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    bio: 'Clinical research expertise with focus on injectable therapeutics and critical care.',
    initials: 'SC'
  },
  {
    name: 'Miguel Rodriguez',
    role: 'Quality & Compliance Director',
    region: 'Mexico & Brazil',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    bio: 'Ensuring world-class quality standards across manufacturing and distribution networks.',
    initials: 'MR'
  },
  {
    name: 'Priya Patel',
    role: 'Partnership Development',
    region: 'India & Global',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    bio: 'Building strategic alliances and fostering long-term pharmaceutical partnerships.',
    initials: 'PP'
  },
  {
    name: 'Dr. Fernando Silva',
    role: 'Medical Affairs Lead',
    region: 'Brazil & Portugal',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    bio: 'Medical expertise in oncology and critical care with regulatory submission experience.',
    initials: 'FS'
  },
  {
    name: 'Anita Sharma',
    role: 'Market Intelligence Analyst',
    region: 'India',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    bio: 'Data-driven insights powering strategic decision-making in emerging markets.',
    initials: 'AS'
  }
];

export function Team() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-24 md:py-32 gradient-bg-section" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide" data-testid="text-team-label">
            Our Team
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            Global Talent,{' '}
            <span className="gradient-text-primary">Local Expertise</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Meet the pharmaceutical experts who make market success possible across five continents.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <Card 
              key={idx} 
              className="group hover-elevate active-elevate-2 border-card-border overflow-hidden transition-all duration-300"
              data-testid={`card-team-${idx}`}
            >
              <CardContent className="p-6 space-y-4">
                {/* Avatar */}
                <div className="flex justify-center">
                  <Avatar className="w-24 h-24 border-4 border-primary/10 group-hover:border-primary/20 transition-colors">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl font-bold bg-primary text-primary-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Info */}
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {member.name}
                  </h4>
                  <p className="text-sm font-semibold text-primary">
                    {member.role}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {member.region}
                  </Badge>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground text-center leading-relaxed pt-2">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
