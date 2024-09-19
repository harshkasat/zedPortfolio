"use client"

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Code, Cpu, Globe } from "lucide-react"

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default function Component() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-8">
          <a href="/"><h1 className="text-3xl font-bold">ANPR</h1></a>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="demo">Demo</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-muted-foreground">
                    CoolProject is a revolutionary application that combines cutting-edge technology with sleek design. 
                    It's built to solve complex problems while providing an intuitive user experience.
                  </p>
                </TabsContent>
                <TabsContent value="features" className="mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {['Advanced AI algorithms', 'Real-time data processing', 'Cross-platform compatibility', 'Blockchain integration'].map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center space-x-2"
                      >
                        <Code className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="demo" className="mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Project Demo</h2>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    //   frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      title="Project Demo Video"
                      className="w-full h-full rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="lg:sticky lg:top-8 h-fit">
            <CardContent className="p-6 space-y-6">
              <div className="h-64 w-full">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <OrbitControls />
                  <Cube />
                </Canvas>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Tech Stack</h3>
                <div className="flex space-x-2">
                  {['React', 'Node.js', 'MongoDB'].map((tech, index) => (
                    <Button key={index} variant="outline" size="sm">
                      <Cpu className="mr-2 h-4 w-4" />
                      {tech}
                    </Button>
                  ))}
                </div>
              </div>
                <Button className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                <a href="https://github.com/harshkasat/InscribeAI.git" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                </Button>
              {/* </a> */}
              <Button variant="outline" className="w-full">
                <Globe className="mr-2 h-4 w-4" />
                <a href="https://inscribe-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                Live Demo
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <motion.div style={{ opacity }} className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose CoolProject?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovative', description: 'Cutting-edge technology at your fingertips' },
              { title: 'Scalable', description: 'Grows with your needs, from startup to enterprise' },
              { title: 'User-Friendly', description: 'Intuitive design for the best user experience' }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}