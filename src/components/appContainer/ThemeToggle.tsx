import {
  Box,
  Button,
  Group,
  Switch,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import { useMantineUITheme } from '../../hooks/useMantineUITheme';
import { useThemeColors } from '../../hooks/useThemeColors';
import ThemedActionIcon from '../ThemedActionIcon';
import { useContainerStyles } from './containerStyles';

const ThemeToggle = () => {
  const { textPrimary } = useThemeColors();
  const { toggleColorScheme } = useMantineUITheme();
  const { isSmall } = useDeviceSize();
  const { classes } = useContainerStyles();
  const theme = useMantineTheme();
  return (
    <ThemedActionIcon
      color='textPrimary'
      radius='xl'
      size='lg'
      style={{ marginTop: isSmall ? '0.6rem' : 0, borderColor: textPrimary }}
      variant='outline'
      onClick={() => toggleColorScheme()}
    >
      {theme.colorScheme === 'dark' && (
        <AnimatePresence mode='wait'>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <MdLightMode className={classes.smallIcon} />
          </motion.span>
        </AnimatePresence>
      )}
      {theme.colorScheme === 'light' && (
        <AnimatePresence mode='wait'>
          <motion.span
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <MdDarkMode className={classes.smallIcon} />
          </motion.span>
        </AnimatePresence>
      )}
    </ThemedActionIcon>
  );
};

export default ThemeToggle;
