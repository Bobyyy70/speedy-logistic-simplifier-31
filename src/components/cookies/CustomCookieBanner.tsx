
import React, { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CustomCookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Délai pour éviter l'affichage immédiat
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(fullConsent));
    
    // Déclencher le tracking HubSpot si disponible
    if ((window as any)._hsp) {
      (window as any)._hsp.push(['setPrivacyConsent', { analyticsConsent: true }]);
      (window as any)._hsp.push(['trackPageView']);
    }
    
    setShowBanner(false);
    console.log('✅ Cookies acceptés (tous)');
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(minimalConsent));
    setShowBanner(false);
    console.log('❌ Cookies rejetés (sauf nécessaires)');
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now(),
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    
    // Configurer HubSpot selon les préférences
    if ((window as any)._hsp) {
      (window as any)._hsp.push(['setPrivacyConsent', { 
        analyticsConsent: preferences.analytics 
      }]);
      if (preferences.analytics) {
        (window as any)._hsp.push(['trackPageView']);
      }
    }
    
    setShowBanner(false);
    console.log('⚙️ Préférences sauvegardées:', consent);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4">
      <Card className="mx-auto max-w-4xl bg-white border border-border shadow-lg">
        <div className="p-4">
          {!showDetails ? (
            // Vue simplifiée
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center space-x-3 flex-1">
                <img 
                  src="/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" 
                  alt="Speed E-Log" 
                  className="h-8 w-8 flex-shrink-0"
                />
                <div className="text-sm">
                  <span className="font-medium text-foreground">
                    Nous utilisons des cookies
                  </span>
                  <span className="text-muted-foreground ml-1">
                    pour améliorer votre expérience. Vous pouvez choisir vos préférences.
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 flex-shrink-0">
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  <Settings className="h-3 w-3 mr-1" />
                  Gérer
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Refuser
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  variant="default"
                  size="sm"
                  className="text-xs"
                >
                  <Check className="h-3 w-3 mr-1" />
                  Accepter
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBanner(false)}
                  className="text-muted-foreground hover:text-foreground p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            // Vue détaillée
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" 
                    alt="Speed E-Log" 
                    className="h-6 w-6"
                  />
                  <h3 className="font-medium text-foreground">Paramètres des cookies</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBanner(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="font-medium text-foreground mb-1">Nécessaires</div>
                  <div className="text-muted-foreground text-xs mb-2">Fonctionnement du site</div>
                  <div className="text-xs font-medium text-green-600">Toujours actifs</div>
                </div>

                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="font-medium text-foreground mb-1">Analytiques</div>
                  <div className="text-muted-foreground text-xs mb-2">Statistiques d'usage</div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        analytics: e.target.checked
                      }))}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="font-medium text-foreground mb-1">Marketing</div>
                  <div className="text-muted-foreground text-xs mb-2">Publicités ciblées</div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        marketing: e.target.checked
                      }))}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={handleSavePreferences}
                  variant="default"
                  size="sm"
                  className="flex-1"
                >
                  Sauvegarder les préférences
                </Button>
                <Button
                  onClick={() => setShowDetails(false)}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  Retour
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
