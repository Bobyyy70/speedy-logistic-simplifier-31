
/**
 * Projects geographical coordinates to SVG coordinates
 */
export const projectPoint = (lat: number, lng: number) => {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
};

/**
 * Creates a curved path between two points with enhanced curve aesthetics
 */
export const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  index: number
) => {
  // Calculate distance between points
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Curve height based on distance and index for variation
  const baseHeight = distance * 0.3;
  const heightVariation = [1.0, 1.2, 0.8, 1.1, 0.9][index % 5];
  const curveHeight = baseHeight * heightVariation;
  
  // Calculate control point for the curve
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - curveHeight;
  
  // For very close points, use gentler curve
  if (distance < 100) {
    const controlX = midX;
    const controlY = (start.y + end.y) / 2 - (distance * 0.2);
    return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
  }
  
  // For longer distances, create a more pronounced curve with two control points for smoother path
  const controlPoint1X = start.x + (dx * 0.25);
  const controlPoint1Y = start.y - (curveHeight * 0.7);
  const controlPoint2X = end.x - (dx * 0.25);
  const controlPoint2Y = end.y - (curveHeight * 0.7);
  
  return `M ${start.x} ${start.y} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${end.x} ${end.y}`;
};

/**
 * Alternates between primary and secondary colors based on index
 */
export const getLineColor = (index: number, lineColor: string, secondaryLineColor: string) => {
  return index % 2 === 0 ? lineColor : secondaryLineColor;
};

/**
 * Creates a pulse effect path data
 */
export const createPulseEffect = (
  center: { x: number; y: number },
  radius: number
) => {
  return `M ${center.x - radius} ${center.y} a ${radius} ${radius} 0 1 0 ${radius*2} 0 a ${radius} ${radius} 0 1 0 -${radius*2} 0`;
};

/**
 * Calculates midpoint between two points
 */
export const getMidpoint = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
  return { 
    x: (p1.x + p2.x) / 2, 
    y: (p1.y + p2.y) / 2 
  };
};
