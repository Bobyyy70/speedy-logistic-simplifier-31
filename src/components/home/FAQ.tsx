
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqItems = [
    {
      question: "Quels types de produits gérez-vous ?",
      answer:
        "Nous sommes spécialisés dans la gestion des produits non fragiles, non périssables, sans température dirigée et dont le poids (réel ou volumétrique) ne dépasse pas 30 kg. Nous sommes particulièrement adaptés aux produits à forte rotation ou exclusifs tels que les compléments alimentaires, cosmétiques, accessoires, etc."
    },
    {
      question: "Comment fonctionne la tarification des transports ?",
      answer:
        "Les tarifs de transport varient en fonction du poids des colis, de la destination et du service choisi. Nous avons négocié des tarifs préférentiels avec nos partenaires transporteurs que nous répercutons directement à nos clients. Contactez-nous pour obtenir une grille tarifaire adaptée à vos besoins."
    },
    {
      question: "Quel est l'engagement contractuel minimum ?",
      answer:
        "Nous proposons des contrats flexibles avec une période d'engagement minimale de 3 mois. Notre objectif est de construire des partenariats durables basés sur la confiance et la satisfaction mutuelle, pas sur des contraintes contractuelles."
    },
    {
      question: "Comment s'intègre votre solution avec ma boutique en ligne ?",
      answer:
        "Nous proposons des intégrations avec les principales plateformes e-commerce (Shopify, WooCommerce, Prestashop, etc.) via API. Notre équipe technique vous accompagne dans la mise en place de cette connexion pour assurer une transition fluide."
    },
    {
      question: "Comment puis-je suivre mes stocks et mes commandes ?",
      answer:
        "Vous disposez d'un accès à notre portail client qui vous permet de suivre en temps réel l'état de vos stocks et le statut de vos commandes. Des rapports sont également disponibles pour une vision plus globale de votre activité."
    },
    {
      question: "Comment gérez-vous les retours ?",
      answer:
        "Nous offrons un service complet de gestion des retours qui comprend la réception, l'inspection, le reconditionnement si nécessaire et la remise en stock ou la mise au rebut selon vos instructions. Chaque retour est documenté et visible dans votre espace client."
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-background" id="faq">
      <div className="section-container">
        <h2 className="section-title">Questions Fréquentes</h2>
        <p className="section-subtitle">
          Tout ce que vous devez savoir sur notre service de logistique e-commerce.
        </p>

        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
