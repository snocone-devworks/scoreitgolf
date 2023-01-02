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
      </Routes>
    </AppContainer>
  )
}

export default App
