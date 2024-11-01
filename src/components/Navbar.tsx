import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#D4AF37]">
      {/* Navigation */}
      <header className="relative w-full px-4 py-2">
        <div className="container mx-auto">
          <div className="rounded-xl bg-[#F5F5DC]">
            <div className="flex h-16 items-center justify-between px-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Maryam Institute"
                  className="h-12 w-12"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold uppercase text-black">
                    MARYAM
                  </span>
                  <span className="text-sm uppercase text-black">INSTITUTE</span>
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
                } absolute left-0 right-0 top-16 z-50 flex-col gap-4 bg-[#F5F5DC] p-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none`}
              >
                <div className="group relative">
                  <button className="flex w-full items-center justify-between gap-1 text-sm font-medium text-black md:w-auto">
                    Institute
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </button>
                </div>
                <div className="group relative">
                  <button className="flex w-full items-center justify-between gap-1 text-sm font-medium text-black md:w-auto">
                    Degree Program
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </button>
                </div>
                <Link
                  href="/courses"
                  className="text-sm font-medium text-black hover:text-[#D4AF37]"
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
                  className="text-sm font-medium text-black hover:text-[#D4AF37]"
                >
                  Admissions
                </Link>
                <Link
                  href="/subscribe"
                  className="text-sm font-medium text-black hover:text-[#D4AF37]"
                >
                  Subscribe
                </Link>
                <Link
                  href="/donate"
                  className="rounded-lg bg-[#D4AF37] px-6 py-2 text-center text-sm font-medium text-white hover:bg-[#B4941F]"
                >
                  Donate Now
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-5rem)]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg?height=1080&width=1920')`
          }}
        />

        {/* Content */}
        <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Online Islamic Learning
          </h1>
          <p className="mb-8 max-w-3xl text-lg md:text-xl">
            The Messenger of Allah ﷺ said, "When Allah wishes good for someone, He
            bestows upon him the understanding of Deen." [Bukhari]
          </p>
          <Link
            href="/discover"
            className="rounded-md bg-[#D4AF37] px-8 py-3 font-medium text-white transition-colors hover:bg-[#B4941F]"
          >
            Discover more
          </Link>
        </div>
      </main>
    </div>
  )
}