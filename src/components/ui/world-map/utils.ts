
/**
 * Projects geographical coordinates to SVG coordinates
 */
export const projectPoint = (lat: number, lng: number) => {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
};

/**
 * Creates a curved path between two points
 */
export const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  index: number
) => {
  // Vary the curve height based on the index to create different arcs
  const heightVariation = [60, 80, 100, 70, 90][index % 5];
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - heightVariation;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
};

/**
 * Alternates between primary and secondary colors based on index
 */
export const getLineColor = (index: number, lineColor: string, secondaryLineColor: string) => {
  return index % 2 === 0 ? lineColor : secondaryLineColor;
};
