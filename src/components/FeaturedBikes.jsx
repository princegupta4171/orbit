import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './FeaturedBikes.css';

const bikes = [
  { id: 1, name: 'Orbit City Pro', price: 45999, originalPrice: 52000, tag: 'Best Seller', range: '60km', speed: '25km/h', battery: '36V 10Ah', emoji: '🚲' },
  { id: 2, name: 'Orbit Trail X', price: 62999, originalPrice: 70000, tag: 'New', range: '80km', speed: '32km/h', battery: '48V 13Ah', emoji: '🏔️' },
  { id: 3, name: 'Orbit Fold Mini', price: 38999, originalPrice: 44000, tag: 'Compact', range: '45km', speed: '20km/h', battery: '36V 8Ah', emoji: '🛵' },
  { id: 4, name: 'Orbit Speed S1', price: 78999, originalPrice: 88000, tag: 'Premium', range: '100km', speed: '40km/h', battery: '48V 17Ah', emoji: '⚡' },
];

export default function FeaturedBikes() {
  const [wishlist, setWishlist] = React.useState([]);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <section className="featured">
      <div className="section-header">
        <p className="section-tag">Our Collection</p>
        <h2>Featured Electric Bikes</h2>
      </div>
      <div className="bikes-grid">
        {bikes.map(bike => (
          <div className="bike-card" key={bike.id}>
            <div className="bike-img">
              <span className="bike-tag">{bike.tag}</span>
              <div className="bike-emoji">{bike.emoji}</div>
              <button className="wishlist-btn" onClick={() => toggleWishlist(bike.id)}>
                <FaHeart color={wishlist.includes(bike.id) ? '#e53935' : '#ccc'} />
              </button>
            </div>
            <div className="bike-info">
              <h3>{bike.name}</h3>
              <div className="bike-specs">
                <span>🔋 {bike.battery}</span>
                <span>📍 {bike.range}</span>
                <span>⚡ {bike.speed}</span>
              </div>
              <div className="bike-price">
                <strong>₹{bike.price.toLocaleString()}</strong>
                <s>₹{bike.originalPrice.toLocaleString()}</s>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
