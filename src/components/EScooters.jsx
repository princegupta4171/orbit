import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const scooters = [
  {
    id: 1,
    name: 'Model S1 Pro',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/ac7c749e-700b-4cbf-8841-eb9762971abb.png',
    link: 'https://www.orbitebikes.in/product-info/9/Model-S1-Pro',
    summary: 'Sharper bodywork and a premium commuter presence.',
  },
  {
    id: 2,
    name: 'Model Activa XJ',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/8d820d0d-cad3-4751-8dbe-f84a95a32617.png',
    link: 'https://www.orbitebikes.in/product-info/8/Model-Activa-XJ',
    summary: 'Utility-friendly silhouette with broad daily appeal.',
  },
  {
    id: 3,
    name: 'Model E4',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/0c00ac12-98b2-4286-af45-b3e54987dd85.png',
    link: 'https://www.orbitebikes.in/product-info/7/Model-E4',
    summary: 'A good flagship image for the refreshed landing page.',
  },
  {
    id: 4,
    name: 'Model SL',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/39f5b7d5-c3eb-4395-9404-216abf7f92ee.png',
    link: 'https://www.orbitebikes.in/product-info/6/Model-SL',
    summary: 'Compact form with a cleaner, more urban-friendly mood.',
  },
  {
    id: 5,
    name: 'Model DL',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/e1b4d744-e462-4cbf-b88c-d3e26583270f.png',
    link: 'https://www.orbitebikes.in/product-info/5/Model-DL',
    summary: 'Balanced stance for customers seeking dependable everyday EVs.',
  },
  {
    id: 6,
    name: 'Model SL Pro',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/ed453c19-3d0b-47fa-80b5-d759b8f958a6.jpg',
    link: 'https://www.orbitebikes.in/product-info/4/Model-SL-Pro',
    summary: 'A stronger premium visual fit in the revised lineup grid.',
  },
];

export default function EScooters() {
  const navigate = useNavigate();
  return (
    <section id="lineup" className="section-shell-light bg-[#f4f8f3]">
      <div className="content-wrap">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow border-emerald-100 bg-emerald-50 text-emerald-700">Lineup showcase</span>
            <h2 className="section-title text-slate-950">The scooter grid now feels more editorial, premium, and easier to browse.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Each model card gets more breathing room, a clearer summary, and stronger product framing
            so the lineup section sells the brand as much as the vehicles.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {scooters.map((scooter) => (
            <article
              key={scooter.id}
              className="panel-surface-light group overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,_#f6fbf7,_#edf5ef)] p-5">
                <div className="absolute inset-x-10 bottom-4 h-6 rounded-full bg-emerald-200/70 blur-2xl" />
                <img
                  src={scooter.image}
                  alt={scooter.name}
                  className="relative z-10 mx-auto h-64 object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-slate-900">{scooter.name}</h3>
                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    Orbit EV
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{scooter.summary}</p>
                <button
                  onClick={() => navigate(`/scooter/${scooter.id}`)}
                  className="orbit-button-dark mt-6 w-full"
                >
                  View details
                  <FiArrowUpRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
