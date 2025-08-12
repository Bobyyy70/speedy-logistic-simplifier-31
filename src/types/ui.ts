import type { ReactNode } from "react";

export type WithChildren<T = {}> = T & { children?: ReactNode };

export interface CommonProps {
  className?: string;
}
