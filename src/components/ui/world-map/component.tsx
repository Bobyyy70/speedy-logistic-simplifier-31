
import React, { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  secondaryLineColor?: string;
  opacity?: number;
}

export function WorldMap({
  dots = [],
  lineColor = "#2F68F3",
  secondaryLineColor = "#F3BA2F",
  opacity = 0.65,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  
  // Get the theme from next-themes
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const svgMap = map.getSVG({
    radius: 0.28, // Slightly larger dots
    color: isDarkMode ? "#FFFFFF80" : "#00000080", // More opaque dots
    shape: "circle",
    backgroundColor: "transparent", // Transparent background to blend with the gradient
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
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

  // Function to alternate between primary and secondary colors
  const getLineColor = (index: number) => {
    return index % 2 === 0 ? lineColor : secondaryLineColor;
  };

  return (
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans site-background">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className={`h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none opacity-${Math.round(opacity * 100)}`}
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const currentColor = getLineColor(i);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint, i)}
                fill="none"
                stroke={`url(#path-gradient-${i})`}
                strokeWidth="2.5"
                initial={{
                  pathLength: 0,
                  opacity: 0.1,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.8,
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.3 * i,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 5,
                }}
                key={`start-upper-${i}`}
              ></motion.path>
              <defs>
                <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={currentColor} stopOpacity="0.3" />
                  <stop offset="5%" stopColor={currentColor} stopOpacity="1" />
                  <stop offset="95%" stopColor={currentColor} stopOpacity="1" />
                  <stop offset="100%" stopColor={currentColor} stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const currentColor = getLineColor(i);
          return (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                {/* France highlight - special treatment for origin */}
                {dot.start.lat === 48.8566 && dot.start.lng === 2.3522 && (
                  <motion.circle
                    cx={projectPoint(dot.start.lat, dot.start.lng).x}
                    cy={projectPoint(dot.start.lat, dot.start.lng).y}
                    r="5" 
                    fill="#F3BA2F"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 1,
                      delay: 0.2,
                    }}
                  />
                )}
                <motion.circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="3.5"
                  fill={currentColor}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.9 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 * i,
                  }}
                />
                <motion.circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="3.5" 
                  fill={currentColor}
                  opacity="0.6"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                {/* Add city label for France origin only */}
                {dot.start.lat === 48.8566 && dot.start.lng === 2.3522 && (
                  <motion.text
                    x={projectPoint(dot.start.lat, dot.start.lng).x + 8}
                    y={projectPoint(dot.start.lat, dot.start.lng).y - 8}
                    fontSize="10"
                    fill="#FFFFFF"
                    opacity="0.8"
                    textAnchor="start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    France
                  </motion.text>
                )}
              </g>
              <g key={`end-${i}`}>
                <motion.circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="3.5"
                  fill={currentColor}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.9 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 * i + 2, // Appear after path animation
                  }}
                />
                <motion.circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="3.5" 
                  fill={currentColor}
                  opacity="0.6"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.2 * i + 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                {/* Add destination labels for notable destinations */}
                {dot.end.label && (
                  <motion.text
                    x={projectPoint(dot.end.lat, dot.end.lng).x + 8}
                    y={projectPoint(dot.end.lat, dot.end.lng).y - 5}
                    fontSize="9"
                    fill="#FFFFFF"
                    opacity="0.7"
                    textAnchor="start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1, delay: 0.2 * i + 2.5 }}
                  >
                    {dot.end.label}
                  </motion.text>
                )}
              </g>
            </g>
          );
        })}

        {/* Add moving dots along paths for more dynamic effect */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const currentColor = getLineColor(i);
          
          return (
            <motion.circle
              key={`moving-dot-${i}`}
              cx={startPoint.x}
              cy={startPoint.y}
              r="2"
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{
                cx: [startPoint.x, endPoint.x],
                cy: [startPoint.y, endPoint.y],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                delay: 1 + (i * 0.5),
                repeat: Infinity,
                repeatDelay: 2 + (i * 0.5),
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
