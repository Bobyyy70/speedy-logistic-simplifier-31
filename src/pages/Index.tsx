
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";
import { LogisticsFeatureSection } from "@/components/sections/LogisticsFeatureSection";
import { LogisticsPerformanceSection } from "@/components/sections/LogisticsPerformanceSection";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Speed E-Log | Logistique E-commerce Simplifiée pour PME</title>
        <meta 
          name="description" 
          content="Externalisez votre logistique e-commerce avec Speed E-Log. Services fiables et transparents pour PME. Obtenez un devis personnalisé." 
        />
        <meta property="og:title" content="Speed E-Log | Logistique E-commerce Simplifiée pour PME" />
        <meta 
          property="og:description" 
          content="Externalisez votre logistique e-commerce avec Speed E-Log. Services fiables et transparents pour PME. Obtenez un devis personnalisé." 
        />
        <meta name="keywords" content="logistique e-commerce, externalisation logistique, 3PL, fulfillment, préparation commandes, PME logistique" />
      </Helmet>
      
      {/* Geometric decorative elements */}
      <div aria-hidden="true" className="fixed inset-0 grid grid-cols-12 gap-2 pointer-events-none z-0 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="col-span-1 h-full border-r border-blue-500/5"></div>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="absolute w-full h-[8.33vh]" style={{ top: `${i * 8.33}vh` }}>
            <div className="w-full h-px bg-blue-500/5"></div>
          </div>
        ))}
      </div>
      
      {/* Séparateurs subtils entre les sections - simplifiés */}
      <div className="section-dividers pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className="section-divider absolute w-full h-px"
            style={{ 
              top: `${i * 17}%`,
              background: `linear-gradient(to right, transparent, var(--${i % 2 ? 'blue' : 'green'}-500) 50%, transparent)`,
              zIndex: 1,
              opacity: 0.1,
              width: "90%"
            }}
          />
        ))}
      </div>
      
      <HeroSection />
      <LogisticsFeatureSection />
      <ChallengesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <LogisticsPerformanceSection />
      <TestimonialsSection />
      <Testimonials />
      <ContactCTA />
      
      {/* Enhanced animated particles - simplifié avec div statiques */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, index) => {
          // Generate more varied sizes, positions and colors
          const size = (index % 3) + 1 + Math.random();
          const left = `${(index * 7) + Math.random() * 20}%`;
          const top = `${(index * 6) + Math.random() * 70}%`;
          
          const colors = [
            'bg-blue-400/10',
            'bg-orange-400/10', 
            'bg-green-400/10',
            'bg-purple-400/10',
            'bg-cyan-400/10'
          ];
          
          const color = colors[index % colors.length];
          
          return (
            <div
              key={index}
              className={`absolute rounded-full ${color}`}
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
                left,
                top,
                opacity: 0.3
              }}
            />
          );
        })}
      </div>
      
      {/* Indicateur de défilement simplifié */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:block opacity-80">
        <div className="flex flex-col items-center gap-2">
          <div className="w-1 h-16 bg-gray-300/30 dark:bg-gray-600/30 rounded-full overflow-hidden">
            <div className="w-full bg-blue-500 h-8 origin-top"></div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            SCROLL
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
