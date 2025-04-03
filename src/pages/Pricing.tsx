
import { useEffect } from "react";

const Pricing = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Tarification</h1>
      <p className="text-lg text-center text-muted-foreground mb-16">
        Page en cours de développement. Consultez notre page d'accueil pour plus d'informations sur nos tarifs.
      </p>
    </div>
  );
};

export default Pricing;
