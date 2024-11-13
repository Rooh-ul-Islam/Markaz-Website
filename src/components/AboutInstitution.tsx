import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-cyan-800 py-20 text-white">
      <div className="container mx-auto px-4 text-center md:text-left relative">
        {/* Enhanced decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10">
          {/* Image Section with enhanced hover effects */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-cyan-300 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
            <img
              src="bott.jpeg"
              alt="Maryam Institute"
              className="w-full h-auto rounded-xl shadow-2xl relative z-10 transform transition duration-500 hover:scale-105 border border-white/20"
            />
          </div>

          {/* Text Section with enhanced styling */}
          <div className="w-full md:w-1/2 backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              About Markaz Rooh-ul-Islam
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
            </h2>
            
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              Rooh-ul-Islam is a non-commercial, non-political educational institution dedicated to classical Islamic learning and spirituality.
              Rooh-ul-Islam is serving the religion of Islam and the nation with its own help and limited resources.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
              Our Mission
            </h3>
            <p className="text-base mb-8 text-blue-100 leading-relaxed">
              Our mission is to foster a learning environment that upholds traditional Islamic values and provides an enriching educational experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

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

export default AboutSection;