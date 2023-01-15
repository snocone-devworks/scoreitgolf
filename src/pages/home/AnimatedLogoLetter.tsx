import { motion } from 'framer-motion';
import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';

type Props = {
  children: React.ReactNode;
  delayIndex: number;
};

const AnimatedLogoLetter = ({ children, delayIndex }: Props) => {
  const colors = useThemeColors();

  return (
    <motion.g
      fill={colors.textPrimary}
      fillOpacity='1'
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ type: 'spring', bounce: 0.15, delay: 0.06 * delayIndex }}
    >
      {children}
    </motion.g>
  );
};

export default AnimatedLogoLetter;
