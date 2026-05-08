"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HolographicAvatar() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Holographic Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-2 rounded-full border border-purple-400/40"
      />

      {/* Avatar Container */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute inset-4 rounded-full glass-morphism overflow-hidden flex items-center justify-center"
      >
        <Image
          src="/profile.jpeg"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl animate-pulse" />
    </div>
  )
}