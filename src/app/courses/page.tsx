'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { Calendar, Clock, Users, Book, Award, MessageCircle } from 'lucide-react'


type Course = {
  name: string;
  image: string;
  description: string;
  duration: string;
  schedule: string;
  curriculum: string[];
};
export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  const courses: Course[] = [
    {
      name: 'Computer',
      image: '/com.jpeg',
      description: 'Master the art of programming and web development in an Islamic context.',
      duration: '6 months',
      schedule: 'Mon, Wed, Fri (6-8 PM)',
      curriculum: [
        'Introduction to Programming',
        'Web Development Fundamentals',
        'Database Management',
        'Network Security',
        'Islamic Perspectives on Technology',
      ]
    },
    {
      name: 'Tailor',
      image: '/tailor.jpeg',
      description: 'Learn the craft of tailoring with a focus on Islamic modest fashion.',
      duration: '4 months',
      schedule: 'Tue, Thu (5-7 PM), Sat (10 AM-1 PM)',
      curriculum: [
        'Basic Sewing Techniques',
        'Pattern Making',
        'Fabric Selection',
        'Islamic Fashion Design',
        'Business Ethics in Islamic Tailoring',
      ]
    },
    {
      name: 'Hafiz-ul Quran',
      image: '/ha.jpeg',
      description: 'Embark on a spiritual journey to memorize the entire Quran.',
      duration: '2 years',
      schedule: 'Daily (5 AM-8 AM, 4 PM-6 PM)',
      curriculum: [
        'Tajweed Rules',
        'Memorization Techniques',
        'Understanding Quranic Arabic',
        'Revision and Retention Strategies',
        'Tafsir of Selected Surahs',
      ]
    },
    {
      name: 'Traditional Studies',
      image: '/tai.jpeg',
      description: 'Dive deep into classical Islamic sciences and scholarship.',
      duration: '3 years',
      schedule: 'Mon-Fri (9 AM-3 PM)',
      curriculum: [
        'Islamic History',
        'Fiqh (Islamic Jurisprudence)',
        'Hadith Studies',
        'Arabic Language',
        'Comparative Religion',
      ]
    },
  ]

  const testimonials = [
    { name: "Ahmed", course: "Computer", text: "This course perfectly blended technology with Islamic values." },
    { name: "Fatima", course: "Tailor", text: "I now create modest fashion that's both beautiful and respectful." },
    { name: "Yusuf", course: "Hafiz-ul Quran", text: "The memorization techniques taught here are unparalleled." },
    { name: "Aisha", course: "Traditional Studies", text: "I've gained a deeper understanding of our rich Islamic heritage." },
  ];
  

  return (
    <div className="min-h-screen bg-[#04002a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 border-blue-400"
              onClick={() => setSelectedCourse(course)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={`${course.name} course`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{course.name}</h2>
              </div>
              <div className="p-6">
                <p className="mt-2 text-gray-100 text-lg leading-relaxed">{course.description}</p>
                <div className="mt-4 flex items-center text-lg text-gray-200">
                  <Clock className="mr-2 h-5 w-5 text-blue-400" />
                  <span>{course.duration}</span>
                </div>
                <Link href="/contact" className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Contact Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCourse && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-blue-400"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">{selectedCourse.name} Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center text-xl">
                <Clock className="mr-3 h-6 w-6 text-blue-400" />
                <span className="text-gray-100">{selectedCourse.duration}</span>
              </div>
              <div className="flex items-center text-xl">
                <Calendar className="mr-3 h-6 w-6 text-blue-400" />
                <span className="text-gray-100">{selectedCourse.schedule}</span>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-100">
              {selectedCourse.curriculum.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="mt-24 text-center"
>
  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
    Why Choose Our Institution?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
    {[
      { icon: Users, title: 'Expert Instructors', description: 'Learn from experienced scholars and professionals in their fields.' },
      { icon: Book, title: 'Comprehensive Curriculum', description: 'Our courses cover both traditional and modern subjects for a well-rounded education.' },
      { icon: Award, title: 'Recognized Certification', description: 'Gain certificates that are respected in both Islamic and professional circles.' }
    ].map((item, index) => (
      <motion.div
        key={index}
        custom={index}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-blue-400"
      >
        <item.icon className="h-16 w-16 text-blue-400 mx-auto mb-6" />
        <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
        <p className="text-gray-100 text-lg leading-relaxed">{item.description}</p>
      </motion.div>
    ))}
  </div>
</motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-blue-400"
              >
                <p className="text-gray-100 mb-6 text-xl italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center mr-4 text-2xl text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-white">{testimonial.name}</p>
                    <p className="text-lg text-gray-300">{testimonial.course} Course</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Ready to Start Your Journey?</h2>
          <p className="text-2xl text-gray-100 mb-12 max-w-3xl mx-auto">Join our community of learners and embark on a path of knowledge and spiritual growth.</p>
          <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Contact Us Today
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}