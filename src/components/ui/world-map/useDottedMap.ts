import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

// Simple module-level cache to avoid recomputing large SVG strings
const svgCache: Record<"light" | "dark", string | undefined> = { light: undefined, dark: undefined };

// Extremely small placeholder to avoid blocking first paint
const fallbackSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 5"/>';

// requestIdleCallback polyfill
const ric: (cb: () => void) => number =
  (typeof window !== "undefined" && (window as any).requestIdleCallback)
    ? (cb => (window as any).requestIdleCallback(cb))
    : (cb => window.setTimeout(cb, 0));

export const useDottedMap = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const mode: "light" | "dark" = isDarkMode ? "dark" : "light";

  const [svgMap, setSvgMap] = useState<string>(() => svgCache[mode] ?? fallbackSVG);

  useEffect(() => {
    let cancelled = false;

    // Serve from cache if available
    if (svgCache[mode]) {
      setSvgMap(svgCache[mode]!);
      return;
    }

    ric(() => {
      // Defer heavy library load off the critical path
      import("dotted-map").then(({ default: DottedMap }) => {
        if (cancelled) return;
        const map = new DottedMap({ height: 60, grid: "diagonal" }); // Reduced size for performance
        const svg = map.getSVG({
          radius: 0.25, // Smaller radius for less DOM complexity
          color: isDarkMode ? "#FFFFFF60" : "#00000030", // Reduced opacity
          shape: "circle",
          backgroundColor: "transparent",
        });
        svgCache[mode] = svg;
        if (!cancelled) setSvgMap(svg);
      }).catch(() => {
        // Fallback silently on failure
        if (!cancelled) setSvgMap(fallbackSVG);
      });
    });

    return () => { cancelled = true; };
  }, [isDarkMode, mode]);

  // Memoize object shape to keep referential stability for consumers
  return useMemo(() => ({ svgMap }), [svgMap]);
};
