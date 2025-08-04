import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SuiviColis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Helmet>
        <title>Suivi de Colis - Speed E Log</title>
        <meta 
          name="description" 
          content="Suivez vos colis en temps réel avec Speed E Log. Entrez votre numéro de suivi pour connaître le statut de votre livraison." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/suivi-colis`} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Suivi de Colis
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Suivez l'état de vos expéditions en temps réel. Entrez votre numéro de suivi 
            pour connaître la position exacte de votre colis.
          </p>
        </div>

        {/* Tracking Interface */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg border p-6">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Interface de Suivi
            </h2>
            
            <div className="relative w-full h-[450px] border rounded-lg overflow-hidden">
              <iframe 
                src="https://tracking.eu-central-1-0.sendcloud.sc/" 
                width="100%" 
                height="450px" 
                frameBorder="0" 
                style={{ border: 0 }}
                title="Interface de suivi de colis Speed E Log"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Comment suivre votre colis ?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Entrez votre numéro de suivi dans le champ prévu</li>
                <li>• Ajoutez votre code postal si demandé</li>
                <li>• Consultez le statut en temps réel</li>
                <li>• Recevez les mises à jour automatiques</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Besoin d'aide ?
              </h3>
              <p className="text-muted-foreground mb-4">
                Si vous rencontrez des difficultés pour suivre votre colis, 
                notre équipe est là pour vous aider.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuiviColis;