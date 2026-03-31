import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const reviews = [
  { name: 'Rahul Sharma', city: 'Delhi', rating: 5, text: 'Best electric bike I have ever ridden! The battery life is amazing and the build quality is top notch.' },
  { name: 'Priya Patel', city: 'Mumbai', rating: 5, text: 'Orbit City Pro has completely changed my daily commute. Saves money on fuel and so much fun to ride!' },
  { name: 'Arjun Singh', city: 'Bangalore', rating: 4, text: 'Great product with excellent after-sales service. The free service offer is a huge plus. Highly recommended!' },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-header">
        <p className="section-tag">Reviews</p>
        <h2>What Our Riders Say</h2>
      </div>
      <div className="reviews-grid">
        {reviews.map(r => (
          <div className="review-card" key={r.name}>
            <div className="stars">
              {[...Array(r.rating)].map((_, i) => <FaStar key={i} color="#FFB800" />)}
            </div>
            <p className="review-text">"{r.text}"</p>
            <div className="reviewer">
              <div className="avatar">{r.name[0]}</div>
              <div>
                <strong>{r.name}</strong>
                <span>{r.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
