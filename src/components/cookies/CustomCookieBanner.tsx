
import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white border border-gray-200 shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Cookie className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Gestion des cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Nous respectons votre vie privée
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBanner(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
              analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
              types de cookies autoriser.
            </p>
          </div>

          {/* Options détaillées */}
          {showDetails && (
            <div className="mb-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies nécessaires</h4>
                    <p className="text-sm text-gray-600">
                      Indispensables au fonctionnement du site
                    </p>
                  </div>
                  <div className="text-sm font-medium text-green-600">Toujours actifs</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies analytiques</h4>
                    <p className="text-sm text-gray-600">
                      Nous aident à comprendre comment vous utilisez notre site
                    </p>
                  </div>
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
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies marketing</h4>
                    <p className="text-sm text-gray-600">
                      Utilisés pour vous proposer des publicités pertinentes
                    </p>
                  </div>
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
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          <Separator className="my-4" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {!showDetails ? (
              <>
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Accepter tous les cookies
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1"
                >
                  Refuser les cookies optionnels
                </Button>
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="ghost"
                  className="flex items-center space-x-2"
                >
                  <Settings className="h-4 w-4" />
                  <span>Personnaliser</span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sauvegarder mes préférences
                </Button>
                <Button
                  onClick={() => setShowDetails(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Retour
                </Button>
              </>
            )}
          </div>

          {/* Footer info */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              <Shield className="inline h-3 w-3 mr-1" />
              Vos données sont protégées selon notre politique de confidentialité
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
