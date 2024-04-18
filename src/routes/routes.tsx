import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider} from "react-router-dom";
import Accueil from '../pages/Accueil/Accueil';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

/** Function to define the routes of the application.
 */
function routes()  {
  // Create a BrowserRouter with the specified routes
  // change with createHashRouter for Gh-pages
  const router = createHashRouter([
      { path: "/",element: <Accueil /> , errorElement: <ErrorPage />},
      { path: "/accueil", element: null},
      { path: "/profil", element: null},
      { path: "/reglages", element: null},
      { path: "/communaute", element: null},
      { path: "/erreur404", element: <ErrorPage />} , // In case of incorrect user ID input
      { path: "*", element: <ErrorPage />} // In case of incorrect address input, redirect to the error page    
    ])
    
    // Create a ReactDOM Root and return the RouterProvider with the router
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
}

export default routes;
