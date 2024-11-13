import React from 'react';

const LeadershipSection = () => {
  return (
    <section className="bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-900 py-20">
      <div className="container mx-auto px-4 text-center relative">
        {/* Enhanced decorative background elements to match AboutSection */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <h2 className="text-5xl font-bold text-white mb-4 relative inline-block">
          Our Leadership
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
          {/* Patron in Chief */}
          <div className="group flex flex-col items-center backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <img
                src="/Patron-inChief.jpeg"
                alt="Patron in Chief"
                className="w-60 h-60 rounded-full relative z-10 border-4 border-cyan-300/50 object-cover shadow-lg group-hover:border-cyan-200 transition-colors"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white">Patron in Chief</h3>
            <p className="text-lg font-medium mt-2 mb-4 text-cyan-300">Sajjan Sain</p>
            <p className="text-sm text-blue-100 leading-relaxed">
              Sajjan Sain is the Patron in Chief of Markaz Rooh-ul-Islam, guiding its vision and mission to provide Islamic Sufism education.
            </p>
          </div>

          {/* Chairman */}
          <div className="group flex flex-col items-center backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <img
                src="/api/placeholder/128/128"
                alt="Chairman"
                className="w-60 h-60 rounded-full relative z-10 border-4 border-cyan-300/50 object-cover shadow-lg group-hover:border-cyan-200 transition-colors"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white">Chairman</h3>
            <p className="text-lg font-medium mt-2 mb-4 text-cyan-300">Mr. [Name]</p>
            <p className="text-sm text-blue-100 leading-relaxed">
              Mr. [Name] serves as the Chairman, overseeing the strategic direction of the institute and ensuring academic excellence.
            </p>
          </div>

          {/* Principal */}
          <div className="group flex flex-col items-center backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <img
                src="/api/placeholder/128/128"
                alt="Principal"
                className="w-60 h-60 rounded-full relative z-10 border-4 border-cyan-300/50 object-cover shadow-lg group-hover:border-cyan-200 transition-colors"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white">Principal</h3>
            <p className="text-lg font-medium mt-2 mb-4 text-cyan-300">Ms. [Name]</p>
            <p className="text-sm text-blue-100 leading-relaxed">
              Ms. [Name] leads the academic team as the Principal, ensuring a high-quality learning experience for all students.
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

export default LeadershipSection;