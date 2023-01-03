import { Badge, Stack, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { supabase } from '../../api';
import { CourseRow, LeagueRow } from '../../api/types'
import ThemedCard from '../../components/ThemedCard';
import LeaguePreviewCard from './LeaguePreviewCard';

const demoLeagues: LeagueRow[] = [
  {
    id: 1,
    courseId: 1,
    iterationGapDays: 7,
    iterations: 12,
    name: `Thursday Men's League`,
    startDate: '2022-04-01'
  },
  {
    id: 2,
    courseId: 1,
    iterationGapDays: 7,
    iterations: 12,
    name: `Thursday Men's League`,
    startDate: '2021-04-01'
  }
]

const LeaguesPage = () => {
  const [leagues, setLeagues] = useState<LeagueRow[]>([]);

  useEffect(() => {
    getAllLeagues()
    .then(response => {
      setLeagues(response);
    })
    .catch(error => {
      console.log(error);
      setLeagues([]);
    })
  }, [])

  const getAllLeagues = async (): Promise<LeagueRow[]> => {
    try {
      let { data, error } = await supabase.from('Leagues').select(`*, course:courseId(*)`);
      if (error) throw error;
      return Promise.resolve(Array.isArray(data) ? [...data] : []);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return (
    <Stack>
      {leagues.map(item => (
        <LeaguePreviewCard item={item} key={item.id} />
      ))}
    </Stack>
  )
}

export default LeaguesPage