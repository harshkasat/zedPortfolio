"use client"

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Code, Cpu, Globe } from "lucide-react"

function EnhancedCube() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <MeshDistortMaterial 
        color="#ffffff"
        roughness={0.1}
        metalness={0.8}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1}
        distort={0.4}
      />
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
          <a href="/"><h1 className="text-3xl font-bold">ANPR   (Automatic Number Plate Recognition System)</h1></a>
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
                  ANPR (Automatic Number Plate Recognition) is a technology that uses cameras and 
                  software to read and interpret vehicle registration plates. It is widely used in law enforcement, 
                  traffic management, toll collection, and parking enforcement. ANPR can quickly identify and track vehicles of interest, 
                  making it a valuable tool for improving public safety and security.                    
                  </p>
                </TabsContent>
                <TabsContent value="features" className="mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {['A Jupyter Notebook-based system for detecting and recognizing vehicle license plates.', 
                    'Image collection via a webcam using the Image Collection.ipynb notebook.', 
                    'Training and detection using pre-labeled datasets (from Kaggle) with Training and Detection.ipynb.', 
                    'Dependency management through a requirements.txt file for easy setup.',
                    'Python environment setup instructions with virtual environment support.'].map((feature, index) => (
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
                  <div className="w-full h-0 pb-[56.25%] relative">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      title="Project Demo Video"
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="lg:sticky lg:top-8 h-fit">
            <CardContent className="p-6 space-y-6">
              <div className="h-64 w-full">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <pointLight position={[-10, -10, -10]} />
                  <EnhancedCube />
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'OpenCV', 'TensorFlow/Keras', 'NumPy', 'Matplotlib'].map((tech, index) => (
                    <Button key={index} variant="outline" size="sm" className="bg-black text-white border-gray-600">
                      <Code className="mr-2 h-4 w-4" />
                      {tech}
                    </Button>
                  ))}
                </div>
              </div>
                <Button className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                <a href="https://github.com/harshkasat/ascii-video-converter/" target="_blank" rel="noopener noreferrer">
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

        {/* <motion.div style={{ opacity }} className="mt-16">
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
        </motion.div> */}
      </div>
    </div>
  )
}