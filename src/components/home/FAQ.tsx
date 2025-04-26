
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [{
  question: "Quels types de produits gérez-vous ?",
  answer: "Nous sommes spécialisés dans les produits non fragiles, non périssables, sans température dirigée, et dont le poids ne dépasse pas 30 kg. Nous sommes particulièrement adaptés aux produits à forte rotation ou exclusifs comme les compléments alimentaires, cosmétiques, accessoires, textile, etc."
}, {
  question: "Comment sont calculés les frais de transport ?",
  answer: "Les frais de transport sont variables en fonction des transporteurs, des destinations, du poids et du volume des colis. Nous avons négocié des tarifs avantageux avec nos partenaires transporteurs que nous répercutons à nos clients. Un devis détaillé vous sera fourni en fonction de votre activité."
}, {
  question: "Quel est l'engagement contractuel minimum ?",
  answer: "Nous privilégions la flexibilité avec des engagements adaptés à vos besoins, généralement de 3 à 12 mois. Notre objectif est d'établir un partenariat durable plutôt que de vous lier par des contrats contraignants."
}, {
  question: "Quelles plateformes e-commerce sont compatibles avec votre système ?",
  answer: "Nous nous intégrons avec la plupart des principales plateformes e-commerce : Shopify, WooCommerce, Prestashop, Magento, ainsi que les marketplaces comme Amazon ou Cdiscount. Si vous utilisez une solution spécifique, nous pouvons généralement nous y adapter via notre API."
}, {
  question: "Comment s'effectue le suivi des stocks et des commandes ?",
  answer: "Vous bénéficiez d'un accès à notre portail client où vous pouvez suivre en temps réel vos niveaux de stock, l'état de vos commandes et générer des rapports. Notre système met automatiquement à jour votre plateforme e-commerce pour refléter les niveaux de stock actuels."
}, {
  question: "Comment gérez-vous les retours clients ?",
  answer: "Nous traitons les retours avec le même soin que les expéditions. Chaque retour est réceptionné, contrôlé et, selon vos instructions, remis en stock, mis de côté ou recyclé. Vous êtes notifié à chaque étape du processus via notre plateforme."
}];

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Les réponses aux questions que vous vous posez probablement sur nos services logistiques.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
