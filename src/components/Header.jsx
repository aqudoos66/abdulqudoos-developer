// src/components/Header.jsx
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" to="/" aria-label="Abdul Qudoos — Home">
          <span className="brand-mark">AQ</span>
          <span className="brand-copy">
            <strong>Abdul Qudoos</strong>
            <small>Full Stack Developer</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          id="primary-nav"
          className={`nav-links${open ? ' open' : ''}`}
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="nav-cta" to="/contact">
          Let's Work Together <span>↗</span>
        </Link>
      </div>
    </header>
  );
}