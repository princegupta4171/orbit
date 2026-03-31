import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-16 py-16">
        <div>
          <img src="https://www.orbitebikes.in/assets/img/Orbit%20Logo.png" alt="Orbit eBikes" className="h-10 w-auto object-contain mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed text-gray-400 mb-5">India's leading electric bike brand. Ride clean, ride smart, ride Orbit.</p>
          <div className="flex gap-3">
            {[FaFacebook, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => (
              <a key={i} href="/" className="w-9 h-9 bg-[#333] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#00b300] hover:text-white transition-all duration-200">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {['Home', 'Bikes', 'Accessories', 'About Us', 'Blog', 'Contact'].map(l => (
              <li key={l}><a href="/" className="text-sm text-gray-400 hover:text-[#00b300] transition-colors duration-200">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Support</h4>
          <ul className="flex flex-col gap-3">
            {['FAQ', 'Warranty', 'Service Centers', 'Track Order', 'Returns', 'Privacy Policy'].map(l => (
              <li key={l}><a href="/" className="text-sm text-gray-400 hover:text-[#00b300] transition-colors duration-200">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Contact Us</h4>
          <div className="flex flex-col gap-3 mb-5">
            {[[FaPhone, '+91 98765 43210'], [FaEnvelope, 'support@orbitebikes.in'], [FaMapMarkerAlt, 'Mumbai, Maharashtra, India']].map(([Icon, text], i) => (
              <p key={i} className="flex items-center gap-3 text-sm text-gray-400"><Icon size={13} className="text-[#00b300]" /> {text}</p>
            ))}
          </div>
          <div className="flex rounded-xl overflow-hidden">
            <input type="email" placeholder="Your email" className="flex-1 px-3 py-2.5 bg-[#333] text-white text-sm outline-none placeholder-gray-500" />
            <button className="bg-[#00b300] hover:bg-[#009900] text-white px-4 text-sm font-semibold transition-colors duration-200">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#333] px-6 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
        <p>© 2024 Orbit eBikes. All rights reserved.</p>
        <p>Made with 💚 in India</p>
      </div>
    </footer>
  );
}
