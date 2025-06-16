import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
// Si vous utilisez react-router-dom, décommentez et utilisez Link ci-dessous
// import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companyName = "Speed E-Log";
  const companyAddress = "37 Rue de Rémaucourt, 70170 Port-sur-Saône, France"; // Utilisé pour identifier le responsable de traitement
  const websiteUrl = "speedelog.net"; // Assurez-vous que c'est la bonne URL
  const contactPageUrl = "/contact"; // !! Adaptez si l'URL de votre page contact est différente !!
  const lastUpdateDate = "04/05/2025"; // Date du jour

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Politique de Confidentialité | {companyName}</title>
        <meta
          name="description"
          content={`Politique de confidentialité et protection des données de ${companyName}, votre partenaire logistique pour le e-commerce.`}
        />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>

      <div className="prose max-w-none">
        {/* Introduction clarifiée */}
        <section className="mb-8">
           <p className="text-lg">
             Chez {companyName} (SAS), située au {companyAddress}, nous prenons très au sérieux la protection de vos données personnelles. Cette politique vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web {websiteUrl} et nos services.
           </p>
           <p className="mb-4">
            Nous agissons en tant que **Responsable de traitement** pour les données personnelles de nos clients professionnels (vous), prospects et visiteurs de notre site web.
          </p>
          <p className="mb-4">
            Nous agissons également en tant que **Sous-traitant** pour votre compte lorsque nous traitons les données personnelles de vos clients finaux (destinataires des colis) dans le cadre de nos prestations logistiques (stockage, préparation, expédition, retours). Les conditions de ce traitement sont définies dans nos Conditions Générales de Vente (Article 14.2) et/ou nos accords spécifiques.
          </p>
        </section>

        {/* Collecte des données précisée */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Collecte des données personnelles</h2>
          <p className="mb-4">
            Nous collectons différentes catégories de données :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>En tant que Responsable de traitement (vous concernant) :</strong>
                <ul className="list-disc pl-6 mt-2">
                    <li>Informations d'identification (nom, prénom, raison sociale)</li>
                    <li>Coordonnées (adresse email, numéro de téléphone, adresse postale)</li>
                    <li>Informations professionnelles (poste, entreprise)</li>
                    <li>Données de connexion et de navigation sur notre site ({websiteUrl})</li>
                    <li>Informations relatives à nos échanges, devis, contrats et facturation</li>
                </ul>
            </li>
             <li className="mt-2"><strong>En tant que Sous-traitant (concernant vos clients finaux) :</strong>
                 <ul className="list-disc pl-6 mt-2">
                    <li>Coordonnées du destinataire (nom, prénom, adresse postale, email, téléphone)</li>
                    <li>Informations nécessaires à la livraison et au suivi des colis</li>
                    <li>Informations relatives aux retours éventuels</li>
                 </ul>
                 Ces données nous sont transmises par vous via nos systèmes connectés (API, OMS...).
             </li>
          </ul>
          <p className="mb-4">
            Ces informations sont collectées (pour les données dont nous sommes Responsable de traitement) lorsque vous :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Remplissez un formulaire sur notre site</li>
            <li>Demandez un devis ou échangez avec nous</li>
            <li>Créez ou utilisez un compte client sur nos plateformes</li>
            <li>Naviguez sur notre site (via cookies notamment)</li>
          </ul>
        </section>

        {/* Utilisation des données précisée */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Utilisation des données personnelles</h2>
          <p className="mb-4">
            Nous utilisons ces données pour :
          </p>
          <ul className="list-disc pl-6 mb-4">
             <li><strong>Vous fournir nos services logistiques (en tant que sous-traitant) :</strong> Gérer les stocks, préparer et expédier les commandes de vos clients finaux, gérer les retours, conformément à vos instructions et notre contrat.</li>
            <li><strong>Gérer notre relation commerciale avec vous (en tant que responsable de traitement) :</strong> Gérer votre compte client, répondre à vos demandes, établir des devis, assurer la facturation.</li>
            <li><strong>Améliorer nos services et notre site web :</strong> Analyser l'utilisation, réaliser des statistiques.</li>
            <li><strong>Communiquer avec vous :</strong> Vous envoyer des informations relatives à nos services (mises à jour, maintenance) ou des communications commerciales (si vous y avez consenti).</li>
            <li><strong>Respecter nos obligations légales et réglementaires :</strong> Obligations comptables, fiscales, etc.</li>
          </ul>
        </section>

        {/* Base légale complétée */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Base légale du traitement</h2>
          <p className="mb-4">
            Le traitement de vos données est justifié par :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>L'**exécution du contrat** qui nous lie (pour la gestion de votre compte et des prestations logistiques convenues).</li>
            <li>Le **respect de nos obligations légales** (notamment pour la facturation et la comptabilité).</li>
            <li>Notre **intérêt légitime** (pour répondre à vos demandes de prospect, améliorer nos services, assurer la sécurité).</li>
            <li>Votre **consentement** (pour les cookies non essentiels, l'envoi de newsletters ou d'offres commerciales).</li>
             <li>Concernant les données de vos clients finaux (traitées en tant que sous-traitant), la base légale est l'**exécution du contrat entre vous et votre client final**, et nous agissons sur **vos instructions documentées**.</li>
          </ul>
        </section>

        {/* Conservation des données mise à jour */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Conservation des données</h2>
          <p className="mb-4">
            Nous conservons les données uniquement le temps nécessaire aux finalités :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>**Données clients (vous) :** Pendant la durée de la relation commerciale + 5 ans après la fin du contrat (prescription légale, preuve).</li>
            <li>**Données prospects :** 3 ans après le dernier contact pertinent de votre part.</li>
            <li>**Données de connexion (logs serveur) :** Généralement 1 an maximum (à vérifier selon la configuration serveur).</li>
             <li>**Données de cookies/traceurs :** Maximum 13 mois après le dépôt initial, suite à votre consentement.</li>
            <li>**Données de facturation :** 10 ans à compter de la clôture de l'exercice comptable (obligation légale).</li>
            <li>**Données de vos clients finaux (traitées en tant que sous-traitant) :** Selon vos instructions et pour la durée nécessaire à l'exécution des prestations et à la gestion des litiges éventuels (en respectant les délais de prescription).</li>
          </ul>
        </section>

        {/* Partage des données précisé */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Partage des données personnelles</h2>
          <p className="mb-4">
            Nous pouvons partager des données avec :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nos prestataires techniques (hébergement - Hostinger, maintenance, fournisseurs de logiciels WMS/OMS/TMS si externalisés).</li>
             <li>Les **transporteurs** (FedEx, Colissimo, Mondial Relay, etc.) pour l'exécution des livraisons de vos clients finaux.</li>
            <li>Les autorités compétentes, sur demande légale.</li>
          </ul>
          <p className="mb-4">
             Nous nous assurons que nos prestataires et les transporteurs offrent des garanties appropriées en matière de protection des données. Concernant les données de vos clients finaux, le partage avec les transporteurs est nécessaire à l'exécution du service que vous nous confiez.
          </p>
        </section>

        {/* Sécurité */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Sécurité des données</h2>
          <p className="mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre toute
            perte, accès non autorisé, divulgation, altération ou destruction.
          </p>
        </section>

        {/* Vos droits mis à jour (contact et distinction client/client final) */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Vos droits</h2>
          <p className="mb-4">
            Concernant les données que nous traitons sur vous en tant que Responsable de Traitement, vous disposez des droits suivants (accès, rectification, effacement, limitation, portabilité, opposition, retrait du consentement, directives post-mortem) conformément au RGPD.
          </p>
          {/* <ul className="list-disc pl-6 mb-4">
             Copier la liste détaillée des droits si souhaité
          </ul> */}
          <p className="mb-4">
             Pour exercer ces droits, veuillez utiliser les options disponibles sur notre <a href={contactPageUrl}>page de contact</a>.
             {/* Alternative react-router-dom:
             Pour exercer ces droits, veuillez utiliser les options disponibles sur notre <Link to={contactPageUrl} className="text-blue-600 hover:underline">page de contact</Link>.
             */}
             Un justificatif d'identité pourra être demandé.
          </p>
          <p className="mb-4">
            Si vous êtes un **client final** d'un de nos clients e-commerçants, pour exercer vos droits sur les données utilisées pour votre livraison/retour, veuillez contacter directement l'e-commerçant concerné (le Responsable de traitement).
          </p>
           <p className="mb-4">
             Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés - www.cnil.fr).
           </p>
        </section>

        {/* Cookies mis à jour */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Cookies et autres traceurs</h2>
           <p className="mb-4">
            Notre site web {websiteUrl} utilise des cookies et autres traceurs pour améliorer votre expérience, analyser le trafic et assurer son bon fonctionnement. Conformément à la réglementation, certains traceurs nécessitent votre consentement préalable.
          </p>
           <p className="mb-4">
             Vous pouvez à tout moment gérer vos préférences (accepter, refuser, paramétrer) via le module de gestion de consentement accessible sur notre site [Préciser où : bandeau, lien pied de page...].
           </p>
           <p className="mb-4">
             Pour une information détaillée, veuillez consulter notre Politique de Cookies dédiée [Lien vers la page Politique Cookies - à créer].
           </p>
        </section>

        {/* Modifications */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Modifications de la politique de confidentialité</h2>
          <p className="mb-4">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur notre site web. Nous vous encourageons à consulter régulièrement cette page.
          </p>
        </section>

        {/* Contact mis à jour */}
         <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">
            Pour toute question relative à cette politique ou au traitement de vos données par {companyName}, veuillez utiliser les moyens proposés sur notre <a href={contactPageUrl}>page de contact</a>.
             {/* Alternative react-router-dom:
             [...] sur notre <Link to={contactPageUrl} className="text-blue-600 hover:underline">page de contact</Link>.
             */}
          </p>
           <p className="mb-4">
            <strong>Dernière mise à jour :</strong> {lastUpdateDate}
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;