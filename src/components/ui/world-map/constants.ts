import type { MapDot } from "./types";

export const DEFAULT_DOTS: MapDot[] = [
  {
    start: { lat: 48.8566, lng: 2.3522, label: "France" },
    end: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
  {
    start: { lat: 48.8566, lng: 2.3522 },
    end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  },
  {
    start: { lat: 48.8566, lng: 2.3522 },
    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  },
];

export const DEFAULT_COLORS = {
  lineColor: "#2F68F3",
  secondaryLineColor: "#F3BA2F",
  dotColor: "#2F68F3",
  secondaryDotColor: "#F3BA2F",
  opacity: 0.85,
};
