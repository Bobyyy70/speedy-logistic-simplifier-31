
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const LegalMentions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Mentions Légales | Speed E-Log</title>
        <meta 
          name="description" 
          content="Mentions légales de Speed E-Log, votre partenaire logistique e-commerce."
        />
      </Helmet>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>
      
      <div className="prose max-w-none">
        <p className="text-muted-foreground">
          Cette page sera complétée avec les mentions légales définitives de Speed E-Log.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Informations sur l'entreprise</h2>
        <p>
          Speed E-Log<br />
          Port-sur-Saône<br />
          70170 Bourgogne-Franche-Comté<br />
          France
        </p>
        <p>
          Email : contact@speedelog.fr<br />
          Téléphone : +33 3 84 XX XX XX
        </p>
        
        <p className="text-muted-foreground mt-8">
          Contenu à compléter par le client.
        </p>
      </div>
    </div>
  );
};

export default LegalMentions;
