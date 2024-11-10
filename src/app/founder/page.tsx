'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Award, Users, Quote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FounderPage() {
  const founderInfo = {
    name: "Sajjan Sain",
    title: "Founder",
    image: "/Patron-inChief.jpeg",
    bio: "Sajjan Saeen, real name (Khawaja) Muhammad Tahir Bakhshi Naqshbandi. He was born on March 21st 1963, in District Larkana, Pakistan. He belongs to the Mujaddidi branch of the Naqshbandi Sufi order. His spiritual lineage goes back to the Holy Prophet Muhammad (PBUH) through Sheikh Ahmad Sirhindi, the Mujjadid of the eleventh Hijri century.",
    agendas: [
      "Health",
      "Education",
      "Business",
      "Social Welfare",
      "Environment Tolerance",
      "Use of scientific education and inventions"
    ],
    quote: "The Six core agendas reflects the love of Hazoor Sajjan Sain for all humanity. He is directing and preparing us for the future, which indeed is a blessing for all of us."
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#04002a] to-[#090047] text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Our Founder</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src={founderInfo.image}
              alt={founderInfo.name}
              width={450}
              height={500}
              className="rounded-lg shadow-2xl mx-auto lg:mx-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-blue-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-white">{founderInfo.name}</CardTitle>
                <CardDescription className="text-xl text-gray-300">{founderInfo.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg mb-6">{founderInfo.bio}</p>
                <h3 className="text-2xl font-semibold mb-4 text-white">6 Core Agendas</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {founderInfo.agendas.map((agendas, index) => (
                    <li key={index}>{agendas}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-gray-800 border-blue-500 shadow-lg">
            <CardContent className="pt-6">
              <blockquote className="text-2xl italic text-center text-gray-300">
                <Quote className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
                {founderInfo.quote}
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Our Vision</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The message and teachings of Sajjan Sain are straightforward to understand. He says that one should consider their actions and exert effort in bettering oneself. One should not object not to speak ill of any other being, religion or sect. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: BookOpen, title: "Education", description: "Education is an essential component of an Islamic society." },
              { icon: Users, title: "Social Welfare", description: "ocial welfare is concerned with welfare and well-being of the poor, vulnerable and marginalized segments of society." },
              { icon: Award, title: "Environment Tolerance", description: "Contributing toward a welfare state by reforming ourselves and making our environment better comes up with environmental tolerance. " }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border-blue-500 shadow-lg">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/contact" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
              Contact Us to Learn More
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}