import React from 'react';

const reasons = [
  {
    img: 'https://www.orbitebikes.in/assets/img/why/scooter.png',
    title: 'Proven industrial backing since 1992',
    desc: 'Robust manufacturing standards. Latest machinery for accurate results.',
  },
  {
    img: 'https://www.orbitebikes.in/assets/img/why/electric-car.png',
    title: 'Practical electric mobility solutions',
    desc: 'Quick service without compromising quality.',
  },
  { 
    img: 'https://www.orbitebikes.in/assets/img/why/budget.png',
    title: 'Low running cost and minimal maintenance',
    desc: 'Fast service. Trusted quality.',
  },
  {
    img: 'https://www.orbitebikes.in/assets/img/why/skyscraper.png',
    title: 'Designed for urban and semi-urban India',
    desc: 'Speed and quality tailored to your needs.',
  },
  {
    img: 'https://www.orbitebikes.in/assets/img/why/performance.png',
    title: 'Affordable ownership with long-term value',
    desc: 'Consistent performance you can depend on.',
  },
];

export default function WhyOrbit() {
  return (
    <section className="px-6 lg:px-16 py-20 bg-white" id="why">
      <div className="text-center mb-14">
        <span className="text-[#00b300] font-semibold text-sm uppercase tracking-widest block mb-2">Why Choose Us</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">Why Orbit eBikes?</h2>
        <p className="text-gray-400 text-sm font-medium">Your Trusted Automotive Partner</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="group flex flex-row items-center gap-0 rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#00b300] hover:shadow-lg hover:shadow-green-100 transition-all duration-300"
          >
            {/* Image - left */}
            <div className="w-16 h-16 flex-shrink-0 bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={r.img}
                alt={r.title}
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Divider */}
            <div className="w-px self-stretch bg-gray-100 group-hover:bg-[#00b300]/30 transition-colors duration-300" />

            {/* Content - right */}
            <div className="flex-1 px-4 py-3">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b300] flex-shrink-0" />
                <h3 className="text-xs font-bold text-gray-900 leading-snug">{r.title}</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-3">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
