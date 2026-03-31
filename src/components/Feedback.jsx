import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { name: 'Rahul Sharma', city: 'Delhi', rating: 5, text: 'Best electric bike I have ever ridden! The battery life is amazing and the build quality is top notch.' },
  { name: 'Priya Patel', city: 'Mumbai', rating: 5, text: 'Orbit City Pro has completely changed my daily commute. Saves money on fuel and so much fun to ride!' },
  { name: 'Arjun Singh', city: 'Bangalore', rating: 4, text: 'Great product with excellent after-sales service. The free service offer is a huge plus. Highly recommended!' },
];

export default function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', rating: 0, message: '' });
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault(); 
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', rating: 0, message: '' });
  };

  return (
    <section className="px-6 lg:px-16 py-20 bg-gradient-to-br from-green-50 to-emerald-50" id="feedback">
      <div className="text-center mb-12">
        <span className="text-[#00b300] font-semibold text-sm uppercase tracking-widest block mb-2">Testimonials</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Customer Feedback</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-5">
          {reviews.map(r => (
            <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-[#00b300] hover:-translate-y-1 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 cursor-default">
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => <FaStar key={i} color="#FFB800" size={14} />)}
              </div>
              <p className="text-sm text-gray-500 italic leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00b300] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <strong className="block text-sm text-gray-900">{r.name}</strong>
                  <span className="text-xs text-gray-400">{r.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl flex flex-col gap-4 lg:sticky lg:top-24">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Share Your Experience</h3>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(star => (
              <FaStar
                key={star}
                size={28}
                color={(hover || form.rating) >= star ? '#FFB800' : '#ddd'}
                className="cursor-pointer transition-colors duration-150"
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setForm({ ...form, rating: star })}
              />
            ))}
          </div>
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            className="px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#00b300] focus:ring-2 focus:ring-green-100 transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            className="px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#00b300] focus:ring-2 focus:ring-green-100 transition-all duration-200"
          />
          <textarea
            placeholder="Write your feedback..."
            rows={4}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
            className="px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#00b300] focus:ring-2 focus:ring-green-100 transition-all duration-200 resize-none font-sans"
          />
          <button
            type="submit"
            className={`py-3.5 rounded-xl font-bold text-white transition-all duration-250 ${submitted ? 'bg-green-400' : 'bg-[#00b300] hover:bg-[#009900] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200'}`}
          >
            {submitted ? '✅ Thank You!' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </section>
  );
}
