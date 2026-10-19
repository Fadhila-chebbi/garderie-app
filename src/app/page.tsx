import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        {/* Section Contact */}
        <section id="contact" className="py-5 bg-light">
          <div className="container text-center py-4">
            <span className="text-success fw-semibold">
              CONTACTEZ-NOUS
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Parlons de l’avenir de votre enfant
            </h2>

            <p className="text-secondary mt-3 mb-4">
              Notre équipe est à votre écoute pour répondre à vos questions
              et vous présenter notre garderie.
            </p>

            <a
              href="mailto:contact@petitsexplorateurs.fr"
              className="btn btn-success btn-lg rounded-pill px-4"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="py-4 bg-white border-top">
        <div className="container text-center">
          <p className="fw-bold text-success mb-1">
            🌱 Les Petits Calinos
          </p>

          <p className="text-secondary small mb-0">
            Grandir, découvrir et s’épanouir ensemble.
          </p>

          <p className="text-secondary small mt-2 mb-0">
            © {new Date().getFullYear()} — Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
}
