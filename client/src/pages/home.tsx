import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { MarketFocus } from "@/components/sections/market-focus";
import { Team } from "@/components/sections/team";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <MarketFocus />
      <Statistics />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
