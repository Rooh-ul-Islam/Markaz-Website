"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const horizontalImages = [
    { src: "/grad.jpeg", alt: "Graduation Image" },
    { src: "/com.jpeg", alt: "Community Image" },
    { src: "/trip.jpeg", alt: "Trip Image" },
    { src: "/visits.jpeg", alt: "Visits Image" },
    { src: "/tailor.jpeg", alt: "Tailor Image" },
    { src: "/plantation.jpeg", alt: "Plantation Image" },
    { src: "/1.jpeg", alt: "Nature Scene 1" },
    { src: "/2.jpeg", alt: "Nature Scene 2" },
    { src: "/3.jpeg", alt: "Event 1" },
    { src: "/4.jpeg", alt: "Travel Destination 1" },
    { src: "/5.jpeg", alt: "People 1" },
    { src: "/6.jpeg", alt: "Nature Scene 3" },
    { src: "/7.jpeg", alt: "Event 2" },
    { src: "/8.jpeg", alt: "Travel Destination 2" },
    { src: "/11.jpeg", alt: "People 2" },
    { src: "/12.jpeg", alt: "Nature Scene 4" },
    { src: "/13.jpeg", alt: "Nature Scene 5" },
    { src: "/14.jpeg", alt: "Event 3" },
    { src: "/15.jpeg", alt: "Travel Destination 3" },
    { src: "/16.jpeg", alt: "Gallery Image 16" },
    { src: "/17.jpeg", alt: "Gallery Image 17" },
    { src: "/18.jpeg", alt: "Gallery Image 18" },
    { src: "/19.jpeg", alt: "Gallery Image 19" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 mt-44 text-white drop-shadow-lg">Gallery</h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {horizontalImages.map((image, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="bg-cyan-800 border-cyan-600 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full p-0 h-auto"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <div className="w-full h-72 relative">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-110"
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
                              src={selectedImage || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-contain w-full h-full"
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

