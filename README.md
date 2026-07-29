# Coach Darija IA — Front-end

Application React pour s’entraîner à la lecture à voix haute en darija marocain : choisir un thème et des mots, générer un texte, l’enregistrer, puis recevoir un feedback IA.

## Stack

- React 19 + TypeScript + Vite 8
- Lucide React (icônes)
- API backend via `VITE_API_URL`

## Prérequis

- Node.js 20+
- Backend API démarré (voir repo backend)

## Installation

```bash
npm install
cp .env.example .env
```

Configurer `.env` :

```env
VITE_API_URL=http://localhost:8000
```

L’URL est normalisée côté client (`…/api`). Sans `VITE_API_URL`, l’app affiche un écran de configuration.

## Scripts

| Commande         | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Serveur de dev (HMR)     |
| `npm run build`  | Build production         |
| `npm run preview`| Prévisualiser le build   |
| `npm run lint`   | ESLint                   |

## Parcours

1. **Thème** — maison, nourriture, voyage...
2. **Mots** — sélection dans le lexique du thème  
3. **Texte** — génération IA (`POST /api/generate-text`)  
4. **Audio** — enregistrement micro (WebM / MP4 selon le navigateur)  
5. **Feedback** — transcription + scores (`POST /api/transcribe`)

## Structure

```
src/
├── api/                  # client HTTP, config, erreurs
├── components/           # ErrorBoundary, ConfigError, ErrorMessage
├── constants/            # thèmes & lexique
└── features/
    ├── selection/        # thème & mots
    ├── generation/       # texte généré
    ├── audio-recorder/   # enregistrement
    ├── feedback/         # scores & conseils
    └── stepper/          # indicateur d’étapes
```
