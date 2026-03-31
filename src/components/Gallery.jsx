import React, { useState } from 'react';

const BASE = 'https://www.orbitebikes.in/auth/upload/Orbit%20Electric/';

const photos = [
  'b60c6853-e26a-4716-8513-1d7bf6caa010.jpeg',
  '7dc06685-2d46-47a0-888c-a8b44b777422.jpeg',
  'b1adef08-b81e-4b1f-a8f9-fab4ed7b85af.jpeg',
  'bdc41ada-808a-42e1-9e8f-65bbe2fd49b9.jpeg',
  '26dedc2a-2b1a-47ee-875a-c12b24a96f00.jpeg',
  'cc2614cd-29ce-43c3-bb5a-77d3bf739b59.jpeg',
  'ad358691-1164-46be-a893-0d0b9dabde7b.jpeg',
  'aeb7edd0-ddde-49ce-95a7-8f2af9cd179f.jpeg',
  '9701b527-09d4-43ad-8cd5-24dacf6d95de.jpeg',
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  const prev = () => setActive(i => (i - 1 + photos.length) % photos.length);
  const next = () => setActive(i => (i + 1) % photos.length);

  return (
    <section className="px-6 lg:px-16 py-20 bg-white" id="gallery">
      <div className="text-center mb-12">
        <span className="text-[#00b300] font-semibold text-sm uppercase tracking-widest block mb-2">Our Moments</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Photo Gallery</h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {photos.map((file, i) => (
          <div
            key={file}
            onClick={() => setActive(i)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:shadow-green-200 transition-all duration-300"
          >
            <img
              src={`${BASE}${file}`}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-3xl">🔍</span>
            </div>
            {/* Green border on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00b300] transition-all duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="text-center mt-10">
        <a
          href="https://www.orbitebikes.in/photo-gallery"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#00b300] hover:bg-[#009900] text-white font-bold px-10 py-3 rounded-full uppercase tracking-wider text-sm transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-300"
        >
          View More
        </a>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-[#00b300] transition-colors"
            >✕</button>

            <img
              src={`${BASE}${photos[active]}`}
              alt="Gallery"
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white text-3xl hover:text-[#00b300] transition-colors hidden sm:block"
            >‹</button>
            <button
              onClick={next}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white text-3xl hover:text-[#00b300] transition-colors hidden sm:block"
            >›</button>

            {/* Counter */}
            <p className="text-center text-gray-400 text-sm mt-3">{active + 1} / {photos.length}</p>
          </div>
        </div>
      )}
    </section>
  );
} 
