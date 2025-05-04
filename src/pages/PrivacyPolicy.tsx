import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companyName = "Speed E-Log";
  const companyAddress = "37 Rue de Rémaucourt, 70170 Port-sur-Saône, France";
  const companyEmail = "contact@speedelog.fr";
  const companyPhone = "+33 6 35 58 40 04";
  const websiteUrl = "speedelog.fr"; // Assurez-vous que c'est la bonne URL
  const lastUpdateDate = "04/05/2025"; // Ajustez si nécessaire

  return (
    <div className="container mx-auto py-16 px-4">
      <Helmet>
        <title>Politique de Confidentialité | {companyName}</title>
        <meta
          name="description"
          content={`Politique de confidentialité de ${companyName}, détaillant la collecte, l'utilisation et la protection de vos données personnelles.`}
        />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>

      <div className="prose max-w-none">
        <p className="mb-4">
          <strong>Dernière mise à jour :</strong> {lastUpdateDate}
        </p>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            {companyName} (SAS), située au {companyAddress}, accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons les informations personnelles que vous nous fournissez lorsque vous utilisez notre site web {websiteUrl}, nos services, ou interagissez avec nous.
          </p>
          <p className="mb-4">
            Nous agissons en tant que **Responsable de traitement** pour les données personnelles de nos clients professionnels, prospects et visiteurs de notre site web.
          </p>
          <p className="mb-4">
            Nous agissons également en tant que **Sous-traitant** pour le compte de nos clients e-commerçants lorsque nous traitons les données personnelles de leurs clients finaux (destinataires des colis) dans le cadre de nos prestations logistiques (stockage, préparation de commandes, expédition, gestion des retours). Les conditions de ce traitement en tant que sous-traitant sont définies dans nos Conditions Générales de Vente (Article 14.2) et/ou dans des accords de traitement de données spécifiques conclus avec nos clients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Données personnelles collectées</h2>
          <p className="mb-4">Nous pouvons collecter différents types de données personnelles vous concernant :</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Données d'identification et de contact :</strong> nom, prénom, adresse email, numéro de téléphone, adresse postale professionnelle, fonction (pour nos clients B2B et prospects).</li>
            <li><strong>Données de connexion et d'utilisation :</strong> adresse IP, type de navigateur, pages visitées sur notre site, logs techniques, données collectées via les cookies (voir section Cookies).</li>
            <li><strong>Données contractuelles et financières :</strong> informations relatives aux services souscrits, historique des commandes, données de facturation (pour nos clients B2B).</li>
            <li><strong>Données relatives aux clients finaux (en tant que sous-traitant) :</strong> nom, prénom, adresse de livraison, adresse email, numéro de téléphone du destinataire, informations de suivi de colis, informations sur les retours. Ces données nous sont transmises par nos clients e-commerçants.</li>
          </ul>
          <p className="mb-4">Nous collectons ces données via notre site web (formulaires de contact, cookies), lors de nos échanges commerciaux (emails, téléphone), et via les systèmes d'information de nos clients (API, etc.) pour l'exécution des prestations.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Finalités et bases légales du traitement</h2>
          <p className="mb-4">Nous traitons vos données personnelles pour les finalités suivantes :</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Fourniture de nos services logistiques (Base légale : Exécution du contrat) :</strong> Gérer les comptes clients, traiter les commandes logistiques (réception, stockage, préparation, expédition), gérer les transports et la facturation.</li>
            <li><strong>Gestion de la relation client et prospect (Base légale : Intérêt légitime / Exécution du contrat) :</strong> Répondre à vos demandes de contact ou de devis, communiquer sur nos services, gérer les contrats.</li>
            <li><strong>Amélioration de notre site web et de nos services (Base légale : Intérêt légitime / Consentement pour certains cookies) :</strong> Analyser l'utilisation de notre site, réaliser des statistiques, assurer la sécurité informatique.</li>
            <li><strong>Respect des obligations légales et réglementaires (Base légale : Obligation légale) :</strong> Répondre aux exigences comptables, fiscales, ou à des demandes des autorités.</li>
            <li><strong>Traitement des données des clients finaux (en tant que Sous-traitant) :</strong> Exécuter les instructions de nos clients e-commerçants pour livrer les commandes et gérer les retours (Base légale : le traitement est nécessaire à l'exécution du contrat entre notre client et son client final ; nous agissons sur instruction de notre client, le Responsable de traitement).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Destinataires des données</h2>
          <p className="mb-4">Vos données personnelles peuvent être partagées avec :</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Le personnel habilité de {companyName}.</li>
            <li>Nos sous-traitants et partenaires techniques : hébergeur (Hostinger), fournisseurs de solutions logicielles (WMS, OMS, TMS, CRM - si applicable), et surtout les **transporteurs** (FedEx, Colissimo, Mondial Relay, Geodis, etc.) pour l'exécution des livraisons.</li>
            <li>Les autorités administratives ou judiciaires, si la loi l'exige.</li>
          </ul>
          <p className="mb-4">Nous nous assurons que nos sous-traitants présentent des garanties suffisantes en matière de protection des données personnelles, notamment lorsqu'ils agissent pour notre compte (ex: hébergeur) ou lorsque nous leur transmettons des données pour exécuter nos services (ex: transporteurs).</p>
           <p className="mb-4">Concernant les données des clients finaux que nous traitons en tant que sous-traitant, elles sont principalement partagées avec les transporteurs sélectionnés pour effectuer la livraison.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Transferts de données hors UE</h2>
          <p className="mb-4">
            Nous nous efforçons de traiter vos données au sein de l'Union Européenne. Notre hébergeur principal, Hostinger, est basé à Chypre (UE).
            Cependant, certaines prestations, notamment les expéditions internationales ou l'utilisation de certains outils tiers, pourraient impliquer des transferts de données hors de l'UE/EEE.
            Dans ce cas, nous nous assurons que ces transferts sont encadrés par des garanties appropriées (ex: clauses contractuelles types de la Commission Européenne, décision d'adéquation).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Durée de conservation</h2>
          <p className="mb-4">Nous conservons vos données personnelles pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont traitées :</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Données clients B2B :</strong> Pendant toute la durée de la relation contractuelle, augmentée des délais de prescription légale (généralement 5 ans après la fin du contrat à des fins comptables et de preuve).</li>
            <li><strong>Données prospects :</strong> 3 ans après le dernier contact de votre part.</li>
            <li><strong>Données de connexion/cookies :</strong> Maximum 13 mois pour la plupart des cookies.</li>
            <li><strong>Données des clients finaux (traitées en tant que sous-traitant) :</strong> Selon les instructions de nos clients (Responsables de traitement) et nos obligations contractuelles, et au maximum pour la durée nécessaire à l'exécution de la prestation et à la gestion des éventuelles réclamations ou retours, augmentée des délais de prescription applicables.</li>
          </ul>
        </section>

         <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Sécurité des données</h2>
          <p className="mb-4">
            {companyName} met en œuvre des mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté aux risques, incluant la protection contre la perte, l'accès non autorisé, la divulgation ou l'altération de vos données personnelles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">8. Vos droits</h2>
          <p className="mb-4">Conformément au RGPD et à la Loi Informatique et Libertés, vous disposez des droits suivants sur les données que nous traitons en tant que Responsable de traitement :</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement ("droit à l'oubli")</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition (notamment au traitement à des fins de prospection)</li>
            <li>Droit de retirer votre consentement à tout moment (pour les traitements basés sur le consentement, comme certains cookies)</li>
            <li>Droit de définir des directives relatives au sort de vos données après votre décès</li>
          </ul>
          <p className="mb-4">
            Pour exercer ces droits, vous pouvez nous contacter par email à {companyEmail} ou par courrier postal à {companyAddress}. Nous pourrons vous demander un justificatif d'identité si nécessaire.
          </p>
           <p className="mb-4">
            Si vous êtes un client final d'un de nos clients e-commerçants et que vous souhaitez exercer vos droits sur les données traitées pour votre livraison ou retour, nous vous invitons à contacter directement l'e-commerçant auprès duquel vous avez passé commande, qui est le Responsable de traitement de vos données. Nous coopérerons avec nos clients pour répondre à ces demandes conformément à nos obligations contractuelles.
          </p>
          <p className="mb-4">
            Vous avez également le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente en France, la Commission Nationale de l'Informatique et des Libertés (CNIL - www.cnil.fr).
          </p>
        </section>

         <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">9. Cookies</h2>
          <p className="mb-4">
            Notre site web {websiteUrl} utilise des cookies pour améliorer votre expérience de navigation, analyser le trafic et assurer le bon fonctionnement du site. Certains cookies nécessitent votre consentement préalable. Vous pouvez gérer vos préférences en matière de cookies via [Mécanisme de gestion des cookies à prévoir - ex: bandeau cookie lors de la première visite]. Pour plus d'informations, veuillez consulter notre [Lien vers une Politique Cookies dédiée - recommandé] ou contacter nous.
          </p>
           {/* Note: Il est fortement recommandé d'avoir une page dédiée à la politique de cookies détaillant chaque cookie utilisé. */}
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">10. Modifications de la politique</h2>
          <p className="mb-4">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette politique.
          </p>
        </section>

         <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">11. Contact</h2>
          <p className="mb-4">
            Si vous avez des questions concernant cette politique de confidentialité ou le traitement de vos données personnelles, veuillez nous contacter :
          </p>
          <ul className="list-none pl-0">
            <li>Par email : <a href={`mailto:${companyEmail}`}>{companyEmail}</a></li>
            <li>Par téléphone : {companyPhone}</li>
            <li>Par courrier : {companyName}, {companyAddress}</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
