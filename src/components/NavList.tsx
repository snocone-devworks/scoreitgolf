import { MdEdit, MdGroups, MdHome } from 'react-icons/md';
import React from 'react';
import NavItem from './nav/NavItem';

const NavList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
      <NavItem path='/' exact title='Home' icon={<MdHome size='1.2rem' />} />
    </div>
  );
};

export default NavList;
