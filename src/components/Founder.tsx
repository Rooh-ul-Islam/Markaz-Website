import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
const Founder = () => {
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
        ]
      }
  return (
    <div>
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 text-white 
          mt-36 underline decoration-cyan-500">
               Our Founder
           </h2>
         
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
            <Card className="bg-cyan-900 border-cyan-500 shadow-lg ">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-white">{founderInfo.name}</CardTitle>
                <CardDescription className="text-xl text-cyan-100">{founderInfo.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-100 text-lg mb-6">{founderInfo.bio}</p>
                <h3 className="text-2xl font-semibold mb-4 text-white">6 Core Agendas</h3>
                <ul className="list-disc list-inside space-y-2 text-cyan-100">
                  {founderInfo.agendas.map((agenda, index) => (
                    <li key={index}>{agenda}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        </div>
  )
}

export default Founder
