import { Stack, Table, Text, Timeline, Title } from '@mantine/core';
import React, { useEffect, useMemo, useState } from 'react'
import StackGroup from '../../../components/StackGroup';
import ThemedCard from '../../../components/ThemedCard';
import ThemedIcon from '../../../components/ThemedIcon';
import { useThemeColors } from '../../../hooks/useThemeColors';
import { demoSkins, Week } from '../helpers'

const SkinsTimeline = () => {
  const colors = useThemeColors();
  const [data, setData] = useState<Week[]>([]);

  useEffect(() => {
    setData(demoSkins(8));
  }, [])

  return (
    <ThemedCard
      expansion={{ variant: 'gradient', color: 'info', size: 'md', initialState: 'expanded' }}
      radius='lg'
      title={
        <Title order={4}>
          Skins
        </Title>
      }
    >
      <Timeline
        bulletSize={24}
        lineWidth={2}
        active={data.length}
        color='grape.5'
        style={{marginTop: '1rem'}}
      >
        {data.map((item, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <ThemedIcon variant='gradient' radius='xl' color='info'>
                {item.week}
              </ThemedIcon>
            }
          >
            <TimelineDetails item={item} />
          </Timeline.Item>
        ))}
      </Timeline>
    </ThemedCard>
  )
}

type TimelineDetailsProps = {
  item: Week;
}

const TimelineDetails = ({ item }: TimelineDetailsProps) => {
  const colors = useThemeColors();
  const skins = useMemo(() => {
    let values = item.items.filter(i => i.type === 'skin');
    values.sort((a, b) => {
      if (a.hole < b.hole) return -1;
      if (a.hole > b.hole) return 1;
      return 0;
    });

    return values;
  }, [item])

  const cps = useMemo(() => {
    let values = item.items.filter(i => i.type === 'cp');
    values.sort((a, b) => {
      if (a.hole < b.hole) return -1;
      if (a.hole > b.hole) return 1;
      return 0;
    });

    return values;
  }, [item]) 
  
  const rows = useMemo<{skin: string, cp: string }[]>(() => {
    let count: number = cps.length > skins.length ? cps.length : skins.length;
    let returnValue: {skin: string, cp: string }[] = [];

    for (let i = 0; i < count; i++) {
      let value: {skin: string, cp: string } = { skin: '', cp: '' };
      if (i === 0 && skins.length === 0) {
        value.skin = 'None';
      } else if (i < skins.length) {
        value.skin = `${skins[i].name} (${skins[i].hole})`;
      }

      if (i === 0 && cps.length === 0) {
        value.cp = 'None';
      } else if (i < cps.length) {
        value.cp = `${cps[i].name} (${cps[i].hole})`;
      }

      returnValue.push(value);
    };

    return returnValue;
  }, [cps, skins])

  return (
    <Table>
      <thead>
        <tr>
          <th style={{textAlign: 'center', borderBottom: `1px solid ${colors.textPrimary}`, color: colors.textPrimary}}>Closest To Pins</th>
          <th style={{textAlign: 'center', borderBottom: `1px solid ${colors.textPrimary}`, color: colors.textPrimary}}>Skins</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td align='center'>{row.cp}</td>
            <td align='center'>{row.skin}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default SkinsTimeline