import { SessionContextProvider } from '@supabase/auth-helpers-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { supabase } from './api/supabase.client';
import App from './App';
import './index.css';
import { MantineUIThemeProvider } from './theme/Context';

import { registerSW } from 'virtual:pwa-register';

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineUIThemeProvider
      appThemeName='scoreitgolf_theme'
      applyGradients
      notify={{ position: 'top-center' }}
    >
      <SessionContextProvider supabaseClient={supabase}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SessionContextProvider>
    </MantineUIThemeProvider>
  </React.StrictMode>
);
