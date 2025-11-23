# Analyse du Projet Portfolio

## Vue d'ensemble

Ce projet est un portfolio personnel interactif construit avec **React**. Il s'agit d'une "Single Page Application" (SPA) qui permet de présenter différents profils professionnels (Développeur, UI/UX Designer, Data Scientist) via un système de thèmes dynamiques.

## Stack Technique

- **Framework** : React 17.0.2
- **Build Tool** : Create React App (react-scripts 5.0.0)
- **Langage** : JavaScript (ES6+)
- **Styling** :
  - Bootstrap 5 & React Bootstrap
  - CSS personnalisé (Variables CSS pour les thèmes)
- **Routing** : React Router DOM v6 (bien que la navigation principale soit basée sur le défilement)
- **Déploiement** : GitHub Pages

## Structure du Code (`src/`)

- **`App.js`** : Point d'entrée principal. Gère le `SpecialityContext` (état global du profil actif) et le préchargeur (`Preloader`).
- **`components/SinglePage.js`** : Composant central qui orchestre l'affichage.
  - Utilise le contexte pour déterminer quel contenu afficher (Developer, UI/UX, Data).
  - Gère les sections : Home, About, Projects.
  - Applique les classes CSS de thème (`theme-developer`, `theme-uiux`, `theme-data`).
- **`components/Navbar.js`** : Barre de navigation responsive.
  - Gère le défilement fluide vers les ancres (`#about`, `#projects`).
  - Permet de changer de spécialité (en mobile).
- **Dossiers de Composants** :
  - `Home/`, `About/`, `Projects/` : Contiennent les variantes de composants pour chaque spécialité (ex: `Home2Developer`, `Home2UIUX`, `Home2Data`).

## Fonctionnalités Clés

1.  **Multi-Profils** : Le site change dynamiquement de contenu et de couleurs (thème) selon le profil sélectionné (Développeur, UI/UX, Data).
2.  **Thématisation** : Utilisation de variables CSS (`--imp-text-color`, `--theme-primary`) injectées via JavaScript dans `SinglePage.js`.
3.  **Animations** : Utilisation de `typewriter-effect` pour le texte et `react-tsparticles` pour les fonds animés.

## État Actuel

Le projet est fonctionnel et structuré de manière modulaire pour supporter l'extension vers d'autres profils ou l'ajout de nouvelles sections spécifiques à chaque métier.
