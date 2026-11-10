'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ColorBends.css';

const MAX_COLORS = 8;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 shift = vec2(0.2 * cos(t) - 7.56);
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

  for (int j = 0; j < 5; j++) {
    if (j >= uIterations - 1) break;
    vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
    q += (rr - q) * 0.15;
    shift *= 0.85;
  }

  vec3 col = vec3(0.0);
  float a = 1.0;

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float spare = 1.0 - kBelow * gain;
      if (spare != 0.0) warped -= shift * spare;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
    a = uTransparent > 0 ? cover : 1.0;
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float spare = 1.0 - kBelow * gain;
      if (spare != 0.0) warped -= shift * spare;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
    }
    a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
  }

  col *= uIntensity;

  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  vec3 rgb = (uTransparent > 0) ? col * a : col;
  gl_FragColor = vec4(rgb, a);
}
`;

function hexToVec3(hex) {
  const h = String(hex).replace('#', '').trim();
  const v =
    h.length === 3
      ? [parseInt(h[0] + h[0], 16), parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16)]
      : [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  return new THREE.Vector3(
    Number.isFinite(v[0]) ? v[0] / 255 : 0,
    Number.isFinite(v[1]) ? v[1] / 255 : 0,
    Number.isFinite(v[2]) ? v[2] / 255 : 0
  );
}

function applyColors(material, colors) {
  const arr = (colors || []).filter(Boolean).slice(0, MAX_COLORS).map(hexToVec3);
  for (let i = 0; i < MAX_COLORS; i++) {
    const vec = material.uniforms.uColors.value[i];
    if (i < arr.length) vec.copy(arr[i]);
    else vec.set(0, 0, 0);
  }
  material.uniforms.uColorCount.value = arr.length;
}

export default function ColorBends({
  className,
  style,
  rotation = 90,
  speed = 0.2,
  colors = [],
  transparent = true,
  autoRotate = 0,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.15,
  iterations = 1,
  intensity = 1.5,
  bandWidth = 6
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const rafRef = useRef(null);
  const materialRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const rotationRef = useRef(rotation);
  const autoRotateRef = useRef(autoRotate);
  const pointerTargetRef = useRef(new THREE.Vector2(0, 0));
  const pointerCurrentRef = useRef(new THREE.Vector2(0, 0));
  const colorsRef = useRef(colors);
  colorsRef.current = colors;

  const settingsRef = useRef({
    speed,
    scale,
    frequency,
    warpStrength,
    mouseInfluence,
    parallax,
    noise,
    iterations,
    intensity,
    bandWidth,
    transparent
  });
  settingsRef.current = {
    speed,
    scale,
    frequency,
    warpStrength,
    mouseInfluence,
    parallax,
    noise,
    iterations,
    intensity,
    bandWidth,
    transparent
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const initial = settingsRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uColorsArray = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));

    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: initial.speed },
        uRot: { value: new THREE.Vector2(1, 0) },
        uColorCount: { value: 0 },
        uColors: { value: uColorsArray },
        uTransparent: { value: initial.transparent ? 1 : 0 },
        uScale: { value: initial.scale },
        uFrequency: { value: initial.frequency },
        uWarpStrength: { value: initial.warpStrength },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: initial.mouseInfluence },
        uParallax: { value: initial.parallax },
        uNoise: { value: initial.noise },
        uIterations: { value: Math.max(1, Math.min(5, initial.iterations | 0)) },
        uIntensity: { value: initial.intensity },
        uBandWidth: { value: initial.bandWidth }
      },
      transparent: true,
      depthTest: false,
      depthWrite: false
    });
    materialRef.current = material;
    applyColors(material, colorsRef.current);

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const isMobileGpu =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(max-width: 767px), (pointer: coarse)').matches;
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      // high-performance often fails / throttles on mobile GPUs
      powerPreference: isMobileGpu ? 'default' : 'high-performance',
      alpha: true,
      premultipliedAlpha: true,
      failIfMajorPerformanceCaveat: false,
      preserveDrawingBuffer: isMobileGpu
    });
    rendererRef.current = renderer;
    // Cap DPR harder on phones so the canvas actually paints under memory pressure
    const maxDpr = isMobileGpu ? 1.5 : 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    let elapsed = 0;
    let last = performance.now();
    let visible = true;
    let disposed = false;

    const readSize = () => {
      const rect = container.getBoundingClientRect();
      let w = Math.max(container.clientWidth || 0, Math.round(rect.width) || 0);
      let h = Math.max(container.clientHeight || 0, Math.round(rect.height) || 0);
      // Fixed wrappers can report 0 on first mobile layout; fall back to viewport.
      if (w < 2) w = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1);
      if (h < 2) h = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
      return { w, h };
    };

    const handleResize = () => {
      const { w, h } = readSize();
      renderer.setSize(w, h, false);
      material.uniforms.uCanvas.value.set(w, h);
      // Resize can happen after IntersectionObserver marked 0×0 as not visible —
      // paint immediately and restart the loop.
      if (!disposed && !document.hidden) {
        renderer.render(scene, camera);
        wake();
      }
    };

    const loop = now => {
      rafRef.current = null;
      if (disposed || !visible || document.hidden) return;

      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;
      elapsed += dt;
      material.uniforms.uTime.value = elapsed;

      const deg = (rotationRef.current % 360) + autoRotateRef.current * elapsed;
      const rad = (deg * Math.PI) / 180;
      material.uniforms.uRot.value.set(Math.cos(rad), Math.sin(rad));

      const cur = pointerCurrentRef.current;
      const tgt = pointerTargetRef.current;
      cur.lerp(tgt, Math.min(1, dt * 8));
      material.uniforms.uPointer.value.copy(cur);

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };

    const wake = () => {
      if (rafRef.current !== null || disposed || !visible || document.hidden) return;
      last = performance.now();
      rafRef.current = requestAnimationFrame(loop);
    };

    handleResize();

    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      resizeObserverRef.current = ro;
    } else {
      window.addEventListener('resize', handleResize);
    }
    window.addEventListener('orientationchange', handleResize);

    const handleVisibility = () => {
      if (!document.hidden) wake();
    };

    const visibility = new IntersectionObserver(
      entries => {
        const entry = entries.find(e => e.target === container) ?? entries[0];
        // Ignore "not intersecting" while the box is still 0×0 (common on mobile
        // before fixed/absolute layout settles) — that would permanently kill rAF.
        if (entry && !entry.isIntersecting) {
          const { w, h } = readSize();
          if (w <= 2 || h <= 2 || entry.boundingClientRect.height < 2) {
            visible = true;
            handleResize();
            return;
          }
        }
        visible = entries.some(e => e.isIntersecting);
        if (visible) wake();
      },
      { threshold: 0, rootMargin: '0px' }
    );
    visibility.observe(container);
    document.addEventListener('visibilitychange', handleVisibility);

    const onContextLost = e => {
      e.preventDefault();
      visible = false;
    };
    const onContextRestored = () => {
      visible = true;
      handleResize();
      wake();
    };
    renderer.domElement.addEventListener('webglcontextlost', onContextLost);
    renderer.domElement.addEventListener('webglcontextrestored', onContextRestored);

    // First paint immediately (don't wait only on rAF visibility quirks).
    renderer.render(scene, camera);
    wake();

    return () => {
      disposed = true;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      visibility.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('orientationchange', handleResize);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', onContextRestored);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      else window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const material = materialRef.current;
    if (!material) return;

    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;
    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uWarpStrength.value = warpStrength;
    material.uniforms.uMouseInfluence.value = mouseInfluence;
    material.uniforms.uParallax.value = parallax;
    material.uniforms.uNoise.value = noise;
    material.uniforms.uIterations.value = Math.max(1, Math.min(5, iterations | 0));
    material.uniforms.uIntensity.value = intensity;
    material.uniforms.uBandWidth.value = bandWidth;
    material.uniforms.uTransparent.value = transparent ? 1 : 0;
    applyColors(material, colors);
  }, [
    rotation,
    autoRotate,
    speed,
    scale,
    frequency,
    warpStrength,
    mouseInfluence,
    parallax,
    noise,
    iterations,
    intensity,
    bandWidth,
    colors,
    transparent
  ]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const handlePointerMove = e => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
      const y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
      pointerTargetRef.current.set(x, y);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`color-bends-container ${className ?? ''}`.trim()}
      style={style}
    />
  );
}
