"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: WebAssembly and Beyond",
    excerpt:
      "Exploring how WebAssembly is revolutionizing web performance and opening new possibilities for web applications.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["WebAssembly", "Performance", "Future Tech"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

const openSourceProjects = [
  {
    name: "webgl-particle-system",
    description: "High-performance particle system using WebGL",
    stars: 156,
    language: "JavaScript",
  },
  {
    name: "ai-code-assistant",
    description: "VS Code extension for AI-powered code completion",
    stars: 89,
    language: "TypeScript",
  },
]

export default function BlogSection() {
  const [grid, setGrid] = useState<number[]>([])

  useEffect(() => {
    setGrid(Array.from({ length: 150 }, () => Math.random()))
  }, [])

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">
            Blog & Open Source
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sharing knowledge through articles and contributing to the open source community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* BLOG */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              📝 Latest Articles
            </h3>

            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="glass-morphism border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 gap-4">

                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-32 md:h-full object-cover rounded-l-lg"
                        />

                        <div className="md:col-span-2 p-6">
                          <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                            {post.title}
                          </h4>

                          <p className="text-white/70 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-white/10 text-white"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="glass-morphism border-cyan-400 text-cyan-400 bg-transparent"
                          >
                            Read More
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* OPEN SOURCE */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              🔓 Open Source Contributions
            </h3>

            <div className="space-y-4 mb-8">
              {openSourceProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="glass-morphism border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          {project.name}
                        </h4>
                        <div className="text-yellow-400">⭐ {project.stars}</div>
                      </div>

                      <p className="text-white/70 mb-3">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <Badge className="bg-white/10 text-white">
                          {project.language}
                        </Badge>

                        <Button variant="ghost" size="sm" className="text-purple-400">
                          View on GitHub
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* SAFE HEATMAP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Card className="glass-morphism border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">
                    📊 Contribution Activity
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-12 gap-1">
                    {grid.map((val, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-sm ${
                          val > 0.7
                            ? "bg-green-400"
                            : val > 0.5
                            ? "bg-green-400/60"
                            : val > 0.3
                            ? "bg-green-400/30"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-white/60 text-sm mt-4">
                    100 contributions in the last year
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}