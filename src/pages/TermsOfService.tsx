
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4 bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-200/30 dark:from-slate-900 dark:via-slate-900/80 dark:to-blue-950/50">
      <Helmet>
        <title>Conditions Générales de Vente | Speed E-Log</title>
        <meta 
          name="description" 
          content="Conditions générales de vente des services logistiques de Speed E-Log."
        />
      </Helmet>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Conditions Générales de Vente</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="text-muted-foreground">
            Cette page sera complétée avec les conditions générales de vente définitives de Speed E-Log.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Conditions d'utilisation des services</h2>
          <p className="mb-4">
            Les présentes conditions générales régissent l'utilisation des services logistiques proposés par Speed E-Log.
          </p>
        </section>
        
        <section>
          <p className="text-muted-foreground mt-8">
            Contenu à compléter par le client.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
