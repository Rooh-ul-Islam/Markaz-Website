import Link from "next/link";
import { Mail, Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-[#04002a] mt-12">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-12 px-6 py-12">
        
        {/* About Us Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3 space-y-4">
          <h2 className="text-lg font-semibold uppercase">About Us</h2>
          <p className="text-center lg:text-left text-sm">
          Ruhol-ul-Islam Jamia is serving the religion of Islam and the nation with its own help and limited resources. Due to high expenses and low income, the institution is in debt every year in terms of ration and salaries. The institution is facing many difficulties, especially hostel and ration expenses for students.
          The institution is dependent on monthly donations, which is facing a lot of difficulties in meeting the needs. 
          </p>
          <div className="flex space-x-3">
            <Link href="/" className="text-[#333333] hover:text-[#04002a] transition">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="/" className="text-[#333333] hover:text-[#04002a] transition">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="/" className="text-[#333333] hover:text-[#04002a] transition">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Student Resources Section */}
        <div className="lg:w-1/3 space-y-4">
          <h2 className="text-lg font-semibold uppercase text-center lg:text-left">Student Resources</h2>
          <ul className="space-y-2 text-sm text-center lg:text-left">
            <li><Link href="/" className="hover:text-[#04002a] transition">External Transfer Student</Link></li>
            <li><Link href="/" className="hover:text-[#04002a] transition">Repeat Year</Link></li>
            <li><Link href="/" className="hover:text-[#04002a] transition">Transfer Program Form</Link></li>
            <li><Link href="/" className="hover:text-[#04002a] transition">Academic Calendar</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="lg:w-1/3 space-y-4 text-center lg:text-left">
          <h2 className="text-lg font-semibold uppercase">Contact Info</h2>
          <p className="flex items-center justify-center lg:justify-start space-x-2">
            <Mail className="h-5 w-5" />
            <span>info@maryaminstitute.org</span>
          </p>
          <p className="text-sm">Subscribe to our mailing list</p>
          <form className="flex items-center justify-center lg:justify-start space-x-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-md border border-gray-300 bg-transparent text-black w-full lg:w-auto placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#333333] text-white px-4 py-2 rounded-md hover:bg-[#444444] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-8">
        <div className="bg-black py-4 text-center text-sm text-white">
          <p>&copy; 2024 Maryam Institute</p>
        </div>
        <div
          className="h-16 bg-cover bg-center"
          style={{
            backgroundImage: `url('/bg.png')`, 
          }}
        ></div>
      </div>
    </footer>
  );
}
