import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider} from "react-router-dom";
import Accueil from '../pages/Accueil/Accueil';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

/** Function to define the routes of the application.
 */
function routes()  {
  // Create a BrowserRouter with the specified routes
  // change with createHashRouter for Gh-pages createHashRouter
  // HashRouter may cause 404 error not working but is necessary for gh-pages
  const router = createHashRouter([
      { path: "/",element: <Accueil /> , errorElement: <ErrorPage />},
      { path: "/accueil", element: null, errorElement: <ErrorPage />},
      { path: "/profil", element: null, errorElement: <ErrorPage />},
      { path: "/reglages", element: null, errorElement: <ErrorPage />},
      { path: "/communaute", element: null, errorElement: <ErrorPage />},
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
