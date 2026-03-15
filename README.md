# Cofandi

Site vitrine pour Cofandi — expérience café premium en libre-service sur le campus Concordia.

## Stack

- **React** 18 + **TypeScript**
- **Vite** 6
- **React Router** 7
- **Tailwind CSS** 4
- **Motion** (animations)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Scripts

| Commande     | Description                    |
|-------------|--------------------------------|
| `npm run dev`     | Serveur de développement       |
| `npm run build`   | Build de production dans `dist/` |
| `npm run preview` | Prévisualiser le build         |

## Déploiement (GitHub Pages)

Le dépôt est configuré pour un déploiement automatique sur GitHub Pages à chaque push sur `main`.

1. Dans le dépôt GitHub : **Settings → Pages**
2. **Source** : GitHub Actions
3. Après un push sur `main`, le workflow **Deploy on GitHub Pages** build et publie le site.

Le site sera accessible à :  
`https://<username>.github.io/<nom-du-repo>/`

## Assets

Les images et la police sont servis depuis le dossier **`public/`**. Fichiers attendus :

| Fichier | Usage |
|---------|--------|
| `logo.png` | Logo (header + footer) |
| `hero-cup1.png`, `hero-cup2.png` | Images du hero (accueil) |
| `machine-full.png` | Photo machine (vue complète) |
| `machine-interface.png` | Détail interface |
| `machine-closeup.png` | Gros plan café |
| `Copperplate Gothic Bold Regular.ttf` | Police de marque (optionnel) |

Couleur principale : `#2A3B8F` (définie dans `src/styles/theme.css`).

## Structure

```
src/
├── app/
│   ├── components/   # Composants réutilisables + layout
│   ├── pages/        # Pages (Accueil, À propos, Machines, etc.)
│   ├── App.tsx
│   └── routes.tsx
├── styles/           # CSS global, thème, polices
└── main.tsx
```

## Licence

Projet privé — Cofandi.
