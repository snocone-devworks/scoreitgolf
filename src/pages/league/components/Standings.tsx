import { Table, Title } from '@mantine/core';
import { useThemeColors } from '../../../hooks/useThemeColors';
import ThemedCard from '../../../components/ThemedCard';
import { TeamInfo } from '../helpers';

type Props = {
  leagueId: number;
  items: TeamInfo[];
}


const Standings = ({ items, leagueId }: Props) => {
  const { textPrimary } = useThemeColors();

  return (
    <div style={{display: 'flex', flexDirection: 'row', flex: '1 1 auto'}}>
      <ThemedCard
        expansion={{ variant: 'gradient', color: 'info', size: 'md', initialState: 'expanded' }}
        radius='lg'
        title={
          <Title order={4}>
            Current Standings
          </Title>
        }
      >
        <div style={{display: 'flex', flexDirection: 'row', flex: '1 1 auto', paddingTop: '1rem'}}>
          <Table>
            <thead>
              <tr>
                <th style={{borderBottom: `1px solid ${textPrimary}`, color: textPrimary}}></th>
                <th style={{borderBottom: `1px solid ${textPrimary}`, color: textPrimary, textAlign: 'center'}}>Team</th>
                <th style={{borderBottom: `1px solid ${textPrimary}`, color: textPrimary, textAlign: 'center'}}>Points</th>
              </tr>
            </thead>
            <tbody>
              {items.map(value => (
                <tr key={value.finalRank}>
                  <td>{value.finalRank}</td>
                  <td align='center'>
                    {value.team}
                  </td>
                  <td align='center'>
                    {value.totalPoints.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </ThemedCard>
    </div>
  )
}

export default Standings