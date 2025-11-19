/**
 * Services Data - Complete service information
 * Based on specifications
 */

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing?: {
    starter?: string;
    pro?: string;
    enterprise?: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
  relatedServices: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'fulfillment-ecommerce': {
    slug: 'fulfillment-ecommerce',
    title: 'Fulfillment E-commerce',
    subtitle: 'Solution complète de préparation et expédition de vos commandes',
    description: 'Externalisez votre logistique e-commerce et concentrez-vous sur votre croissance. Notre service de fulfillment prend en charge l\'intégralité du processus : réception, stockage, préparation, emballage et expédition de vos commandes avec un taux de précision de 99.7%.',
    heroImage: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    benefits: [
      'Préparation des commandes en 24h maximum',
      'Intégration native avec Shopify, WooCommerce, PrestaShop',
      'Emballage professionnel et personnalisable',
      'Suivi en temps réel de vos stocks et commandes',
      'Réduction des coûts logistiques de 30-40%',
      'Évolutivité illimitée pour vos pics d\'activité'
    ],
    features: [
      {
        title: 'Intégration Multi-Plateformes',
        description: 'Connectez votre boutique en quelques clics. Compatible avec Shopify, WooCommerce, PrestaShop, Magento et marketplaces (Amazon, Cdiscount).',
        icon: 'plug'
      },
      {
        title: 'Préparation Express',
        description: 'Commandes préparées en moins de 24h. Service same-day disponible pour vos clients premium.',
        icon: 'zap'
      },
      {
        title: 'Emballage Premium',
        description: 'Emballage soigné avec possibilité de personnalisation (stickers, cartes, packaging custom).',
        icon: 'package'
      },
      {
        title: 'Dashboard Temps Réel',
        description: 'Suivez vos stocks, commandes et performances en temps réel depuis notre plateforme intuitive.',
        icon: 'monitor'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Réception de vos produits',
        description: 'Envoyez vos stocks dans notre entrepôt. Réception et contrôle qualité en 48h.'
      },
      {
        step: 2,
        title: 'Stockage sécurisé',
        description: 'Vos produits sont stockés dans des conditions optimales avec suivi en temps réel.'
      },
      {
        step: 3,
        title: 'Synchronisation automatique',
        description: 'Vos commandes sont automatiquement synchronisées depuis vos plateformes de vente.'
      },
      {
        step: 4,
        title: 'Préparation & Emballage',
        description: 'Picking et emballage professionnels avec contrôle qualité systématique.'
      },
      {
        step: 5,
        title: 'Expédition & Tracking',
        description: 'Expédition via le meilleur transporteur. Numéro de suivi envoyé automatiquement.'
      }
    ],
    cta: {
      primary: 'Obtenir un devis gratuit',
      secondary: 'Planifier une visite d\'entrepôt'
    },
    relatedServices: ['warehouse-management', 'transport-distribution', 'returns-management']
  },

  'warehouse-management': {
    slug: 'warehouse-management',
    title: 'Warehouse Management',
    subtitle: 'Gestion professionnelle de votre entrepôt avec WMS de pointe',
    description: 'Optimisez la gestion de votre entrepôt avec notre système WMS (Warehouse Management System) nouvelle génération. Inventaire en temps réel, optimisation des emplacements et processus automatisés pour maximiser votre efficacité.',
    heroImage: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    benefits: [
      'Visibilité temps réel sur 100% de vos stocks',
      'Optimisation automatique des emplacements',
      'Inventaires tournants sans interruption d\'activité',
      'Alertes de réapprovisionnement intelligentes',
      'Traçabilité complète (numéros de lot, dates de péremption)',
      'Réduction des erreurs de stock de 95%'
    ],
    features: [
      {
        title: 'WMS Intelligent',
        description: 'Système de gestion d\'entrepôt de dernière génération avec IA pour optimiser les flux.',
        icon: 'brain'
      },
      {
        title: 'Inventaire Dynamique',
        description: 'Inventaires en temps réel sans interruption d\'activité. Précision à 99.9%.',
        icon: 'scan'
      },
      {
        title: 'Multi-Canaux',
        description: 'Gérez tous vos canaux de vente depuis une seule plateforme centralisée.',
        icon: 'layers'
      },
      {
        title: 'Reporting Avancé',
        description: 'Analytics détaillés : rotation des stocks, performance par SKU, prévisions de demande.',
        icon: 'chart'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Audit de vos besoins',
        description: 'Analyse détaillée de vos flux et contraintes logistiques.'
      },
      {
        step: 2,
        title: 'Configuration WMS',
        description: 'Paramétrage personnalisé de notre système selon votre catalogue.'
      },
      {
        step: 3,
        title: 'Migration des stocks',
        description: 'Transfert sécurisé de vos stocks avec inventaire complet.'
      },
      {
        step: 4,
        title: 'Formation équipe',
        description: 'Formation de vos équipes à l\'utilisation de la plateforme.'
      },
      {
        step: 5,
        title: 'Go-live & Support',
        description: 'Démarrage opérationnel avec support dédié 6j/7.'
      }
    ],
    cta: {
      primary: 'Demander une démo WMS',
      secondary: 'Télécharger la brochure'
    },
    relatedServices: ['fulfillment-ecommerce', 'b2b-logistics', 'returns-management']
  },

  'transport-distribution': {
    slug: 'transport-distribution',
    title: 'Transport & Distribution',
    subtitle: 'Réseau multi-transporteurs avec tarifs négociés',
    description: 'Bénéficiez de nos tarifs négociés avec les meilleurs transporteurs nationaux et internationaux. Livraison France et International avec les meilleurs délais et prix du marché.',
    heroImage: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    benefits: [
      'Tarifs négociés -30% vs tarifs publics',
      'Choix automatique du meilleur transporteur',
      'Livraison express disponible (24h)',
      'Suivi de bout en bout avec notifications',
      'Assurance incluse sur tous les envois',
      'Support litiges transporteur'
    ],
    features: [
      {
        title: 'Multi-Transporteurs',
        description: 'Partenariats avec Colissimo, Chronopost, DPD, UPS, FedEx, et 15+ transporteurs.',
        icon: 'truck'
      },
      {
        title: 'Optimisation Automatique',
        description: 'Algorithme de sélection du meilleur transporteur selon délai, prix et destination.',
        icon: 'target'
      },
      {
        title: 'Livraison Internationale',
        description: 'Expédition vers 200+ pays avec dédouanement facilité.',
        icon: 'globe'
      },
      {
        title: 'Track & Trace',
        description: 'Suivi temps réel avec notifications SMS/email à chaque étape.',
        icon: 'map-pin'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Réception commande',
        description: 'Votre commande arrive automatiquement dans notre système.'
      },
      {
        step: 2,
        title: 'Sélection transporteur',
        description: 'Notre algorithme choisit le meilleur transporteur pour cette livraison.'
      },
      {
        step: 3,
        title: 'Préparation',
        description: 'Emballage sécurisé et génération de l\'étiquette transport.'
      },
      {
        step: 4,
        title: 'Enlèvement',
        description: 'Le transporteur enlève le colis dans notre entrepôt.'
      },
      {
        step: 5,
        title: 'Livraison & Tracking',
        description: 'Suivi en temps réel jusqu\'à la livraison finale.'
      }
    ],
    cta: {
      primary: 'Calculer mes économies',
      secondary: 'Voir les transporteurs'
    },
    relatedServices: ['fulfillment-ecommerce', 'fba-prep', 'returns-management']
  },

  'fba-prep': {
    slug: 'fba-prep',
    title: 'FBA Prep Services',
    subtitle: 'Préparation professionnelle pour Amazon FBA',
    description: 'Service complet de préparation de vos produits pour Amazon FBA. Respectez toutes les exigences Amazon et évitez les refus d\'entrée en entrepôt.',
    heroImage: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    benefits: [
      'Conformité 100% aux exigences Amazon',
      'Étiquetage FNSKU professionnel',
      'Emballage poly-bag si nécessaire',
      'Expédition groupée vers FBA (réduction -40%)',
      'Inspection qualité avant envoi',
      'Gestion des retours FBA'
    ],
    features: [
      {
        title: 'Conformité Amazon',
        description: 'Respect scrupuleux de toutes les exigences Amazon pour éviter les refus.',
        icon: 'check-circle'
      },
      {
        title: 'Étiquetage FNSKU',
        description: 'Impression et application d\'étiquettes FNSKU de qualité professionnelle.',
        icon: 'tag'
      },
      {
        title: 'Poly-Bagging',
        description: 'Emballage poly-bag pour les produits nécessitant une protection supplémentaire.',
        icon: 'shield'
      },
      {
        title: 'Expédition Optimisée',
        description: 'Regroupement intelligent des envois FBA pour réduire vos coûts de 40%.',
        icon: 'package-check'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Réception produits',
        description: 'Nous recevons vos produits directement de votre fournisseur.'
      },
      {
        step: 2,
        title: 'Inspection qualité',
        description: 'Contrôle qualité complet de chaque unité.'
      },
      {
        step: 3,
        title: 'Préparation FBA',
        description: 'Étiquetage FNSKU, poly-bagging si nécessaire, mise en carton.'
      },
      {
        step: 4,
        title: 'Création plan d\'envoi',
        description: 'Génération du plan d\'envoi Amazon avec optimisation des palettes.'
      },
      {
        step: 5,
        title: 'Expédition vers FBA',
        description: 'Envoi groupé vers les centres Amazon avec tracking.'
      }
    ],
    cta: {
      primary: 'Obtenir un devis FBA',
      secondary: 'Guide FBA gratuit'
    },
    relatedServices: ['fulfillment-ecommerce', 'custom-packaging', 'transport-distribution']
  },

  'custom-packaging': {
    slug: 'custom-packaging',
    title: 'Custom Packaging',
    subtitle: 'Emballage personnalisé pour renforcer votre marque',
    description: 'Démarquez-vous avec un packaging unique qui reflète votre identité de marque. Du carton personnalisé aux inserts marketing, créez une expérience unboxing mémorable.',
    heroImage: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    benefits: [
      'Design packaging sur mesure',
      'Cartons imprimés à vos couleurs',
      'Inserts marketing (cartes, flyers, échantillons)',
      'Paper de soie, stickers personnalisés',
      'Quantités minimales flexibles (dès 500 unités)',
      'Augmentation de 35% du taux de réachat'
    ],
    features: [
      {
        title: 'Design Sur Mesure',
        description: 'Notre équipe design crée votre packaging unique reflétant votre identité.',
        icon: 'palette'
      },
      {
        title: 'Impression Haute Qualité',
        description: 'Impression offset ou numérique selon vos besoins et quantités.',
        icon: 'printer'
      },
      {
        title: 'Inserts Marketing',
        description: 'Cartes de remerciement, codes promo, échantillons pour fidéliser.',
        icon: 'gift'
      },
      {
        title: 'Stock & Fulfillment',
        description: 'Nous stockons votre packaging et l\'utilisons automatiquement.',
        icon: 'box'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Brief créatif',
        description: 'Vous nous partagez votre vision et contraintes.'
      },
      {
        step: 2,
        title: 'Design & Maquettes',
        description: 'Notre équipe crée plusieurs propositions de packaging.'
      },
      {
        step: 3,
        title: 'Validation & Production',
        description: 'Vous validez et nous lançons la production avec nos partenaires.'
      },
      {
        step: 4,
        title: 'Stockage',
        description: 'Livraison dans notre entrepôt et mise en stock.'
      },
      {
        step: 5,
        title: 'Utilisation automatique',
        description: 'Votre packaging personnalisé est utilisé pour chaque commande.'
      }
    ],
    cta: {
      primary: 'Créer mon packaging',
      secondary: 'Voir des exemples'
    },
    relatedServices: ['fulfillment-ecommerce', 'fba-prep', 'returns-management']
  },

  'returns-management': {
    slug: 'returns-management',
    title: 'Returns Management',
    subtitle: 'Gestion complète et professionnelle de vos retours',
    description: 'Transformez la gestion des retours en avantage concurrentiel. Service complet de traitement des retours clients avec remise en stock rapide et reporting détaillé.',
    heroImage: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    benefits: [
      'Traitement des retours en 48h maximum',
      'Inspection qualité systématique',
      'Remise en stock automatique des produits OK',
      'Recyclage ou destruction des produits HS',
      'Reporting détaillé par motif de retour',
      'Réduction du taux de retour de 15% via insights'
    ],
    features: [
      {
        title: 'Processus Rapide',
        description: 'Retours traités en 48h avec remise en stock immédiate si produit OK.',
        icon: 'refresh-cw'
      },
      {
        title: 'Inspection Qualité',
        description: 'Contrôle systématique de l\'état du produit retourné.',
        icon: 'search'
      },
      {
        title: 'Analytics Retours',
        description: 'Dashboard détaillé : motifs, taux, produits les plus retournés.',
        icon: 'chart-line'
      },
      {
        title: 'Gestion Intelligente',
        description: 'Décisions automatisées ou manuelles selon vos règles (remise en stock, destruction, recyclage).',
        icon: 'settings'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Réception retour',
        description: 'Le client renvoie le produit avec le bordereau de retour.'
      },
      {
        step: 2,
        title: 'Enregistrement',
        description: 'Nous scannons le retour et l\'associons à la commande initiale.'
      },
      {
        step: 3,
        title: 'Inspection',
        description: 'Contrôle qualité : produit neuf, occasion, défectueux ou détruit.'
      },
      {
        step: 4,
        title: 'Décision',
        description: 'Selon vos règles : remise en stock, recyclage ou destruction.'
      },
      {
        step: 5,
        title: 'Reporting',
        description: 'Mise à jour de vos stocks et reporting motifs de retour.'
      }
    ],
    cta: {
      primary: 'Optimiser mes retours',
      secondary: 'Voir le processus détaillé'
    },
    relatedServices: ['fulfillment-ecommerce', 'warehouse-management', 'custom-packaging']
  },

  'b2b-logistics': {
    slug: 'b2b-logistics',
    title: 'B2B Logistics',
    subtitle: 'Solutions logistiques pour vos flux B2B et distribution',
    description: 'Logistique adaptée aux contraintes B2B : palettes complètes, EDI, livraisons programmées, conditionnements spécifiques. Gérez vos flux B2C et B2B depuis une seule plateforme.',
    heroImage: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    benefits: [
      'Gestion palettes complètes et demi-palettes',
      'Intégration EDI avec vos clients B2B',
      'Livraisons programmées et rendez-vous',
      'Conditionnements sur mesure (cartons maîtres, displays)',
      'Co-packing et kitting',
      'Facturation différenciée B2B/B2C'
    ],
    features: [
      {
        title: 'EDI & Intégrations',
        description: 'Connexion EDI avec vos clients B2B (Leclerc, Carrefour, etc.).',
        icon: 'cable'
      },
      {
        title: 'Gestion Palettes',
        description: 'Préparation de palettes complètes optimisées pour le transport.',
        icon: 'package-2'
      },
      {
        title: 'Co-Packing & Kitting',
        description: 'Assemblage de kits, displays POS, conditionnements spécifiques.',
        icon: 'layers-2'
      },
      {
        title: 'Livraisons Programmées',
        description: 'Respect des créneaux de livraison de vos clients B2B.',
        icon: 'calendar-clock'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Analyse des flux',
        description: 'Étude de vos contraintes B2B et clients.'
      },
      {
        step: 2,
        title: 'Configuration EDI',
        description: 'Mise en place des connexions EDI avec vos clients.'
      },
      {
        step: 3,
        title: 'Paramétrage règles',
        description: 'Configuration des règles de préparation par client/canal.'
      },
      {
        step: 4,
        title: 'Tests & Go-Live',
        description: 'Tests complets puis démarrage opérationnel.'
      },
      {
        step: 5,
        title: 'Optimisation continue',
        description: 'Suivi KPIs et optimisation des process.'
      }
    ],
    cta: {
      primary: 'Parler à un expert B2B',
      secondary: 'Cas clients B2B'
    },
    relatedServices: ['warehouse-management', 'transport-distribution', 'custom-packaging']
  }
};

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return servicesData[slug];
};

// Get all services
export const getAllServices = (): ServiceDetail[] => {
  return Object.values(servicesData);
};
