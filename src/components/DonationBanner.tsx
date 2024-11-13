'use client'

import { motion } from 'framer-motion'

export default function DonationBanner() {
  return (
    <div className="bg-cyan-700 text-cyan-50 py-16 px-6 sm:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
          Support Markaz Rooh-ul-Islam Jamia
        </h2>
        
        <p className="text-lg md:text-xl text-cyan-200 mb-6">
          Markaz Rooh-ul-Islam Jamia has been serving the religion of Islam and the nation with its own help and limited resources. Despite the financial struggles, it continues to provide essential services to students and the community.
        </p>
        
        <p className="text-lg md:text-xl text-cyan-200 mb-6">
          The institution is facing numerous challenges, especially in covering **hostel and ration expenses** for students, which are becoming increasingly difficult to manage. Every year, the institution faces **high expenses and low income**, leading to a constant debt cycle. Your support can make a significant difference!
        </p>


      </motion.div>
    </div>
  )
}
