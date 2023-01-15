import { useEffect, useMemo } from 'react';
import './App.css';
import NavList from './components/NavList';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import TitleLogo from './components/logos/TitleLogo';
import AppContainer from './components/appContainer/AppContainer';
import { useDeviceSize } from './hooks/useDeviceSize';
import NotFoundPage from './pages/notFound/NotFoundPage';
import SLogo from './components/logos/SLogo';
import ThemedButton from './components/ThemedButton';
import LoginPage from './pages/loginPage/LoginPage';
import AccountDetailsPage from './pages/account/AccountDetailsPage';
import { useSessionContext, useUser } from '@supabase/auth-helpers-react';
import RoundPage from './pages/round/RoundPage';
import RoundDetailsPage from './pages/round/details/RoundDetailsPage';
import AccountStatsPage from './pages/account/AccountStatsPage';
import LeaderboardPage from './pages/leaderboard/LeaderboardPage';
import EmailConfirmationPage from './pages/emailConfirmation/EmailConfirmationPage';
import SignupConfirmationSentPage from './pages/signup/SignupConfirmationSentPage';
import { useProfilesApi } from './api/profile';

function App() {
  const { session, isLoading } = useSessionContext();
  const user = useUser();
  const loadProfile = useProfilesApi((state) => state.loadProfile);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { deviceSize } = useDeviceSize();

  useEffect(() => {
    if (user && session) loadProfile(user, session);
  }, [session, user]);

  useEffect(() => {
    if (isLoading) return;
    console.log(session);
    if (!session?.user && pathname !== '/') navigate('/login');
  }, [session, isLoading, location]);

  return (
    <AppContainer
      appName={pathname !== '/' ? <TitleLogo /> : undefined}
      closeAfterRoute
      displayThemeToggle
      headerContent={
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: '1 1 auto',
            alignItems: 'center',
            justifyContent: ['xs', 'sm'].includes(deviceSize)
              ? 'space-between'
              : 'flex-end',
          }}
        >
          {['xs', 'sm'].includes(deviceSize) && pathname !== '/' && (
            <SLogo height={36} width={36} />
          )}
        </div>
      }
      navbarContent={<NavList />}
    >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/emailconfirmation' element={<EmailConfirmationPage />} />
        <Route path='/leaderboard' element={<LeaderboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/account/settings' element={<AccountDetailsPage />} />
        <Route path='/round' element={<RoundPage />}>
          <Route path=':id' element={<RoundDetailsPage />} />
        </Route>
        <Route path='/account/stats' element={<AccountStatsPage />} />
        <Route
          path='/signupconfirmationsent'
          element={<SignupConfirmationSentPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
