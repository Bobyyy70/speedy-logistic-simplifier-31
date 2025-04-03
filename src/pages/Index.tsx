
import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { Services } from "@/components/home/Services";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <Services />
      <HowItWorksSection />
      <WhyUsSection />
      <PricingSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
};

export default Index;
