import { Group, TextInput } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../api'
import EmailMagicLink from '../../components/login/EmailMagicLink'
import StackGroup from '../../components/StackGroup'
import ThemedButton from '../../components/ThemedButton'
import { useAuth } from '../../hooks/useAuth'
import { useDeviceSize } from '../../hooks/useDeviceSize'
import { useNotify } from '../../hooks/useNotify'
import AnimatedLogo from './AnimatedLogo'

const HomePage = () => {
  const { user } = useAuth();
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: '1 1 auto', justifyContent: 'flex-start', alignItems: 'center'}}>
      <AnimatedLogo />
      <EmailMagicLink />
    </div>
  )
}

export default HomePage