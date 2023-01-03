import { Badge, Group, MantineColor, Stack, Text, Title } from '@mantine/core';
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { stringify } from 'uuid';
import { LeagueRow } from '../../api/types'
import Detail from '../../components/Detail';
import NavItem from '../../components/nav/NavItem';
import ThemedButton from '../../components/ThemedButton';
import ThemedCard from '../../components/ThemedCard';

type Props = {
  item: LeagueRow;
}

const getLeagueDates = (startDate: Date, iterations: number, iterationGapDays: number): Date[] => {
  let date: Date = new Date(startDate);
  let returnValue: Date[] = [new Date(date)];
  
  for (let i = 1; i < iterations; i++) {
    date.setDate(date.getDate() + iterationGapDays);
    returnValue.push(new Date(date));
  }

  return returnValue;
}

const LeaguePreviewCard = (props: Props) => {
  const navigate = useNavigate();
  const status = useMemo<{type: string, week: number}>(() => {
    if (!props.item.startDate) return {type: 'N/A', week: 0 };
    let startDate: Date = new Date(`${props.item.startDate}`);
    let dates = getLeagueDates(new Date(props.item.startDate), props.item.iterations ?? 0, props.item.iterationGapDays ?? 0).map(d => d.valueOf());

    let now = new Date().valueOf();

    let currentWeek: number = 0;

    dates.forEach((dateValue) => {
      if (dateValue < now) currentWeek++;
    });

    if (currentWeek === 0) return { type: 'Not Started', week: 0 };

    if (props.item.iterations) 
      return currentWeek < props.item.iterations 
        ? { type: 'In Progress', week: currentWeek } 
        : { type: 'Complete', week: props.item.iterations };

    return { type: 'In Progress', week: currentWeek }
  }, [props.item])

  return (
    <ThemedCard
      action={
        <Text size='sm'>
          {status.type}
        </Text>
      }
      radius='lg'
      title={
        <Title order={5}>
          {props.item.name}
        </Title>
      }
    >
      <Stack style={{marginTop: '1rem'}}>
        <Group position='apart'>
          <Detail 
            label='Position'
            value='2nd'
          />
          <Detail 
            label='Points'
            value='32.5'
          />          
          <Detail 
            label='Week'
            value={`${status.week} of ${props.item.iterations ?? 0}`}
          /> 

        </Group>
        <Group position='right' style={{marginTop: '1rem'}}>
          <ThemedButton
            color='info'
            size='xs'
            style={{width: 'fit-content'}}
            tooltip='Details'
            onClick={() => navigate(`/league/${props.item.id}`)}
          >
            View Details
          </ThemedButton>
        </Group>
      </Stack>
    </ThemedCard>
  )
}

export default LeaguePreviewCard