import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-[#0f0f0f] overflow-hidden flex items-center">

      {/* Background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#00b300] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[200px] w-[400px] h-[400px] bg-[#00b300] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 gap-10 py-16">

        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-[#00b300]/10 border border-[#00b300]/40 text-[#00b300] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
            🌿 Eco-Friendly Rides
          </span>
 
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6">
            Ride the <br />
            <span className="text-[#00b300]">Future</span> with <br />
            <span className="text-white">Orbit eBikes</span>
          </h1>

          <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            Premium electric scooters designed for urban commuters and adventure seekers. Zero emissions. Maximum thrill.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
            <button className="bg-[#00b300] hover:bg-[#009900] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00b300]/40">
              Explore Bikes
            </button>
            <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1">
              ▶ Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center lg:justify-start">
            {[['500+', 'Happy Riders'], ['100km', 'Max Range'], ['5★', 'Rating']].map(([val, label]) => (
              <div key={label} className="flex flex-col group cursor-default">
                <strong className="text-2xl lg:text-3xl font-black text-[#00b300] group-hover:scale-110 transition-transform duration-200 origin-left">{val}</strong>
                <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Bike Image */}
        <div className="flex-1 flex justify-center lg:justify-end items-center relative">
          {/* Glow ring behind image */}
          <div className="absolute w-[380px] h-[380px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#00b300]/10 blur-2xl" />

          <img
            src="https://www.orbitebikes.in/auth/upload/product-photo/0c00ac12-98b2-4286-af45-b3e54987dd85.png"
            alt="Orbit eBike"
            className="relative z-10 w-[320px] lg:w-[500px] xl:w-[560px] object-contain drop-shadow-[0_0_60px_rgba(0,179,0,0.35)] hover:scale-105 hover:drop-shadow-[0_0_80px_rgba(0,179,0,0.5)] transition-all duration-500"
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
    </section>
  );
}
