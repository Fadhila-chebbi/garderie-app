
const services = [
  {
    icon: '🧸',
    title: 'Accueil et garde',
    description:
      'Un cadre rassurant et adapté aux besoins quotidiens de chaque enfant.',
  },
  {
    icon: '🎨',
    title: 'Éveil et créativité',
    description:
      'Des activités ludiques pour développer l’imagination et la curiosité.',
  },
  {
    icon: '📚',
    title: 'Apprentissage',
    description:
      'Des expériences éducatives qui favorisent l’autonomie et la confiance.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container py-lg-4">
        <div className="text-center mb-5">
          <span className="text-success fw-semibold">CE QUE NOUS PROPOSONS</span>
          <h2 className="display-6 fw-bold mt-2">Nos services</h2>
          <p className="text-secondary">
            Pour apprendre, jouer et grandir en toute sérénité.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                <div className="card-body">
                  <div className="fs-1 mb-3">{service.icon}</div>
                  <h3 className="h4 fw-bold">{service.title}</h3>
                  <p className="text-secondary mb-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
