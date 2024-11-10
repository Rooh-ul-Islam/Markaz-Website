'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Globe, Clock, MessageCircle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from '@/hooks/use-toast'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  
  TabsTrigger,
} from "@/components/ui/tabs"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@islamicinstitution.com', href: 'mailto:info@islamicinstitution.com' },
    { icon: MapPin, text: '123 Knowledge Street, Wisdom City, 12345', href: 'https://maps.google.com' },
    { icon: Globe, text: 'www.islamicinstitution.com', href: 'https://www.islamicinstitution.com' },
    { icon: Clock, text: 'Mon-Fri: 9AM-5PM', href: '#' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#04002a] to-[#090047] text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Get in Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-blue-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      <item.icon className="h-6 w-6 mr-4" />
                      <span className="text-lg">{item.text}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-blue-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500 min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Quick Contact Options</h2>
          <Tabs defaultValue="whatsapp" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>
            <TabsContent value="whatsapp">
              <Card className="bg-gray-800 border-green-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-white">Contact via WhatsApp</CardTitle>
                  <CardDescription className="text-gray-300">
                    Get quick responses through our WhatsApp channel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-300 mb-4">
                    Scan the QR code or click the button below to start a WhatsApp chat with us.
                  </p>
                  <div className="flex justify-center mb-6">
                    <img src="/placeholder.svg?height=200&width=200" alt="WhatsApp QR Code" className="w-48 h-48" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 flex items-center justify-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Open WhatsApp Chat
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="email">
              <Card className="bg-gray-800 border-blue-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-white">Send us an Email</CardTitle>
                  <CardDescription className="text-gray-300">
                    Reach out to us via email for detailed inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-300 mb-4">
                    Click the button below to compose an email to our support team.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 flex items-center justify-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Compose Email
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Visit Our Campus</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We welcome you to visit our campus and experience the vibrant learning environment firsthand. 
            Schedule a tour today and see why our institution is the perfect place for your educational journey.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300">
            Schedule a Campus Tour
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}