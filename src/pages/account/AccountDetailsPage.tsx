import { Avatar, LoadingOverlay, Stack } from '@mantine/core';
import { useSession, useUser } from '@supabase/auth-helpers-react';
import React, { useEffect, useRef } from 'react';
import { useProfilesApi } from '../../api/profile';
import ThemedButton from '../../components/ThemedButton';
import { useNotify } from '../../hooks/useNotify';

const AccountDetailsPage = () => {
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const user = useUser();
  const session = useSession();
  const [profile, loadProfile] = useProfilesApi((state) => [
    state.profile,
    state.loadProfile,
  ]);
  const loading = useProfilesApi((state) => state.loading);
  const updateAvatar = useProfilesApi((state) => state.updateAvatar);
  const notify = useNotify();

  useEffect(() => {
    if (!user || !session) return;
    loadProfile(user, session);
  }, [user, session]);

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        notify('error', 'Could not upload photo as no files were selected');
        return;
      }

      await updateAvatar(event.target.files[0]);
      notify('success', 'Loaded avatar');
    } catch (error) {
      console.log(error);
      notify('error', 'Could not upload file');
    }
  };

  return (
    <Stack align='center'>
      <LoadingOverlay
        loaderProps={{ color: 'grape.5', variant: 'dots' }}
        visible={loading}
      />
      <Stack style={{ gap: '0.4rem' }} align='center'>
        <Avatar
          src={profile?.avatar_url}
          alt={profile?.full_name ?? ''}
          size='xl'
          radius={1000}
          imageProps={{ referrerPolicy: 'no-referrer' }}
        />
        <input
          ref={uploadRef}
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={uploadAvatar}
        />
        <ThemedButton
          compact
          color='info'
          variant='gradient'
          onClick={() => {
            if (uploadRef.current) uploadRef.current.click();
          }}
        >
          Upload photo
        </ThemedButton>
      </Stack>
    </Stack>
  );
};

export default AccountDetailsPage;
