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
  },

  // Additional E-commerce Platforms
  {
    slug: 'magento',
    name: 'Magento',
    category: 'E-commerce',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Extension Magento 2 pour synchronisation complète.',
    features: ['Multi-boutiques', 'Sync temps réel', 'Configuration avancée', 'Support Magento Cloud'],
    isNative: true,
    setupTime: '30 minutes'
  },
  {
    slug: 'bigcommerce',
    name: 'BigCommerce',
    category: 'E-commerce',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'App BigCommerce native pour fulfillment automatisé.',
    features: ['1-click install', 'Auto-sync orders', 'Real-time inventory', 'Multi-location'],
    isNative: true,
    setupTime: '10 minutes'
  },
  {
    slug: 'squarespace',
    name: 'Squarespace',
    category: 'E-commerce',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Intégration Squarespace Commerce pour boutiques créatives.',
    features: ['Webhook integration', 'Order sync', 'Inventory updates', 'Tracking auto'],
    isNative: true,
    setupTime: '20 minutes'
  },
  {
    slug: 'wix',
    name: 'Wix eCommerce',
    category: 'E-commerce',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'App Wix pour fulfillment simplifié.',
    features: ['Native app', 'Auto fulfillment', 'Stock sync', 'Multi-currency'],
    isNative: true,
    setupTime: '15 minutes'
  },
  {
    slug: 'etsy',
    name: 'Etsy',
    category: 'Marketplace',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Connexion Etsy pour artisans et créateurs.',
    features: ['API Etsy', 'Multi-shops', 'Auto-ship', 'Custom packaging'],
    isNative: true,
    setupTime: '25 minutes'
  },
  {
    slug: 'ebay',
    name: 'eBay',
    category: 'Marketplace',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Gestion fulfillment multi-listings eBay.',
    features: ['eBay API', 'Auto-feedback', 'Inventory sync', 'International shipping'],
    isNative: true,
    setupTime: '30 minutes'
  },
  {
    slug: 'fnac',
    name: 'Fnac Marketplace',
    category: 'Marketplace',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Intégration marketplace Fnac pour vendeurs pro.',
    features: ['API Fnac', 'Conformité standards', 'Tracking auto', 'Gestion retours'],
    isNative: true,
    setupTime: '40 minutes'
  },
  {
    slug: 'rakuten',
    name: 'Rakuten France',
    category: 'Marketplace',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Connexion Rakuten (ex-PriceMinister).',
    features: ['API Rakuten', 'Stock realtime', 'Order management', 'Returns handling'],
    isNative: true,
    setupTime: '35 minutes'
  },

  // Additional Shipping
  {
    slug: 'ups',
    name: 'UPS',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Tarifs UPS négociés pour expéditions premium.',
    features: ['UPS Express', 'Tarifs pros', 'Tracking premium', 'Signature delivery'],
    isNative: true,
    setupTime: 'Immédiat'
  },
  {
    slug: 'fedex',
    name: 'FedEx',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'FedEx International et Express.',
    features: ['FedEx API', 'International shipping', 'Express delivery', 'Customs docs'],
    isNative: true,
    setupTime: 'Immédiat'
  },
  {
    slug: 'dhl',
    name: 'DHL',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'DHL Express pour livraisons internationales rapides.',
    features: ['DHL Express', 'International', 'Customs clearance', 'Priority delivery'],
    isNative: true,
    setupTime: 'Immédiat'
  },
  {
    slug: 'dpd',
    name: 'DPD France',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'DPD pour livraisons France et Europe.',
    features: ['Predict service', 'Point relais', 'Tracking SMS', 'Delivery options'],
    isNative: true,
    setupTime: 'Immédiat'
  },
  {
    slug: 'gls',
    name: 'GLS',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'GLS pour livraisons économiques Europe.',
    features: ['Europe network', 'Parcel shops', 'FlexDelivery', 'Track & trace'],
    isNative: true,
    setupTime: 'Immédiat'
  },
  {
    slug: 'mondial-relay',
    name: 'Mondial Relay',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Mondial Relay pour livraison point relais économique.',
    features: ['15000+ points relais', 'Tarifs attractifs', 'App client', 'Notifications SMS'],
    isNative: true,
    setupTime: 'Immédiat'
  },
  {
    slug: 'relais-colis',
    name: 'Relais Colis',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Réseau Relais Colis pour livraisons point relais.',
    features: ['5000+ relais', 'Économique', 'Tracking', 'Flexibility'],
    isNative: true,
    setupTime: 'Immédiat'
  },

  // CRM & Marketing
  {
    slug: 'salesforce',
    name: 'Salesforce',
    category: 'CRM',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Intégration Salesforce CRM pour suivi clients B2B.',
    features: ['Salesforce API', 'Customer 360', 'Order history', 'Sales automation'],
    isNative: true,
    setupTime: '45 minutes'
  },
  {
    slug: 'mailchimp',
    name: 'Mailchimp',
    category: 'CRM',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Sync contacts et segments pour email marketing.',
    features: ['Contact sync', 'Purchase data', 'Segments auto', 'Abandoned cart'],
    isNative: true,
    setupTime: '20 minutes'
  },
  {
    slug: 'klaviyo',
    name: 'Klaviyo',
    category: 'CRM',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Klaviyo pour email marketing e-commerce avancé.',
    features: ['Real-time sync', 'Customer profiles', 'Purchase behavior', 'Flows automation'],
    isNative: true,
    setupTime: '25 minutes'
  },
  {
    slug: 'brevo',
    name: 'Brevo (Sendinblue)',
    category: 'CRM',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Brevo pour marketing automation all-in-one.',
    features: ['Email + SMS', 'Marketing automation', 'CRM features', 'Transactional emails'],
    isNative: true,
    setupTime: '30 minutes'
  },
  {
    slug: 'activecampaign',
    name: 'ActiveCampaign',
    category: 'CRM',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'ActiveCampaign pour automation marketing avancée.',
    features: ['CRM + Automation', 'Customer journeys', 'Segmentation', 'Lead scoring'],
    isNative: true,
    setupTime: '35 minutes'
  },

  // Tools & Automation
  {
    slug: 'make',
    name: 'Make (Integromat)',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Make pour automations visuelles complexes.',
    features: ['Visual automation', 'Complex workflows', 'API connections', 'Error handling'],
    isNative: true,
    setupTime: '20 minutes'
  },
  {
    slug: 'n8n',
    name: 'n8n',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'n8n workflow automation open-source.',
    features: ['Self-hosted option', 'Workflow automation', 'Custom nodes', 'Free tier'],
    isNative: true,
    setupTime: '25 minutes'
  },
  {
    slug: 'google-sheets',
    name: 'Google Sheets',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Export automatique vers Google Sheets pour reporting.',
    features: ['Auto-export orders', 'Inventory reports', 'Real-time updates', 'Custom templates'],
    isNative: true,
    setupTime: '10 minutes'
  },
  {
    slug: 'airtable',
    name: 'Airtable',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Sync données vers Airtable pour bases personnalisées.',
    features: ['Database sync', 'Custom views', 'Automations', 'Team collaboration'],
    isNative: true,
    setupTime: '20 minutes'
  },
  {
    slug: 'slack',
    name: 'Slack',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Notifications Slack pour suivi activité logistique.',
    features: ['Order notifications', 'Stock alerts', 'Shipping updates', 'Custom channels'],
    isNative: true,
    setupTime: '5 minutes'
  },
  {
    slug: 'discord',
    name: 'Discord',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Webhooks Discord pour notifications équipe.',
    features: ['Webhooks', 'Custom notifications', 'Multi-channels', 'Bot integration'],
    isNative: true,
    setupTime: '5 minutes'
  },
  {
    slug: 'notion',
    name: 'Notion',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Export vers Notion pour documentation et wiki.',
    features: ['Database sync', 'Wiki creation', 'Team docs', 'Custom properties'],
    isNative: true,
    setupTime: '15 minutes'
  },

  // Additional Platforms
  {
    slug: 'stripe',
    name: 'Stripe',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Sync Stripe pour réconciliation paiements/commandes.',
    features: ['Payment matching', 'Revenue tracking', 'Subscription handling', 'Refunds sync'],
    isNative: true,
    setupTime: '25 minutes'
  },
  {
    slug: 'paypal',
    name: 'PayPal',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Intégration PayPal pour suivi paiements.',
    features: ['Payment tracking', 'Transaction sync', 'Dispute handling', 'Multi-currency'],
    isNative: true,
    setupTime: '20 minutes'
  },
  {
    slug: 'quickbooks',
    name: 'QuickBooks',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Sync QuickBooks pour comptabilité automatisée.',
    features: ['Accounting sync', 'Invoice automation', 'Expense tracking', 'Tax ready'],
    isNative: true,
    setupTime: '40 minutes'
  },
  {
    slug: 'xero',
    name: 'Xero',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Xero accounting pour PME européennes.',
    features: ['Accounting integration', 'Multi-currency', 'Bank reconciliation', 'Reports'],
    isNative: true,
    setupTime: '40 minutes'
  },
  {
    slug: 'inventory-planner',
    name: 'Inventory Planner',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Forecast et réapprovisionnement intelligent.',
    features: ['Demand forecasting', 'Auto-reorder', 'Multi-location', 'Analytics'],
    isNative: true,
    setupTime: '30 minutes'
  },
  {
    slug: 'shipstation',
    name: 'ShipStation',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'ShipStation pour gestion multi-carriers avancée.',
    features: ['Multi-carrier', 'Label automation', 'Branded tracking', 'Returns portal'],
    isNative: true,
    setupTime: '30 minutes'
  },
  {
    slug: 'easyship',
    name: 'Easyship',
    category: 'Shipping',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Easyship pour comparaison transporteurs internationaux.',
    features: ['Global carriers', 'Rate comparison', 'Customs docs', 'Tax calculator'],
    isNative: true,
    setupTime: '25 minutes'
  },
  {
    slug: 'shipbob-api',
    name: 'ShipBob (Migration)',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Migration facile depuis ShipBob vers Speed E-Log.',
    features: ['Data import', 'Inventory transfer', 'Order history', 'Smooth transition'],
    isNative: true,
    setupTime: '1-2 semaines'
  },
  {
    slug: 'amazon-mws',
    name: 'Amazon MWS/SP-API',
    category: 'Marketplace',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'API Amazon complète pour vendeurs pro.',
    features: ['SP-API integration', 'FBA + FBM', 'Multi-marketplace', 'Advanced features'],
    isNative: true,
    setupTime: '1 heure'
  },
  {
    slug: 'api-rest',
    name: 'API REST Custom',
    category: 'Tools',
    logo: '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png',
    description: 'Notre API REST complète pour intégrations sur mesure.',
    features: ['Full API access', 'Webhooks', 'SDKs disponibles', 'Documentation complète'],
    isNative: true,
    setupTime: 'Variable'
  }
];

export const getIntegrationsByCategory = (category: string): Integration[] => {
  return integrationsData.filter(int => int.category === category);
};

export const getIntegrationBySlug = (slug: string): Integration | undefined => {
  return integrationsData.find(int => int.slug === slug);
};
