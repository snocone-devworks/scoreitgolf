import React from 'react'
import AnimatedLogo from './AnimatedLogo'

const HomePage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: '1 1 auto', justifyContent: 'flex-start', alignItems: 'center'}}>
      <AnimatedLogo />
    </div>
  )
}

export default HomePage