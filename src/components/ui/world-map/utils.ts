
/**
 * Projects geographical coordinates to SVG coordinates
 */
export const projectPoint = (lat: number, lng: number) => {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
};

/**
 * Creates a curved path between two points with enhanced aesthetics
 */
export const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  index: number
) => {
  // Create more natural curve by adjusting height factor
  const heightFactor = 0.5 + (index % 5) * 0.1;
  const heightVariation = 60 + (index % 5) * 10;
  
  // Calculate control point for smoother, more natural curves
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Adjust midpoint calculation for more attractive arcs
  const midX = start.x + dx * 0.5;
  const midY = start.y + dy * 0.5 - heightVariation * (1 - Math.min(1, distance / 400));
  
  // Use cubic Bezier curve for more control over path shape
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
};

/**
 * Alternates between primary and secondary colors based on index
 * Returns gradient IDs for enhanced visual effects
 */
export const getLineColor = (index: number, lineColor: string, secondaryLineColor: string) => {
  return index % 2 === 0 ? lineColor : secondaryLineColor;
};

/**
 * Calculates animation delay based on index and path length
 */
export const getAnimationDelay = (index: number, pathLength: number) => {
  // Base delay plus variation to create staggered effect
  const baseDelay = 0.5 + (index * 0.2);
  const durationFactor = Math.min(1, pathLength / 400);
  
  return baseDelay * durationFactor;
};
