'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, DollarSign, CreditCard } from 'lucide-react'

export default function DonationSection() {
  const [donationAmount, setDonationAmount] = useState<number | string>('')

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for your generous donation of $${donationAmount}!`)
    // Here, you would integrate payment processing logic (Stripe, PayPal, etc.)
  }

  return (
    <div className=" text-cyan-900 py-16 px-6 sm:px-12 lg:px-16">
        <div className='bg-cyan-700  p-12 rounded-2xl border-cyan-300 border-2 '>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-8 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
          Support Our Cause
        </h2>
        <p className="text-lg md:text-xl text-cyan-200 mb-6">
          Your generous donation will help us continue our work and support communities in need. Every little bit counts!
        </p>

        {/* Donation Options */}
        <div className="flex justify-center gap-8 mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-600 text-cyan-50 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition duration-300 transform"
            onClick={() => setDonationAmount(10)}
          >
            $10
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-600 text-cyan-50 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition duration-300 transform"
            onClick={() => setDonationAmount(25)}
          >
            $25
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-600 text-cyan-50 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition duration-300 transform"
            onClick={() => setDonationAmount(50)}
          >
            $50
          </motion.button>
        </div>

        <p className="text-lg text-cyan-200 mb-6">Or enter a custom amount:</p>
        
        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="flex justify-center gap-4 items-center">
          <input
            type="number"
            value={donationAmount}
            onChange={handleAmountChange}
            placeholder="Enter Amount"
            className="bg-cyan-800 text-cyan-50 py-2 px-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-cyan-600 text-cyan-50 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition duration-300 transform"
          >
            Donate Now
          </motion.button>
        </form>

        {/* Donation Icons */}
        <div className="mt-8 flex justify-center gap-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-cyan-100 cursor-pointer"
          >
            <Heart className="h-10 w-10" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-cyan-100 cursor-pointer"
          >
            <DollarSign className="h-10 w-10" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-cyan-100 cursor-pointer"
          >
            <CreditCard className="h-10 w-10" />
          </motion.div>
        </div>
      </motion.div>
      </div>
    </div>
  )
}
