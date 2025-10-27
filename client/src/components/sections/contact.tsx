import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Received!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      country: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 gradient-bg-section" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wide" data-testid="text-contact-label">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                Ready to Expand Your{' '}
                <span className="gradient-text-primary">Global Reach?</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're launching a new product or expanding into strategic markets, our team is here to guide your success. Let's discuss how LeoCytte can accelerate your pharmaceutical business.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="border-card-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground">contact@leocytte.com</p>
                    <p className="text-muted-foreground">partnerships@leocytte.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Global Offices</h4>
                    <p className="text-muted-foreground text-sm">India • Colombia • Brazil</p>
                    <p className="text-muted-foreground text-sm">Portugal • Mexico</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    data-testid="input-company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Target Market</Label>
                  <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                    <SelectTrigger id="country" data-testid="select-country">
                      <SelectValue placeholder="Select a market" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="colombia">Colombia</SelectItem>
                      <SelectItem value="brazil">Brazil</SelectItem>
                      <SelectItem value="portugal">Portugal</SelectItem>
                      <SelectItem value="mexico">Mexico</SelectItem>
                      <SelectItem value="multiple">Multiple Markets</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent border-accent text-white"
                  size="lg"
                  data-testid="button-submit"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
