import { Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white text-xl font-bold">
                L
              </div>
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                LeoCytte
              </h3>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Global pharmaceutical consulting excellence. 25+ years of expertise connecting your products with worldwide opportunities.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 hover-elevate active-elevate-2 flex items-center justify-center text-secondary-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 hover-elevate active-elevate-2 flex items-center justify-center text-secondary-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@leocytte.com" 
                className="w-10 h-10 rounded-lg bg-white/10 hover-elevate active-elevate-2 flex items-center justify-center text-secondary-foreground hover:text-accent transition-colors"
                aria-label="Email"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  data-testid="link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  data-testid="link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('markets')}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  data-testid="link-markets"
                >
                  Global Markets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  data-testid="link-team"
                >
                  Our Team
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              <li className="text-secondary-foreground/80">Regulatory Consultation</li>
              <li className="text-secondary-foreground/80">Market Access Support</li>
              <li className="text-secondary-foreground/80">Commercialization Strategy</li>
              <li className="text-secondary-foreground/80">Lifecycle Management</li>
              <li className="text-secondary-foreground/80">Market Intelligence</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="text-secondary-foreground/80">
                <a href="mailto:contact@leocytte.com" className="hover:text-accent transition-colors">
                  contact@leocytte.com
                </a>
              </li>
              <li className="text-secondary-foreground/80">
                +1 (555) 123-4567
              </li>
              <li className="text-secondary-foreground/80 text-sm">
                Offices in India, Colombia, Brazil, Portugal, and Mexico
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} LeoCytte Pharmaceutical Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-secondary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
