"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import ProjectFilter from "@/components/project-filter"

// IMPORTANT: disable SSR for 3D component (fixes ReactThreeFiber crash)
const ProjectGalaxy = dynamic(
  () => import("@/components/3d/project-galaxy"),
  { ssr: false }
)

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  return (
    <section
      id="projects"
      className="py-20 relative min-h-screen overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">
            My Project Galaxy
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
            Explore my featured projects in an immersive futuristic experience.
          </p>

          <p className="text-white/50 max-w-2xl mx-auto mb-10">
            Built using Next.js, React, Tailwind CSS, Framer Motion, Three.js.
          </p>

          <ProjectFilter
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { title: "Projects", value: "15+" },
            { title: "Technologies", value: "20+" },
            { title: "Experience", value: "2+ Years" },
            { title: "Clients", value: "10+" },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-morphism rounded-2xl border border-white/10 p-6 text-center"
            >
              <h3 className="text-3xl font-bold liquid-gradient mb-2">
                {item.value}
              </h3>
              <p className="text-white/60 text-sm">{item.title}</p>
            </div>
          ))}
        </motion.div>

        {/* 3D SECTION (SAFE FIX) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="h-[650px] w-full rounded-3xl overflow-hidden border border-white/10 glass-morphism"
        >
          
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-white/50 text-lg">
            🚀 Continuously building innovative digital experiences.
          </p>
        </motion.div>

      </div>
    </section>
  )
}