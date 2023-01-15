import { Button } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import { useSignin } from '../../hooks/useSignin';
import { useThemeColors } from '../../hooks/useThemeColors';

const SocialAuth = () => {
  const colors = useThemeColors();
  const { isSmall } = useDeviceSize();
  const scheme = useColorScheme();
  const signin = useSignin();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isSmall ? 'column' : 'row',
        gap: '0.6rem',
      }}
    >
      <Button
        color={scheme === 'dark' ? 'dark' : 'gray'}
        leftIcon={<FaFacebook size='1rem' style={{ color: '#1877F2' }} />}
        styles={{
          label: {
            color: colors.textPrimary,
          },
        }}
        variant='outline'
        onClick={() => signin.onSocialLogin('facebook')}
      >
        Sign up with Facebook
      </Button>
      <Button
        color={scheme === 'dark' ? 'dark' : 'gray'}
        leftIcon={<FcGoogle size='1rem' />}
        styles={{
          label: {
            color: colors.textPrimary,
          },
        }}
        variant='outline'
        onClick={() => signin.onSocialLogin('google')}
      >
        Sign up with Google
      </Button>
      <Button
        color={scheme === 'dark' ? 'dark' : 'gray'}
        leftIcon={<FaTwitter size='1rem' style={{ color: '#1D9BF0' }} />}
        styles={{
          label: {
            color: colors.textPrimary,
          },
        }}
        variant='outline'
        onClick={() => signin.onSocialLogin('twitter')}
      >
        Sign up with Twitter
      </Button>
    </div>
  );
};

export default SocialAuth;
