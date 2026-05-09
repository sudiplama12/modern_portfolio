"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Rocket, AlertCircle } from "lucide-react";
import { isWebGLSupported } from "@/lib/webgl-utils";
import dynamic from "next/dynamic";

// ✅ FIX: dynamic imports (CRITICAL for Vercel + SSR)
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
    setWebglSupported(isWebGLSupported());
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background (SAFE NOW) */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* WebGL Warning */}
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
                3D features unavailable - displaying in 2D mode
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <HolographicAvatar />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 liquid-gradient font-sora"
          >
            Sudip Lama
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-8 font-light"
          >
            Frontend Developer • Junior Graphic Designer • AI Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-white/60 max-w-2xl mx-auto mb-10 text-lg"
          >
            I create modern, responsive, and futuristic web experiences using
            Next.js, React, Tailwind CSS, Node.js, and AI-powered technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="glass-morphism text-white border-cyan-400 px-8 py-4 text-lg bg-transparent"
            >
              <Rocket className="mr-2 h-5 w-5" />
              🚀 Explore My Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-morphism text-white border-purple-400 px-8 py-4 text-lg bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              📄 CV soon
            </Button>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {[
              "Next.js",
              "React",
              "C",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "SQL",
              "JAVA",
              "Framer Motion",
              "PHP",
            ].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 rounded-full glass-morphism border border-white/10 text-white/70 text-sm"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}