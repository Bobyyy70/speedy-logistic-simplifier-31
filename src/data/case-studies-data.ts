/**
 * Case Studies Data
 * Real client success stories for social proof and lead generation
 */

export interface CaseStudy {
  slug: string;
  client: {
    name: string;
    industry: string;
    location: string;
    logo?: string;
  };
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  tags: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'fashion-brand-35-cost-reduction',
    client: {
      name: 'MarqueFashion',
      industry: 'Fashion & Apparel',
      location: 'Paris, France',
      logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png'
    },
    challenge: 'MarqueFashion, une marque de prêt-à-porter en ligne en forte croissance, faisait face à des coûts logistiques explosifs et des erreurs de préparation fréquentes. Avec 800 commandes/mois, leur entrepôt de 150m² était saturé et nécessitait 3 employés à temps plein.',
    solution: 'Migration complète vers Speed E-Log en 7 jours. Intégration Shopify, formation équipe, transfert des 5000 SKUs. Mise en place d\'un packaging personnalisé premium et process de contrôle qualité renforcé.',
    results: [
      {
        metric: 'Réduction des coûts',
        value: '35%',
        improvement: '-€42,000/an'
      },
      {
        metric: 'Précision préparation',
        value: '99.8%',
        improvement: '+12% vs avant'
      },
      {
        metric: 'Délai préparation',
        value: '18h',
        improvement: '-48h vs avant'
      },
      {
        metric: 'Satisfaction client',
        value: '4.8/5',
        improvement: '+0.6 point'
      }
    ],
    testimonial: {
      quote: 'Speed E-Log a transformé notre logistique. Nous économisons 35% tout en offrant une meilleure expérience client. Notre taux de retour a baissé de 15% grâce au packaging soigné.',
      author: 'Sophie Martin',
      role: 'CEO, MarqueFashion'
    },
    image: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    tags: ['Fashion', 'E-commerce', 'Shopify', 'Packaging Personnalisé']
  },
  {
    slug: 'beauty-startup-scale-from-200-to-2000-orders',
    client: {
      name: 'BeautyGlow',
      industry: 'Beauty & Cosmetics',
      location: 'Lyon, France',
      logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png'
    },
    challenge: 'BeautyGlow, startup de cosmétiques naturels, explosait en croissance (200 à 2000 commandes/mois en 6 mois) mais leur logistique interne ne suivait pas. Ruptures de stock fréquentes, retards de livraison, équipe épuisée.',
    solution: 'Onboarding express en 3 jours avec Speed E-Log. Configuration WMS pour traçabilité des lots et dates de péremption. Intégration multi-canaux (site web, Amazon, Cdiscount). Formation picking pour produits fragiles.',
    results: [
      {
        metric: 'Capacité mensuelle',
        value: '2000+',
        improvement: 'x10 vs avant'
      },
      {
        metric: 'Temps de préparation',
        value: '< 24h',
        improvement: '100% respecté'
      },
      {
        metric: 'Taux de casse',
        value: '0.3%',
        improvement: '-95% vs interne'
      },
      {
        metric: 'Focus équipe',
        value: '100%',
        improvement: 'Libérée pour marketing'
      }
    ],
    testimonial: {
      quote: 'Sans Speed E-Log, nous aurions dû recruter 4-5 personnes et louer un entrepôt. Ils nous ont permis de scaler sans friction tout en réduisant nos coûts. Game changer !',
      author: 'Laura Dubois',
      role: 'Co-Founder, BeautyGlow'
    },
    image: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    tags: ['Beauty', 'Startup', 'Scale-up', 'Multi-canaux']
  },
  {
    slug: 'b2b-distributor-edi-integration',
    client: {
      name: 'DistribPro',
      industry: 'B2B Distribution',
      location: 'Lille, France',
      logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png'
    },
    challenge: 'DistribPro, distributeur B2B de matériel professionnel, devait gérer des flux complexes vers grandes surfaces (Leclerc, Carrefour) avec contraintes EDI strictes. Leur 3PL précédent ne gérait pas ces spécificités.',
    solution: 'Mise en place infrastructure EDI complète avec Speed E-Log. Configuration des règles de préparation par client (palettes, displays). Formation équipe sur contraintes GMS. Intégration transport programmé.',
    results: [
      {
        metric: 'Taux conformité EDI',
        value: '99.5%',
        improvement: 'vs 85% avant'
      },
      {
        metric: 'Délais livraison',
        value: '100%',
        improvement: 'Créneaux respectés'
      },
      {
        metric: 'Pénalités GMS',
        value: '€0',
        improvement: '-€15K/an économisés'
      },
      {
        metric: 'Nouveaux clients',
        value: '+8',
        improvement: 'GMS acceptées'
      }
    ],
    testimonial: {
      quote: 'Speed E-Log maîtrise parfaitement les contraintes B2B. Plus aucune pénalité depuis 18 mois. Nous avons pu signer avec 8 nouvelles enseignes grâce à leur expertise.',
      author: 'Marc Leroy',
      role: 'Directeur Logistique, DistribPro'
    },
    image: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    tags: ['B2B', 'EDI', 'GMS', 'Distribution']
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudiesData.find(cs => cs.slug === slug);
};
