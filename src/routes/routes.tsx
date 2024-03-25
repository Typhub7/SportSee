import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Accueil from '../pages/Accueil/Accueil';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

/* Interface pour représenter les données d'une route
interface RouteData {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
}*/


/** Fonction pour définir les routes de l'application.
 */
function routes()  {
  // Crée un BrowserRouter avec les routes spécifiées 
  const router = createBrowserRouter([
      { path: "/", element: <Accueil />, errorElement: <ErrorPage />},
      { path: "/accueil", element: <Accueil />, errorElement: <ErrorPage />},
      { path: "/profil", element: null, errorElement: <ErrorPage />},
      { path: "/reglages", element: null, errorElement: <ErrorPage />},
      { path: "/communaute", element: null, errorElement: <ErrorPage />},
      { path: "/erreur404", element: <ErrorPage />} , // En cas de saisie erronée de l'Id de l'utilisateur
      { path: "*", element: <ErrorPage />} // En cas de saisie erronée de l'adresse on bascule sur la page d'erreur    
    ])
    
    // Crée un ReactDOM Root et retourne le RouterProvider avec le router
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
}

export default routes;
