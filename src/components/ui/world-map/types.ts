
export interface MapDot {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
}

export interface MapProps {
  dots?: MapDot[];
  lineColor?: string;
  secondaryLineColor?: string;
  opacity?: number;
}
