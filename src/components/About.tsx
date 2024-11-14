import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const About = () => {
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
    <div className="flex justify-center items-center min-h-screen text-white py-7
    px-7 sm:px-6 lg:px-8">
      <div className='w-full mt-20 max-w-6xl backdrop-blur-sm bg-white/20 p-8 rounded-xl 
      border border-white/25 shadow-lg hover:bg-white/20 transition-all duration-300'>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 text-teal-200
        underline decoration-cyan-300">
          About Markaz Rooh-ul-Islam
        </h1>
        
        <Tabs defaultValue="courses" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="courses" className=" text-cyan-700 text-base font-semibold">Courses</TabsTrigger>
            <TabsTrigger value="essentialInfo" className="text-cyan-700 text-base font-semibold">Essential Info</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.courses.map((course, index) => (
                <Card key={index} className="bg-cyan-800 border-cyan-300 shadow-lg mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-cyan-300">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-cyan-100">{course.description}</CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="essentialInfo">
            <ul className="space-y-4">
              {content.essentialInfo.map((info, index) => (
                <li key={index} className="text-cyan-100 text-lg">
                  <span className="font-semibold text-cyan-100">{info.label}:</span> {info.value}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default About
