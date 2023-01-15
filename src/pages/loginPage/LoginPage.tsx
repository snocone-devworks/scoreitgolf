import {
  Anchor,
  Button,
  Divider,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import React, { useMemo, useState } from 'react';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import { useNotify } from '../../hooks/useNotify';
import { useSignin } from '../../hooks/useSignin';
import { useThemeColors } from '../../hooks/useThemeColors';
import { useThemeGradients } from '../../hooks/useThemeGradients';
import AnimatedSLogo from '../home/AnimatedSLogo';
import EmailLogin from './EmailLogin';
import SocialAuth from './SocialAuth';
import { useEmail } from './useEmail';
import { usePassword } from './usePassword';

const LoginPage = () => {
  const colors = useThemeColors();
  const gradients = useThemeGradients();
  const { isSmall, isMedium } = useDeviceSize();
  const [type, setType] = useState<'login' | 'signup'>('login');
  const flexValue = useMemo<React.CSSProperties['flex']>(() => {
    if (isSmall) return 1;
    if (isMedium) return '0 1 60%';
    return '0 1 40%';
  }, [isSmall, isMedium]);
  const email = useEmail();
  const password = usePassword();

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: flexValue,
          flexDirection: 'column',
          gap: '0.6rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <AnimatedSLogo />
        </div>
        <SocialAuth />
        <Divider label='or continue with' labelPosition='center' />
        <EmailLogin type={type} />
        <Group position='center'>
          {type === 'login' && (
            <Anchor
              component='button'
              underline
              style={{ color: colors.textDimmed }}
            >
              Forgot your Password?
            </Anchor>
          )}
        </Group>
        <Group position='center'>
          <Anchor
            component='button'
            underline
            style={{ color: colors.textDimmed }}
            onClick={() => setType(type === 'login' ? 'signup' : 'login')}
          >
            {type === 'login'
              ? `Don't have an account? Sign up`
              : `Already have an account? Login`}
          </Anchor>
        </Group>
      </div>
    </div>
  );
};

export default LoginPage;
