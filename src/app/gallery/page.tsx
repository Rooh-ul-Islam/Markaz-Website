'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const horizontalImages = [
    { src: '/grad.jpeg', alt: 'Graduation ceremony' },
    { src: '/com.jpeg', alt: 'Student activities' },
    { src: '/trip.jpeg', alt: 'Trip' },
    { src: '/visits.jpeg', alt: 'Library interior' },
    { src: '/tailor.jpeg', alt: 'Tailor' },
    { src: '/plantation.jpeg', alt: 'Plantation' },
    { src: '/1.jpeg', alt: 'Graduation ceremony' },
    { src: '/2.jpeg', alt: 'Student activities' },
    { src: '/3.jpeg', alt: 'Trip' },
    { src: '/4.jpeg', alt: 'Library interior' },
    { src: '/5.jpeg', alt: 'Tailor' },
    { src: '/6.jpeg', alt: 'Plantation' },
    { src: '/7.jpeg', alt: 'Graduation ceremony' },
    { src: '/8.jpeg', alt: 'Student activities' },
    { src: '/11.jpeg', alt: 'Tailor' },
    { src: '/12.jpeg', alt: 'Plantation' },
    { src: '/14.jpeg', alt: 'Library interior' },
    { src: '/15.jpeg', alt: 'Tailor' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-900 text-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 mt-44 text-white drop-shadow-lg">Our Gallery</h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {horizontalImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-cyan-800 border-cyan-600 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="w-full p-0 h-auto" onClick={() => setSelectedImage(image.src)}>
                          <div className="w-full h-72 relative">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              layout="fill"
                              objectFit="cover"
                              className="transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-cyan-900 border-cyan-600">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-white">{image.alt}</DialogTitle>
                        </DialogHeader>
                        {selectedImage && (
                          <div className="relative w-full h-96">
                            <Image
                              src={selectedImage}
                              alt={image.alt}
                              layout="fill"
                              objectFit="contain"
                              className="w-full h-full"
                            />
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>            
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
