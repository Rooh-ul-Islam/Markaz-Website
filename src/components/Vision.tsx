import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Award, Users, Quote } from 'lucide-react'
import Link from 'next/link'
export const Vision = () => {
    const founderInfo = {
        quote: "The Six core agendas reflects the love of Hazoor Sajjan Sain for all humanity. He is directing and preparing us for the future, which indeed is a blessing for all of us."
      }
  return (
    <div className=''>
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-teal-50 border-cyan-300 border-2 shadow-lg">
            <CardContent className="pt-6">
              <blockquote className="text-2xl italic text-center text-cyan-900">
                <Quote className="h-8 w-8 text-cyan-800 mb-4 mx-auto" />
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
          <h2 className="text-3xl md:text-7xl font-bold text-center mb-16 text-white 
          mt-36 underline decoration-cyan-400">
               Our Vision
           </h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            The message and teachings of Sajjan Sain are straightforward to understand. He says that one should consider their actions and exert effort in bettering oneself. One should not object not to speak ill of any other being, religion or sect. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[ 
              { icon: BookOpen, title: "Education", description: "Education is an essential component of an Islamic society." },
              { icon: Users, title: "Social Welfare", description: "Social welfare is concerned with welfare and well-being of the poor, vulnerable and marginalized segments of society." },
              { icon: Award, title: "Environment Tolerance", description: "Contributing toward a welfare state by reforming ourselves and making our environment better comes up with environmental tolerance." }
            ].map((item, index) => (
              <Card key={index} className="bg-cyan-900 border-cyan-500 shadow-lg">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-cyan-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/contact" passHref>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
              Contact Us to Learn More
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
