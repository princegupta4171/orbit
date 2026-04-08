import React from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

// ── EmailJS config ──────────────────────────────────────────
const EJS_SERVICE   = 'YOUR_SERVICE_ID';      // replace
const EJS_ADMIN_TPL = 'YOUR_ADMIN_TEMPLATE';  // replace
const EJS_USER_TPL  = 'YOUR_USER_TEMPLATE';   // replace
const EJS_PUBLIC    = 'YOUR_PUBLIC_KEY';       // replace
const ADMIN_EMAIL   = 'YOUR_ADMIN_EMAIL';
// ────────────────────────────────────────────────────────────

const links = [
  { name: 'About', href: '#about' },
  { name: 'Test Ride', href: '#test-drive' },
  { name: 'Features', href: '#features' },
  { name: 'Lineup', href: '#lineup' },
];

const socialLinks = [
  { icon: <FaFacebookF size={14} />, href: 'https://www.facebook.com/' },
  { icon: <FaInstagram size={14} />, href: 'https://www.instagram.com/' },
  { icon: <FaYoutube size={14} />, href: 'https://www.youtube.com/' },
  { icon: <FaLinkedinIn size={14} />, href: 'https://www.linkedin.com/' },
];

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | sending | done | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // 1. Notify admin
      await emailjs.send(EJS_SERVICE, EJS_ADMIN_TPL, {
        subscriber_email: email,
        to_email: ADMIN_EMAIL,
      }, EJS_PUBLIC);

      // 2. Congratulation mail to subscriber
      await emailjs.send(EJS_SERVICE, EJS_USER_TPL, {
        to_email: email,
        to_name: email.split('@')[0],
      }, EJS_PUBLIC);

      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };
  return (
    <footer id="contact" className="section-shell flex min-h-screen flex-col justify-center border-t border-white/10 bg-[#07100c] py-6">
      <div className="content-wrap">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="panel-surface p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand)]">Orbit electric mobility</p>
            <h2 className="mt-3 max-w-xl text-2xl font-bold text-white">
              A stronger digital storefront for a brand that deserves a sharper first impression.
            </h2>
            <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-300">
              This refresh gives Orbit a more premium tone, better structure, and a clearer path from
              first visit to test ride.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-200 hover:border-[var(--color-brand)] hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Quick links</p>
            <div className="mt-4 grid gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-2.5 text-sm text-slate-200 transition duration-200 hover:border-[var(--color-brand)] hover:text-white"
                >
                  {link.name}
                  <FiArrowRight />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 shrink-0 text-[var(--color-brand)]" />
                <a href="tel:9458502838" className="transition hover:text-white">+91 94585 02838</a>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="mt-1 shrink-0 text-[var(--color-brand)]" />
                <a href="mailto:support@orbitebikes.in" className="transition hover:text-white">support@orbitebikes.in</a>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-[var(--color-brand)]" />
                <div>
                  <p className="font-medium text-slate-200">Orbit eBikes</p>
                  <p className="text-xs text-slate-400">Parent Company: Jindal Forgings</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    G-1/700–701, Road No. 22, Phase II,<br />
                    RIICO Industrial Area, Bhiwadi,<br />
                    Rajasthan – 301001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[24px] border border-white/10 bg-black/10 p-4">
              <p className="text-sm font-semibold text-white">Subscribe for launches and dealer updates</p>
              <form onSubmit={handleSubscribe} className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="orbit-input flex-1"
                />
                <button type="submit" disabled={status === 'sending'} className="orbit-button-primary whitespace-nowrap">
                  {status === 'sending' ? 'Sending...' : 'Subscribe'}
                </button>
              </form>
              {status === 'done' && <p className="mt-2 text-xs text-emerald-400">Subscribed! Check your inbox for a confirmation.</p>}
              {status === 'error' && <p className="mt-2 text-xs text-red-400">Something went wrong. Please try again.</p>}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Orbit eBikes. All rights reserved.</p>
          <p>Designed in React for a cleaner brand experience.</p>
        </div>
      </div>
    </footer>
  );
}
