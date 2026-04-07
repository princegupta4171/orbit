import React from 'react';
import { FiActivity, FiCompass, FiHeadphones, FiLayers, FiSettings, FiTruck } from 'react-icons/fi';

const facilities = [
  {
    icon: <FiCompass size={20} />,
    title: 'Experience-led showrooms',
    desc: 'Retail touchpoints can feel cleaner and more premium when the website sets the tone first.',
  },
  {
    icon: <FiSettings size={20} />,
    title: 'Service-first operations',
    desc: 'We call out dependable support instead of burying it behind generic marketing copy.',
  },
  {
    icon: <FiActivity size={20} />,
    title: 'Ride evaluation spaces',
    desc: 'Test ride touchpoints are positioned as part of the brand story, not an afterthought.',
  },
  {
    icon: <FiTruck size={20} />,
    title: 'Spare and supply readiness',
    desc: 'Operational confidence matters in EV adoption, so it deserves visible placement.',
  },
  {
    icon: <FiHeadphones size={20} />,
    title: 'Dealer enablement',
    desc: 'A modern site should support partner trust as much as consumer trust.',
  },
  {
    icon: <FiLayers size={20} />,
    title: 'R and D narrative',
    desc: 'Innovation reads better when it is shown through outcomes, clarity, and restraint.',
  },
];

export default function Facilities() {
  return (
    <section className="section-shell flex min-h-screen items-center bg-[var(--color-surface)] py-6">
      <div className="content-wrap">
        <div className="max-w-3xl">
          <span className="eyebrow">Operational backbone</span>
          <h2 className="section-title text-2xl sm:text-3xl">A more modern website should also show how the brand supports ownership.</h2>
          <p className="section-copy">
            This layer shifts the conversation from just product visuals to the full Orbit ecosystem:
            retail, support, service, supply, and rider confidence after purchase.
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)]">
                {item.icon}
              </div>
              <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-xs leading-5 text-slate-300">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
