import React from 'react';
import './WhyUs.css';

const features = [
  { icon: '⚡', title: 'Powerful Motors', desc: 'High-torque motors for smooth acceleration on any terrain.' },
  { icon: '🔋', title: 'Long Battery Life', desc: 'Ride up to 100km on a single charge with our advanced batteries.' },
  { icon: '🛡️', title: '2 Year Warranty', desc: 'Complete peace of mind with our comprehensive warranty coverage.' },
  { icon: '🔧', title: 'Free Service', desc: 'First 3 services absolutely free at any of our service centers.' },
  { icon: '🚚', title: 'Free Delivery', desc: 'Free home delivery across India within 5-7 business days.' },
  { icon: '💳', title: 'Easy EMI', desc: 'No-cost EMI options available on all major credit cards.' },
];

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="section-header">
        <p className="section-tag">Why Orbit</p>
        <h2>Why Choose Us?</h2>
      </div>
      <div className="features-grid">
        {features.map(f => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
