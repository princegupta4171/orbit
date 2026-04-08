import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiArrowLeft, FiBatteryCharging, FiCalendar, FiCheckCircle, FiSend, FiShare2, FiShield, FiZap } from 'react-icons/fi';

const scooters = [
  {
    id: 1,
    name: 'Model S1 Pro',
    tag: 'Premium Commuter',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/ac7c749e-700b-4cbf-8841-eb9762971abb.png',
    summary: 'The S1 Pro brings sharper bodywork and a premium commuter presence to city roads. Built for riders who want performance without compromise.',
    specs: { Range: '100 km', 'Top Speed': '55 km/h', Battery: '2.0 kWh', 'Charging Time': '4–5 hrs', Motor: '250W BLDC', Weight: '95 kg' },
    highlights: ['Disc brakes front & rear', 'Digital instrument cluster', 'Anti-theft alarm system', 'LED headlamp & DRL'],
    colors: ['#1a1a2e', '#2d4a3e', '#8b0000'],
  },
  {
    id: 2,
    name: 'Model Activa XJ',
    tag: 'Daily Utility',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/8d820d0d-cad3-4751-8dbe-f84a95a32617.png',
    summary: 'Utility-friendly silhouette with broad daily appeal. The Activa XJ is engineered for the everyday Indian commuter who needs reliability above all.',
    specs: { Range: '90 km', 'Top Speed': '50 km/h', Battery: '1.8 kWh', 'Charging Time': '4 hrs', Motor: '250W BLDC', Weight: '90 kg' },
    highlights: ['Large under-seat storage', 'Tubeless tyres', 'Regenerative braking', 'Mobile charging port'],
    colors: ['#2c2c2c', '#1a3a2a', '#4a3728'],
  },
  {
    id: 3,
    name: 'Model E4',
    tag: 'Flagship',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/0c00ac12-98b2-4286-af45-b3e54987dd85.png',
    summary: 'The flagship E4 sets the benchmark for Orbit\'s electric lineup. With 120 km range and a 350W motor, it\'s built for riders who demand the best.',
    specs: { Range: '120 km', 'Top Speed': '60 km/h', Battery: '2.5 kWh', 'Charging Time': '5 hrs', Motor: '350W BLDC', Weight: '100 kg' },
    highlights: ['Highest range in lineup', 'Smart connectivity', 'Hydraulic suspension', 'Fast charging support'],
    colors: ['#0d1f16', '#1c1c3a', '#3a2800'],
  },
  {
    id: 4,
    name: 'Model SL',
    tag: 'Urban Compact',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/39f5b7d5-c3eb-4395-9404-216abf7f92ee.png',
    summary: 'Compact form with a cleaner, more urban-friendly mood. The SL is perfect for navigating tight city lanes without sacrificing style.',
    specs: { Range: '80 km', 'Top Speed': '45 km/h', Battery: '1.5 kWh', 'Charging Time': '3.5 hrs', Motor: '200W BLDC', Weight: '85 kg' },
    highlights: ['Lightweight frame', 'Easy park assist', 'Eco & Sport modes', 'Puncture-resistant tyres'],
    colors: ['#1a1a1a', '#2a3a2a', '#2a2a3a'],
  },
  {
    id: 5,
    name: 'Model DL',
    tag: 'Dependable EV',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/e1b4d744-e462-4cbf-b88c-d3e26583270f.png',
    summary: 'Balanced stance for customers seeking dependable everyday EVs. The DL is engineered for long-term ownership confidence.',
    specs: { Range: '95 km', 'Top Speed': '52 km/h', Battery: '1.9 kWh', 'Charging Time': '4 hrs', Motor: '250W BLDC', Weight: '92 kg' },
    highlights: ['Durable build quality', 'Low maintenance cost', 'Wide service network', '2-year battery warranty'],
    colors: ['#1e2a1e', '#2a1e1e', '#1e1e2a'],
  },
  {
    id: 6,
    name: 'Model SL Pro',
    tag: 'Premium Urban',
    image: 'https://www.orbitebikes.in/auth/upload/product-photo/ed453c19-3d0b-47fa-80b5-d759b8f958a6.jpg',
    summary: 'A stronger premium visual fit with upgraded performance. The SL Pro takes the compact SL formula and elevates it for discerning urban riders.',
    specs: { Range: '110 km', 'Top Speed': '58 km/h', Battery: '2.2 kWh', 'Charging Time': '4.5 hrs', Motor: '300W BLDC', Weight: '97 kg' },
    highlights: ['Premium alloy wheels', 'Keyless entry', 'Geo-fencing alert', 'Ride analytics app'],
    colors: ['#1a1a2e', '#1e2a1e', '#2a1a1a'],
  },
];

export default function ScooterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const scooter = scooters.find((s) => s.id === Number(id));
  const [form, setForm] = useState({ name: '', phone: '', city: '' });

  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!scooter) return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: 'var(--color-ink)' }}>
      <p className="text-slate-400">Scooter not found.</p>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Orbit eBikes! 🛵

I would like to book a test ride.

*Vehicle:* ${scooter.name} (${scooter.tag})
*Range:* ${scooter.specs['Range']} | *Top Speed:* ${scooter.specs['Top Speed']}

*Name:* ${form.name}
*Phone:* ${form.phone}
*City:* ${form.city}

Please confirm my test ride slot. Thank you!`;
    const url = `https://wa.me/919458502838?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-8" style={{ background: 'var(--color-ink)' }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-400/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
        >
          <FiArrowLeft /> Back to lineup
        </button>

        {/* Hero panel */}
        <div className="panel-surface overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative flex items-center justify-center p-8 md:w-1/2" style={{ background: 'linear-gradient(135deg, #0d1f16 0%, #0a1a10 100%)' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              </div>
              <img
                src={scooter.image}
                alt={scooter.name}
                className="relative z-10 h-64 w-full object-contain drop-shadow-2xl md:h-80"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-8">
              <span className="w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ border: '1px solid var(--color-line)', background: 'rgba(110,220,140,0.08)', color: 'var(--color-brand)' }}>
                {scooter.tag}
              </span>
              <h1 className="mt-3 text-3xl font-bold text-white">{scooter.name}</h1>
              <p className="mt-3 text-sm leading-6 text-slate-400">{scooter.summary}</p>

              {/* Specs grid */}
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {Object.entries(scooter.specs).map(([key, val]) => (
                  <div key={key} className="rounded-xl px-3 py-2.5" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-line)' }}>
                    <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-brand)' }}>{key}</p>
                    <p className="mt-0.5 text-sm font-bold text-white">{val}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                {scooter.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                    <FiCheckCircle className="shrink-0 text-[var(--color-brand)]" size={13} />
                    {h}
                  </div>
                ))}
              </div>

              {/* Share */}
              <div className="mt-5">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-400">
                  <FiShare2 size={13} /> Share this model
                </p>
                <div className="mt-3 flex gap-2">
                  {[
                    {
                      icon: <FaWhatsapp size={16} />,
                      label: 'WhatsApp',
                      color: 'hover:border-green-500 hover:text-green-400',
                      url: `https://wa.me/?text=${encodeURIComponent(`Check out the ${scooter.name} by Orbit eBikes! ${window.location.href}`)}`,
                    },
                    {
                      icon: <FaFacebookF size={15} />,
                      label: 'Facebook',
                      color: 'hover:border-blue-500 hover:text-blue-400',
                      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                    },
                    {
                      icon: <FaTwitter size={15} />,
                      label: 'Twitter',
                      color: 'hover:border-sky-400 hover:text-sky-400',
                      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out the ${scooter.name} by Orbit eBikes!`)}&url=${encodeURIComponent(window.location.href)}`,
                    },
                    {
                      icon: <FaInstagram size={15} />,
                      label: 'Instagram',
                      color: 'hover:border-pink-500 hover:text-pink-400',
                      url: `https://www.instagram.com/orbitebikes`,
                    },
                  ].map(({ icon, label, color, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-200 ${color}`}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: stats + booking form */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          {/* Why this model */}
          <div className="panel-surface p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-brand)]">Why {scooter.name}</p>
            <div className="mt-4 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiZap className="mt-0.5 shrink-0 text-[var(--color-brand)]" size={16} />
                <div>
                  <p className="text-sm font-semibold text-white">Jindal Forgings Backed</p>
                  <p className="mt-0.5 text-xs text-slate-400">30+ years of manufacturing discipline behind every component.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiShield className="mt-0.5 shrink-0 text-[var(--color-brand)]" size={16} />
                <div>
                  <p className="text-sm font-semibold text-white">Service Network</p>
                  <p className="mt-0.5 text-xs text-slate-400">Dealer support and spare availability across India.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiBatteryCharging className="mt-0.5 shrink-0 text-[var(--color-brand)]" size={16} />
                <div>
                  <p className="text-sm font-semibold text-white">Real-world Range</p>
                  <p className="mt-0.5 text-xs text-slate-400">Tested on Indian roads for Indian commuting patterns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Book test ride */}
          <div className="panel-surface p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)]">
                <FiCalendar size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Book now</p>
                <h3 className="text-xl font-bold text-white">Test ride the {scooter.name}</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
              <input
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="orbit-input"
              />
              <input
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="orbit-input"
              />
              <input
                placeholder="Your city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                required
                className="orbit-input"
              />
              <button type="submit" className="orbit-button-primary mt-1 w-full">
                <FiSend size={15} /> Book test ride
              </button>
            </form>

            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-2.5 text-xs text-slate-400">
              <FiCheckCircle className="shrink-0 text-[var(--color-brand)]" />
              Our team will call you within 48 hours to confirm your slot.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
