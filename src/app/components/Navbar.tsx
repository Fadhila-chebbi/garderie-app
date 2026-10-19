
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-success" href="#accueil">
          🌱 Les Petits Calinos
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#accueil"
                onClick={() => setMenuOpen(false)}>
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services"
                onClick={() => setMenuOpen(false)}>
                Nos services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact"
                onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
