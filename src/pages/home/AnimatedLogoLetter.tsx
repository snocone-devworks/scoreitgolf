import { motion } from 'framer-motion';
import React from 'react'
import { useThemeColors } from '../../hooks/useThemeColors';

type Props = {
  children: React.ReactNode;
  delayIndex: number;
}

const AnimatedLogoLetter = ({ children, delayIndex }: Props) => {
  const colors = useThemeColors();

  return (
    <motion.g
      fill={colors.textPrimary}
      fillOpacity='1'
      initial={{y: '100vh'}}
      animate={{y: 0}}
      exit={{y: '100vh'}}
      transition={{ type: 'spring', bounce: 0.15, delay: 0.06 * delayIndex}}
    >
      {children}
    </motion.g>
  )
}

export default AnimatedLogoLetter