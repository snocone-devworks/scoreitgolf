import {
  Avatar,
  Card,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';
import { useProfilesApi } from '../../api/profile';
import ThemedCard from '../../components/ThemedCard';
import { useThemeColors } from '../../hooks/useThemeColors';

const AccountStatsPage = () => {
  const profile = useProfilesApi((state) => state.profile);
  const colors = useThemeColors();

  return (
    <Stack>
      <ThemedCard
        action={
          <Stack style={{ gap: '0.2rem' }} align='flex-end'>
            <Title order={4}>@username</Title>
            <Text>full name</Text>
          </Stack>
        }
        headerStyle={{ marginBottom: '1rem' }}
        title={
          <Avatar
            alt={profile?.full_name ?? ''}
            imageProps={{ referrerPolicy: 'no-referrer' }}
            radius='xl'
            size='lg'
            src={profile?.avatar_url}
            style={{
              filter: `drop-shadow(0 0.2rem 0.4rem ${colors.info}88)`,
            }}
          />
        }
      >
        <Text>Overall stats go here</Text>
      </ThemedCard>
    </Stack>
  );
};

export default AccountStatsPage;
