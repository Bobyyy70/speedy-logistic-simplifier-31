
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
};

export default Index;
