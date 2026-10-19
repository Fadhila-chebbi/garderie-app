
export default function Hero() {
  return (
    <section id="accueil" className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          {/* Texte de présentation */}
          <div className="col-lg-6">
            <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2 mb-3">
              🌱 Bienvenue chez nous
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Grandir, découvrir et s’épanouir
              <span className="text-success"> ensemble.</span>
            </h1>

            <p className="lead text-secondary mb-4">
              Un environnement chaleureux et sécurisé où chaque enfant
              apprend, joue et développe sa créativité à son rythme.
            </p>

            <a
              href="#services"
              className="btn btn-success btn-lg rounded-pill px-4"
            >
              Découvrir nos services
            </a>

            <p className="small text-secondary mt-3">
              ♥ Une équipe attentive au bien-être de vos enfants
            </p>
          </div>

          {/* Image principale : même photo Unsplash */}
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85"
              alt="Enfants dans un environnement chaleureux"
              className="img-fluid rounded-4 shadow"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
