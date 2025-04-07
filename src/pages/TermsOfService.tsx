
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Conditions Générales de Vente | Speed E-Log</title>
        <meta 
          name="description" 
          content="Conditions générales de vente des services logistiques de Speed E-Log."
        />
      </Helmet>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Conditions Générales de Vente</h1>
      
      <div className="prose max-w-none">
        <p className="text-muted-foreground">
          Cette page sera complétée avec les conditions générales de vente définitives de Speed E-Log.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Conditions d'utilisation des services</h2>
        <p>
          Les présentes conditions générales régissent l'utilisation des services logistiques proposés par Speed E-Log.
        </p>
        
        <p className="text-muted-foreground mt-8">
          Contenu à compléter par le client.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
