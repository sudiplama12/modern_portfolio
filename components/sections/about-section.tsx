"use client"

import { motion } from "framer-motion"
import InteractiveTimeline from "@/components/interactive-timeline"
import LiveGitHubWidget from "@/components/widgets/live-github-widget"
import CurrentlyLearningWidget from "@/components/widgets/currently-learning-widget"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
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
            About Me
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
            I'm Sudip Lama, a passionate Full Stack Developer and
            creative tech enthusiast from Nepal who loves building
            futuristic, interactive, and high-performance web
            applications.
          </p>

          {/* Extra Description */}
          <p className="text-white/50 max-w-2xl mx-auto">
            I specialize in Next.js, React, Tailwind CSS, Node.js,
            MongoDB, Three.js, and modern UI/UX design with smooth
            animations and immersive experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            {
              title: "Projects",
              value: "2",
            },
            {
              title: "Technologies",
              value: "10+",
            },
            {
              title: "Experience",
              value: "1 Years",
            },
            {
              title: "Learning",
              value: "AI + 3D",
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <InteractiveTimeline />
        </motion.div>

        {/* Widgets */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Widget */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glass-morphism rounded-3xl border border-white/10 p-2"
          >
            <LiveGitHubWidget />
          </motion.div>

          {/* Learning Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="glass-morphism rounded-3xl border border-white/10 p-2"
          >
            <CurrentlyLearningWidget />
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/50 italic">
            "Turning imagination into immersive digital experiences."
          </p>
        </motion.div>
      </div>
    </section>
  )
}