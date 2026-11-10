import type { CSSProperties, ReactNode } from "react";

export type TechTextProps = {
  text?: string;
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number;
  letterSpacing?: number;
  color?: string;
  accentColor?: string;
  align?: "left" | "center" | "right" | string;
  reach?: number;
  softness?: number;
  dashLength?: number;
  dashGap?: number;
  strokeWidth?: number;
  lineStyle?: string;
  reveal?: string;
  specks?: number;
  selection?: boolean;
  labels?: boolean;
  draggable?: boolean;
  bounce?: number;
  sweep?: boolean;
  speed?: number;
  clickKick?: boolean;
  intro?: string;
  introDuration?: number;
  guides?: boolean;
  className?: string;
  style?: CSSProperties;
};

declare function TechText(props: TechTextProps): ReactNode;

export default TechText;
