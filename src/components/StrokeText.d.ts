import type { CSSProperties, ReactNode } from "react";

export type StrokeTextProps = {
  text?: string;
  strokeColor?: string;
  fillColor?: string | null;
  strokeWidth?: number;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  trigger?: "mount" | "scroll" | "hover" | string;
  fillMode?: "wipe" | "fade" | "none" | string;
  wipeFrom?: "left" | "right" | "top" | "bottom" | string;
  fontSize?: number;
  fontWeight?: number | string;
  fontFamily?: string;
  letterSpacing?: number;
  reverse?: boolean;
  strokeStyle?: "solid" | "dashed" | "dotted" | string;
  dashLength?: number;
  marching?: boolean;
  hoverRedraw?: boolean;
  shadow?: boolean;
  shadowColor?: string | null;
  className?: string;
  style?: CSSProperties;
};

declare function StrokeText(props: StrokeTextProps): ReactNode;

export default StrokeText;
