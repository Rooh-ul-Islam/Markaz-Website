import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from 'framer-motion'

const Extracurricular = () => {
  const content = {
    extracurriculars: [
      { question: "Annual Educational Tour", answer: "Students visit various educational institutions and historical places annually at the end of exams." },
      { question: "Weekly Bism", answer: "Held every Saturday and Sunday to promote public speaking and recitation, including naats, speeches, and religious readings." },
      { question: "Monthly Assembly of Knowledge", answer: "Monthly sessions with lectures from diverse professionals, including doctors, scholars, and business personalities." },
      { question: "Weekly Lessons", answer: "Regular lectures on Quran, Hadith, and Fiqh led by the teaching department." },
      { question: "National Days", answer: "Celebration of national days, including Independence Day and Defense Day, with student performances." },
      { question: "Social Activities", answer: "Campaigns such as tree planting and anti-drug drives engage students in social causes." },
      { question: "Sports Competitions", answer: "Physical development encouraged through competitions like cricket, football, and badminton." }
    ]
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-300 underline decoration-cyan-500">
          Extracurricular Activities
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {content.extracurriculars.map((activity, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl text-cyan-200 hover:text-cyan-100">
                {activity.question}
              </AccordionTrigger>
              <AccordionContent className="text-cyan-50 text-lg">
                {activity.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
}

export default Extracurricular
