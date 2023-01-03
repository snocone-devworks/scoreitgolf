import { Select, Stack, Title, useMantineTheme } from '@mantine/core';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ComposedChart, Area, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ThemedCard from '../../../components/ThemedCard';
import { useThemeColors } from '../../../hooks/useThemeColors';
import { CustomTooltip } from './CustomTooltip';

type Props = {
  items: { name: string, ranks: number[] }[];
}

const StandingsChart = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const colors = useThemeColors();
  const theme = useMantineTheme();
  const teams = useMemo<string[]>(() => {
    let names = props.items.map(i => i.name);
    names.sort();
    return names;
  }, [props.items])

  const [selectedTeam, setSelectedTeam] = useState<string>('');

  const ticks = useMemo<number[]>(() => {
    let returnValue: number[] = [];
    
    for (let i = teams.length; i > 0; i--) {
      returnValue.push(i);
    }

    return returnValue;
  }, [teams])

  const chartData = useMemo(() => {
    let data = props.items.find(i => i.name === selectedTeam);
    if (!data) return [];

    let returnValue = data.ranks.map((rank, index) => ({ name: `${index + 1}`, rank: rank }));
    return returnValue;
  }, [props.items, selectedTeam])

  useEffect(() => {
    if (teams.length > 0 && selectedTeam.trim() === '') setSelectedTeam(teams[0]);
  }, [teams, selectedTeam])

  return (
    <ThemedCard
      expansion={{ variant: 'gradient', color: 'info', size: 'md', initialState: 'expanded' }}
      ref={ref}
      radius='lg'
      title={
        <Title order={4}>
          Standing by Team
        </Title>
      }
    >
      <Stack style={{paddingTop: '1rem'}}>
        <Select 
          data={teams}
          radius='lg'
          size='sm'
          style={{marginRight: '0.6rem', width: 'fit-content'}}
          value={selectedTeam}
          onChange={(value: string | null) => setSelectedTeam(value ?? '')}
        />
        <ResponsiveContainer width='99%' height={300}>
          <ComposedChart
            width={ref.current ? ref.current.clientWidth : 200}
            height={300}
            data={chartData}
            margin={{ top: 5, left: 0, bottom: 20, right: 5 }}
          >
            <defs>
                <linearGradient id="line" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor={theme.colors.grape[5]} stopOpacity={1}/>
                    <stop offset="95%" stopColor={theme.colors.blue[5]} stopOpacity={1}/>
                </linearGradient>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor={theme.colors.grape[5]} stopOpacity={0.1}/>
                    <stop offset="95%" stopColor={theme.colors.blue[5]} stopOpacity={0.1}/>
                </linearGradient>              
            </defs>          
            <XAxis dataKey='name' label={{ value: 'Week', position: 'bottom'}} />
            <YAxis min={0} max={teams.length} ticks={ticks} label={{ value: 'Position', angle: -90, position: 'insideLeft'}} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              dataKey='rank' 
              stroke='url(#line)' 
              strokeWidth={4} 
              strokeLinecap={'round'} 
              dot={false}
              legendType='none'
              unit='M'
              type='monotone'
            />
            <Area 
              type='monotone'
              dataKey='rank'
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#area)"

            />
          </ComposedChart>
        </ResponsiveContainer>
      </Stack>
    </ThemedCard>
  )
}

export default StandingsChart