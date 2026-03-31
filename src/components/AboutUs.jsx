import React from 'react';


export default function AboutUs() {
  return (
    <section className="px-6 lg:px-16 py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="w-full rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-400">
            <img
              src="/about.png"
              alt="About Orbit eBikes"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[#333333] font-semibold text-sm uppercase tracking-widest block mb-3">About Us</h3>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#438b2f] mb-5 leading-snug">Orbit eBikes</h2>
          <h3 className='font -bold text-[#333333]'>Driven by Engineering. Powered by Trust.</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Orbit Bikes is a modern electric mobility brand backed by the manufacturing legacy of JINDAL FORGINGS (Since 1992). We design and deliver reliable, efficient, and future-ready electric two-wheelers built for Indian roads and Indian users.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            With a focus on performance, durability, and cost efficiency, Orbit Bikes aims to accelerate the transition toward sustainable transportation without compromising on quality or safety.
          </p>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Orbit Bikes is an electric two-wheeler brand established to meet the growing demand for dependable and affordable electric mobility in India. The company operates under the strategic guidance and industrial expertise of Jindal Forgings, a name associated with precision manufacturing and engineering excellence for over three decades.
          </p>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Our focus is on building electric bikes that balance performance, safety, and long-term reliability. Every product is engineered with attention to structural strength, efficient power delivery, and rider comfort.
          </p>
          
        </div>
      </div>
    </section>
  );
}
