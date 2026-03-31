import React, { useState } from 'react';

export default function TestDrive() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', phone: '', city: '', date: '' });
  };

  return (
    <section className="px-6 lg:px-16 py-20 bg-gradient-to-br from-green-50 to-emerald-50" id="testdrive">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <span className="text-[#00b300] font-semibold text-sm uppercase tracking-widest block mb-3">Experience It</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-5">Book Your Test Drive</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Discover the thrill of riding with Orbit eBikes. Feel the power, comfort, and innovation firsthand. Book your free test ride today at your nearest dealer and take the first step towards the future of mobility. 🚀
          </p>
          <ul className="flex flex-col gap-3">
            {['Free test ride at your nearest dealer', 'No commitment required', 'Expert guidance from our team', 'Available 7 days a week'].map(p => (
              <li key={p} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <span className="text-[#00b300]">✅</span> {p}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 bg-white rounded-2xl p-8 shadow-xl flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Schedule Your Ride</h3>
          {['name', 'phone', 'city'].map(field => (
            <input
              key={field}
              name={field}
              value={form[field]}
              onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
              placeholder={field === 'name' ? 'Your Full Name' : field === 'phone' ? 'Phone Number' : 'Your City'}
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#00b300] focus:ring-2 focus:ring-green-100 transition-all duration-200"
            />
          ))} 
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
            required
            className="px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#00b300] focus:ring-2 focus:ring-green-100 transition-all duration-200 text-gray-500"
          />
          <button
            type="submit"
            className={`py-3.5 rounded-xl font-bold text-white transition-all duration-250 ${submitted ? 'bg-green-400' : 'bg-[#00b300] hover:bg-[#009900] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200'}`}
          >
            {submitted ? '✅ Booking Confirmed!' : 'Book Test Drive'}
          </button>
        </form>
      </div>
    </section>
  );
}
