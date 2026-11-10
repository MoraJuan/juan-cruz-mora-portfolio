import type { CSSProperties, ReactNode } from "react";

export type GooeyNavItem = {
  label: string;
  href: string;
};

export type GooeyNavProps = {
  items?: GooeyNavItem[];
  initialActiveIndex?: number;
  activeIndex?: number;
  onChange?: (index: number, item: GooeyNavItem) => void;
  theme?: "dark" | "light" | string;
  color?: string;
  activeTextColor?: string;
  colors?: string[];
  size?: "sm" | "md" | "lg" | string;
  frame?: boolean;
  animationTime?: number;
  particleCount?: number;
  timeVariance?: number;
  spread?: number;
  gooeyness?: number;
  wobble?: number;
  hoverEffect?: boolean;
  className?: string;
  style?: CSSProperties;
};

declare function GooeyNav(props: GooeyNavProps): ReactNode;

export default GooeyNav;
