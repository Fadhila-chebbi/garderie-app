
'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: '🧸',
      title: 'Accueil et garde',
      description:
        'Un environnement chaleureux et sécurisé pour accompagner vos enfants au quotidien.',
    },
    {
      icon: '🎨',
      title: 'Éveil et créativité',
      description:
        'Des activités artistiques et ludiques pour développer l’imagination et la curiosité.',
    },
    {
      icon: '📚',
      title: 'Apprentissage',
      description:
        'Des jeux éducatifs adaptés à chaque âge pour apprendre tout en s’amusant.',
    },
  ];

  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            <span className="me-2">🌈</span>
            Les Petits Explorateurs
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? 'show' : ''
            }`}
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
              <li className="nav-item">
                <a className="btn btn-primary rounded-pill px-4" href="#contact"
                  onClick={() => setMenuOpen(false)}>
                  Inscrire mon enfant
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="accueil"
        className="py-5"
        style={{
          background:
            'linear-gradient(135deg, #fff7e8 0%, #eef8f0 100%)',
        }}
      >
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-warning px-3 py-2 mb-3">
                💛 Grandir, découvrir et s’épanouir
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Un monde de découvertes pour vos petits{' '}
                <span className="text-primary">explorateurs !</span>
              </h1>

              <p className="lead text-secondary mb-4">
                Bienvenue dans notre garderie, un espace bienveillant où
                chaque enfant apprend, joue et grandit à son rythme,
                entouré d’une équipe attentive.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg rounded-pill px-4"
                >
                  Découvrir notre garderie →
                </a>
                <a
                  href="#services"
                  className="btn btn-outline-secondary btn-lg rounded-pill px-4"
                >
                  Nos services
                </a>
              </div>

              <p className="mt-4 text-secondary small">
                ⭐ Un cadre accueillant · 🎨 Des activités variées · ❤️ Une
                équipe à l’écoute
              </p>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85"
                  alt="Enfant souriant dans un environnement lumineux"
                  className="img-fluid rounded-5 shadow"
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                  }}
                />
                <div className="bg-white rounded-4 shadow p-3 position-absolute bottom-0 start-0 m-3">
                  <div className="fw-bold">🌱 Grandir ensemble</div>
                  <div className="text-secondary small">
                    Chaque jour est une aventure !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">
              NOTRE ACCOMPAGNEMENT
            </span>
            <h2 className="display-6 fw-bold mt-2">
              Des services pensés pour vos enfants
            </h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '650px' }}>
              Nous accompagnons les petits dans leurs découvertes avec des
              activités adaptées à leur développement et à leurs besoins.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={service.title}>
                <div
                  className="card h-100 border-0 shadow-sm rounded-4 p-3"
                  style={{ backgroundColor: ['#fff8e9', '#eef8f0', '#f1f4ff'][index] }}
                >
                  <div className="card-body">
                    <div className="display-4 mb-3">{service.icon}</div>
                    <h3 className="card-title h4 fw-bold">
                      {service.title}
                    </h3>
                    <p className="card-text text-secondary mt-3">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="text-primary fw-semibold text-decoration-none"
                    >
                      En savoir plus →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-light">
        <div className="container text-center py-4">
          <h2 className="fw-bold">Prêts à rejoindre notre univers ?</h2>
          <p className="text-secondary mt-3">
            Contactez-nous pour découvrir notre garderie et poser vos questions.
          </p>
          <a
            href="mailto:contact@garderie.com"
            className="btn btn-primary btn-lg rounded-pill px-4 mt-2"
          >
            Nous contacter
          </a>
        </div>
      </section>

      <footer className="py-4 bg-dark text-white">
        <div className="container text-center small">
          © {new Date().getFullYear()} Les Petits Explorateurs — Grandir en
          confiance.
        </div>
      </footer>
    </main>
  );
}
