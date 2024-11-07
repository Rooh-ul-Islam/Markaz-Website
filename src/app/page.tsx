"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Footer from "@/components/Footer"
import LeadershipSection from "@/components/Leadershippsection"
import AboutSection from "@/components/AboutInstitution"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust threshold for mobile here
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-[#04002a] relative">
      {/* Navigation */}
      <header className="w-full px-4 py-2 absolute top-8 left-0 right-0 z-10">
        <div className="container mx-auto">
          <div className="rounded-xl bg-[#F5F5DC] shadow-lg">
            <div className="flex h-20 items-center justify-between px-8">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Maryam Institute"
                  className="h-12 w-12"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold uppercase text-black">
                    Markaz 
                  </span>
                  <span className="text-sm uppercase text-black">Rooh-ul-Islam</span>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-black" />
                ) : (
                  <Menu className="h-6 w-6 text-black" />
                )}
              </button>

              {/* Navigation Links */}
              <nav
                className={`${
                  isMenuOpen ? "flex" : "hidden"
                } absolute left-0 right-0 top-20 z-20 flex-col gap-4 bg-[#F5F5DC] p-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0`}
              >
                
                <Link
                  href="/courses"
                  className="text-sm font-medium text-black hover:text-[#02101a]"
                >
                  Courses
                </Link>
                <div className="group relative">
                  <button className="flex w-full items-center justify-between gap-1 text-sm font-medium text-black md:w-auto">
                    Multimedia
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </button>
                </div>
                <Link
                  href="/admissions"
                  className="text-sm font-medium text-black hover:text-[#02101a]"
                >
                  Admissions
                </Link>
                <Link
                  href="/subscribe"
                  className="text-sm font-medium text-black hover:text-[#02101a]"
                >
                  Subscribe
                </Link>
                <Link
                  href="/donate"
                  className="rounded-lg bg-[#02101a] px-6 py-2 text-center text-sm font-medium text-white hover:bg-[#B4941F]"
                >
                  Donate Now
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Yellow background with Islamic pattern */}
      <div className="h-24 w-full bg-[#04002a] relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B4941F' fill-opacity='0.15'%3E%3Cpath d='M50 0L62.5 12.5H87.5L100 25V50L87.5 62.5V87.5L75 100H50L37.5 87.5H12.5L0 75V50L12.5 37.5V12.5L25 0H50zM50 25L37.5 37.5V62.5L50 75L62.5 62.5V37.5L50 25zM25 25V37.5L37.5 50L25 62.5V75H37.5L50 62.5L62.5 75H75V62.5L62.5 50L75 37.5V25H62.5L50 37.5L37.5 25H25z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-6rem)]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: isMobile
              ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/mback.jpeg')`
              : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/back.jpeg')`,
            backgroundSize: 'cover',
          }}
        />

        {/* Content */}
        <div className="container relative mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Online Islamic Learning
          </h1>
          <p className="mb-8 max-w-3xl text-lg md:text-xl">
            The Messenger of Allah ﷺ said, "When Allah wishes good for someone, He
            bestows upon him the understanding of Deen." [Bukhari]
          </p>
          <Link
            href="/discover"
            className="rounded-md bg-[#02101a] px-8 py-3 font-medium text-white transition-colors hover:bg-[#B4941F]"
          >
            Discover more
          </Link>
        </div>
      </main>
       <LeadershipSection />
       <AboutSection />
      
    </div>
  )
}