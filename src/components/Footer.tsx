import React from 'react';
import Link from "next/link";
import { Mail, Facebook, Youtube, Instagram } from "lucide-react";

const IslamicPattern = () => (
  <svg className="w-full h-20" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg">
    <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <path
        d="M25,0 L75,0 L100,25 L100,75 L75,100 L25,100 L0,75 L0,25 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
      <path
        d="M50,25 L75,50 L50,75 L25,50 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
    </pattern>
    <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <path
        d="M25,0 L75,0 L100,25 L100,75 L75,100 L25,100 L0,75 L0,25 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
      <path
        d="M50,25 L75,50 L50,75 L25,50 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
    </pattern>
    <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <path
        d="M25,0 L75,0 L100,25 L100,75 L75,100 L25,100 L0,75 L0,25 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
      <path
        d="M50,25 L75,50 L50,75 L25,50 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
    </pattern>
    <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <path
        d="M25,0 L75,0 L100,25 L100,75 L75,100 L25,100 L0,75 L0,25 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
      <path
        d="M50,25 L75,50 L50,75 L25,50 Z"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
    </pattern>
    <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
    <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
    <rect width="100%" height="100%" fill="url(#islamic-pattern)" />

  </svg>
);

export default function Footer() {
  return (
    <footer className=" text-white relative">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-12 px-6 py-12 relative z-10">
        {/* About Us Section */}
        <div className="flex bg-cyan-800 flex-col items-center lg:items-start lg:w-1/3 space-y-4 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-lg font-semibold uppercase text-cyan-300 relative">
            About Us
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-300 rounded-full"></div>
          </h2>
          <p className="text-center lg:text-left text-sm text-blue-100">
            Markaz Rooh-ul-Islam Jamia is serving the religion of Islam and the nation with its own help and limited resources. Due to high expenses and low income, the institution is in debt every year in terms of ration and salaries. The institution is facing many difficulties, especially hostel and ration expenses for students.
            The institution is dependent on monthly donations, which is facing a lot of difficulties in meeting the needs. 
          </p>
          <div className="flex space-x-4">
            <Link href="/" className="text-cyan-300 hover:text-cyan-200 transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="/" className="text-cyan-300 hover:text-cyan-200 transition-colors">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="/" className="text-cyan-300 hover:text-cyan-200 transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Student Resources Section */}
        <div className="lg:w-1/3 space-y-4 backdrop-blur-sm bg-cyan-800 p-6 rounded-xl border border-white/10">
          <h2 className="text-lg font-semibold uppercase text-center lg:text-left text-cyan-300 relative">
            Student Resources
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
          </h2>
          <ul className="space-y-3 text-sm text-center lg:text-left">
            {['External Transfer Student', 'Repeat Year', 'Transfer Program Form', 'Academic Calendar'].map((item) => (
              <li key={item}>
                <Link 
                  href="/" 
                  className="text-blue-100 hover:text-cyan-300 transition-colors relative group"
                >
                  <span className="inline-block transform group-hover:translate-x-2 transition-transform">
                    ⋆ {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="lg:w-1/3 space-y-4 text-center lg:text-left backdrop-blur-sm bg-cyan-800 p-6 rounded-xl border border-white/10">
          <h2 className="text-lg font-semibold uppercase text-cyan-300 relative">
            Contact Info
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
          </h2>
          <p className="flex items-center justify-center lg:justify-start space-x-2 text-blue-100">
            <Mail className="h-5 w-5 text-cyan-300" />
            <span>info@markaz.rooh.ul.islam.org</span>
          </p>
          <p className="text-sm text-blue-100">Subscribe to our mailing list</p>
          <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-md border border-cyan-400/30 bg-white/10 backdrop-blur-sm text-white placeholder-blue-100/50 focus:outline-none focus:border-cyan-300 transition-colors"
            />
            <button
              type="submit"
              className="bg-cyan-500  text-white px-4 py-2 rounded-md hover:from-cyan-400 hover:to-blue-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section with Islamic Pattern */}
      <div className="relative z-10">
        <div className="bg-cyan-700 py-4 text-center text-sm text-blue-100 backdrop-blur-sm bg-white/5 border-t border-white/10">
          <p>&copy; 2024 Markaz Rooh-ul-Islam</p>
        </div>
        <div className="bg-gradient-to-r b">
        </div>
      </div>
    </footer>
  );
}

const style = `
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
`;