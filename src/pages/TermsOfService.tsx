
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Conditions Générales d'Utilisation | Speed E-Log</title>
        <meta name="description" content="Conditions générales d'utilisation du site Speed E-Log - Services logistiques et transport." />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">CONDITIONS GÉNÉRALES D'UTILISATION</h1>

      <div className="prose max-w-none">
        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">À propos de Speed E-Log</h2>
          <p className="mb-4">
            Speed E-Log est une société spécialisée dans les services logistiques et de transport, basée en Bourgogne-Franche-Comté. Nous proposons des solutions complètes de gestion logistique pour les entreprises.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Nos coordonnées :</h3>
            <ul className="list-disc pl-5">
              <li><strong>Raison sociale :</strong> Speed E-Log SAS</li>
              <li><strong>Adresse :</strong> 37 Rue de Rémaucourt, 70170 Port-sur-Saône, France</li>
              <li><strong>Email :</strong> contact@speedelog.net</li>
              <li><strong>Téléphone :</strong> +33 6 35 58 40 04</li>
              <li><strong>RCS :</strong> Gray-Vesoul B 934 758 020</li>
              <li><strong>N° TVA :</strong> FR95934758020</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">1. Utilisation du Site</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">1.1. Acceptation des conditions</h3>
            <p>
              L'utilisation de ce site web implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser ce site.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">1.2. Accès au site</h3>
            <p>
              Ce site est accessible gratuitement à tout utilisateur disposant d'un accès internet. Speed E-Log se réserve le droit de suspendre, modifier ou interrompre l'accès au site pour des raisons de maintenance ou autres nécessités techniques.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">1.3. Usage autorisé</h3>
            <p>
              Ce site est destiné à présenter nos services logistiques et à permettre aux visiteurs de nous contacter. Toute utilisation à des fins commerciales non autorisées ou illégales est interdite.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">2. Nos Services</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">2.1. Services proposés</h3>
            <p className="mb-2">Speed E-Log propose les services suivants :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestion d'entrepôt et stockage</li>
              <li>Préparation et expédition de commandes</li>
              <li>Services de transport et livraison</li>
              <li>Gestion des retours</li>
              <li>Solutions logistiques personnalisées</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">2.2. Demande de devis</h3>
            <p>
              Les informations sur nos services sont présentées à titre indicatif. Pour obtenir un devis personnalisé, nous vous invitons à nous contacter via le formulaire disponible sur le site ou par téléphone.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibred mb-4 border-b pb-2">3. Protection des Données</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3.1. Collecte des données</h3>
            <p>
              Les données personnelles collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes et vous proposer nos services. Elles ne sont pas transmises à des tiers.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3.2. Vos droits</h3>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité concernant vos données personnelles. Pour exercer ces droits, contactez-nous à l'adresse : contact@speedelog.net
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">3.3. Cookies</h3>
            <p>
              Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. Vous pouvez paramétrer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient être limitées.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">4. Propriété Intellectuelle</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">4.1. Contenu du site</h3>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, design) est la propriété de Speed E-Log et est protégé par les droits d'auteur. Toute reproduction non autorisée est interdite.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">4.2. Usage autorisé</h3>
            <p>
              Vous pouvez consulter et imprimer le contenu de ce site pour votre usage personnel. Toute utilisation commerciale nécessite notre autorisation écrite préalable.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">5. Responsabilité</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.1. Informations du site</h3>
            <p>
              Speed E-Log s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité de toutes les informations présentes sur le site.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.2. Disponibilité du site</h3>
            <p>
              Nous nous efforçons d'assurer la disponibilité du site 24h/24, mais ne pouvons garantir un accès ininterrompu en raison des contraintes techniques inhérentes à internet.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">5.3. Liens externes</h3>
            <p>
              Notre site peut contenir des liens vers d'autres sites web. Nous ne sommes pas responsables du contenu ou des pratiques de ces sites tiers.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">6. Contact et Réclamations</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.1. Nous contacter</h3>
            <p className="mb-2">Pour toute question concernant ces conditions d'utilisation ou nos services :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Email :</strong> contact@speedelog.net</li>
              <li><strong>Téléphone :</strong> +33 6 35 58 40 04</li>
              <li><strong>Courrier :</strong> Speed E-Log, 37 Rue de Rémaucourt, 70170 Port-sur-Saône</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">6.2. Médiation</h3>
            <p>
              En cas de litige, nous privilégions une résolution amiable. Si nécessaire, vous pouvez recourir à la médiation de la consommation selon les modalités prévues par la loi.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-slate-50 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2">7. Dispositions Générales</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.1. Modification des conditions</h3>
            <p>
              Speed E-Log se réserve le droit de modifier ces conditions d'utilisation à tout moment. Les modifications prendront effet dès leur publication sur le site.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.2. Droit applicable</h3>
            <p>
              Ces conditions sont régies par le droit français. En cas de litige, les tribunaux français seront compétents.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">7.3. Divisibilité</h3>
            <p>
              Si une clause de ces conditions est déclarée invalide, les autres clauses restent applicables.
            </p>
          </div>
        </section>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border-2 border-blue-200 text-center">
          <p className="font-semibold text-lg mb-2">Conditions mises à jour le 1er janvier 2025</p>
          <div className="text-sm text-gray-600">
            <p><strong>Speed E-Log SAS</strong></p>
            <p>Votre partenaire logistique en Bourgogne-Franche-Comté</p>
            <p>contact@speedelog.net - +33 6 35 58 40 04</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
