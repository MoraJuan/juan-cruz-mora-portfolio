import type { Theme } from "./ThemeProvider";

const shared = {
  size: "sm" as const,
  radius: 10,
  followMouse: true,
  proximity: 410,
  shineSize: 25,
  shineFade: 22,
  thickness: 2.7,
};

export function getSpecularThemeProps(theme: Theme) {
  if (theme === "dark") {
    return {
      ...shared,
      tint: "#ffffff",
      // Keep glass translucent — high white opacity reads as solid white.
      tintOpacity: 0.08,
      textColor: "#f5f5f5",
      lineColor: "#ffffff",
      baseColor: "#a3a3a3",
      intensity: 0.85,
      idleIntensity: 0.4,
      glow: 0.55,
      blur: 8,
    };
  }

  return {
    ...shared,
    tint: "#1a4a5c",
    tintOpacity: 0.92,
    textColor: "#ffffff",
    lineColor: "#c5e0e8",
    baseColor: "#1a4a5c",
    intensity: 0.55,
    idleIntensity: 0.4,
    glow: 0.35,
    blur: 6,
  };
}
