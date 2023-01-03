import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './auth/Context'
import './index.css'
import { MantineUIThemeProvider } from './theme/Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineUIThemeProvider 
      appThemeName='scoreitgolf_theme' 
      applyGradients 
      colors={{ primary: 'teal', info: 'grape'}}
      notify={{ position: 'bottom-center' }}
    >
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </MantineUIThemeProvider>
  </React.StrictMode>,
)
