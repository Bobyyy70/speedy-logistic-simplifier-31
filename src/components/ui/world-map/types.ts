
export interface Dot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

export interface WorldMapProps {
  dots?: Dot[];
  lineColor?: string;
  secondaryLineColor?: string;
  opacity?: number;
  dotColor?: string;
  secondaryDotColor?: string;
  priority?: boolean;
}

export interface MapPoint {
  x: number;
  y: number;
}

export interface MovingDotsProps {
  dots: Dot[];
}
