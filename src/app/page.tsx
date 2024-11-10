import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LeadershipSection from "@/components/Leadershippsection"
import AboutSection from "@/components/AboutInstitution"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#04002a] relative">
      

      {/* Yellow background with Islamic pattern */}
      <div className="h-24 w-full bg-[#04002a] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B4941F' fill-opacity='0.15'%3E%3Cpath d='M50 0L62.5 12.5H87.5L100 25V50L87.5 62.5V87.5L75 100H50L37.5 87.5H12.5L0 75V50L12.5 37.5V12.5L25 0H50zM50 25L37.5 37.5V62.5L50 75L62.5 62.5V37.5L50 25zM25 25V37.5L37.5 50L25 62.5V75H37.5L50 62.5L62.5 75H75V62.5L62.5 50L75 37.5V25H62.5L50 37.5L37.5 25H25z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-6rem)]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/back.jpeg')`,
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
