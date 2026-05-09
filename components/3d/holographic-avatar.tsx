"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HolographicAvatar() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Outer holographic ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
      />

      {/* Inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-2 rounded-full border border-purple-400/40"
      />

      {/* Avatar */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-4 rounded-full overflow-hidden flex items-center justify-center bg-black/30"
      >
        <Image
          src="/profile.jpeg"
          alt="Profile"
          width={120}
          height={120}
          priority
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl animate-pulse" />
    </div>
  );
}