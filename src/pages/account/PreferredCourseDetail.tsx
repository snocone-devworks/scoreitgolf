import { Group } from '@mantine/core';
import React from 'react';
import AccountDetail from './AccountDetail';

type Props = {
  canEdit: boolean;
};

const PreferredCourseDetail = (props: Props) => {
  return (
    <Group position='apart' align='flex-end'>
      <AccountDetail
        label='Preferred course'
        value={'Coyote Crossing Golf Club'}
      />
    </Group>
  );
};

export default PreferredCourseDetail;
