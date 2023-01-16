import { Group, NumberInput, Stack } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { useProfilesApi } from '../../api/profile';
import { ProfileUpdate } from '../../api/types';
import ThemedButton from '../../components/ThemedButton';
import { useNotify } from '../../hooks/useNotify';
import { useThemeColors } from '../../hooks/useThemeColors';
import AccountDetail from './AccountDetail';

type Props = {
  canEdit?: boolean;
};

const HandicapIndexDetail = (props: Props) => {
  const colors = useThemeColors();
  const [profile, setProfile] = useProfilesApi((state) => [
    state.profile,
    state.updateProfile,
  ]);
  const [value, setValue] = useState<number>(0.0);
  const [debouncedValue] = useDebouncedValue(value, 500, { leading: false });
  const [mode, setMode] = useState<'read' | 'edit'>('read');
  const notify = useNotify();

  useEffect(() => {
    setValue(profile?.handicap_index ?? 0.0);
  }, [profile]);

  const onChange = (value: number) => {
    setValue(value);
  };

  const onCancel = () => {
    setValue(profile?.handicap_index ?? 0.0);
    setMode('read');
  };

  const onSave = () => {
    if (!profile) return;

    let update: ProfileUpdate = {
      id: profile.id,
      handicap_index: debouncedValue,
    };

    setProfile(update)
      .then(() => {
        notify('success', 'Handicap index updated');
        setMode('read');
      })
      .catch((error) => {
        console.log(error);
        notify('error', 'could not update handicap index');
      });
  };

  if (mode === 'read') {
    return (
      <Group position='apart' align='flex-end'>
        <AccountDetail
          dimmed={!profile?.handicap_index}
          label='Handicap index'
          value={profile?.handicap_index ?? 'Not yet set'}
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
      <NumberInput
        precision={1}
        step={0.1}
        value={value}
        onChange={(value: number | undefined) => setValue(value ?? 0.0)}
      />
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
        {debouncedValue !== profile?.handicap_index && (
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

export default HandicapIndexDetail;
