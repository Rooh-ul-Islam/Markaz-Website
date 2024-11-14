'use client'

import { motion } from 'framer-motion'

import About from '@/components/About'
import Extracurricular from '@/components/Extracurricular'
import JoinUs from '@/components/JoinUs'

export default function AdmissionsPage() {

  const content = {
    courses: [
      { 
        title: "IT", 
        description: "The IT course offers a one-year IT diploma and freelancing training. Equipped with a modern computer lab and expert instructors, online classes are also available for students."
      },
      { 
        title: "Tailor Master", 
        description: "A one-year tailoring course teaching men's tailoring skills."
      },
      { 
        title: "Language", 
        description: "English language courses are available, focusing on both written and spoken skills."
      },
      { 
        title: "Driving", 
        description: "Practical driving training on a Mehran car, supervised by expert instructors with road safety information."
      }
    ],
    extracurriculars: [
      { question: "Annual Educational Tour", answer: "Students visit various educational institutions and historical places annually at the end of exams." },
      { question: "Weekly Bism", answer: "Held every Saturday and Sunday to promote public speaking and recitation, including naats, speeches, and religious readings." },
      { question: "Monthly Assembly of Knowledge", answer: "Monthly sessions with lectures from diverse professionals, including doctors, scholars, and business personalities." },
      { question: "Weekly Lessons", answer: "Regular lectures on Quran, Hadith, and Fiqh led by the teaching department." },
      { question: "National Days", answer: "Celebration of national days, including Independence Day and Defense Day, with student performances." },
      { question: "Social Activities", answer: "Campaigns such as tree planting and anti-drug drives engage students in social causes." },
      { question: "Sports Competitions", answer: "Physical development encouraged through competitions like cricket, football, and badminton." }
    ],
    essentialInfo: [
      { label: "Foundation Year", value: "1996 by Shams Ulama Mufti Muhammad Rahim" },
      { label: "Purpose", value: "To propagate Islam and provide higher education opportunities for the underprivileged." },
      { label: "Location", value: "District Lasbela, Balochistan, Uthal" },
      { label: "Distance from Karachi", value: "120km" },
      { label: "Graduated Scholars", value: "166" },
      { label: "Affiliation", value: "Tanzeem-ul-Madaris Ahl-e-Sunnat Pakistan, Balochistan Societies" },
      { label: "Facilities", value: "Computer Lab, Tailoring Center, Expert Faculty Members" },
      { label: "Sports", value: "Cricket, Football, Badminton" },
      { label: "Uniform", value: "White Turban, Blue Jabba, White Shalwar Kameez" }
    ]
  }

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
