import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { Services } from "@/components/home/Services";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-100/40 dark:from-slate-900 dark:via-green-950/20 dark:to-blue-950/30 bg-[#c3eafb]">
      <Helmet>
        <title>Speed E-Log | Logistique E-commerce Simplifiée pour PME</title>
        <meta name="description" content="Externalisez votre logistique e-commerce avec Speed E-Log. Services fiables et transparents pour PME. Obtenez un devis personnalisé." />
        <meta property="og:title" content="Speed E-Log | Logistique E-commerce Simplifiée pour PME" />
        <meta property="og:description" content="Externalisez votre logistique e-commerce avec Speed E-Log. Services fiables et transparents pour PME. Obtenez un devis personnalisé." />
      </Helmet>
      <HeroSection />
      <ChallengesSection />
      <Services />
      <HowItWorksSection />
      <WhyUsSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </div>;
};
export default Index;