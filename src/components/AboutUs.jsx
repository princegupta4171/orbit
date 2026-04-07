import React from 'react';
import { FiArrowUpRight, FiAward, FiTool } from 'react-icons/fi';

const principles = [
  'Backed by Jindal Forgings manufacturing discipline since 1992',
  'Built for Indian commutes with practical comfort and serviceability',
  'Positioned as affordable electric mobility without a budget look',
];

export default function AboutUs() {
  return (
    <section id="about" className="section-shell-light flex min-h-screen items-center bg-[#f4f8f3] py-6">
      <div className="content-wrap grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <div className="panel-surface-light overflow-hidden p-3">
            <img
              src="/abut.png"
              alt="Orbit production and brand showcase"
              className="h-full min-h-[18rem] w-full rounded-[24px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 max-w-xs rounded-[28px] border border-emerald-100 bg-white p-4 shadow-[0_24px_60px_rgba(16,40,24,0.12)]">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">Brand foundation</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Industrial credibility meets a calmer, more premium customer-facing story.
            </p>
          </div>
        </div>

        <div className="pt-8 lg:pt-0">
          <span className="eyebrow border-emerald-100 bg-emerald-50 text-emerald-700">About Orbit</span>
          <h2 className="section-title text-3xl text-slate-950 sm:text-4xl">
            A stronger story for a brand that already has the engineering depth.
          </h2>
          <p className="section-copy-light text-sm">
            Orbit Bikes already has the substance: manufacturing maturity, road-focused product
            decisions, and a value proposition that matters in India. The redesign sharpens how that
            story is told, using better hierarchy and more deliberate visuals.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="panel-surface-light p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <FiAward size={18} />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900">Manufacturing legacy</h3>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                The site now highlights pedigree without feeling old-fashioned or overly technical.
              </p>
            </div>
            <div className="panel-surface-light p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <FiTool size={18} />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900">Product trust</h3>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                Better copy blocks and service signals make the brand feel dependable and modern.
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {principles.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs leading-6 text-slate-700"
              >
                <span className="mt-0.5 text-emerald-700">
                  <FiArrowUpRight />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
