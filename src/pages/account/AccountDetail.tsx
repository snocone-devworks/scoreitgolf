import { Stack, Text } from '@mantine/core';
import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';

type Props = {
  dimmed?: boolean;
  label: string;
  value: string | number;
};

const AccountDetail = ({ dimmed, label, value }: Props) => {
  const { success } = useThemeColors();
  return (
    <Stack style={{ gap: '0.2rem' }}>
      <Text size='sm' style={{ color: success }}>
        {label}
      </Text>
      <Text
        size='md'
        color={dimmed ? 'dimmed' : undefined}
        style={{ paddingLeft: '1rem' }}
      >
        {value}
      </Text>
    </Stack>
  );
};

export default AccountDetail;
