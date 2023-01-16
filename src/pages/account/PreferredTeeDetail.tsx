import { Group, Select, SelectItem, Stack, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useProfilesApi } from '../../api/profile';
import { supabase } from '../../api/supabase.client';
import { ProfileUpdate } from '../../api/types';
import ThemedButton from '../../components/ThemedButton';
import { useNotify } from '../../hooks/useNotify';
import AccountDetail from './AccountDetail';

type Props = {
  canEdit: boolean;
};

const getTeeOptions = async (): Promise<SelectItem[]> => {
  try {
    const course = await supabase
      .from('courses')
      .select('*')
      .eq('name', 'Coyote Crossing Golf Club')
      .single();

    if (course.error) throw course.error;
    const courseId = course.data.id;

    const { data, error } = await supabase
      .from('tees')
      .select('*')
      .eq('courseId', courseId);

    if (error) throw error;
    if (!data) return Promise.resolve([]);
    return Promise.resolve(
      data.map((p) => ({
        value: String(p.id),
        label: `${p.name} (${p.rating}/${p.slope})`,
      }))
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

const PreferredTeeDetail = (props: Props) => {
  const [profile, setProfile] = useProfilesApi((state) => [
    state.profile,
    state.updateProfile,
  ]);
  const [teeOptions, setTeeOptions] = useState<SelectItem[]>([]);
  const [value, setValue] = useState<string>('Not set yet');
  const [selectValue, setSelectValue] = useState<string>('');
  const [mode, setMode] = useState<'read' | 'edit'>('read');
  const notify = useNotify();

  useEffect(() => {
    getTeeOptions()
      .then((response) => setTeeOptions(response))
      .catch((error) => {
        console.log(error);
        setTeeOptions([]);
      });
  }, []);

  useEffect(() => {
    if (!profile?.preferred_tee_id) {
      setValue('Not set yet');
      setSelectValue('');
      return;
    }

    let item = teeOptions.find(
      (o) => Number(o.value) === profile.preferred_tee_id
    );
    setValue(item?.label ?? 'Not set yet');
    setSelectValue(item?.value ?? '');
  }, [profile, teeOptions, mode]);

  const onChange = (value: string | null) => {
    let option = teeOptions.find((o) => Number(o.value) === Number(value));
    setSelectValue(option?.value ?? '');
  };

  const onCancel = () => {
    let originalValue = teeOptions.find(
      (o) => Number(o.value) === profile?.preferred_tee_id
    );
    setSelectValue(originalValue?.label ?? '');
    setMode('read');
  };

  const onSave = () => {
    if (!profile) return;

    let update: ProfileUpdate = {
      id: profile.id,
      preferred_tee_id: Number(selectValue),
    };

    setProfile(update)
      .then(() => {
        notify('success', 'Preferred tee updated');
        setMode('read');
      })
      .catch((error) => {
        console.log(error);
        notify('error', 'could not update preferred tee');
      });
  };

  if (mode === 'read') {
    return (
      <Group position='apart' align='flex-end'>
        <AccountDetail
          dimmed={!profile?.preferred_tee_id}
          label='Preferred tee'
          value={value}
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
      <Select
        data={teeOptions}
        label='Preferred tee'
        value={selectValue}
        onChange={(value: string | null) => onChange(value)}
      />
      <Text size='xs' color='dimmed'>
        When starting a new round at your preferred course the selected tee will
        default to this value. You will be able to change it at that time should
        you want to.
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
        {Number(selectValue) !== profile?.preferred_tee_id && (
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

export default PreferredTeeDetail;
