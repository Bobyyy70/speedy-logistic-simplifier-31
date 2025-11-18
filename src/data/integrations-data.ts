/**
 * Integrations Data
 * E-commerce platforms, marketplaces, and tools integrations
 */

export interface Integration {
  slug: string;
  name: string;
  category: 'E-commerce' | 'Marketplace' | 'Shipping' | 'CRM' | 'Tools';
  logo: string;
  description: string;
  features: string[];
  isNative: boolean;
  setupTime: string;
}

export const integrationsData: Integration[] = [
  // E-commerce Platforms
  {
    slug: 'shopify',
    name: 'Shopify',
    category: 'E-commerce',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Intégration native avec Shopify. Synchronisation automatique des commandes, stocks et tracking.',
    features: [
      'Sync automatique commandes en temps réel',
      'Mise à jour stocks bidirectionnelle',
      'Tracking envoyé automatiquement',
      'Gestion retours automatisée'
    ],
    isNative: true,
    setupTime: '5 minutes'
  },
  {
    slug: 'woocommerce',
    name: 'WooCommerce',
    category: 'E-commerce',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Plugin WooCommerce pour synchronisation complète avec Speed E-Log.',
    features: [
      'Plugin WordPress officiel',
      'Sync commandes automatique',
      'Gestion stocks en temps réel',
      'Statuts personnalisables'
    ],
    isNative: true,
    setupTime: '10 minutes'
  },
  {
    slug: 'prestashop',
    name: 'PrestaShop',
    category: 'E-commerce',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Module PrestaShop pour connexion directe à notre WMS.',
    features: [
      'Module gratuit',
      'Configuration simplifiée',
      'Multi-boutiques',
      'Historique complet'
    ],
    isNative: true,
    setupTime: '15 minutes'
  },

  // Marketplaces
  {
    slug: 'amazon',
    name: 'Amazon',
    category: 'Marketplace',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Connexion Amazon Seller Central + FBA Prep services.',
    features: [
      'Sync commandes FBM',
      'Prep FBA professionnel',
      'Étiquetage FNSKU',
      'Envoi groupé vers FBA'
    ],
    isNative: true,
    setupTime: '1 heure'
  },
  {
    slug: 'cdiscount',
    name: 'Cdiscount',
    category: 'Marketplace',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Intégration complète marketplace Cdiscount.',
    features: [
      'API Cdiscount',
      'Gestion stock marketplace',
      'Tracking automatique',
      'Conformité Cdiscount'
    ],
    isNative: true,
    setupTime: '30 minutes'
  },

  // Shipping
  {
    slug: 'sendcloud',
    name: 'SendCloud',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Partenariat SendCloud pour optimisation transporteurs.',
    features: [
      '50+ transporteurs',
      'Choix automatique meilleur prix',
      'Branded tracking page',
      'Returns portal'
    ],
    isNative: true,
    setupTime: '20 minutes'
  },
  {
    slug: 'colissimo',
    name: 'Colissimo',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Tarifs négociés Colissimo avec génération étiquettes.',
    features: [
      'Tarifs professionnels',
      'Étiquettes automatiques',
      'Suivi temps réel',
      'Point relais inclus'
    ],
    isNative: true,
    setupTime: 'Immédiat'
  },

  // CRM
  {
    slug: 'hubspot',
    name: 'HubSpot',
    category: 'CRM',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Synchronisation données clients et commandes vers HubSpot CRM.',
    features: [
      'Sync contacts & deals',
      'Historique commandes',
      'Segments clients',
      'Automation workflows'
    ],
    isNative: true,
    setupTime: '30 minutes'
  },

  // Tools
  {
    slug: 'zapier',
    name: 'Zapier',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Connectez Speed E-Log à 5000+ apps via Zapier.',
    features: [
      'No-code automation',
      '5000+ apps compatibles',
      'Triggers personnalisés',
      'Workflows illimités'
    ],
    isNative: true,
    setupTime: '15 minutes'
  }
];

export const getIntegrationsByCategory = (category: string): Integration[] => {
  return integrationsData.filter(int => int.category === category);
};

export const getIntegrationBySlug = (slug: string): Integration | undefined => {
  return integrationsData.find(int => int.slug === slug);
};
