import { Center, Stack, Title, useMantineTheme } from '@mantine/core';
import React from 'react';
import EmailConfirmation from '../../components/images/EmailConfirmation';
import { useDeviceSize } from '../../hooks/useDeviceSize';

const EmailConfirmationPage = () => {
  const { isSmall } = useDeviceSize();
  const theme = useMantineTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack align='center'>
        <Title
          order={2}
          color={theme.colorScheme === 'dark' ? 'gray.2' : 'gray.7'}
        >
          Email Confirmed!
        </Title>
        <EmailConfirmation
          imageSize={{
            height: isSmall ? '20vh' : '30vh',
            width: isSmall ? '20vh' : '30vh',
          }}
        />
        <Title
          order={4}
          align='center'
          color={theme.colorScheme === 'dark' ? 'gray.2' : 'gray.7'}
        >
          You may now close this tab and continue with your previous tab.
        </Title>
      </Stack>
    </div>
  );
};

export default EmailConfirmationPage;
