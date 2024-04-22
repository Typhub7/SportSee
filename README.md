# SPORTSEE
 Développement d'un tableau de bord d'analyse dédié au coaching sportif. 
 L'objectif est de fournir aux utilisateurs un outil convivial pour suivre et analyser leurs performances sportives.

## Table of Contents
- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)

# Description

Ce tableau de bord d'analyse est conçu pour être une plateforme complète permettant aux utilisateurs de visualiser leurs données d'entraînement et de performances sportives. À travers une interface utilisateur intuitive, les utilisateurs pourront accéder à des graphiques et des diagrammes dynamiques qui représentent leurs progrès, leurs objectifs et leurs performances dans différents domaines sportifs. 

# Fonctionnalités

  - Page de Profil Utilisateur : 
  Développement d'une page de profil utilisateur permettant aux utilisateurs de visualiser leurs données personnelles ainsi que leurs statistiques d'entraînement.

  - Graphiques et Diagrammes :
  Intégration des éléments graphiques avancés tels que des graphiques à barres, des graphiques circulaires et des diagrammes en ligne pour présenter de manière visuelle les données d'analyse sportive.

  - Récupération de Données via une API : 
  Utilisation de fetch, typescript et zod pour récupérer les données à afficher à partir d'une API externe, garantissant ainsi que les informations sont constamment mises à jour, précises et fiables.

# Technologies 

-<img src="https://github.com/Typhub7/SportSee/blob/main/public/logo-react.png" height="24"/> React ( dont React DOM et React Router DOM)
-<img src="https://github.com/Typhub7/SportSee/blob/main/public/logo-typescrit.png" height="24"/> TypeScript
-<img src="https://github.com/Typhub7/SportSee/blob/main/public/logo-zod.webp" height="24"/> Zod
-<img src="https://github.com/Typhub7/SportSee/blob/main/public/logo-tailwind.png" height="24"/> Tailwind
-<img src="https://github.com/Typhub7/SportSee/blob/main/public/logo-react.png" height="24"/> Recharts

# Installation

## Utiliser les données serveur : installer le FrontEnd

Pré-requis :
 - Git
 - NodeJS
 - npm

  1. Pour cloner le repository :  ``` git clone https://github.com/Typhub7/SportSee ```
  
  2. Dans votre dossier cloné, installer les dépendances : ``` npm install ```
  
  3. Pour démarrer le BackEnd  ``` yarn dev ``` (the backend démarre avec le port:3000)

## Utiliser les données serveur : installer le BackEnd

Pré-requis :
 - Git
 - NodeJS
 - Yarn

  1. Pour cloner le repository : ``` git clone https://github.com/Typhub7/P11-Sporsee-Backend ```
  
  2. Pour démarrer le BackEnd  ``` yarn dev ``` (the backend démarre avec le port:3000)


## Basculer des données mockées ou données serveur

Pour basculer des données au mockées au données serveur il faut modifier la variable dataFromServer dans le fichier Api.tsx

La valeur true correspondant aux données mockées
la valeur false correspondant aux données du serveur ( necessite que le serveur soit installé et lancé )

```js
Api.tsx lignes 9 et 10

// Use "true" to fetch data from server or "false" to get them from mocked data
const dataFromServer = false

```

