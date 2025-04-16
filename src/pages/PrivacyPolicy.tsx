import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-100/40 dark:from-slate-900 dark:via-green-950/20 dark:to-blue-950/30">
      <div className="container mx-auto py-16 px-4">
        <Helmet>
          <title>Politique de Confidentialité | Speed E-Log</title>
          <meta 
            name="description" 
            content="Politique de confidentialité et protection des données de Speed E-Log, votre partenaire logistique pour le e-commerce."
          />
        </Helmet>
        
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-800/50 p-8 rounded-lg shadow-sm border border-green-100/70 dark:border-green-900/30">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <p className="text-lg">
                Chez Speed E-Log, nous prenons très au sérieux la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière 
                dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Collecte des données personnelles</h2>
              <p className="mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Informations d'identification (nom, prénom, raison sociale)</li>
                <li>Coordonnées (adresse email, numéro de téléphone, adresse postale)</li>
                <li>Informations professionnelles (poste, entreprise)</li>
                <li>Données de connexion et de navigation sur notre site</li>
                <li>Informations relatives aux commandes et à la logistique (pour les clients)</li>
              </ul>
              <p className="mb-4">
                Ces informations sont collectées lorsque vous :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Remplissez un formulaire de contact</li>
                <li>Demandez un devis</li>
                <li>Créez un compte client</li>
                <li>Utilisez nos services logistiques</li>
                <li>Naviguez sur notre site (via cookies)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Utilisation des données personnelles</h2>
              <p className="mb-4">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Vous fournir les services logistiques demandés</li>
                <li>Gérer votre compte client</li>
                <li>Répondre à vos demandes et questions</li>
                <li>Vous présenter des devis personnalisés</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Vous envoyer des communications relatives à nos services (avec votre consentement)</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Base légale du traitement</h2>
              <p className="mb-4">
                Le traitement de vos données personnelles est justifié par :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>L'exécution d'un contrat lorsque vous utilisez nos services</li>
                <li>Votre consentement pour certains traitements spécifiques (comme l'envoi de newsletters)</li>
                <li>Notre intérêt légitime à développer et améliorer nos services</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Conservation des données</h2>
              <p className="mb-4">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, 
                en conformité avec la législation applicable.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Données clients : pendant la durée de la relation commerciale plus 5 ans à des fins de preuve</li>
                <li>Données prospects : 3 ans à compter du dernier contact</li>
                <li>Données de connexion : 1 an</li>
                <li>Données de facturation : 10 ans (obligation légale)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Partage des données personnelles</h2>
              <p className="mb-4">
                Nous pouvons partager vos données personnelles avec :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Nos prestataires de services (transporteurs, services informatiques, hébergement)</li>
                <li>Nos partenaires commerciaux lorsque cela est nécessaire à l'exécution de nos services</li>
                <li>Les autorités compétentes, lorsque requis par la loi</li>
              </ul>
              <p className="mb-4">
                Nous nous assurons que ces tiers respectent les mêmes standards de protection des données que nous.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute 
                perte, accès non autorisé, divulgation, altération ou destruction.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Vos droits</h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit de retirer votre consentement à tout moment</li>
                <li>Droit d'introduire une réclamation auprès d'une autorité de contrôle</li>
              </ul>
              <p className="mb-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : dpo@speedelog.fr
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Cookies</h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment désactiver ces cookies 
                dans les paramètres de votre navigateur, mais cela pourrait affecter certaines fonctionnalités du site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Modifications de la politique de confidentialité</h2>
              <p className="mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication 
                sur notre site web. Nous vous encourageons à consulter régulièrement cette page pour rester informé des mises à jour.
              </p>
              <p className="mb-4">
                Dernière mise à jour : 07/04/2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
