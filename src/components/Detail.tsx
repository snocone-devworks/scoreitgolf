import { Stack, Text } from '@mantine/core';
import React from 'react'
import { useThemeColors } from '../hooks/useThemeColors';

type Props = {
  label: React.ReactNode;
  value: React.ReactNode;
}

const Detail = ({ label, value }: Props) => {
  const colors = useThemeColors();

  return (
    <Stack style={{gap: '0.2rem'}}>
      {typeof label === 'string' && (
        <Text size='sm' style={{color: colors.success}}>
          {label}
        </Text>
      )}
      {typeof label !== 'string' && (
        <>
        {label}
        </>
      )}
      {typeof value === 'string' && (
        <Text size='md' style={{color: colors.textPrimary}}>
          {value}
        </Text>
      )}
      {typeof value !== 'string' && (
        <>
        {value}
        </>
      )}      
    </Stack>
  )
}

export default Detail