# SPORTSEE
 Développement d'un tableau de bord d'analyse dédié au coaching sportif. 
 L'objectif est de fournir aux utilisateurs un outil convivial pour suivre et analyser leurs performances sportives.

# Description

Ce tableau de bord d'analyse est conçu pour être une plateforme complète permettant aux utilisateurs de visualiser leurs données d'entraînement et de performances sportives. À travers une interface utilisateur intuitive, les utilisateurs pourront accéder à des graphiques et des diagrammes dynamiques qui représentent leurs progrès, leurs objectifs et leurs performances dans différents domaines sportifs. 

# Fonctionnalités

  - Page de Profil Utilisateur : 
  Développement d'une page de profil utilisateur permettant aux utilisateurs de visualiser leurs données personnelles ainsi que leurs statistiques d'entraînement.

  - Graphiques et Diagrammes :
  Intégration des éléments graphiques avancés tels que des graphiques à barres, des graphiques circulaires et des diagrammes en ligne pour présenter de manière visuelle les données d'analyse sportive.

  - Récupération de Données via une API : 
  Utilisation de fetch, typescript et zod pour récupérer les données à afficher à partir d'une API externe, garantissant ainsi que les informations sont constamment mises à jour, précises et fiables.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
