import { Card, Divider, Group, Stack, Table, Text, Title, useMantineTheme } from '@mantine/core'
import React, { useMemo } from 'react'
import { MdArrowLeft, MdArrowRight, MdCheck } from 'react-icons/md'
import HoleScore from '../../components/HoleScore'
import ThemedActionIcon from '../../components/ThemedActionIcon'
import ThemedCard from '../../components/ThemedCard'
import { useThemeColors } from '../../hooks/useThemeColors'

const RoundPage = () => {
  const colors = useThemeColors();
  const theme = useMantineTheme();
  const tableBorderColor = useMemo<string>(() => {
    return theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4];
  }, [theme.colorScheme])

  return (
    <Stack style={{gap: '0.2rem'}} align='center'>
      <ThemedCard
        radius='lg'
        style={{marginBottom: '2rem', width: '100%'}}
        title={
          <Title order={2} style={{color: colors.textPrimary, marginBottom: '0.6rem', display: 'flex', alignItems: 'center'}}>
            Match
          </Title>

        }
      >
        <Table>
          <thead>
            <tr>
              <th style={{borderBottom: `1px solid ${colors.textPrimary}`, color: colors.textPrimary}}>Player</th>
              <th style={{textAlign: 'center', borderBottom: `1px solid ${colors.textPrimary}`, color: colors.textPrimary}}>Gross</th>
              <th style={{textAlign: 'center', borderBottom: `1px solid ${colors.textPrimary}`, color: colors.textPrimary}}>Net</th>
              <th style={{textAlign: 'center', borderBottom: `1px solid ${colors.textPrimary}`, color: colors.textPrimary}}>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border: 'none'}}>Tiger Woods</td>
              <td align='center' style={{border: 'none'}}>8</td>
              <td align='center' style={{border: 'none'}}>7</td>
              <td rowSpan={2} align='center' style={{border: 'none', borderBottom: `1px solid ${tableBorderColor}`}}>
                <Title order={2}>
                  2.5
                </Title>
              </td>
            </tr>
            <tr>
              <td style={{border: 'none', borderBottom: `1px solid ${tableBorderColor}`}}>Rory McIlroy</td>
              <td align='center' style={{border: 'none', borderBottom: `1px solid ${tableBorderColor}`}}>9</td>
              <td align='center' style={{border: 'none', borderBottom: `1px solid ${tableBorderColor}`}}>9</td>
            </tr>
            <tr>
              <td style={{border: 'none'}}>Justin Thomas</td>
              <td align='center' style={{border: 'none'}}>8</td>
              <td align='center' style={{border: 'none'}}>8</td>
              <td rowSpan={2} align='center' style={{border: 'none'}}>
                <Title order={2}>
                  1.5
                </Title>                
              </td>
            </tr> 
            <tr>
              <td style={{border: 'none'}}>Jordan Speith</td>
              <td align='center' style={{border: 'none'}}>9</td>
              <td align='center' style={{border: 'none'}}>9</td>
            </tr>                       
          </tbody>
        </Table>
      </ThemedCard>
      <Group position='center' align='center'>
        <ThemedActionIcon
          color='info'
          variant='gradient'
          tooltip='Previous hole'
          onClick={() => {}}
        >
          <MdArrowLeft />
        </ThemedActionIcon>
        <Title order={2}>
          Hole 2
        </Title>
        <ThemedActionIcon
          color='info'
          variant='gradient'
          tooltip='Next hole'
          onClick={() => {}}
        >
          <MdArrowRight />
        </ThemedActionIcon>
      </Group>
      <Text size='lg'>
        Par: 5
      </Text>
      <Text size='lg'>
        Handicap: 4
      </Text>
        <ThemedCard
          title={
            <Title order={4} style={{color: colors.textPrimary, marginBottom: '0.6rem', display: 'flex', alignItems: 'center'}}>
              Team Old Fogies
            </Title>
          }
          action={
            <Title order={4} style={{color: colors.textPrimary, display: 'flex', alignItems: 'center'}}>
              Points: 1.5
            </Title>
          }

          radius='lg'
          style={{marginTop: '1rem', width: '100%'}}
        >
          <Group position='apart' style={{padding: '0.4rem 0rem 0.4rem 1rem'}}>
            <Text size='lg'>
              Tiger Woods *
            </Text>
            <HoleScore 
              strokes={1}
              value={4}
              onChange={(value: number) => {}}
            />
          </Group>
          <Divider />
          <Group position='apart' style={{padding: '0.4rem 0rem 0.4rem 1rem'}}>
            <Text size='lg'>
              Rory McIlroy
            </Text>
            <HoleScore 
              strokes={0}
              value={4}
              onChange={(value: number) => {}}
            />
          </Group>        
        </ThemedCard>
        <ThemedCard
          title={
            <Title order={4} style={{color: colors.textPrimary, marginBottom: '0.6rem'}}>
              Team Young Guns
            </Title>
          }

          action={
            <Title order={4} style={{color: colors.textPrimary}}>
              Points: 0.5
            </Title>
          }
          radius='lg'
          style={{marginTop: '1rem', width: '100%'}}
        >
          <Group position='apart' style={{padding: '0.4rem 0rem 0.4rem 1rem'}}>
            <Text size='lg'>
              Justin Thomas
            </Text>
            <HoleScore 
              strokes={0}
              value={4}
              onChange={(value: number) => {}}
            />
          </Group>
          <Divider />
          <Group position='apart' style={{padding: '0.4rem 0rem 0.4rem 1rem'}}>
            <Text size='lg'>
              Jordan Spieth
            </Text>
            <HoleScore 
              strokes={0}
              value={5}
              onChange={(value: number) => {}}
            />
          </Group>       
        </ThemedCard>
    </Stack>
  )
}

export default RoundPage