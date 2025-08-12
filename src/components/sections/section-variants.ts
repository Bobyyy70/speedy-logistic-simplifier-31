export type BackgroundVariant = "white" | "site";

export const sectionBgClass = (variant: BackgroundVariant = "white"): string =>
  variant === "site" ? "bg-transparent" : "bg-white";
