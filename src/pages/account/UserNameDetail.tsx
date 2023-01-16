import { Group, Stack, Text, TextInput, Title } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
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

const UserNameDetail = (props: Props) => {
  const colors = useThemeColors();
  const validateUsername = useProfilesApi((state) => state.validateUsername);
  const [profile, setProfile] = useProfilesApi((state) => [
    state.profile,
    state.updateProfile,
  ]);
  const [alreadyExists, setAlreadyExists] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [debouncedValue] = useDebouncedValue(value, 500, { leading: false });
  const [mode, setMode] = useState<'read' | 'edit'>('read');
  const notify = useNotify();

  useEffect(() => {
    setValue(profile?.username ?? '');
  }, [profile]);

  useEffect(() => {
    if (!profile?.id) return;
    if (!stringHelpers.matches(debouncedValue, profile?.username)) {
      if (debouncedValue.trim().length > 4) {
        validateUsername(debouncedValue, profile.id)
          .then((response) => setAlreadyExists(response))
          .catch((error) => {
            console.log(error);
            setAlreadyExists(true);
            notify('error', 'could not validate username');
          });
      } else {
        setAlreadyExists(false);
      }
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
      username: debouncedValue.trim(),
      username_lower: debouncedValue.trim().toLowerCase(),
    };

    setProfile(update)
      .then(() => {
        notify('success', 'Username updated');
        setMode('read');
      })
      .catch((error) => {
        console.log(error);
        notify('error', 'could not update username');
      });
  };

  if (mode === 'read') {
    return (
      <Group position='apart' align='flex-end'>
        <AccountDetail
          dimmed={!profile?.full_name}
          label='Username'
          value={profile?.username ? `@${profile?.username}` : 'Not set yet'}
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
        icon={'@'}
        label='Username'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {debouncedValue.length <= 4 && (
        <Text size='xs' color='dimmed'>
          Username must be longer than 4 characters
        </Text>
      )}
      {alreadyExists && debouncedValue.length > 4 && (
        <Text
          size='xs'
          style={{
            color: colors.error,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          align='center'
        >
          <MdClose size='0.8rem' style={{ marginRight: '0.2rem' }} />
          This username is already taken, please use a different username.
        </Text>
      )}
      {!alreadyExists && debouncedValue.length > 4 && (
        <Text
          size='xs'
          style={{
            color: colors.success,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <MdCheck size='0.8rem' style={{ marginRight: '0.2rem' }} />
          Username is available
        </Text>
      )}
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
          !alreadyExists &&
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

export default UserNameDetail;
