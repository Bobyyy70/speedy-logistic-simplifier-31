/**
 * Competitors Comparison Data
 * Fair but favorable positioning pages
 */

export interface ComparisonPoint {
  feature: string;
  speedelog: string | boolean;
  competitor: string | boolean;
  winner: 'speedelog' | 'competitor' | 'tie';
}

export interface CompetitorComparison {
  slug: string;
  competitorName: string;
  title: string;
  description: string;
  summary: string;
  comparisonTable: ComparisonPoint[];
  whenChooseSpeedelog: string[];
  whenChooseCompetitor: string[];
}

export const competitorsData: CompetitorComparison[] = [
  {
    slug: 'speedelog-vs-shipbob',
    competitorName: 'ShipBob',
    title: 'Speed E-Log vs ShipBob : Comparaison Complète 2025',
    description: 'Comparaison détaillée et objective entre Speed E-Log et ShipBob pour vous aider à choisir le meilleur prestataire logistique pour votre e-commerce.',
    summary: 'ShipBob est un acteur international reconnu avec une présence globale. Speed E-Log se différencie par une approche plus personnalisée, des tarifs transparents, et une expertise forte sur le marché français avec un support local premium.',
    comparisonTable: [
      {
        feature: 'Localisation France',
        speedelog: '5 entrepôts en France',
        competitor: 'Réseau international',
        winner: 'speedelog'
      },
      {
        feature: 'Support client',
        speedelog: 'Support français 6j/7',
        competitor: 'Support international',
        winner: 'speedelog'
      },
      {
        feature: 'Tarification',
        speedelog: 'Transparente, pas de frais cachés',
        competitor: 'Complexe, frais additionnels',
        winner: 'speedelog'
      },
      {
        feature: 'Technologie WMS',
        speedelog: 'Incluse gratuite',
        competitor: 'Incluse',
        winner: 'tie'
      },
      {
        feature: 'Intégrations',
        speedelog: '50+ plateformes',
        competitor: '100+ plateformes',
        winner: 'competitor'
      },
      {
        feature: 'Réseau international',
        speedelog: 'Europe principalement',
        competitor: 'Global (USA, Europe, Asie)',
        winner: 'competitor'
      },
      {
        feature: 'Prix moyen/commande',
        speedelog: '€3.5-5',
        competitor: '€5-8',
        winner: 'speedelog'
      },
      {
        feature: 'Setup time',
        speedelog: '3-7 jours',
        competitor: '2-3 semaines',
        winner: 'speedelog'
      },
      {
        feature: 'Engagement minimal',
        speedelog: '3 mois flexible',
        competitor: '12 mois',
        winner: 'speedelog'
      },
      {
        feature: 'Custom packaging',
        speedelog: 'Sur mesure, MOQ flexible',
        competitor: 'Disponible, MOQ élevé',
        winner: 'speedelog'
      }
    ],
    whenChooseSpeedelog: [
      'Vous ciblez principalement le marché français/européen',
      'Vous recherchez un support en français réactif',
      'Vous voulez une tarification simple et transparente',
      'Vous avez besoin d\'un setup rapide (< 1 semaine)',
      'Vous préférez un partenaire local qui comprend le marché français',
      'Budget limité (startups, PME)'
    ],
    whenChooseCompetitor: [
      'Vous avez besoin d\'une présence globale (USA, Asie)',
      'Vous expédiez massivement à l\'international',
      'Vous avez un budget confortable',
      'Vous recherchez un acteur international reconnu'
    ]
  },
  {
    slug: 'speedelog-vs-boxtal',
    competitorName: 'Boxtal',
    title: 'Speed E-Log vs Boxtal : Quelle Différence ?',
    description: 'Comparaison entre Speed E-Log (fulfillment complet) et Boxtal (comparateur transport). Services différents pour besoins différents.',
    summary: 'Boxtal est un excellent comparateur de transporteurs pour gérer vos expéditions. Speed E-Log est un prestataire 3PL complet qui gère votre entrepôt, préparation, emballage ET expédition. Services complémentaires plutôt que concurrents.',
    comparisonTable: [
      {
        feature: 'Type de service',
        speedelog: 'Fulfillment complet (3PL)',
        competitor: 'Comparateur transport',
        winner: 'tie'
      },
      {
        feature: 'Stockage produits',
        speedelog: true,
        competitor: false,
        winner: 'speedelog'
      },
      {
        feature: 'Préparation commandes',
        speedelog: true,
        competitor: false,
        winner: 'speedelog'
      },
      {
        feature: 'Comparaison transporteurs',
        speedelog: 'Automatique interne',
        competitor: 'Plateforme dédiée',
        winner: 'competitor'
      },
      {
        feature: 'Gestion stocks',
        speedelog: 'WMS complet',
        competitor: 'Non applicable',
        winner: 'speedelog'
      },
      {
        feature: 'Tarifs transport',
        speedelog: 'Négociés inclus',
        competitor: 'Comparaison temps réel',
        winner: 'tie'
      },
      {
        feature: 'Pour qui ?',
        speedelog: 'E-commerce voulant outsourcer',
        competitor: 'E-commerce gardant logistique interne',
        winner: 'tie'
      }
    ],
    whenChooseSpeedelog: [
      'Vous voulez externaliser toute votre logistique',
      'Vous n\'avez pas/plus d\'entrepôt',
      'Vous voulez vous concentrer sur votre croissance',
      'Vous gérez > 100 commandes/mois',
      'Vous voulez réduire vos coûts logistiques de 30-40%'
    ],
    whenChooseCompetitor: [
      'Vous gérez votre propre entrepôt et préparation',
      'Vous cherchez uniquement à optimiser vos frais de port',
      'Vous expédiez < 50 colis/mois',
      'Vous voulez garder le contrôle complet de la logistique'
    ]
  },
  {
    slug: 'speedelog-vs-chronopost',
    competitorName: 'Chronopost',
    title: 'Speed E-Log vs Chronopost : Service Différent',
    description: 'Chronopost est un transporteur. Speed E-Log est un prestataire 3PL qui utilise Chronopost (et 15+ autres transporteurs). Comparaison des services.',
    summary: 'Chronopost est un excellent transporteur express que nous utilisons d\'ailleurs régulièrement. Speed E-Log est un prestataire logistique complet qui gère votre entrepôt, prépare vos commandes, et choisit automatiquement le meilleur transporteur (Chronopost, Colissimo, etc.) selon vos besoins.',
    comparisonTable: [
      {
        feature: 'Type',
        speedelog: 'Prestataire 3PL complet',
        competitor: 'Transporteur',
        winner: 'tie'
      },
      {
        feature: 'Stockage',
        speedelog: true,
        competitor: false,
        winner: 'speedelog'
      },
      {
        feature: 'Préparation',
        speedelog: true,
        competitor: false,
        winner: 'speedelog'
      },
      {
        feature: 'Transport',
        speedelog: 'Multi-transporteurs',
        competitor: 'Chronopost uniquement',
        winner: 'speedelog'
      },
      {
        feature: 'Délais livraison',
        speedelog: '24-72h selon transporteur',
        competitor: '24h',
        winner: 'competitor'
      },
      {
        feature: 'Tarifs',
        speedelog: 'Négociés avec 15+ transporteurs',
        competitor: 'Tarifs Chronopost',
        winner: 'speedelog'
      },
      {
        feature: 'Service',
        speedelog: 'Tout-en-un',
        competitor: 'Transport seul',
        winner: 'speedelog'
      }
    ],
    whenChooseSpeedelog: [
      'Vous cherchez une solution logistique complète',
      'Vous voulez déléguer toute votre logistique',
      'Vous voulez le meilleur rapport qualité/prix par envoi',
      'Vous avez besoin de flexibilité (express, standard, économique)'
    ],
    whenChooseCompetitor: [
      'Vous gérez déjà votre stockage et préparation',
      'Vous avez besoin uniquement de livraison express 24h',
      'Vous avez un contrat Chronopost existant avantageux'
    ]
  }
];

export const getCompetitorComparisonBySlug = (slug: string): CompetitorComparison | undefined => {
  return competitorsData.find(c => c.slug === slug);
};
