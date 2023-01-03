import { TextInput } from '@mantine/core';
import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import StackGroup from '../StackGroup';
import ThemedButton from '../ThemedButton';

const EmailMagicLink = () => {
  const [email, setEmail] = useState<string>('');
  const { loading, onMagicLinkLogin } = useAuth();

  return (
    <StackGroup breakpoint='sm' position='center' align='center'>
      <TextInput 
        placeholder='your@email.com'
        type='email'
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <ThemedButton
        color='info'
        disabled={email.length === 0}
        loading={loading}
        loaderPosition='right'
        tooltip='Login'
        variant='gradient'
        onClick={() => onMagicLinkLogin(email)}
      >
        Send Link
      </ThemedButton>
    </StackGroup>
  )
}

export default EmailMagicLink