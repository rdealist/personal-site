"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { vertexShader, fragmentShader } from "./koi-shaders";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

// -----------------------------------------------------------------------------
// Fluid Plane Component
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Fluid Plane Component
// -----------------------------------------------------------------------------

interface FluidPlaneProps {
  palette: string[];
}

const FluidPlane = ({ palette }: FluidPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, viewport } = useThree();

  // Convert hex strings to Three.js Colors once when palette changes
  const paletteColors = useMemo(() => {
    return palette.map(c => new THREE.Color(c));
  }, [palette]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uColor1: { value: new THREE.Color(palette[0]) },
      uColor2: { value: new THREE.Color(palette[1]) },
      uScale: { value: 1.0 },
    }),
    [size.width, size.height, palette]
  );

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();

      // Update Uniforms
      // @ts-ignore
      meshRef.current.material.uniforms.uTime.value = time;
      // @ts-ignore
      meshRef.current.material.uniforms.uResolution.value.set(
        size.width * state.viewport.dpr,
        size.height * state.viewport.dpr
      );

      // Color Cycling Logic
      // Cycle speed
      const speed = 0.2;
      const t = time * speed;

      // Calculate indices for interpolation
      const len = paletteColors.length;
      const idx1 = Math.floor(t % len);
      const idx2 = (idx1 + 1) % len;
      const idx3 = (idx1 + 2) % len;

      // Interpolation factor
      const alpha = t % 1;

      // Color 1: Smooth transition through palette
      const color1 = new THREE.Color().copy(paletteColors[idx1]).lerp(paletteColors[idx2], alpha);

      // Color 2: Offset by one step for contrast
      const color2 = new THREE.Color().copy(paletteColors[idx2]).lerp(paletteColors[idx3], alpha);

      // @ts-ignore
      meshRef.current.material.uniforms.uColor1.value.copy(color1);
      // @ts-ignore
      meshRef.current.material.uniforms.uColor2.value.copy(color2);
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

// -----------------------------------------------------------------------------
// Main Background Component
// -----------------------------------------------------------------------------

export const KoiBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Misaki-compliant Color Palettes
  const palettes = useMemo(() => {
    return {
      light: [
        "#FF4D94", // Misaki Pink
        "#3399FF", // Misaki Blue
        "#4F46E5", // Indigo (Complementary)
        "#06B6D4", // Cyan (Vibrant)
      ],
      dark: [
        "#2563EB", // Vivid Blue
        "#7C3AED", // Violet
        "#DB2777", // Pink-700
        "#0891B2", // Cyan-600
      ]
    };
  }, []);

  const activePalette = useMemo(() => {
    return theme === 'dark' ? palettes.dark : palettes.light;
  }, [theme, palettes]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 bg-background transition-colors duration-500">
      <Canvas
        dpr={[1, 2]}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        gl={{
          antialias: true,
          alpha: true,
          // Linear encoding for smoother gradients
          outputColorSpace: THREE.LinearSRGBColorSpace
        }}
      >
        <FluidPlane
          palette={activePalette}
        />
      </Canvas>

      {/* Visual Polish Layers */}

      {/* 1. Noise Grain for Texture */}
      <NoiseOverlay opacity={0.04} />

      {/* 2. Radial Gradient Vignette (Focus attention to center) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 20%, ${theme === 'dark' ? 'rgba(10,14,23,0.7)' : 'rgba(255,255,255,0.6)'} 100%)`
        }}
      />

      {/* 3. Subtle Blur to soften digital edges */}
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />
    </div>
  );
};
