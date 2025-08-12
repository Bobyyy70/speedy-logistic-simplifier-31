import { useMemo } from "react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

export const useDottedMap = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.35,
      color: isDarkMode ? "#FFFFFF90" : "#00000045",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [isDarkMode]);

  return { svgMap };
};
