import React from 'react';
import { FiBatteryCharging, FiLock, FiMonitor, FiShield, FiTrendingUp, FiWind } from 'react-icons/fi';

const features = [
  {
    image: 'https://www.orbitebikes.in/assets/img/features/High-efficiency%20electric%20motors.jpg',
    icon: <FiTrendingUp size={18} />,
    title: 'Efficient power delivery',
    desc: 'The cards now frame product benefits in plain language before diving into feature specifics.',
  },
  {
    image: 'https://www.orbitebikes.in/assets/img/features/Strong%20chassis%20and%20stable%20suspension.jpg',
    icon: <FiShield size={18} />,
    title: 'Stable and confidence-led chassis',
    desc: 'Better overlays and spacing make every feature tile feel intentional instead of decorative.',
  },
  {
    image: 'https://www.orbitebikes.in/assets/img/features/Disc%20braking%20systems%20for%20improved%20safety.jpg',
    icon: <FiWind size={18} />,
    title: 'Safer stopping feel',
    desc: 'The section is now designed to read as product proof, not a random gallery of images.',
  },
  {
    image: 'https://www.orbitebikes.in/assets/img/features/LED%20lighting%20and%20digital%20meters.jpg',
    icon: <FiMonitor size={18} />,
    title: 'Useful rider interface',
    desc: 'Small details like meters and lighting are presented with a cleaner premium framing.',
  },
  {
    image: 'https://www.orbitebikes.in/assets/img/features/Anti-theft%20and%20security%20features.jpg',
    icon: <FiLock size={18} />,
    title: 'Security-minded ownership',
    desc: 'Security becomes a trust signal with stronger typography and better visual contrast.',
  },
  {
    image: 'https://www.orbitebikes.in/assets/img/features/Smooth%20acceleration%20and%20reverse%20assist.jpg',
    icon: <FiBatteryCharging size={18} />,
    title: 'City-ready convenience',
    desc: 'Features are translated into everyday rider outcomes so the section is easier to scan.',
  },
];

export default function ProductFeatures() {
  return (
    <section id="features" className="section-shell flex min-h-screen items-center py-6">
      <div className="content-wrap">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Product language</span>
            <h2 className="section-title text-2xl sm:text-3xl">Feature communication that feels closer to a premium EV launch page.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Richer cards, tighter copy, and better visual contrast make the product section feel more
            modern while still keeping real Orbit imagery front and center.
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-[#07100c55] to-transparent" />
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-brand)] backdrop-blur">
                  {feature.icon}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-white">{feature.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-300">{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
