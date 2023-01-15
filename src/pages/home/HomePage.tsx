import { Group } from '@mantine/core';
import { useUser } from '@supabase/auth-helpers-react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '../../components/GradientBackground';
import ThemedButton from '../../components/ThemedButton';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import AnimatedLogo from './AnimatedLogo';
import AnimatedSLogo from './AnimatedSLogo';

const HomePage = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { deviceSize } = useDeviceSize();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: '2rem',
          gap: '1.4rem',
        }}
      >
        <AnimatedSLogo />
        {!user && (
          <Group position='center'>
            <ThemedButton
              color='info'
              radius='xl'
              size='md'
              variant='gradient'
              onClick={() => navigate('/login')}
            >
              Login / Signup
            </ThemedButton>
          </Group>
        )}
      </div>
    </>
  );
};

export default HomePage;
