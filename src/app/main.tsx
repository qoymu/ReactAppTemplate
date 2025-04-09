import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouterProvider } from './providers/AppRouterProvider';
import { AppReduxProvider } from './providers/AppReduxProvider';

import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppReduxProvider>
      <AppRouterProvider />
    </AppReduxProvider>
  </StrictMode>,
);
