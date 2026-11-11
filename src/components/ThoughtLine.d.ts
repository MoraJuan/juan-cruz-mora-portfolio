import type { CSSProperties, ReactNode } from "react";

export type ThoughtLineGlyph = "sparkle" | "dot" | "none" | ReactNode;

export type ThoughtLineProps = {
  label?: string;
  doneLabel?: string;
  renderLabel?: (text: string, working: boolean) => ReactNode;
  glyph?: ThoughtLineGlyph;
  steps?: string[];
  collapsible?: boolean;
  collapseOnSettle?: boolean;
  color?: string;
  glyphColor?: string;
  fontSize?: number;
  breathPeriod?: number;
  breathDepth?: number;
  shimmer?: boolean;
  shimmerDuration?: number;
  settleDuration?: number;
  settleBlur?: number;
  working?: boolean;
  settleAfter?: number;
  elapsed?: number;
  showTimer?: boolean;
  onSettle?: (seconds: number) => void;
  className?: string;
  style?: CSSProperties;
};

declare function ThoughtLine(props: ThoughtLineProps): ReactNode;

export default ThoughtLine;
