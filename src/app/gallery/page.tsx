"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { v2 as cloudinary } from 'cloudinary-react';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
});

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  format: string;
  resource_type: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImagesFromCloudinary();
  }, []);

  const fetchImagesFromCloudinary = async () => {
    try {
      const response = await fetch('/api/cloudinary-images');
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 mt-44 text-white drop-shadow-lg">
          Gallery
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <motion.div
                key={image.public_id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-cyan-800 border-cyan-600 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full p-0 h-auto"
                          onClick={() => setSelectedImage(image.secure_url)}
                        >
                          <div className="w-full h-72 relative">
                            <Image
                              src={cloudinary.url(image.public_id, {
                                width: 400,
                                height: 288,
                                crop: 'fill'
                              })}
                              alt={image.public_id}
                              layout="fill"
                              objectFit="cover"
                              className="transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-cyan-900 border-cyan-600">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-white">
                            Image Details
                          </DialogTitle>
                        </DialogHeader>
                        {selectedImage && (
                          <div className="relative w-full h-96">
                            <Image
                              src={selectedImage}
                              alt="Selected Image"
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
  );
}