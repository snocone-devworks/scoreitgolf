import { Button, PasswordInput, TextInput } from '@mantine/core';
import React, { useMemo } from 'react';
import { useSignin } from '../../hooks/useSignin';
import { useThemeGradients } from '../../hooks/useThemeGradients';
import { useEmail } from './useEmail';
import { usePassword } from './usePassword';

type Props = {
  type: 'login' | 'signup';
};

const EmailLogin = ({ type }: Props) => {
  const gradients = useThemeGradients();
  const email = useEmail();
  const password = usePassword();
  const signin = useSignin();
  const validEmailPassword = useMemo<boolean>(() => {
    if (!email.changed) return false;
    if (!password.changed) return false;
    return type === 'login'
      ? email.isValid && password.isValid
      : password.value.trim().length > 6;
  }, [email, password]);

  const onButtonClick = async () => {
    if (type === 'login') {
      signin.onEmailPasswordLogin(email.value, password.value);
    } else {
      signin.onEmailPasswordSignup(email.value, password.value);
    }
  };

  return (
    <>
      <TextInput
        error={email.isValid ? undefined : 'Email address invalid'}
        label='Email address'
        placeholder='your@email.com'
        type='email'
        value={email.value}
        onChange={(event) => email.setValue(event.target.value)}
      />
      <PasswordInput
        description={
          type === 'signup'
            ? `Password must be at least 8 characters long with a special (!, @,'#, $, %, ^, &, *), upper, and lower case character.`
            : undefined
        }
        error={type === 'login' ? undefined : password.isValid ? undefined : ''}
        label='Password'
        value={password.value}
        onChange={(event) => password.setValue(event.target.value)}
      />
      <Button
        disabled={!validEmailPassword}
        gradient={gradients.info}
        style={{ marginTop: '1rem' }}
        variant='gradient'
        onClick={() => onButtonClick()}
      >
        {type === 'login' ? 'Sign in' : 'Sign up'}
      </Button>
    </>
  );
};

export default EmailLogin;
