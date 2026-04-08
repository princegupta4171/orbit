import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Test Ride', href: '#test-drive' },
  { name: 'Why Orbit', href: '#why-orbit' },
  { name: 'Lineup', href: '#lineup' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Feedback', href: '#feedback' },
  { name: 'Contact', href: '#contact' },
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-bold uppercase tracking-[0.32em] text-[var(--color-brand-warm)]">
        OR
      </span>
      <span>
        <span className="block font-['Space_Grotesk'] text-lg font-bold tracking-[0.22em] text-white">
          ORBIT
        </span>
        <span className="block text-[11px] uppercase tracking-[0.28em] text-slate-400">
          Electric mobility
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const [visible, setVisible] = useState(true);
  const lastScroll = React.useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll.current || current < 10);
      lastScroll.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNav = (e, href) => {
    if (href.startsWith('/')) return;
    e.preventDefault();
    closeMenu();
    setActiveHash(href);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href) => {
    if (href.startsWith('/')) return location.pathname === href;
    return activeHash === href;
  };

  return (
    <header className={`sticky top-0 z-50 px-4 py-4 sm:px-8 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto max-w-6xl rounded-full border border-white/10 bg-[#09120ecf] px-4 py-3 shadow-[0_18px_48px_rgba(3,10,8,0.32)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Brand />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                    isActive(link.href)
                      ? 'bg-[rgba(110,220,140,0.12)] text-[var(--color-brand)]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--color-brand)]" />
                  )}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                    isActive(link.href)
                      ? 'bg-[rgba(110,220,140,0.12)] text-[var(--color-brand)]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--color-brand)]" />
                  )}
                </a>
              )
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#test-drive" className="orbit-button-primary">
              Book a ride
              <FiArrowRight />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMenu}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-200 ${
                      isActive(link.href)
                        ? 'bg-[rgba(110,220,140,0.12)] text-[var(--color-brand)]'
                        : 'text-slate-200 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-200 ${
                      isActive(link.href)
                        ? 'bg-[rgba(110,220,140,0.12)] text-[var(--color-brand)]'
                        : 'text-slate-200 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>
            <a href="#test-drive" onClick={closeMenu} className="orbit-button-primary mt-4 w-full">
              Book a ride
              <FiArrowRight />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
