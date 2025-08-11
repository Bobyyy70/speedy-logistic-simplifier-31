
import React from "react";

import { MapPin } from "lucide-react";

export const MapSection = () => {
  const [mapError, setMapError] = React.useState(false);
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const placeholderRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = placeholderRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        obs.disconnect();
      }
    }, { rootMargin: '1800px 0px', threshold: 0.01 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Idle fallback to warm up the map load
  React.useEffect(() => {
    if (shouldLoad) return;
    const load = () => setShouldLoad(true);

    let cleanup: () => void = () => {};
    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(load, { timeout: 4000 });
      cleanup = () => (window as any).cancelIdleCallback?.(id);
    } else {
      const id = setTimeout(load, 3000) as unknown as number;
      cleanup = () => clearTimeout(id);
    }

    return cleanup;
  }, [shouldLoad]);

  return (
    <section 
      className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-slate-200"
    >
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
          Notre Localisation
        </h2>
        <p className="text-sm md:text-base text-slate-600 px-2">
          Speed E-Log - 37 Rue de Rémaucourt, 70170 Port-sur-Saône
        </p>
      </div>
      
      <div ref={placeholderRef} className="h-[300px] md:h-[400px] lg:h-[500px] border border-slate-200 rounded-xl overflow-hidden shadow-lg">
        {mapError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <div className="text-center p-6">
              <p className="text-gray-600 mb-2">🗺️ Carte temporairement indisponible</p>
              <p className="text-sm text-gray-500">37 Rue de Rémaucourt, 70170 Port-sur-Saône</p>
              <a 
                href="https://maps.google.com/maps?q=37+Rue+de+Rémaucourt,+70170+Port-sur-Saône"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        ) : (
          shouldLoad ? (
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.356!2d6.048!3d47.719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d11f0e7b8b8b1%3A0x40a5fb99a3b5f5b5!2s37%20Rue%20de%20R%C3%A9maucourt%2C%2070170%20Port-sur-Sa%C3%B4ne%2C%20France!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
              title="Speed E-Log - 37 Rue de Rémaucourt, Port-sur-Saône"
              className="w-full h-full"
              data-expected="google-maps"
              onError={() => setMapError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
              <div className="text-center p-6">
                <p className="text-gray-600 mb-2">🗺️ Carte non chargée</p>
                <p className="text-sm text-gray-500">37 Rue de Rémaucourt, 70170 Port-sur-Saône</p>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <button 
                    type="button"
                    onClick={() => setShouldLoad(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Afficher la carte
                  </button>
                  <a 
                    href="https://maps.google.com/maps?q=37+Rue+de+Rémaucourt,+70170+Port-sur-Saône"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-slate-300 rounded hover:bg-slate-50"
                  >
                    Ouvrir Google Maps
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
