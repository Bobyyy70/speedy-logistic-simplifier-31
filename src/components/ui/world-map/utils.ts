
/**
 * Projects geographical coordinates to SVG coordinates
 * Based on rendered SVG dimensions (width: 1056, height: 495)
 */
export const projectPoint = (lat: number, lng: number) => {
  // Match the overlay SVG/viewBox dimensions for perfect alignment
  const mapWidth = 1056;
  const mapHeight = 495;
  
  // Convert longitude to x coordinate (simple linear projection)
  const x = ((lng + 180) / 360) * mapWidth;
  
  // Convert latitude to y coordinate with adjusted projection
  // Center Europe should be around y = 20-25 on a 60px height map
  const y = ((90 - lat) / 180) * mapHeight;
  
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
