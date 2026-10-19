
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// GET /api/garderie
app.get('/api/garderie', (req, res) => {
  res.json({
    nom: 'Les Petits Explorateurs',
    description:
      'Une garderie chaleureuse et sécurisée pour accompagner les enfants dans leur développement.',
    adresse: 'Tunisie',
    horaires: 'Du lundi au vendredi, de 7h30 à 18h00',
    telephone: '+216 55 789 210',
    email: 'contact@petitsexplorateurs.tn'
  });
});

// GET /api/services
app.get('/api/services', (req, res) => {
  res.json([
    {
      id: 1,
      nom: 'Accueil et garde',
      description:
        'Un environnement rassurant adapté aux besoins quotidiens des enfants.'
    },
    {
      id: 2,
      nom: 'Éveil et créativité',
      description:
        'Des activités ludiques pour développer l’imagination et la curiosité.'
    },
    {
      id: 3,
      nom: 'Apprentissage',
      description:
        'Des expériences éducatives qui favorisent l’autonomie et la confiance.'
    }
  ]);
});

// GET /api/activites
app.get('/api/activites', (req, res) => {
  res.json([
    {
      id: 1,
      nom: 'Dessin et peinture',
      categorie: 'Créativité',
      description: 'Développer l’imagination et l’expression artistique.'
    },
    {
      id: 2,
      nom: 'Lecture de contes',
      categorie: 'Éveil',
      description: 'Découvrir des histoires et enrichir le vocabulaire.'
    },
    {
      id: 3,
      nom: 'Jeux éducatifs',
      categorie: 'Apprentissage',
      description: 'Apprendre en jouant et développer la logique.'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
