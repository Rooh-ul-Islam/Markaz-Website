'use client'

import { motion } from 'framer-motion'

export default function DonationBanner() {
  return (
    <section className="bg-cyan-800 text-cyan-50 py-16 px-6 sm:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center"
      >
        <div className="text-5xl font-bold mb-6 relative inline-block">
          <h2>Support Markaz Rooh-ul-Islam Jamia</h2>
          <span className="absolute bottom-0 left-0 w-full h-1 mt-2 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full" />
        </div>

        <p className="text-lg md:text-xl text-cyan-200 mb-6">
          Markaz Rooh-ul-Islam Jamia has been serving the religion of Islam and the nation with its own help and limited resources. Despite the financial struggles, it continues to provide essential services to students and the community.
        </p>
        
        <p className="text-lg md:text-xl text-cyan-200 mb-6">
          The institution is facing numerous challenges, especially in covering <strong>hostel and ration expenses</strong> for students, which are becoming increasingly difficult to manage. Every year, the institution faces <strong>high expenses and low income</strong>, leading to a constant debt cycle. Your support can make a significant difference!
        </p>
      </motion.div>
    </section>
  )
}
