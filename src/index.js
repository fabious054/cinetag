import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from 'routes.js';
import FavoritesProvider from 'contexts/favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
  </React.StrictMode>
);
