import React from 'react';

const scooters = [
  {
    id: 1,
    name: 'Model S1 Pro',
    img: 'https://www.orbitebikes.in/auth/upload/product-photo/ac7c749e-700b-4cbf-8841-eb9762971abb.png',
    link: 'https://www.orbitebikes.in/product-info/9/Model-S1-Pro',
  },
  {
    id: 2,
    name: 'Model Activa XJ',
    img: 'https://www.orbitebikes.in/auth/upload/product-photo/8d820d0d-cad3-4751-8dbe-f84a95a32617.png',
    link: 'https://www.orbitebikes.in/product-info/8/Model-Activa-XJ',
  },
  {
    id: 3,
    name: 'Model E4',
    img: 'https://www.orbitebikes.in/auth/upload/product-photo/0c00ac12-98b2-4286-af45-b3e54987dd85.png',
    link: 'https://www.orbitebikes.in/product-info/7/Model-E4',
  },
  {
    id: 4,
    name: 'Model SL',
    img: 'https://www.orbitebikes.in/auth/upload/product-photo/39f5b7d5-c3eb-4395-9404-216abf7f92ee.png',
    link: 'https://www.orbitebikes.in/product-info/6/Model-SL',
  },
  {
    id: 6,
    name: 'Model DL',
    img: 'https://www.orbitebikes.in/auth/upload/product-photo/e1b4d744-e462-4cbf-b88c-d3e26583270f.png',
    link: 'https://www.orbitebikes.in/product-info/5/Model-DL',
  },
  {
    id: 7,
    name: 'Model SL Pro',
    img: 'https://www.orbitebikes.in/auth/upload/product-photo/ed453c19-3d0b-47fa-80b5-d759b8f958a6.jpg',
    link: 'https://www.orbitebikes.in/product-info/4/Model-SL-Pro',
  },
];

export default function EScooters() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50" id="escooters">
      <div className="text-center mb-4">
        <span className="text-[#00b300] font-semibold text-sm uppercase tracking-widest block mb-2">Our Lineup</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">E-Scooters</h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          Orbit Bikes operates with structured manufacturing processes aligned with modern quality standards.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
        {scooters.map(s => (
          <div key={s.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-transparent hover:border-[#00b300] hover:-translate-y-2 hover:shadow-xl hover:shadow-green-100 transition-all duration-300">

            {/* Image */}
            <div className="bg-gray-50 flex items-center justify-center p-4 h-48 overflow-hidden">
              <img
                src={s.img}
                alt={s.name}
                className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-400"
              />
            </div>

            {/* Body */}
            <div className="p-4 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-3 text-center">{s.name}</h3>
              <a
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl bg-[#00b300] text-white hover:bg-[#009900] hover:shadow-lg hover:shadow-green-200 transition-all duration-250"
              >
                View Details
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
