import {
  Avatar,
  Divider,
  Group,
  LoadingOverlay,
  Stack,
  Title,
} from '@mantine/core';
import { useSession, useUser } from '@supabase/auth-helpers-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MdEdit, MdUpload } from 'react-icons/md';
import { useProfilesApi } from '../../api/profile';
import ThemedActionIcon from '../../components/ThemedActionIcon';
import ThemedButton from '../../components/ThemedButton';
import ThemedCard from '../../components/ThemedCard';
import { useNotify } from '../../hooks/useNotify';
import { useThemeColors } from '../../hooks/useThemeColors';
import FullNameDetail from './FullNameDetail';
import HandicapIndexDetail from './HandicapIndexDetail';
import PreferredCourseDetail from './PreferredCourseDetail';
import PreferredTeeDetail from './PreferredTeeDetail';
import UserNameDetail from './UserNameDetail';

const AccountDetailsPage = () => {
  const colors = useThemeColors();
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const user = useUser();
  const session = useSession();
  const [profile, loadProfile] = useProfilesApi((state) => [
    state.profile,
    state.loadProfile,
  ]);
  const loading = useProfilesApi((state) => state.loading);
  const updateAvatar = useProfilesApi((state) => state.updateAvatar);
  const canEdit = useMemo<boolean>(() => {
    if (!profile) return false;
    if (!user) return false;

    return user.id === profile.id;
  }, [user, profile]);
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
      <ThemedCard
        style={{ overflow: 'unset', width: '100%', marginTop: '4rem' }}
      >
        <Group
          position='center'
          style={{
            position: 'relative',
            marginTop: '-4rem',
            paddingBottom: '1rem',
          }}
        >
          <div style={{ position: 'relative' }}>
            <Avatar
              src={profile?.avatar_url}
              alt={profile?.full_name ?? ''}
              size={120}
              radius={1000}
              imageProps={{ referrerPolicy: 'no-referrer' }}
              style={{
                filter: `drop-shadow(0 0.2rem 0.4rem ${colors.info}88)`,
              }}
            />
            {canEdit && (
              <>
                <input
                  ref={uploadRef}
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={uploadAvatar}
                />
                <ThemedActionIcon
                  color='info'
                  radius='xl'
                  size='lg'
                  style={{ position: 'absolute', bottom: 0, right: 0 }}
                  variant='gradient'
                  onClick={() => {
                    if (uploadRef.current) uploadRef.current.click();
                  }}
                >
                  <MdUpload size='1.2rem' />
                </ThemedActionIcon>
              </>
            )}
          </div>
        </Group>
        <Stack style={{ gap: '0.6rem' }}>
          <UserNameDetail canEdit={canEdit} />
          <Divider />
          <FullNameDetail canEdit={canEdit} />
          <Divider />
          <HandicapIndexDetail canEdit={canEdit} />
          <Divider />
          <PreferredCourseDetail canEdit={canEdit} />
          <Divider />
          <PreferredTeeDetail canEdit={canEdit} />
        </Stack>
      </ThemedCard>
    </Stack>
  );
};

export default AccountDetailsPage;
