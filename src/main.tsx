import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/styles/index.css';
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
