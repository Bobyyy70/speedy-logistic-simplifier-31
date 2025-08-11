
import React from "react";

import { Calendar } from "lucide-react";

export const CalendarSection = () => {
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

  // Idle fallback: warm up load even if user hasn't scrolled yet
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
      className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-slate-200 relative overflow-hidden"
      data-calendar-section
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-3xl font-bold mb-3 text-slate-900 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          <Calendar className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
          Planifiez votre rendez-vous
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-2">
          Réservez un créneau de 15 minutes pour discuter de votre projet logistique avec notre équipe d'experts.
        </p>
      </div>
      
      <div ref={placeholderRef} className="w-full h-[650px] border border-slate-200 rounded-xl bg-white" style={{ overflow: 'hidden' }}>
        {shouldLoad ? (
          <div className="w-full h-full" style={{ overflow: 'hidden' }}>
            <iframe 
              src="https://meetings-eu1.hubspot.com/falmanzo?embed=true" 
              width="100%" 
              height="650" 
              className="border-0 w-full h-full"
              style={{ minHeight: '650px', width: '100%', display: 'block', border: 'none' }}
              loading="lazy"
              title="Planifier un rendez-vous"
              data-expected="hubspot-calendar"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50">
            <div className="flex items-center gap-2 mb-3 text-slate-600">
              <span className="inline-block h-4 w-4 rounded-full border-2 border-slate-300 border-t-blue-600 animate-spin" aria-hidden="true"></span>
              <span>Calendrier HubSpot</span>
            </div>
            <button 
              type="button"
              onClick={() => setShouldLoad(true)}
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Afficher le calendrier maintenant
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
