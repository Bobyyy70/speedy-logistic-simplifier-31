import { useState, useEffect } from 'react';

interface UserBehavior {
  pageViews: Record<string, number>;
  timeOnSite: number;
  interactions: string[];
  deviceType: 'mobile' | 'desktop' | 'tablet';
  trafficSource: string;
  visitCount: number;
}

interface PersonalizationData {
  persona: 'startup' | 'scaleup' | 'enterprise' | 'unknown';
  interests: string[];
  preferredCTA: string;
  recommendedServices: string[];
  customizedPricing: boolean;
}

export const usePersonalization = () => {
  const [behavior, setBehavior] = useState<UserBehavior>({
    pageViews: {},
    timeOnSite: 0,
    interactions: [],
    deviceType: 'desktop',
    trafficSource: 'direct',
    visitCount: 0
  });

  const [personalization, setPersonalization] = useState<PersonalizationData>({
    persona: 'unknown',
    interests: [],
    preferredCTA: 'Demander un devis',
    recommendedServices: [],
    customizedPricing: false
  });

  // Track page view
  const trackPageView = (path: string) => {
    setBehavior(prev => ({
      ...prev,
      pageViews: {
        ...prev.pageViews,
        [path]: (prev.pageViews[path] || 0) + 1
      }
    }));
  };

  // Track user interaction
  const trackInteraction = (action: string) => {
    setBehavior(prev => ({
      ...prev,
      interactions: [...prev.interactions, action]
    }));
  };

  // Detect device type
  const detectDeviceType = (): 'mobile' | 'desktop' | 'tablet' => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  };

  // Determine user persona based on behavior
  const determinePersona = (userBehavior: UserBehavior): PersonalizationData['persona'] => {
    const { pageViews, interactions, visitCount } = userBehavior;
    
    // Enterprise indicators
    if (pageViews['/technology'] > 2 || interactions.includes('technology_deep_dive')) {
      return 'enterprise';
    }
    
    // Scaleup indicators
    if (pageViews['/calculateur-roi-logistique'] > 0 || interactions.includes('roi_calculation')) {
      return 'scaleup';
    }
    
    // Startup indicators
    if (pageViews['/pricing'] > 1 || interactions.includes('pricing_check')) {
      return 'startup';
    }
    
    return visitCount > 3 ? 'scaleup' : 'unknown';
  };

  // Get personalized content based on persona
  const getPersonalizedContent = (persona: PersonalizationData['persona']) => {
    const contentMap = {
      startup: {
        preferredCTA: 'Essayer gratuitement',
        recommendedServices: ['fulfillment-basique', 'integration-simple'],
        interests: ['prix', 'simplicité', 'rapidité'],
        customizedPricing: true
      },
      scaleup: {
        preferredCTA: 'Calculer mon ROI',
        recommendedServices: ['fulfillment-premium', 'analytics-avances'],
        interests: ['optimisation', 'croissance', 'automation'],
        customizedPricing: true
      },
      enterprise: {
        preferredCTA: 'Planifier une démo',
        recommendedServices: ['solution-enterprise', 'integration-custom'],
        interests: ['scalabilité', 'sécurité', 'intégration'],
        customizedPricing: false
      },
      unknown: {
        preferredCTA: 'Demander un devis',
        recommendedServices: ['fulfillment-basique'],
        interests: ['logistique'],
        customizedPricing: false
      }
    };

    return contentMap[persona];
  };

  // Initialize personalization
  useEffect(() => {
    // Load from localStorage
    const stored = localStorage.getItem('speedelog_user_behavior');
    if (stored) {
      const storedBehavior = JSON.parse(stored);
      setBehavior(prev => ({
        ...prev,
        ...storedBehavior,
        visitCount: storedBehavior.visitCount + 1
      }));
    } else {
      setBehavior(prev => ({
        ...prev,
        visitCount: 1,
        deviceType: detectDeviceType(),
        trafficSource: document.referrer ? 'referral' : 'direct'
      }));
    }
  }, []);

  // Update personalization when behavior changes
  useEffect(() => {
    const persona = determinePersona(behavior);
    const content = getPersonalizedContent(persona);
    
    setPersonalization({
      persona,
      ...content
    });

    // Save to localStorage
    localStorage.setItem('speedelog_user_behavior', JSON.stringify(behavior));
  }, [behavior]);

  // Pre-fill calculator based on persona
  const getCalculatorDefaults = () => {
    switch (personalization.persona) {
      case 'startup':
        return {
          monthlyOrders: '50',
          averageWeight: '0.5',
          currentCost: '5.00'
        };
      case 'scaleup':
        return {
          monthlyOrders: '500',
          averageWeight: '1.0',
          currentCost: '4.50'
        };
      case 'enterprise':
        return {
          monthlyOrders: '2000',
          averageWeight: '1.5',
          currentCost: '4.00'
        };
      default:
        return {
          monthlyOrders: '',
          averageWeight: '',
          currentCost: ''
        };
    }
  };

  // Get personalized service recommendations
  const getServiceRecommendations = () => {
    const serviceDetails = {
      'fulfillment-basique': {
        title: 'Fulfillment Essentiel',
        description: 'Solution parfaite pour débuter',
        price: 'dès 6,50€/commande'
      },
      'fulfillment-premium': {
        title: 'Fulfillment Optimisé',
        description: 'Pour une croissance maîtrisée',
        price: 'dès 5,80€/commande'
      },
      'solution-enterprise': {
        title: 'Solution Enterprise',
        description: 'Infrastructure dédiée et SLA garantis',
        price: 'Tarif sur mesure'
      },
      'integration-simple': {
        title: 'Intégration Express',
        description: 'Connexion en 24h',
        price: 'Inclus'
      },
      'analytics-avances': {
        title: 'Analytics Avancés',
        description: 'Dashboard et rapports détaillés',
        price: '+50€/mois'
      },
      'integration-custom': {
        title: 'Intégration Sur Mesure',
        description: 'API custom et connecteurs dédiés',
        price: 'Devis personnalisé'
      }
    };

    return personalization.recommendedServices.map(serviceId => serviceDetails[serviceId]).filter(Boolean);
  };

  return {
    behavior,
    personalization,
    trackPageView,
    trackInteraction,
    getCalculatorDefaults,
    getServiceRecommendations,
    isPersonalized: personalization.persona !== 'unknown'
  };
};