export default function LeadershipSection() {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#04002a] mb-12">Our Leadership</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Patron in Chief */}
            <div className="flex flex-col items-center bg-[#04002a] text-white p-8 shadow-lg rounded-lg w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/path/to/patron-image.jpg" // Replace with the actual path to Patron in Chief's image
                alt="Patron in Chief"
                className="w-32 h-32 rounded-full mb-6 border-4 border-white"
              />
              <h3 className="text-2xl font-semibold">Patron in Chief</h3>
              <p className="text-lg font-medium mt-2 mb-4">Dr. [Name]</p> {/* Replace with actual name */}
              <p className="text-sm text-gray-300">
                Dr. [Name] is the Patron in Chief of Maryam Institute, guiding its vision and mission to provide classical Islamic education.
              </p>
            </div>
  
            {/* Chairman */}
            <div className="flex flex-col items-center bg-[#04002a] text-white p-8 shadow-lg rounded-lg w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/path/to/chairman-image.jpg" // Replace with the actual path to Chairman's image
                alt="Chairman"
                className="w-32 h-32 rounded-full mb-6 border-4 border-white"
              />
              <h3 className="text-2xl font-semibold">Chairman</h3>
              <p className="text-lg font-medium mt-2 mb-4">Mr. [Name]</p> {/* Replace with actual name */}
              <p className="text-sm text-gray-300">
                Mr. [Name] serves as the Chairman, overseeing the strategic direction of the institute and ensuring academic excellence.
              </p>
            </div>
  
            {/* Principal */}
            <div className="flex flex-col items-center bg-[#04002a] text-white p-8 shadow-lg rounded-lg w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/path/to/principal-image.jpg" // Replace with the actual path to Principal's image
                alt="Principal"
                className="w-32 h-32 rounded-full mb-6 border-4 border-white"
              />
              <h3 className="text-2xl font-semibold">Principal</h3>
              <p className="text-lg font-medium mt-2 mb-4">Ms. [Name]</p> {/* Replace with actual name */}
              <p className="text-sm text-gray-300">
                Ms. [Name] leads the academic team as the Principal, ensuring a high-quality learning experience for all students.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  