import { Stack, Title, useMantineTheme } from '@mantine/core';
import React from 'react';
import EmailSent from '../../components/images/EmailSent';
import { useDeviceSize } from '../../hooks/useDeviceSize';

const SignupConfirmationSentPage = () => {
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
          Email Confirmation Sent!
        </Title>
        <EmailSent
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
          Check your email, you should be receiving a confirmation email
          shortly. Once confirmed, you will be able to proceed.
        </Title>
      </Stack>
    </div>
  );
};

export default SignupConfirmationSentPage;
