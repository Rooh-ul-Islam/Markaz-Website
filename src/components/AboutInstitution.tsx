export default function AboutSection() {
    return (
      <section className="bg-gradient-to-br from-[#04002a] to-[#1a133d] py-16 text-white">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative">
              <img
                src="/path/to/institution-image.jpg" // Replace with the actual path to the institution image
                alt="Maryam Institute"
                className="w-full h-auto rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#04002a] opacity-80 rounded-lg"></div>
            </div>
  
            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 border-b-4 border-[#FFD700] inline-block pb-2">
                About Maryam Institute
              </h2>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                Maryam Institute is a non-commercial, non-political educational institution dedicated to classical Islamic learning and spirituality. Our mission is to provide structured educational pathways in Islamic scholarship, empowering students to develop a deep understanding of Deen while nurturing their spiritual growth.
              </p>
              <h3 className="text-2xl font-semibold mb-3 text-[#FFD700]">Our Mission</h3>
              <p className="text-base mb-6 text-gray-300 leading-relaxed">
                Our mission is to foster a learning environment that upholds traditional Islamic values and provides an enriching educational experience. We aim to inspire students to cultivate a strong connection with their faith and develop the skills necessary to contribute positively to their communities.
              </p>
              <h3 className="text-2xl font-semibold mb-3 text-[#FFD700]">Our Values</h3>
              <ul className="text-base space-y-2 text-gray-300 leading-relaxed">
                <li>
                  🌱 <span className="font-semibold text-white">Integrity:</span> Upholding the highest ethical standards in our academic and spiritual practices.
                </li>
                <li>
                  🌸 <span className="font-semibold text-white">Respect:</span> Fostering an inclusive and supportive environment for all students.
                </li>
                <li>
                  📚 <span className="font-semibold text-white">Scholarship:</span> Encouraging intellectual rigor and critical thinking in Islamic studies.
                </li>
                <li>
                  🌟 <span className="font-semibold text-white">Spirituality:</span> Promoting personal growth and a meaningful connection with faith.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  