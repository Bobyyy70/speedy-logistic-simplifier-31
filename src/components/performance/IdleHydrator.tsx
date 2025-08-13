import React, { useEffect, useState } from "react";

interface IdleHydratorProps {
  children: React.ReactNode;
  timeout?: number;
}

// Mounts its children after the browser is idle (or after a short timeout fallback)
export const IdleHydrator: React.FC<IdleHydratorProps> = ({ children, timeout = 1500 }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let idleId: number | null = null;
    const onIdle = () => setReady(true);

    const w = window as any;
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(onIdle, { timeout });
    } else {
      const t = setTimeout(onIdle, timeout) as unknown as number;
      idleId = t;
    }
    return () => {
      if (idleId) {
        if (typeof (window as any).cancelIdleCallback === "function") {
          try { (window as any).cancelIdleCallback(idleId); } catch {}
        } else {
          clearTimeout(idleId as unknown as number);
        }
      }
    };
  }, [timeout]);

  if (!ready) return null;
  return <>{children}</>;
};
