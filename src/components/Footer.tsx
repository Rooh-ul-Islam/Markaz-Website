import Link from "next/link";
import { Mail, Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#04002a] text-white mt-12">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-8 px-4">
        {/* About Us Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3">
        
          
          <h2 className="text-lg font-semibold uppercase mb-2">About Us</h2>
          <p className="text-center lg:text-left text-sm mb-4">
            Maryam Institute is a non-commercial, non-political educational
            institute for women dedicated to classical Islamic learning and
            spirituality. Its core objectives are to provide a structured
            educational approach to classical Islamic scholarship, offer a
            flexible learning environment and impart an educational experience
            that is at once intellectually rigorous and spiritually uplifting.
          </p>
          <div className="flex space-x-3">
            <Link href="/" className="text-[#333333] hover:text-white">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="/" className="text-[#333333] hover:text-white">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="/" className="text-[#333333] hover:text-white">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Student Resources Section */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-lg font-semibold uppercase mb-2">Student Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                External Transfer Student
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Repeat Year
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Transfer Program Form
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Academic Calendar
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-lg font-semibold uppercase mb-2">Contact Info</h2>
          <p className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
            <Mail className="h-5 w-5" />
            <span>info@maryaminstitute.org</span>
          </p>
          <p className="text-sm mb-2">Subscribe to our mailing list</p>
          <form className="flex items-center justify-center lg:justify-start space-x-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-md border border-gray-300 bg-transparent text-black w-full lg:w-auto"
            />
            <button
              type="submit"
              className="bg-[#333333] text-white px-4 py-2 rounded-md hover:bg-[#444444]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section with bg.png */}
      <div className="relative mt-8">
       
        <div className="bg-black py-4 text-center text-sm text-white">
          <p>&copy; 2024 Maryam Institute</p>
        </div>
        
      </div>
      <div
          className="h-16 bg-cover bg-center"
          style={{
            backgroundImage: `url('/bg.png')`, 
          }}
        ></div>
    </footer>
  );
}
