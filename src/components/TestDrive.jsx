import React, { useState } from 'react';
import { FiCalendar, FiCheckCircle, FiMapPin, FiPhoneCall } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiMapPin size={18} />,
    title: 'Dealer-matched scheduling',
    desc: 'Visitors can request a ride near their city without leaving the page.',
  },
  {
    icon: <FiPhoneCall size={18} />,
    title: 'Quick call-back expectation',
    desc: 'The layout makes the next step feel immediate and trustworthy.',
  },
  {
    icon: <FiCalendar size={18} />,
    title: 'Cleaner capture flow',
    desc: 'A tighter form and better spacing remove friction from the conversion moment.',
  },
];

export default function TestDrive() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', date: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Hello Orbit eBikes! 🛵

I would like to book a test ride.

*Name:* ${form.name}
*Phone:* ${form.phone}
*City:* ${form.city}
*Date:* ${form.date}

Please confirm my test ride slot. Thank you!`;
    window.open(`https://wa.me/919458502838?text=${encodeURIComponent(message)}`, '_blank');
    setForm({ name: '', phone: '', city: '', date: '' });
  };

  return (
    <section id="test-drive" className="section-shell flex min-h-screen items-center py-6">
      <div className="content-wrap">
        <div className="panel-surface overflow-hidden px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="eyebrow">
                <FiCalendar />
                Test ride conversion
              </span>
              <h2 className="section-title max-w-2xl text-2xl sm:text-3xl">
                Make the booking experience feel premium, simple, and ready to convert.
              </h2>
              <p className="section-copy text-sm">
                This section now works like a proper sales assist: strong reasons to book, polished
                form styling, and a clearer promise of what happens next once someone shows intent.
              </p>

              <div className="mt-5 grid gap-3">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)]">
                      {item.icon}
                    </div>
                    <h3 className="mt-2 text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Reserve your experience</p>
              <h3 className="mt-2 text-2xl font-bold text-white">Book a test ride</h3>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Share your details and preferred date. This demo keeps the interaction local while
                showing the final UX direction.
              </p>

              <div className="mt-5 grid gap-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                  placeholder="Full name"
                  required
                  className="orbit-input"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                  placeholder="Phone number"
                  required
                  className="orbit-input"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    name="city"
                    value={form.city}
                    onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                    placeholder="City"
                    required
                    className="orbit-input"
                  />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                    required
                    className="orbit-input [color-scheme:dark]"
                  />
                </div>
              </div>

              <button type="submit" className="orbit-button-primary mt-4 w-full">
                Confirm test ride
              </button>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-2 text-xs text-slate-300">
                <FiCheckCircle className="text-[var(--color-brand)]" />
                <span>Designed to feel lightweight on mobile and strong on trust.</span>
              </div>

              <div className="mt-4 grid gap-2">
                <a href="tel:9458502838" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 transition hover:border-[var(--color-brand)] hover:text-white">
                  <FiPhoneCall className="shrink-0 text-[var(--color-brand)]" />
                  <span>+91 94585 02838</span>
                </a>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
                  <FiMapPin className="mt-0.5 shrink-0 text-[var(--color-brand)]" />
                  <span>G-1/700–701, Road No. 22, Phase II, RIICO Industrial Area, Bhiwadi, Rajasthan – 301001</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
