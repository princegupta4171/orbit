import React from 'react';
import './Categories.css';

const categories = [
  { icon: '🏙️', name: 'City Bikes', desc: 'Perfect for daily urban commute' },
  { icon: '⛰️', name: 'Mountain eBikes', desc: 'Conquer any terrain with ease' },
  { icon: '🚀', name: 'Speed Bikes', desc: 'High performance for thrill seekers' },
  { icon: '🛵', name: 'Folding Bikes', desc: 'Compact & portable design' },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="section-header">
        <p className="section-tag">Categories</p>
        <h2>Find Your Perfect Ride</h2>
      </div>
      <div className="categories-grid">
        {categories.map(cat => (
          <div className="category-card" key={cat.name}>
            <div className="cat-icon">{cat.icon}</div>
            <h3>{cat.name}</h3>
            <p>{cat.desc}</p>
            <a href="/" className="cat-link">Explore →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
