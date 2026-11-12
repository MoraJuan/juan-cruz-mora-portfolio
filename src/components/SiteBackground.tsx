"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
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

/** Peak blur as the page is scrolled (px). ~20% stronger settle for readability. */
const SCROLL_BLUR_MAX_PX = 7.2;
/** Extra veil opacity added at full scroll (~20% more soft cover). */
const SCROLL_VEIL_EXTRA = 0.2;

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

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

export function SiteBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isMobile = useIsMobileBg();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const bendsRef = useRef<HTMLDivElement | null>(null);
  const softVeilRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const bends = bendsRef.current;
    const softVeil = softVeilRef.current;
    if (!root || !bends || !softVeil) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      bends.style.filter = "none";
      bends.style.transform = "none";
      softVeil.style.opacity = "0";
      return;
    }

    let raf = 0;

    const update = () => {
      raf = 0;
      // Reach most of the blur within ~1.35 viewports so mid-page text already settles.
      const progress = smoothstep(window.scrollY / (window.innerHeight * 1.35));
      const blur = progress * SCROLL_BLUR_MAX_PX;

      bends.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : "none";
      // Scale slightly so blurred edges don't show hard empty bands.
      bends.style.transform =
        blur > 0.05 ? `scale(${(1 + progress * 0.06).toFixed(4)})` : "none";
      softVeil.style.opacity = (progress * SCROLL_VEIL_EXTRA).toFixed(3);
      root.style.setProperty("--bg-scroll", progress.toFixed(4));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [theme, isMobile]);

  return (
    <div
      ref={rootRef}
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
        Scroll softens this layer (blur + scale) so bands don't fight body text.
      */}
      <div
        ref={bendsRef}
        className={`absolute inset-0 origin-center will-change-[filter,transform] ${
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
      {/* Extra soft cover on scroll — keeps type readable without touching text layers. */}
      <div
        ref={softVeilRef}
        className="absolute inset-0 bg-bg opacity-0"
      />
    </div>
  );
}
