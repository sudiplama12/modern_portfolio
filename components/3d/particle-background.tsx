"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import type * as THREE from "three";

// -------------------- PARTICLES --------------------
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 1000;

  // ✅ FIX: stable data (NO re-random on render)
  const positions = useMemo(() => {
    const arr = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 15;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

// -------------------- CONSTELLATION --------------------
function CodeConstellation() {
  const ref = useRef<THREE.Group>(null);

  // ✅ FIX: stable positions
  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
    }));
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={ref}>
      {stars.map((s, i) => (
        <mesh key={i} position={s.position}>
          <boxGeometry args={[0.05, 0.05, 0.05]} />
          <meshBasicMaterial color="#ff00ff" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

// -------------------- FALLBACK (NO WEBGL) --------------------
function FallbackParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// -------------------- MAIN COMPONENT --------------------
export default function ParticleBackground() {
  const [webglSupported, setWebglSupported] = useState(true);
  const [canvasError, setCanvasError] = useState(false);

  useEffect(() => {
    // WebGL check (safe)
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  const handleCanvasError = () => {
    setCanvasError(true);
    setWebglSupported(false);
  };

  // fallback mode
  if (!webglSupported || canvasError) {
    return <FallbackParticles />;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: "transparent" }}
      onError={handleCanvasError}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      dpr={[1, 1.5]}
    >
      <ParticleField />
      <CodeConstellation />
    </Canvas>
  );
}