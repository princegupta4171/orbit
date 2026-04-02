import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';

const scooters = [
  {
    id: 1,
    name: 'Model S1 Pro',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/ac7c749e-700b-4cbf-8841-eb9762971abb.png',
    link: 'https://www.orbitebikes.in/product-info/9/Model-S1-Pro',
    summary: 'Sharper bodywork and a premium commuter presence.',
    specs: { Range: '100 km', TopSpeed: '55 km/h', Battery: '2.0 kWh', ChargingTime: '4–5 hrs', Motor: '250W BLDC', Weight: '95 kg' },
  },
  {
    id: 2,
    name: 'Model Activa XJ',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/8d820d0d-cad3-4751-8dbe-f84a95a32617.png',
    link: 'https://www.orbitebikes.in/product-info/8/Model-Activa-XJ',
    summary: 'Utility-friendly silhouette with broad daily appeal.',
    specs: { Range: '90 km', TopSpeed: '50 km/h', Battery: '1.8 kWh', ChargingTime: '4 hrs', Motor: '250W BLDC', Weight: '90 kg' },
  },
  {
    id: 3,
    name: 'Model E4',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/0c00ac12-98b2-4286-af45-b3e54987dd85.png',
    link: 'https://www.orbitebikes.in/product-info/7/Model-E4',
    summary: 'A good flagship image for the refreshed landing page.',
    specs: { Range: '120 km', TopSpeed: '60 km/h', Battery: '2.5 kWh', ChargingTime: '5 hrs', Motor: '350W BLDC', Weight: '100 kg' },
  },
  {
    id: 4,
    name: 'Model SL',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/39f5b7d5-c3eb-4395-9404-216abf7f92ee.png',
    link: 'https://www.orbitebikes.in/product-info/6/Model-SL',
    summary: 'Compact form with a cleaner, more urban-friendly mood.',
    specs: { Range: '80 km', TopSpeed: '45 km/h', Battery: '1.5 kWh', ChargingTime: '3.5 hrs', Motor: '200W BLDC', Weight: '85 kg' },
  },
  {
    id: 5,
    name: 'Model DL',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/e1b4d744-e462-4cbf-b88c-d3e26583270f.png',
    link: 'https://www.orbitebikes.in/product-info/5/Model-DL',
    summary: 'Balanced stance for customers seeking dependable everyday EVs.',
    specs: { Range: '95 km', TopSpeed: '52 km/h', Battery: '1.9 kWh', ChargingTime: '4 hrs', Motor: '250W BLDC', Weight: '92 kg' },
  },
  {
    id: 6,
    name: 'Model SL Pro',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/ed453c19-3d0b-47fa-80b5-d759b8f958a6.jpg',
    link: 'https://www.orbitebikes.in/product-info/4/Model-SL-Pro',
    summary: 'A stronger premium visual fit in the revised lineup grid.',
    specs: { Range: '110 km', TopSpeed: '58 km/h', Battery: '2.2 kWh', ChargingTime: '4.5 hrs', Motor: '300W BLDC', Weight: '97 kg' },
  },
];

export default function ScooterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const scooter = scooters.find((s) => s.id === Number(id));

  if (!scooter) return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: 'var(--color-ink)' }}>
      <p className="text-slate-400">Scooter not found.</p>
    </div>
  );

  return (
    <div
      className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-8"
      style={{ background: 'var(--color-ink)' }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-400/8 blur-[100px]" />
      </div>

      <button
        onClick={() => navigate(-1)}
        className="relative mb-8 flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
      >
        <FiArrowLeft /> Back
      </button>

      <div className="panel-surface relative mx-auto max-w-5xl overflow-hidden">
        {/* subtle top border glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="flex flex-col md:flex-row">
          {/* Left – Image */}
          <div
            className="relative flex items-center justify-center p-10 md:w-1/2"
            style={{ background: 'linear-gradient(135deg, #0d1f16 0%, #0a1a10 100%)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>
            <img
              src={scooter.image}
              alt={scooter.name}
              className="relative z-10 h-72 w-full object-contain drop-shadow-2xl md:h-96"
            />
          </div>

          {/* Right – Details */}
          <div className="flex flex-col justify-center p-8 md:w-1/2">
            <span
              className="mb-3 w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ border: '1px solid var(--color-line)', background: 'rgba(110,220,140,0.08)', color: 'var(--color-brand)' }}
            >
              Orbit EV
            </span>
            <h1 className="text-3xl font-bold text-white">{scooter.name}</h1>
            <p className="mt-3 text-sm leading-7 text-slate-400">{scooter.summary}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {Object.entries(scooter.specs).map(([key, val]) => (
                <div
                  key={key}
                  className="rounded-xl px-4 py-3"
                  style={{ background: 'var(--color-surface)', border: '1px solid var(--color-line)' }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-brand)' }}>{key}</p>
                  <p className="mt-0.5 text-base font-bold text-white">{val}</p>
                </div>
              ))}
            </div>

            <a
              href={scooter.link}
              target="_blank"
              rel="noreferrer"
              className="orbit-button-primary mt-8 flex w-full items-center justify-center gap-2"
            >
              View on Orbit <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
