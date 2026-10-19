# Garderie App — Les Petits Calinos

## 1. Présentation du projet

**Garderie App** est une application web destinée à présenter une garderie, ses services et ses activités. Elle permet aux visiteurs de découvrir les informations de la garderie à travers une interface moderne et responsive.

Ce projet a été réalisé dans le cadre d'un TP de développement Full Stack. Il utilise Next.js pour le frontend et Node.js avec Express pour le backend.

## 2. Technologies utilisées

### Frontend
- Next.js
- React
- TypeScript
- Bootstrap
- CSS

### Backend
- Node.js
- Express.js
- API REST

### Gestion de versions
- Git
- GitHub

## 3. Structure du projet

```text
garderie-app/
├── backend/
│   ├── server.js
│   └── package.json
├── public/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar.tsx
│       │   ├── Hero.tsx
│       │   └── Services.tsx
│       ├── page.tsx
│       ├── layout.tsx
│       └── globals.css
├── package.json
├── package-lock.json
└── README.md
```

## 4. Installation

### Prérequis

- Node.js et npm
- Git
- Visual Studio Code

### Installation du frontend

Depuis le dossier principal `garderie-app` :

```bash
npm install
```

### Installation du backend

Ouvrir un deuxième terminal et exécuter :

```bash
cd backend
npm install
```

## 5. Lancement de l'application

### Démarrer le backend

Depuis le dossier `backend` :

```bash
npm run dev
```

Le serveur Express est accessible à l'adresse :

http://localhost:5000

### Démarrer le frontend

Dans un autre terminal, revenir au dossier principal `garderie-app` :

```bash
npm run dev
```

L'application Next.js est accessible à l'adresse :

http://localhost:3000

## 6. Documentation des API REST

Le backend expose les endpoints suivants :

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/garderie` | Récupérer les informations de la garderie |
| GET | `/api/services` | Récupérer la liste des services |
| GET | `/api/activites` | Récupérer la liste des activités |

Exemples d'URL de test :

- http://localhost:5000/api/garderie
- http://localhost:5000/api/services
- http://localhost:5000/api/activites

Ces endpoints renvoient des données au format JSON.

## 7. Fonctionnalités

- Interface d'accueil responsive.
- Barre de navigation.
- Présentation des services de la garderie.
- Section de contact.
- Backend Express exposant des API REST.
- Récupération dynamique des services depuis l'API.

## 8. Gestion des versions

Le projet utilise Git pour suivre les modifications et GitHub pour héberger le code source.

Les principales branches de développement sont :

- `master` : branche principale.
- `feature/landing-page` : création de la page d'accueil.
- `feature/components` : création des composants frontend.
- `feature/backend` : développement des API REST.
- `feature/api-integration` : intégration des données du backend dans le frontend.
- `docs/readme` : documentation du projet.

## 9. Auteur

Projet réalisé dans le cadre d'un TP de développement Full Stack.
