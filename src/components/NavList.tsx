import{ MdEdit, MdGroups, MdHome } from 'react-icons/md';
import React from 'react'
import NavItem from './nav/NavItem';
import { useAuth } from '../hooks/useAuth';

const NavList = () => {
  const { user } = useAuth();

  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: '1 1 auto'}}>
      <NavItem path='/' exact title='Home' icon={<MdHome size='1.2rem' />} />
      {user && (
        <>
          <NavItem path='/leagues' exact title='My Leagues' icon={<MdGroups size='1.2rem' />} />
          <NavItem path='/scorecard' title='Scorecard' icon={<MdEdit size='1.2rem' />} />
        </>
      )}
    </div>
  )
}

export default NavList