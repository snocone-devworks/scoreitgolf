import { Drawer, Group, ScrollArea, useMantineTheme } from '@mantine/core';
import { useUser } from '@supabase/auth-helpers-react';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../api/supabase.client';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import { useNotify } from '../../hooks/useNotify';
import ThemeToggle from '../appContainer/ThemeToggle';
import ThemedButton from '../ThemedButton';
import { useDrawerState } from './useDrawerState';

type Props = {
  avatar?: React.ReactNode;
  displayThemeToggle?: boolean;
  linkContent?: React.ReactNode;
  title?: React.ReactNode;
};

const NavDrawer = (props: Props) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const user = useUser();
  const notify = useNotify();
  const { deviceSize } = useDeviceSize();
  const isSmall = useMemo<boolean>(
    () => ['xs', 'sm'].includes(deviceSize),
    [deviceSize]
  );
  const [opened, setOpened] = useDrawerState((state) => [
    state.opened,
    state.setOpened,
  ]);

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      notify('error', 'Could not sign out');
    }

    setOpened(false);
  };

  return (
    <Drawer
      opened={opened}
      size={isSmall ? 'full' : deviceSize === 'md' ? 'lg' : '20vw'}
      title={props.title}
      styles={{
        drawer: {
          display: 'flex',
          flexDirection: 'column',
          margin: '0',
          flex: '1 1 auto',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[0],
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
        },
        closeButton: {
          margin: '1rem',
        },
      }}
      withCloseButton={false}
      onClose={() => setOpened(false)}
    >
      {isSmall && (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            overflowY: 'auto',
            justifyContent: 'space-between',
            margin: '0',
          }}
        >
          <div
            style={{
              padding: '0.6rem',
              margin: '0',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 auto',
              overflowY: 'auto',
              paddingTop: '4rem',
            }}
          >
            {user && (
              <ThemedButton
                color='error'
                radius='sm'
                size='sm'
                style={{ marginLeft: '1rem', width: 'fit-content' }}
                tooltip='Log out'
                variant='gradient'
                onClick={() => onSignOut()}
              >
                Sign out
              </ThemedButton>
            )}
            {!user && (
              <ThemedButton
                color='info'
                radius='sm'
                size='sm'
                style={{ marginLeft: '1rem', width: 'fit-content' }}
                tooltip='Login or Signup'
                variant='gradient'
                onClick={() => navigate('/login')}
              >
                Login / Signup
              </ThemedButton>
            )}
            {props.linkContent}
          </div>
        </div>
      )}
      {!isSmall && (
        <ScrollArea style={{ margin: '0', paddingTop: '4rem' }}>
          <div
            style={{
              position: 'relative',
              margin: '0',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 auto',
              overflowY: 'auto',
              padding: '0.6rem',
            }}
          >
            {props.linkContent}
          </div>
        </ScrollArea>
      )}
    </Drawer>
  );
};

export default NavDrawer;
