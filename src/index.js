import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import App from './App';

import { MainLayout } from "./components/layouts/MainLayout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </React.StrictMode>
);
