"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { MasonryLayout } from "@/components/MasonryLayout"
import { ChevronDown, ChevronUp } from "lucide-react"

const categories = ["All", "Trainings", "Events", "Travel", "People"]

interface GalleryImage {
  src: string
  alt: string
  category: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState("All")
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  const images: GalleryImage[] = [
    { src: "/grad.jpeg", alt: "Graduation", category: "Events" },
    { src: "/com.jpeg", alt: "Community", category: "People" },
    { src: "/trip.jpeg", alt: "Trip", category: "Travel" },
    { src: "/visits.jpeg", alt: "Visits", category: "Travel" },
    { src: "/tailor.jpeg", alt: "Tailor", category: "People" },
    { src: "/plantation.jpeg", alt: "Plantation", category: "Nature" },
    { src: "/1.jpeg", alt: "Nature Scene 1", category: "Nature" },
    { src: "/2.jpeg", alt: "Nature Scene 2", category: "Trainings" },
    { src: "/3.jpeg", alt: "Event 1", category: "Events" },
    { src: "/4.jpeg", alt: "Travel Destination 1", category: "Travel" },
    { src: "/5.jpeg", alt: "People 1", category: "People" },
    { src: "/6.jpeg", alt: "Nature Scene 3", category: "Nature" },
    { src: "/7.jpeg", alt: "Event 2", category: "Events" },
    { src: "/8.jpeg", alt: "Travel Destination 2", category: "Travel" },
    { src: "/11.jpeg", alt: "People 2", category: "Trainings" },
    { src: "/12.jpeg", alt: "Nature Scene 4", category: "Nature" },
    { src: "/13.jpeg", alt: "Nature Scene 4", category: "Trainings" },
    { src: "/14.jpeg", alt: "Event 3", category: "Events" },
    { src: "/15.jpeg", alt: "Travel Destination 3", category: "Travel" },
    { src: "/16.jpg", alt: "Gallery Image", category: "Events" },
		{ src: "/17.jpg", alt: "Gallery Image", category: "Events" },
    { src: "/18.jpg", alt: "Gallery Image", category: "Events" },
		{ src: "/19.jpg", alt: "Gallery Image" , category: "Events"}
  ]

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const filteredImages = images.filter((image) => filter === "All" || image.category === filter)

  const displayedImages = expanded ? filteredImages : filteredImages.slice(0, 6)

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-900 text-white py-12 px-4 sm:px-6 lg:px-8"
      id="gallery-page"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 mt-24 text-white drop-shadow-lg">Gallery</h1>

        <div className="flex justify-center mb-8 space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => {
                setFilter(category)
                setExpanded(false)
              }}
              variant={filter === category ? "default" : "outline"}
              className="text-sm bg-cyan-100 text-cyan-500 hover:bg-white"
            >
              {category}
            </Button>
          ))}
        </div>

        <AnimatePresence>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-cyan-700 h-72 rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : (
            <>
              <MasonryLayout>
                {displayedImages.map((image, index) => (
                  <Card key={index} className="bg-cyan-800 border-cyan-600 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" className="w-full p-0 h-auto" onClick={() => setSelectedImage(image)}>
                            <div className="w-full aspect-[3/4] relative">
                              <Image
                                src={image.src || "/placeholder.svg"}
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
                            <DialogTitle className="text-2xl font-bold text-white">{selectedImage?.alt}</DialogTitle>
                          </DialogHeader>
                          {selectedImage && (
                            <div className="relative w-full h-[80vh]">
                              <Image
                                src={selectedImage.src || "/placeholder.svg"}
                                alt={selectedImage.alt}
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
                ))}
              </MasonryLayout>
              {filteredImages.length > 6 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center mt-8"
                >
                  <Button
                    onClick={() => setExpanded(!expanded)}
                    variant="outline"
                    className=" border-white text-cyan-400 hover:bg-white hover:text-cyan-900"
                  >
                    {expanded ? (
                      <>
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        Show More
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

