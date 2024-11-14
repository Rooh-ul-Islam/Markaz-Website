'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { Clock } from 'lucide-react'

type Course = {
  name: string;
  image: string;
  description: string;
  duration: string;
  schedule: string;
  curriculum: string[];
};

export default function CoursesPage() {
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
      name: 'Sharia (8-Year)',
      image: '/16.jpeg',
      description: 'Eight-year course focusing on Islamic sciences, under Tanzeem Al-Madaris Ahl-e-Sunnah Board. Equivalent to MA Islamiat and Arabic (HEC).',
      duration: '8 years',
      schedule: 'Mon-Fri (9 AM-3 PM)',
      curriculum: [
        'Islamic Jurisprudence',
        'Islamic History',
        'Quranic Studies',
        'Hadith Studies',
        'Arabic Language',
      ]
    },
    {
      name: 'Tahfiz Al-Qur\'an and Nazrah',
      image: '/mback.jpeg',
      description: 'Course on Quran recitation and memorization, with options for Dars Nizami based on student preference.',
      duration: 'Flexible',
      schedule: 'Daily (5 AM-8 AM, 4 PM-6 PM)',
      curriculum: [
        'Nazra with Tajweed',
        'Quran Memorization',
        'Tajweed Rules',
        'Understanding Quranic Arabic',
      ]
    },
    {
      name: 'Contemporary Studies',
      image: '/7.jpeg',
      description: 'Primary to higher secondary education, covering modern and religious studies from class 6 to FAC.',
      duration: 'Primary to Higher Secondary',
      schedule: 'Mon-Fri (8 AM-2 PM)',
      curriculum: [
        'Primary School Education',
        'Model Higher Secondary School',
        'Islamic and Contemporary Studies',
        'Science and Humanities',
      ]
    }
  ];

  const activities = [
    {
      name: 'Computer',
      image: '/com.jpeg',
      description: 'Master the art of programming and web development in an Islamic context.',
      duration: 'Contact Us',
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
      duration: 'Contact Us',
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
      duration: 'Contact Us',
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
      duration: 'Contact Us',
      schedule: 'Mon-Fri (9 AM-3 PM)',
      curriculum: [
        'Islamic History',
        'Fiqh (Islamic Jurisprudence)',
        'Hadith Studies',
        'Arabic Language',
        'Comparative Religion',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-cyan-900 text-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {/* New Courses Section */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 mt-40 text-cyan-50 underline decoration-cyan-500">
          Our Courses
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-900 rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 border-cyan-400"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={`${course.name} course`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-cyan-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {course.name}
                </h2>
              </div>
              <div className="p-6">
                <p className="mt-2 text-cyan-100 text-lg leading-relaxed">
                  {course.description}
                </p>
                <div className="mt-4 flex items-center text-lg text-cyan-200">
                  <Clock className="mr-2 h-5 w-5 text-cyan-400" />
                  <span>{course.duration}</span>
                </div>
                <Link href="/contact" className="mt-6 inline-block bg-cyan-600 text-cyan-50 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Contact Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Existing Activities Section */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mt-36 mb-16 text-cyan-50 underline decoration-cyan-500">
          Our Activities
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-900 rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 border-cyan-400"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={`${activity.name} activity`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-cyan-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {activity.name}
                </h2>
              </div>
              <div className="p-6">
                <p className="mt-2 text-cyan-100 text-lg leading-relaxed">
                  {activity.description}
                </p>
                <div className="mt-4 flex items-center text-lg text-cyan-200">
                  <Clock className="mr-2 h-5 w-5 text-cyan-400" />
                  <span>{activity.duration}</span>
                </div>
                <Link href="/contact" className="mt-6 inline-block bg-cyan-600 text-cyan-50 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Contact Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}
