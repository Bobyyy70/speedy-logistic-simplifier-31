import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour détecter les media queries
 * @param query - La media query à surveiller (ex: '(max-width: 768px)')
 * @returns boolean - true si la media query correspond
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Vérifier si on est côté client
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    
    // Définir l'état initial
    setMatches(mediaQuery.matches);

    // Fonction de callback pour les changements
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Ajouter l'écouteur d'événements
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback pour les anciens navigateurs
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback pour les anciens navigateurs
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;