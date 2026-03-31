import React from 'react';

const features = [
  {
    img: 'https://www.orbitebikes.in/assets/img/features/High-efficiency%20electric%20motors.jpg',
    title: 'High-efficiency electric motors',
  },
  {
    img: 'https://www.orbitebikes.in/assets/img/features/Strong%20chassis%20and%20stable%20suspension.jpg',
    title: 'Strong chassis and stable suspension',
  },
  {
    img: 'https://www.orbitebikes.in/assets/img/features/Disc%20braking%20systems%20for%20improved%20safety.jpg',
    title: 'Disc braking systems for improved safety',
  },
  {
    img: 'https://www.orbitebikes.in/assets/img/features/LED%20lighting%20and%20digital%20meters.jpg',
    title: 'LED lighting and digital meters',
  },
  {
    img: 'https://www.orbitebikes.in/assets/img/features/Anti-theft%20and%20security%20features.jpg',
    title: 'Anti-theft and security features',
  },
  {
    img: 'https://www.orbitebikes.in/assets/img/features/Smooth%20acceleration%20and%20reverse%20assist.jpg',
    title: 'Smooth acceleration and reverse assist',
  },
];

export default function ProductFeatures() {
  return (
    <section className="px-6 lg:px-16 py-20 bg-[#0f0f0f]" id="features">
      <div className="text-center mb-4">
        <span className="text-[#00b300] font-semibold text-sm uppercase tracking-widest block mb-2">Product Features</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">Your Trusted Automotive Partner</h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          Orbit Bikes electric vehicles are designed with features that enhance everyday usability and rider confidence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {features.map(f => (
          <div key={f.title} className="group relative rounded-2xl overflow-hidden cursor-default shadow-lg">
            {/* Image */}
            <img
              src={f.img}
              alt={f.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay always visible at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-bold text-sm leading-snug text-center group-hover:text-[#00b300] transition-colors duration-300">
                {f.title}
              </h3>
            </div>

            {/* Green border on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00b300] transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
