"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
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
            {isMobile && (
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
            )}

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
              <Link href={'/founder'}>
               <div className="group relative">
                 <button className="flex w-full items-center justify-between gap-1 text-sm font-medium text-black md:w-auto">
                   Founder
                   <ChevronDown className="h-4 w-4 opacity-50" />
                 </button>
               </div>
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-black hover:text-[#02101a]"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-black hover:text-[#02101a]"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="rounded-lg bg-[#02101a] px-6 py-2 text-center text-sm font-medium text-white hover:bg-[#B4941F]"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
