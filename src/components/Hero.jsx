import React from 'react';
import { FiArrowRight, FiPlay, FiShield, FiZap } from 'react-icons/fi';

const stats = [
  { value: '120 km', label: 'claimed top range' },
  { value: '30+', label: 'years of manufacturing depth' },
  { value: '48 hrs', label: 'dealer response benchmark' },
];

const highlights = [
  'Torque tuned for crowded city roads',
  'Confident service support and spare availability',
  'Sleek EV design with grounded engineering',
];

export default function Hero() {
  return (
    <section id="home" className="section-shell -mt-24 flex min-h-screen items-center pt-24 pb-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-[rgba(110,220,140,0.20)] blur-3xl" />
        <div className="absolute right-[6%] top-28 h-80 w-80 rounded-full bg-[rgba(217,255,122,0.12)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      <div className="content-wrap grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <span className="eyebrow">
            <FiZap />
            New electric mobility language
          </span>
          <h1 className="section-title max-w-3xl text-3xl sm:text-4xl xl:text-5xl">
            Orbit is ready for a sharper, premium electric brand presence.
          </h1>
          <p className="section-copy max-w-2xl text-sm text-slate-300">
            We rebuilt the landing experience around cleaner typography, a stronger product story,
            and a more premium visual rhythm so the website feels engineered instead of generic.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#lineup" className="orbit-button-primary">
              Explore lineup
              <FiArrowRight />
            </a>
            <a href="#gallery" className="orbit-button-secondary">
              <FiPlay />
              View brand story
            </a>
          </div>

          <div className="mt-4 grid gap-2 sm:max-w-xl">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(110,220,140,0.15)] text-[var(--color-brand)]">
                  <FiShield />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-3">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="panel-surface relative overflow-hidden p-4 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,220,140,0.18),_transparent_40%)]" />
            <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full border border-white/10" />

            <div className="relative flex flex-col gap-3">
              <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Flagship concept</p>
                  <p className="mt-1 text-lg font-bold text-white">Orbit Urban Glide</p>
                </div>
                <div className="rounded-full border border-[var(--color-brand)] px-3 py-1.5 text-xs uppercase tracking-[0.28em] text-[var(--color-brand)]">
                  Fresh look
                </div>
              </div>

              <div className="relative rounded-[32px] bg-[linear-gradient(160deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02))] px-4 py-4 sm:px-6">
                <div className="absolute inset-x-10 bottom-7 h-8 rounded-full bg-[rgba(110,220,140,0.22)] blur-2xl" />
                <img
                  src="https://www.orbitebikes.in/auth/upload/product-photo/0c00ac12-98b2-4286-af45-b3e54987dd85.png"
                  alt="Orbit electric scooter"
                  className="relative z-10 mx-auto w-full max-w-[22rem] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.05)] p-3">
                  <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Design direction</p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Cleaner surfaces, darker contrast, warmer green accents.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.05)] p-3">
                  <p className="text-xs uppercase tracking-[0.26em] text-slate-400">User impact</p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Better hierarchy, stronger trust signals, and a more premium first impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
