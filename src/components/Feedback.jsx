import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';

const reviews = [
  {
    name: 'Rahul Sharma',
    city: 'Delhi',
    rating: 5,
    text: 'The refreshed site makes Orbit feel far more premium while still sounding practical and trustworthy.',
  },
  {
    name: 'Priya Patel',
    city: 'Mumbai',
    rating: 5,
    text: 'I can immediately understand the lineup, the service promise, and what to do next. That clarity matters.',
  },
  {
    name: 'Arjun Singh',
    city: 'Bengaluru',
    rating: 4,
    text: 'The design now feels closer to a serious EV brand rather than a template site with products added later.',
  },
];

export default function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', rating: 0, message: '' });
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', rating: 0, message: '' });
  };

  return (
    <section id="feedback" className="section-shell-light flex min-h-screen items-center bg-[#f4f8f3] py-6">
      <div className="content-wrap">
        <div className="max-w-3xl">
          <span className="eyebrow border-emerald-100 bg-emerald-50 text-emerald-700">Feedback and proof</span>
          <h2 className="section-title text-2xl text-slate-950 sm:text-3xl">A modern site also needs warmer social proof and a cleaner interaction model.</h2>
          <p className="section-copy-light">
            The review cards and feedback form now feel part of the same visual system, with better
            contrast, cleaner spacing, and stronger trust cues.
          </p>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {reviews.map((review) => (
              <article key={review.name} className="panel-surface-light p-4">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <FaStar key={`${review.name}-${index}`} size={15} />
                  ))}
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-600">"{review.text}"</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.city}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="panel-surface-light p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <FiMessageSquare size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">Customer voice</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-950">Share your experience</h3>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setForm({ ...form, rating: star })}
                  className="text-2xl transition"
                  aria-label={`Rate ${star} stars`}
                >
                  <FaStar color={(hover || form.rating) >= star ? '#f59e0b' : '#d1d5db'} />
                </button>
              ))}
            </div>

            <div className="mt-4 grid gap-3">
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                required
                className="orbit-input-light"
              />
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                required
                className="orbit-input-light"
              />
              <textarea
                rows={5}
                placeholder="Write your feedback"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                required
                className="orbit-input-light resize-none"
              />
            </div>

            <button type="submit" className="orbit-button-dark mt-4 w-full border-slate-900 bg-slate-900">
              {submitted ? 'Feedback received' : 'Submit feedback'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
