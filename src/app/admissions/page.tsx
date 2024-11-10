'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, GraduationCap, FileText, DollarSign } from 'lucide-react'
import Link from 'next/link'


type AdmissionLevel = "undergraduate" | "graduate";

export default function AdmissionsPage() {
    const [activeTab, setActiveTab] = useState<AdmissionLevel>("undergraduate");
  
    const admissionsInfo: Record<AdmissionLevel, { 
      requirements: string[];
      deadlines: { fall: string; spring: string };
      tuition: string;
    }> = {
      undergraduate: {
        requirements: [
          "High school diploma or equivalent",
          "Minimum GPA of 3.0",
          "Letter of recommendation",
          "Personal statement",
          "Interview (for selected candidates)"
        ],
        deadlines: {
          fall: "April 15",
          spring: "November 1"
        },
        tuition: "$10,000 per year"
      },
      graduate: {
        requirements: [
          "Bachelor's degree from an accredited institution",
          "Minimum GPA of 3.2",
          "GRE scores (for certain programs)",
          "Two letters of recommendation",
          "Research proposal",
          "Interview (for all candidates)"
        ],
        deadlines: {
          fall: "March 1",
          spring: "October 1"
        },
        tuition: "$15,000 per year"
      }
    };

  const faqItems = [
    { question: "What financial aid options are available?", answer: "We offer various scholarships, grants, and work-study programs. Our financial aid office can provide detailed information based on your specific situation." },
    { question: "Is on-campus housing available?", answer: "Yes, we offer on-campus housing for both undergraduate and graduate students. Housing options include dormitories and apartment-style living." },
    { question: "Can I transfer credits from another institution?", answer: "We accept transfer credits from accredited institutions. Each case is evaluated individually by our admissions committee." },
    { question: "Are there opportunities for international students?", answer: "We welcome international students and offer support services to help with visa processes, housing, and cultural adjustment." }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#04002a] to-[#090047] text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Admissions</h1>
        
        <Tabs defaultValue="undergraduate" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="undergraduate" onClick={() => setActiveTab("undergraduate")}>Undergraduate</TabsTrigger>
            <TabsTrigger value="graduate" onClick={() => setActiveTab("graduate")}>Graduate</TabsTrigger>
          </TabsList>
          {["undergraduate", "graduate"].map((level) => (
            <TabsContent key={level} value={level}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-800 border-blue-500 shadow-lg mb-8">
                  <CardHeader>
                    <CardTitle className="text-3xl font-semibold text-white">Admission Requirements</CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      For {level === "undergraduate" ? "Undergraduate" : "Graduate"} Programs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                     {admissionsInfo[activeTab as AdmissionLevel].requirements.map((req, index) => (
                     <li key={index}>{req}</li>
                      ))}
                  </ul>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="bg-gray-800 border-blue-500 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold text-white">Application Deadlines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <Calendar className="h-6 w-6 text-blue-400 mr-2" />
                        <span className="text-gray-300">Fall Semester: {admissionsInfo[level as AdmissionLevel].deadlines.fall}</span>
                        </div>
                      <div className="flex items-center">
                        <Calendar className="h-6 w-6 text-blue-400 mr-2" />
                        <span className="text-gray-300">Spring Semester: {admissionsInfo[level as AdmissionLevel].deadlines.spring}</span>
                        </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-blue-500 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold text-white">Tuition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <DollarSign className="h-6 w-6 text-blue-400 mr-2" />
                        <span className="text-gray-300">{admissionsInfo[level].tuition}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Link href="/apply" passHref>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl text-white hover:text-blue-400">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300 text-lg">{item.answer}</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our vibrant community of learners and embark on a transformative educational experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply" passHref>
              <Button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                Start Your Application
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
                Contact Admissions Office
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}