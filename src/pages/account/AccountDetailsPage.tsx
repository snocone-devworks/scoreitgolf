import { Stack } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { firstOrDefault, supabase } from '../../api';
import { Database } from '../../api/database.types';
import { PlayerRow } from '../../api/types';
import { useAuth } from '../../hooks/useAuth';
import { Player } from '../../types/Player';

const AccountDetailsPage = () => {
  const [username, setUsername] = useState<string>('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [player, setPlayer] = useState<PlayerRow | null>(null)
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      getPlayerFromUserId(user.id)
      .then(response => {
        setPlayer(response);
      })
      .catch(error => {
        console.log(error);
        setPlayer(null);
      });
    }
  }, [user])

  const getPlayerFromUserId = async (userId: string): Promise<PlayerRow | null> => {
    try {
      let { data, error } = await supabase.from('Players')
        .select('*')
        .filter('userId', 'eq', userId)
        .single();

      if (error) throw error;
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return (
    <Stack>

    </Stack>
  )
}

export default AccountDetailsPage