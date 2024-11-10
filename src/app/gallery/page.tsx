'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const horizontalImages = [
    { src: '/grad.jpeg', alt: 'Graduation ceremony' },
    { src: '/com.jpeg', alt: 'Student activities' },
    { src: '/trip.jpeg', alt: 'Trip' },
    { src: '/visits.jpeg', alt: 'Library interior' },
    { src: '/tailor.jpeg', alt: 'Tailor' },
    
    { src: '/plantation.jpeg', alt: 'Plantation' },
  ]

  

  return (
    <div className="min-h-screen bg-gradient-to-b pt-15 from-[#04002a] to-[#090047] text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Our Gallery</h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {horizontalImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gray-800 border-blue-500 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="w-full p-0 h-auto">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-gray-900 border-blue-500">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-white">{image.alt}</DialogTitle>
                        </DialogHeader>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1000}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Experience Our Campus</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These images offer a glimpse into the vibrant life and beautiful architecture of our institution. 
            We invite you to visit and experience the inspiring atmosphere firsthand.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
            Schedule a Campus Tour
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}