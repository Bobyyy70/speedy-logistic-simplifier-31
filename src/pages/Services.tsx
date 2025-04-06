
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Services as ServicesSection } from "@/components/home/Services";

const Services = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Nos Services Logistique E-commerce | Speed E Log</title>
        <meta 
          name="description" 
          content="Découvrez nos services logistiques complets pour e-commerce : réception, stockage, préparation de commandes, expédition optimisée. Adapté aux PME." 
        />
        <meta property="og:title" content="Nos Services Logistique E-commerce | Speed E Log" />
        <meta 
          property="og:description" 
          content="Découvrez nos services logistiques complets pour e-commerce : réception, stockage, préparation de commandes, expédition optimisée. Adapté aux PME." 
        />
      </Helmet>
      {/* Header section */}
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-6">
          Nos Services Logistiques pour E-commerce
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Des solutions complètes et sur mesure pour gérer efficacement votre chaîne logistique.
          Nous vous aidons à vous concentrer sur votre cœur de métier.
        </p>
      </div>

      {/* Services section */}
      <ServicesSection />

      {/* CTA Final */}
      <section className="container mx-auto mt-12 md:mt-16 lg:mt-20 text-center px-4 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Prêt à externaliser votre logistique ?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Discutons de vos besoins spécifiques et voyons comment Speed E Log peut vous aider à simplifier vos opérations et à vous concentrer sur votre croissance.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Demander un Devis Personnalisé</Link>
        </Button>
      </section>
    </div>
  );
};

export default Services;
