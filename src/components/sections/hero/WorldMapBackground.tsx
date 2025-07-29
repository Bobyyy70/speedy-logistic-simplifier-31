
import React from "react";

interface WorldMapBackgroundProps {
  reduceAnimations?: boolean;
}

export function WorldMapBackground({ reduceAnimations = false }: WorldMapBackgroundProps) {
  return (
    <div className="absolute inset-0 opacity-20">
      {/* Simple static background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-blue-50/20"></div>
    </div>
  );
}
