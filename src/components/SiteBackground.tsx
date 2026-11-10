"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const ColorBends = dynamic(() => import("@/components/ColorBends"), {
  ssr: false,
});

/** Dark: muted teal bands that stay behind white type. */
const DARK_COLORS = ["#1f4f61", "#3d7a8f", "#6a9fb0"];
/** Dark mobile: brighter so portrait + high DPR still reads. */
const DARK_COLORS_MOBILE = ["#3d8fa3", "#6ab8c8", "#b5e3ec"];
/** Light: deeper teals so they read on cream instead of washing out. */
const LIGHT_COLORS = ["#082028", "#123846", "#255468"];

function useIsMobileBg() {
  // Always start false to match SSR — flip after mount to avoid hydration mismatch.
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return mobile;
}

export function SiteBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isMobile = useIsMobileBg();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] h-[100dvh] w-screen max-w-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg" />
      {/* CSS fallback tint — readable even if WebGL is slow/failed on phones */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(140% 90% at 10% 0%, rgba(110,180,196,0.55) 0%, transparent 52%), radial-gradient(100% 80% at 95% 70%, rgba(42,111,130,0.45) 0%, transparent 55%), linear-gradient(160deg, rgba(31,79,97,0.35) 0%, transparent 45%)"
            : "radial-gradient(140% 90% at 10% 0%, rgba(18,56,70,0.22) 0%, transparent 52%), radial-gradient(100% 80% at 95% 70%, rgba(37,84,104,0.16) 0%, transparent 55%), linear-gradient(160deg, rgba(8,32,40,0.1) 0%, transparent 45%)",
        }}
      />
      {/*
        Keep transparent so dark pattern regions don't paint opaque near-black
        over the CSS tint. Mobile uses brighter bands + higher opacity.
        Light mode stays softer so black type remains readable.
      */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "opacity-70 max-md:opacity-90"
            : "opacity-40 max-md:opacity-50"
        }`}
      >
        <ColorBends
          key={`${theme}-${isMobile ? "m" : "d"}`}
          colors={
            isDark
              ? isMobile
                ? DARK_COLORS_MOBILE
                : DARK_COLORS
              : LIGHT_COLORS
          }
          rotation={isDark ? 45 : 225}
          autoRotate={isDark ? 4 : -4}
          speed={0.2}
          scale={isMobile ? 0.95 : 1.15}
          frequency={isMobile ? 0.9 : 1.05}
          warpStrength={1}
          mouseInfluence={isMobile ? 0.35 : 0.85}
          noise={0.06}
          parallax={isMobile ? 0.15 : 0.35}
          iterations={2}
          intensity={
            isDark ? (isMobile ? 1.85 : 1.25) : isMobile ? 0.75 : 0.65
          }
          bandWidth={isMobile ? 7 : 5}
          transparent
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "linear-gradient(180deg, rgba(18,19,20,0.1) 0%, rgba(18,19,20,0.28) 55%, rgba(18,19,20,0.52) 100%)"
            : "linear-gradient(180deg, rgba(244,244,241,0.55) 0%, rgba(244,244,241,0.72) 45%, rgba(244,244,241,0.88) 100%)",
        }}
      />
    </div>
  );
}
