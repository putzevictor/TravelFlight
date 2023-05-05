import React from 'react';
import ReactDOM from 'react-dom/client';
import './Componentes/styles.css';
import { Barra } from './Componentes/BarraTareas';
import { BarraBusqueda } from './Componentes/BarraBusqueda';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Barra/>
    <BarraBusqueda/>
  </>
);