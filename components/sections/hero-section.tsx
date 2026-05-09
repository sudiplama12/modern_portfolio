"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Rocket, AlertCircle } from "lucide-react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/3d/particle-background"),
  { ssr: false }
);

const HolographicAvatar = dynamic(
  () => import("@/components/3d/holographic-avatar"),
  { ssr: false }
);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const check = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl")
        );
      } catch {
        return false;
      }
    };

    setWebglSupported(check());
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* WARNING */}
      {!webglSupported && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 z-20"
        >
          <div className="glass-morphism border-yellow-400/50 rounded-lg p-3 max-w-md mx-auto">
            <div className="flex items-center gap-2 text-yellow-400">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">
                3D features unavailable - fallback mode
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <HolographicAvatar />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 liquid-gradient font-sora"
          >
            Sudip Lama
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-white/80 mb-8">
            Frontend Developer • Designer • AI Enthusiast
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="glass-morphism text-white border-cyan-400 bg-transparent"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-morphism text-white border-purple-400 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              CV soon
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}