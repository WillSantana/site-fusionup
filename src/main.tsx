import React from 'react'; // ✅ Importa React para garantir compatibilidade com JSX
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('❌ Elemento com id "root" não encontrado no DOM');
}
