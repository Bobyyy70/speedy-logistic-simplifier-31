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
 * Creates beautiful loops for distant destinations
 */
export const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  index: number
) => {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Determine if this is a long-distance route (intercontinental)
  const isLongDistance = distance > 300;
  
  if (isLongDistance) {
    // Create beautiful loops for intercontinental routes using cubic Bézier
    const heightFactor = 0.8 + (index % 3) * 0.2;
    const baseHeight = Math.min(120, distance * 0.4);
    const heightVariation = baseHeight * heightFactor;
    
    // Two control points for cubic Bézier curve
    const controlX1 = start.x + dx * 0.25;
    const controlY1 = start.y - heightVariation;
    const controlX2 = start.x + dx * 0.75;
    const controlY2 = end.y - heightVariation * 0.6;
    
    return `M ${start.x} ${start.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${end.x} ${end.y}`;
  } else {
    // Gentle curves for European routes
    const heightVariation = 40 + (index % 3) * 15;
    const midX = start.x + dx * 0.5;
    const midY = start.y + dy * 0.5 - heightVariation;
    
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }
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