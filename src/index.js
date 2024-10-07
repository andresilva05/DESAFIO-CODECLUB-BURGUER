import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes'; // Renomeado
import GlobalStyle from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppRoutes />
    <GlobalStyle />
  </>
);
