/**
 * Pillar Pages Data
 * Comprehensive guides for SEO and authority building
 */

export interface PillarPage {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  targetKeyword: string;
  relatedKeywords: string[];
  readingTime: number;
  lastUpdated: string;
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
  toc: {
    id: string;
    title: string;
    children?: { id: string; title: string; }[];
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const pillarPagesData: PillarPage[] = [
  {
    slug: 'guide-externalisation-logistique',
    title: 'Guide Complet de l\'Externalisation Logistique en 2025',
    subtitle: 'Tout ce que vous devez savoir avant d\'externaliser votre logistique e-commerce',
    description: 'Guide exhaustif pour comprendre, évaluer et réussir l\'externalisation de votre logistique e-commerce. De l\'analyse de vos besoins au choix du bon prestataire 3PL.',
    targetKeyword: 'externalisation logistique',
    relatedKeywords: [
      'externalisation logistique e-commerce',
      '3PL France',
      'prestataire logistique',
      'outsourcing logistique',
      'fulfillment externalisation'
    ],
    readingTime: 25,
    lastUpdated: '2025-01-15',
    sections: [
      {
        id: 'introduction',
        title: 'Qu\'est-ce que l\'Externalisation Logistique ?',
        content: 'L\'externalisation logistique consiste à confier tout ou partie de vos opérations logistiques à un prestataire spécialisé (3PL - Third Party Logistics). Pour les e-commerçants, cela inclut généralement le stockage, la préparation des commandes, l\'emballage et l\'expédition...'
      },
      {
        id: 'pourquoi-externaliser',
        title: 'Pourquoi Externaliser sa Logistique ?',
        content: 'Les raisons d\'externaliser sont multiples : réduction des coûts (30-40% en moyenne), gain de temps, expertise professionnelle, scalabilité, focus sur votre cœur de métier...'
      },
      {
        id: 'quand-externaliser',
        title: 'Quand Externaliser ? Les Signaux à Surveiller',
        content: 'Plusieurs indicateurs montrent qu\'il est temps d\'externaliser : volume > 100 commandes/mois, taux d\'erreur élevé, équipe surchargée, coûts logistiques > 15% du CA, pics saisonniers difficiles à gérer...'
      },
      {
        id: 'choisir-3pl',
        title: 'Comment Choisir le Bon Prestataire 3PL ?',
        content: '10 critères essentiels : localisation, spécialisation sectorielle, technologies, tarification transparente, références clients, certifications, SLA garantis, intégrations, scalabilité, support client...'
      },
      {
        id: 'couts',
        title: 'Combien Coûte l\'Externalisation ?',
        content: 'Structure de coûts typique : stockage (€8-15/m³/mois), préparation (€3-6/commande), emballage (€1-3), expédition (variable), setup (€0-2000). Comparatif in-house vs externalisé...'
      },
      {
        id: 'migration',
        title: 'Comment Réussir sa Migration ?',
        content: 'Les 7 étapes clés : audit logistique, sélection prestataire, planification, inventaire complet, configuration système, transfert stocks, tests et go-live. Timeline typique : 2-6 semaines...'
      },
      {
        id: 'erreurs-eviter',
        title: '10 Erreurs à Éviter',
        content: 'Les pièges classiques : choisir sur le prix uniquement, négliger l\'intégration tech, sous-estimer l\'onboarding, pas de SLA clair, ignorer les pics saisonniers...'
      },
      {
        id: 'success-stories',
        title: 'Cas Clients : Ils ont Externalisé avec Succès',
        content: 'Découvrez 3 success stories détaillées d\'entreprises qui ont externalisé leur logistique avec Speed E-Log...'
      }
    ],
    toc: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'pourquoi-externaliser', title: 'Pourquoi Externaliser ?' },
      { id: 'quand-externaliser', title: 'Quand Externaliser ?' },
      { id: 'choisir-3pl', title: 'Choisir son 3PL' },
      { id: 'couts', title: 'Coûts d\'Externalisation' },
      { id: 'migration', title: 'Réussir sa Migration' },
      { id: 'erreurs-eviter', title: 'Erreurs à Éviter' },
      { id: 'success-stories', title: 'Success Stories' }
    ],
    cta: {
      title: 'Prêt à Externaliser votre Logistique ?',
      description: 'Obtenez un audit logistique gratuit et un devis personnalisé en 24h',
      buttonText: 'Demander mon audit gratuit',
      buttonLink: '/contact'
    }
  },
  {
    slug: 'guide-fulfillment-ecommerce',
    title: 'Guide Fulfillment E-commerce 2025 : Tout Savoir',
    subtitle: 'Le guide complet du fulfillment pour réussir votre e-commerce',
    description: 'Découvrez tout sur le fulfillment e-commerce : définition, processus, coûts, technologies, choix du prestataire et optimisation continue.',
    targetKeyword: 'fulfillment e-commerce',
    relatedKeywords: [
      'fulfillment France',
      'préparation commandes',
      'logistics ecommerce',
      'order fulfillment',
      'picking packing'
    ],
    readingTime: 20,
    lastUpdated: '2025-01-15',
    sections: [
      {
        id: 'definition',
        title: 'Qu\'est-ce que le Fulfillment E-commerce ?',
        content: 'Le fulfillment englobe l\'ensemble du processus post-vente : réception des stocks, stockage, picking (préparation), packing (emballage), expédition et gestion des retours...'
      },
      {
        id: 'processus',
        title: 'Le Processus Fulfillment en Détail',
        content: 'Les 6 étapes du fulfillment : 1) Réception marchandises, 2) Stockage optimisé, 3) Réception commande, 4) Picking, 5) Packing, 6) Expédition + tracking...'
      },
      {
        id: 'technologies',
        title: 'Technologies de Fulfillment en 2025',
        content: 'WMS (Warehouse Management System), picking assisté (voice/light), automatisation, IA pour prédictions, intégrations e-commerce, API temps réel...'
      },
      {
        id: 'couts-optimisation',
        title: 'Coûts et Optimisation',
        content: 'Structure de coûts, facteurs d\'optimisation, ROI attendu, comparaison in-house vs externalisé, calculateur de coûts...'
      }
    ],
    toc: [
      { id: 'definition', title: 'Définition Fulfillment' },
      { id: 'processus', title: 'Processus Détaillé' },
      { id: 'technologies', title: 'Technologies 2025' },
      { id: 'couts-optimisation', title: 'Coûts & Optimisation' }
    ],
    cta: {
      title: 'Optimisez votre Fulfillment',
      description: 'Testez notre service 30 jours sans engagement',
      buttonText: 'Démarrer mon test gratuit',
      buttonLink: '/contact'
    }
  },
  {
    slug: 'guide-supply-chain-b2b',
    title: 'Guide Supply Chain B2B : Optimisation Complète',
    subtitle: 'Maîtrisez votre chaîne logistique B2B pour maximiser votre efficacité',
    description: 'Guide approfondi de la supply chain B2B : EDI, gestion palettes, livraisons programmées, optimisation des flux et KPIs essentiels.',
    targetKeyword: 'supply chain B2B',
    relatedKeywords: [
      'logistique B2B',
      'EDI logistique',
      'gestion palettes',
      'optimisation supply chain',
      'distribution B2B'
    ],
    readingTime: 30,
    lastUpdated: '2025-01-15',
    sections: [
      {
        id: 'introduction-b2b',
        title: 'Spécificités de la Logistique B2B',
        content: 'Différences B2B vs B2C : volumes, conditionnements, contraintes clients, EDI, créneaux de livraison...'
      },
      {
        id: 'edi-integration',
        title: 'EDI : L\'Intégration Indispensable',
        content: 'Comprendre l\'EDI, formats standards, intégration avec clients GMS, gestion des erreurs, conformité...'
      },
      {
        id: 'gestion-palettes',
        title: 'Gestion et Optimisation des Palettes',
        content: 'Types de palettes, optimisation chargement, palettisation automatique, normes GMS...'
      },
      {
        id: 'kpis-b2b',
        title: 'KPIs Essentiels Supply Chain B2B',
        content: 'Taux de service, OTIF (On Time In Full), coût par palette, rotation stocks, pénalités évitées...'
      }
    ],
    toc: [
      { id: 'introduction-b2b', title: 'Logistique B2B' },
      { id: 'edi-integration', title: 'Intégration EDI' },
      { id: 'gestion-palettes', title: 'Gestion Palettes' },
      { id: 'kpis-b2b', title: 'KPIs Essentiels' }
    ],
    cta: {
      title: 'Optimisez votre Supply Chain B2B',
      description: 'Audit gratuit de vos flux logistiques B2B',
      buttonText: 'Demander mon audit gratuit',
      buttonLink: '/contact'
    }
  }
];

export const getPillarPageBySlug = (slug: string): PillarPage | undefined => {
  return pillarPagesData.find(pp => pp.slug === slug);
};
