import {
  Burger,
  Center,
  Grid,
  Header,
  Sx,
  Title,
  useMantineTheme,
} from '@mantine/core';
import React, { useMemo } from 'react';
import { useDeviceSize } from '../../hooks/useDeviceSize';
import { useContainerStyles } from '../appContainer/containerStyles';
import ThemeToggle from '../appContainer/ThemeToggle';
import NavDrawer from './NavDrawer';
import { useDrawerState } from './useDrawerState';

type Props = {
  appName?: React.ReactNode;
  avatar?: React.ReactNode;
  className?: string;
  displayThemeToggle?: boolean;
  drawerTitle?: React.ReactNode;
  hideMenuButton?: boolean;
  logo?: React.ReactNode;
  headerContent?: React.ReactNode;
  drawerContent?: React.ReactNode;
  sx?: Sx | (Sx | undefined)[];
};

const NavHeader = (props: Props) => {
  const [opened, setOpened] = useDrawerState((state) => [
    state.opened,
    state.setOpened,
  ]);
  const { isSmall } = useDeviceSize();
  const theme = useMantineTheme();
  const { classes } = useContainerStyles();
  const headerStyles = useMemo<Sx | (Sx | undefined)[]>(() => {
    return {
      color: theme.colorScheme === 'dark' ? '#fff' : '000',
      position: 'sticky',
      backgroundColor: 'transparent',
      border: 'none',
      ...props.sx,
    };
  }, [props.sx, theme]);

  return (
    <Header
      className={props.className}
      height='fit-content'
      p={isSmall ? 'xs' : 'md'}
      sx={headerStyles}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          paddingRight: '1rem',
        }}
      >
        {!isSmall && (
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size='md'
            color={theme.colorScheme === 'dark' ? theme.white : theme.black}
            mr='xl'
          />
        )}
        {props.logo}
        {props.appName && (
          <Center>
            <Title order={2} style={{ marginLeft: '1rem' }}>
              {props.appName}
            </Title>
          </Center>
        )}
        <Grid className={classes.headerContent}>{props.headerContent}</Grid>
        <Grid className={classes.toggleContent}>
          {props.displayThemeToggle && <ThemeToggle />}
          {props.avatar && !isSmall && <>{props.avatar}</>}
        </Grid>
      </div>
      <NavDrawer
        avatar={props.avatar}
        displayThemeToggle={props.displayThemeToggle}
        linkContent={props.drawerContent}
        title={props.drawerTitle}
      />
    </Header>
  );
};

export default NavHeader;
