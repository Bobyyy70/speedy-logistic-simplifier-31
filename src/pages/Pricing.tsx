
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { DynamicCalculatorSection } from "@/components/sections/DynamicCalculatorSection";

const Pricing = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Estimation Tarif Transport & Tarification | Speed E-Log</title>
        <meta 
          name="description" 
          content="Estimez rapidement votre coût de transport TTC avec notre calculateur. Tarification logistique transparente pour les e-commerçants."
        />
        <meta property="og:title" content="Estimation Tarif Transport & Tarification | Speed E-Log" />
        <meta 
          property="og:description" 
          content="Estimez rapidement votre coût de transport TTC avec notre calculateur. Tarification logistique transparente pour les e-commerçants."
        />
      </Helmet>
      <DynamicCalculatorSection />
      
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-muted/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Information importante</h3>
          <p className="text-muted-foreground">
            La grille tarifaire complète de nos prestations (colisage, stockage, préparation de commandes...) 
            ainsi que le service d'impression d'étiquettes sont disponibles pour nos clients après connexion à l'espace client.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Pour plus d'informations ou pour obtenir un devis personnalisé, n'hésitez pas à nous contacter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
