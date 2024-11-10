'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, GraduationCap, FileText, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState("courses");

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
    <div className="min-h-screen bg-gradient-to-b from-[#04002a] to-[#090047] text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mt-48 mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">About Markaz Rooh-ul-Islam</h1>
        
        <Tabs defaultValue="courses" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="courses" onClick={() => setActiveTab("courses")}>Courses</TabsTrigger>
            <TabsTrigger value="essentialInfo" onClick={() => setActiveTab("essentialInfo")}>Essential Info</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.courses.map((course, index) => (
                <Card key={index} className="bg-gray-800 border-blue-500 shadow-lg mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">{course.description}</CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="essentialInfo">
            <ul className="space-y-4">
              {content.essentialInfo.map((info, index) => (
                <li key={index} className="text-gray-300 text-lg">
                  <span className="font-semibold text-white">{info.label}:</span> {info.value}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Extracurricular Activities</h2>
          <Accordion type="single" collapsible className="w-full">
            {content.extracurriculars.map((activity, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl text-white hover:text-blue-400">{activity.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300 text-lg">{activity.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Ready to Join?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply" passHref>
              <Button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                Start Application
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
