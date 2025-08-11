import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  src: string; // original path like /lovable-uploads/uuid.png
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

const WIDTHS = [320, 480, 640, 768, 960, 1024, 1280, 1600, 1920];

function getBaseName(src: string) {
  const parts = src.split("/");
  const file = parts[parts.length - 1];
  const dot = file.lastIndexOf(".");
  return file.substring(0, dot);
}

function getExt(src: string) {
  const dot = src.lastIndexOf(".");
  return dot >= 0 ? src.substring(dot + 1).toLowerCase() : "jpg";
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = "100vw",
  priority = false,
  loading,
  decoding = "async",
}: ResponsiveImageProps) {
  const baseName = getBaseName(src);
  const ext = getExt(src);
  const fallbackExt = ext === "png" ? "png" : "jpg";

  const buildSet = (format: "avif" | "webp" | "fallback") =>
    WIDTHS.map((w) => {
      const fmt = format === "fallback" ? fallbackExt : format;
      return `/optimized/${baseName}-${w}w.${fmt} ${w}w`;
    }).join(", ");

  const finalLoading = loading ?? (priority ? "eager" : "lazy");

  return (
    <picture>
      {/* AVIF */}
      <source type="image/avif" srcSet={`/optimized/${baseName}.avif, ${buildSet("avif")}`} sizes={sizes} />
      {/* WebP */}
      <source type="image/webp" srcSet={`/optimized/${baseName}.webp, ${buildSet("webp")}`} sizes={sizes} />
      {/* Fallback */}
      <img
        src={`/optimized/${baseName}-640w.${fallbackExt}`}
        srcSet={buildSet("fallback")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        decoding={decoding}
        loading={finalLoading}
        className={cn("block", className)}
        onError={(e) => {
          // Fallback to original if optimized files are missing
          e.currentTarget.src = src;
        }}
      />
    </picture>
  );
}

export default ResponsiveImage;
