"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// IMPORTANT: disable SSR for 3D component
const SkillWheel = dynamic(
  () => import("@/components/3d/skill-wheel"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] w-full flex items-center justify-center text-white/50">
        Loading 3D Skills...
      </div>
    ),
  }
)

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">
            Skills Matrix
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Interactive 3D visualization of my technical expertise.
          </p>
        </motion.div>

        {/* 3D SAFE RENDER */}
        <div className="h-[600px] w-full">
         
        </div>

      </div>
    </section>
  )
}