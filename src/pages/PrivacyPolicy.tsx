
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Politique de Confidentialité | Speed E-Log</title>
        <meta 
          name="description" 
          content="Politique de confidentialité et protection des données de Speed E-Log."
        />
      </Helmet>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <div className="prose max-w-none">
        <p className="text-muted-foreground">
          Cette page sera complétée avec la politique de confidentialité définitive de Speed E-Log.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Protection de vos données</h2>
        <p>
          Chez Speed E-Log, nous prenons la protection de vos données personnelles très au sérieux.
        </p>
        
        <p className="text-muted-foreground mt-8">
          Contenu à compléter par le client.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
