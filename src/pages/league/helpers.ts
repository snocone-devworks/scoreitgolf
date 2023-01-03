import { faker } from '@faker-js/faker';

export type TeamInfo = {
  team: string;
  points: number[];
  totalPoints: number;
  ranks: number[];
  finalRank: number;
}

const iterationRank = (values: number[], data: number[][], iteration: number): number => {
  let valueSum = pointsSum(values.filter((v, index) => index <= iteration));
  let dataSums: number[] = [];

  data.forEach(dataset => {
    dataSums.push(pointsSum(dataset.filter((v, index) => index <= iteration)));
  });

  dataSums.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  let index = dataSums.findIndex(s => s === valueSum);
  return index === -1 ? -1 : index + 1;
}

const pointsSum = (data: number[]): number => {
  let returnValue: number = 0;

  data.forEach(value => returnValue += value);

  return returnValue;
}

export const demoInfo = (): TeamInfo[] => {
  let returnValues: TeamInfo[] = [];

  for (let i = 0; i < 10; i++) {
    let teamPoints: number[] = [];

    for (let j = 0; j < 8; j++) {
      teamPoints.push(faker.datatype.float({ min: 0, max: 18, precision: 0.5 }));
    }

    teamPoints.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

    returnValues.push({
      team: `${faker.name.lastName('male')} / ${faker.name.lastName('male')}`,
      points: teamPoints,
      totalPoints: pointsSum(teamPoints),
      ranks: [],
      finalRank: 0
    });
  }

  returnValues.sort((a, b) => {
    if (a.totalPoints < b.totalPoints) return 1;
    if (a.totalPoints > b.totalPoints) return -1;
    return 0;
  });

  returnValues = returnValues.map((value, index) => ({
    ...value, 
    ranks: value.points.map((v, index) => iterationRank([...value.points], [...returnValues].map(v => v.points), index)),
    finalRank: index + 1,
  }));

  return returnValues;
}

export type Week = {
  week: number;
  items: Skin[];
}

export type Skin = {
  week: number;
  hole: number;
  name: string;
  type: 'skin' | 'cp';
}

export const demoSkins = (weeks: number): Week[] => {
  let returnValues: Week[] = [];

  for (let i = 1; i <= weeks; i++) {
    let week: Week = { week: i, items: [] };
    let count: number = faker.datatype.number({ min: 0, max: 6 });
    
    for (let j = 1; j <= count; j++) {
      let hole = faker.datatype.number({ min: 1, max: 18 });
      
      while (week.items.findIndex(i => i.hole === hole) > -1) {
        hole = faker.datatype.number({ min: 1, max: 18 });
      }

      week.items.push({
        week: i,
        hole: hole,
        name: faker.name.fullName({ sex: 'male' }),
        type: 'skin'
      });
    }

    [5, 8, 13, 17].forEach(hole => {
      week.items.push({
        week: i,
        hole: hole,
        name: faker.name.fullName({ sex: 'male' }),
        type: 'cp'
      })
    });   

    returnValues.push(week);
  }

  returnValues.sort((a, b) => {
    if (a.week < b.week) return -1;
    if (a.week > b.week) return 1;
    return 0
  });

  return returnValues;
}
