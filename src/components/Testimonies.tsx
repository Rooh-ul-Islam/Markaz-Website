'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

const Testimonies = () => {
    const controls = useAnimation();

    useEffect(() => {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 }
      }));
    }, [controls]);
  
    const notableTestimonials = [
      {
        name: 'Khawaja Muhammad Tahir Abbasi',
        title: 'Known as Sajjan Sain',
        message: 'Jamia Ruhol-ul-Islam was established by Mufti Muhammad Rahim Sahib and I am very happy to hear that hundreds of scholars have graduated from this institution who are playing a positive role in the society. And will continue to serve.',
        image: '/Sajjan_Sain.jpeg',
      },
      {
        name: 'Mufti Muneebur Rahman Sahib',
        title: 'Former Chairman of Ruyat Hilal Committee Pakistan',
        message: 'I was very happy to see Jamia Ruhul Islam in an area like Lasbela, the education system and discipline of the Jamia is ideal, the presence of Jamia Ruhul Islam here is no less than a blessing for the people here.',
        image: '/Mufti_Muneebur_Rahman.jpeg',
      },
      {
        name: 'Jam Kamal Khan',
        title: 'Former Chief Minister of Balochistan',
        message: 'It was a pleasure to visit Jamia Ruhol-ul-Islam and especially the department of technical trade distinguishes Ruhol-ul-Islam from other religious institutions, Jamia Ruhol-ul-Islam is a notable institution of Lasbela.',
        image: '/jam_kamal_khan.jpeg',
      },
      {
        name: 'Professor Dr. Dost Muhammad Baloch',
        title: 'Vice-Chancellor of Lasbela University',
        message: 'Jamia Ruhol-ul-Islam\'s services are commendable, the institution has a perfect blend of religious and contemporary studies which is commendable. Here children are also taught skills along with religious and modern sciences. This institution is a supreme example of discipline and training.',
        image: '/dost_muhammad_baloch.jpeg',
      },
    ];
  
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50 to-cyan-100">
        {/* Notable Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-800 underline decoration-cyan-500">
            Testimonials from Notable Figures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {notableTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-cyan-500 hover:bg-cyan-50 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center mb-6">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={150} 
                    height={150} 
                    className="rounded-full border-4 border-cyan-500 shadow-lg mb-4" 
                  />
                  <h3 className="text-2xl font-semibold text-cyan-900 text-center">{testimonial.name}</h3>
                  <p className="text-cyan-600 italic text-center">{testimonial.title}</p>
                </div>
                <p className="text-cyan-800 leading-relaxed text-justify">{testimonial.message}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Sections */}
        {/* Add existing "Our Activities" and other sections here */}
      </div>
    );
}
export default Testimonies
