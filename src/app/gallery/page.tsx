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
import { useState } from "react";

export default function GalleryPage() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const horizontalImages = [
		{ src: "/grad.jpeg", alt: "Gallery Image" },
		{ src: "/com.jpeg", alt: "Gallery Image" },
		{ src: "/trip.jpeg", alt: "Gallery Image" },
		{ src: "/visits.jpeg", alt: "Gallery Image" },
		{ src: "/tailor.jpeg", alt: "Gallery Image" },
		{ src: "/plantation.jpeg", alt: "Gallery Image" },
		{ src: "/1.jpeg", alt: "Gallery Image" },
		{ src: "/2.jpeg", alt: "Gallery Image" },
		{ src: "/3.jpeg", alt: "Gallery Image" },
		{ src: "/4.jpeg", alt: "Gallery Image" },
		{ src: "/5.jpeg", alt: "Gallery Image" },
		{ src: "/6.jpeg", alt: "Gallery Image" },
		{ src: "/7.jpeg", alt: "Gallery Image" },
		{ src: "/8.jpeg", alt: "Gallery Image" },
		{ src: "/11.jpeg", alt: "Gallery Image" },
		{ src: "/12.jpeg", alt: "Gallery Image" },
		{ src: "/14.jpeg", alt: "Gallery Image" },
		{ src: "/15.jpeg", alt: "Gallery Image" },
	];

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
												<Button
													variant="ghost"
													className="w-full p-0 h-auto"
													onClick={() => setSelectedImage(image.src)}
												>
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
													<DialogTitle className="text-2xl font-bold text-white">
														{image.alt}
													</DialogTitle>
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
	);
}