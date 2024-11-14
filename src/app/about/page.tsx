'use client'

import { motion } from 'framer-motion'

import About from '@/components/About'
import Extracurricular from '@/components/Extracurricular'
import JoinUs from '@/components/JoinUs'

export default function AdmissionsPage() {


  return (
    <div className="min-h-screen bg-cyan-700 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        
        <About />
         
         <Extracurricular />

    
       <JoinUs />
        


      </motion.div>
    </div>
  )
}
