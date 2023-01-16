import { Group, Stack, Text, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { useProfilesApi } from '../../api/profile';
import { ProfileUpdate } from '../../api/types';
import ThemedButton from '../../components/ThemedButton';
import { useNotify } from '../../hooks/useNotify';
import { useThemeColors } from '../../hooks/useThemeColors';
import { stringHelpers } from '../../utils/stringHelpers';
import AccountDetail from './AccountDetail';

type Props = {
  canEdit?: boolean;
};

const FullNameDetail = (props: Props) => {
  const colors = useThemeColors();
  const [profile, setProfile] = useProfilesApi((state) => [
    state.profile,
    state.updateProfile,
  ]);
  const [value, setValue] = useState<string>('');
  const [debouncedValue] = useDebouncedValue(value, 500, { leading: false });
  const [mode, setMode] = useState<'read' | 'edit'>('read');
  const notify = useNotify();

  useEffect(() => {
    setValue(profile?.full_name ?? '');
  }, [profile]);

  useEffect(() => {
    if (!stringHelpers.matches(debouncedValue, profile?.full_name)) {
    }
  }, [debouncedValue]);

  const onChange = (value: string) => {
    setValue(value);
  };

  const onCancel = () => {
    setValue(profile?.username ?? '');
    setMode('read');
  };

  const onSave = () => {
    if (!profile) return;

    let update: ProfileUpdate = {
      id: profile.id,
      full_name: debouncedValue.trim(),
    };

    setProfile(update)
      .then(() => {
        notify('success', 'Full name updated');
        setMode('read');
      })
      .catch((error) => {
        console.log(error);
        notify('error', 'could not update full name');
      });
  };

  if (mode === 'read') {
    return (
      <Group position='apart' align='flex-end'>
        <AccountDetail
          dimmed={!profile?.full_name}
          label='Full name'
          value={profile?.full_name ?? 'Not set yet'}
        />
        {props.canEdit && (
          <ThemedButton
            compact
            size='md'
            color='info'
            variant='subtle'
            onClick={() => setMode('edit')}
          >
            Edit
          </ThemedButton>
        )}
      </Group>
    );
  }

  return (
    <Stack style={{ gap: '1rem' }}>
      <TextInput
        label='Full name'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <Text size='xs' color='dimmed'>
        While not required, your name will help your friends locate you within
        the app when playing a round.
      </Text>
      <Group position='right'>
        <ThemedButton
          compact
          size='md'
          color='error'
          variant='subtle'
          onClick={() => onCancel()}
        >
          Cancel
        </ThemedButton>
        {debouncedValue.length > 4 &&
          !stringHelpers.matches(debouncedValue, profile?.username) && (
            <ThemedButton
              compact
              size='md'
              color='success'
              variant='subtle'
              onClick={() => onSave()}
            >
              Save
            </ThemedButton>
          )}
      </Group>
    </Stack>
  );
};

export default FullNameDetail;
