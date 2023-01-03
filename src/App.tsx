import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavList from './components/NavList'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Logo from './components/Logo'
import TitleLogo from './components/TitleLogo'
import RoundPage from './pages/round/RoundPage'
import AppContainer from './components/appContainer/AppContainer'
import { useDeviceSize } from './hooks/useDeviceSize'
import AccountDetailsPage from './pages/account/AccountDetailsPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import { AuthProvider } from './auth/Context'
import LoginPage from './pages/login/LoginPage'
import LeaguesPage from './pages/leagues/LeaguesPage'
import LeaguePage from './pages/league/LeaguePage'

function App() {
  const { deviceSize } = useDeviceSize();

  return (
    <AppContainer 
      appName={<TitleLogo />}
      closeAfterRoute
      displayThemeToggle
      headerContent={['xs', 'sm'].includes(deviceSize) ? <TitleLogo /> : undefined}
      navbarContent={<NavList />}
    >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/scorecard' element={<RoundPage />} />
        <Route path='/account-details' element={<AccountDetailsPage />} />
        <Route path='/league/:id' element={<LeaguePage />} />
        <Route path='/leagues' element={<LeaguesPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AppContainer>
  )
}

export default App
