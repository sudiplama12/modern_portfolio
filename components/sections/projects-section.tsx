"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectGalaxy from "@/components/3d/project-galaxy"
import ProjectFilter from "@/components/project-filter"

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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">
            My Project Galaxy
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
            Explore my featured projects in an immersive futuristic
            experience. Each project represents my creativity,
            problem-solving skills, and passion for modern web
            development.
          </p>

          {/* Extra Description */}
          <p className="text-white/50 max-w-2xl mx-auto mb-10">
            Built using Next.js, React, Tailwind CSS, Framer Motion,
            Three.js, Node.js, and MongoDB.
          </p>

          {/* Filter */}
          <ProjectFilter
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            {
              title: "Projects",
              value: "15+",
            },
            {
              title: "Technologies",
              value: "20+",
            },
            {
              title: "Experience",
              value: "2+ Years",
            },
            {
              title: "Clients",
              value: "10+",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-morphism rounded-2xl border border-white/10 p-6 text-center"
            >
              <h3 className="text-3xl font-bold liquid-gradient mb-2">
                {item.value}
              </h3>

              <p className="text-white/60 text-sm">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 3D Galaxy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="h-[650px] w-full rounded-3xl overflow-hidden border border-white/10 glass-morphism"
        >
          <ProjectGalaxy selectedFilter={selectedFilter} />
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
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