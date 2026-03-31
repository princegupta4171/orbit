import React from 'react';

const facilities = [
  { icon: '🏪', title: 'Showroom', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.' },
  { icon: '🔧', title: 'Service Center', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.' },
  { icon: '🧪', title: 'Test Track', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.' },
  { icon: '📦', title: 'Spare Parts', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.' },
  { icon: '🎓', title: 'Training Center', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.' },
  { icon: '💡', title: 'R&D Lab', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.' },
];
 
export default function Facilities() {
  return (
    <section className="px-6 lg:px-16 py-20 bg-gray-50" id="facilities">
      <div className="text-center mb-12">
        <span className="text-[#00b300] font-semibold text-sm uppercase tracking-widest block mb-2">What We Offer</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Facilities &amp; Features</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map(f => (
          <div key={f.title} className="group bg-white rounded-2xl p-8 text-center border-2 border-transparent shadow-sm hover:border-[#00b300] hover:-translate-y-2 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-2xl mx-auto mb-5 group-hover:scale-110 group-hover:rotate-[-5deg] transition-transform duration-300">
              {f.icon}
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
