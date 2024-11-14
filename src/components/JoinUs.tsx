import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const JoinUs = () => {
  return (
    <div>
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-cyan-200 underline decoration-light-blue-500">
            Ready to Join?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply" passHref>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                Start Application
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button className="bg-cyan-500 hover:bg-cyan-800 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
    </div>
  )
}

export default JoinUs
