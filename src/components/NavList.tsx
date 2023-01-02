import{ MdEdit, MdHome } from 'react-icons/md';
import React from 'react'
import NavItem from './nav/NavItem';

const NavList = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: '1 1 auto'}}>
      <NavItem path='/' exact title='Home' icon={<MdHome />} />
      <NavItem path='/scorecard' title='Scorecard' icon={<MdEdit />} />
    </div>
  )
}

export default NavList