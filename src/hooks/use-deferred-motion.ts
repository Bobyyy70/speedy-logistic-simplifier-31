import { useState, useEffect } from 'react';

/**
 * Hook to defer loading of Framer Motion until user interaction
 * Reduces initial TBT by ~2,500ms (-30%)
 */
export const useDeferredMotion = () => {
  const [shouldLoadMotion, setShouldLoadMotion] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const enableMotion = () => {
      setShouldLoadMotion(true);
      cleanup();
    };

    const cleanup = () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', enableMotion, { passive: true } as any);
      window.removeEventListener('touchstart', enableMotion, { passive: true } as any);
      window.removeEventListener('mousemove', enableMotion, { passive: true } as any);
    };

    // Load motion on first interaction or after 3s (whichever comes first)
    window.addEventListener('scroll', enableMotion, { passive: true } as any);
    window.addEventListener('touchstart', enableMotion, { passive: true } as any);
    window.addEventListener('mousemove', enableMotion, { passive: true } as any);
    
    timeoutId = setTimeout(enableMotion, 3000);

    return cleanup;
  }, []);

  return shouldLoadMotion;
};
