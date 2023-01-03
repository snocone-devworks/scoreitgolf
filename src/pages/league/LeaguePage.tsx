import { Center } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StackGroup from '../../components/StackGroup'
import SkinsTimeline from './components/SkinsTimeline'
import Standings from './components/Standings'
import StandingsChart from './components/StandingsChart'
import { demoInfo, TeamInfo } from './helpers'

const LeaguePage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState<TeamInfo[]>([]);

  useEffect(() => {
    setInfo(demoInfo());
  }, [])  

  if (!id) {
    return (
      <Center>
        Could not find league. Please check you have the right link.
      </Center>
    )
  }

  return (
    <StackGroup breakpoint='sm' position='apart' align='center'>
      <Standings items={info} leagueId={Number(id)} />
      <StandingsChart items={info.map(i => ({ name: i.team, ranks: i.ranks }))} />
      <SkinsTimeline />
    </StackGroup>
  )
}

export default LeaguePage