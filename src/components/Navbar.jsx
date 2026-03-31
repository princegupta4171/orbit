import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'E-Scooters', href: '/escooters' },
  { name: 'Dealer Registration', href: '/dealer-registration' },
  { name: 'Dealer Locator', href: '/dealer-locator' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 lg:px-8 py-2">
        <img src="https://www.orbitebikes.in/assets/img/Orbit%20Logo.png" alt="Orbit eBikes" className="h-9 w-auto object-contain hover:scale-105 transition-transform duration-300" />

        <div className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-gray-700 px-2 py-1 rounded-lg border border-transparent hover:border-gray-200 hover:bg-gray-50 hover:text-[#00b300] transition-all duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
      </div>
    </nav>
  );
}
