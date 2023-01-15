import { Avatar, Burger, useMantineTheme } from '@mantine/core';
import { useSession, useUser } from '@supabase/auth-helpers-react';
import { GiGolfTee, GiPodium } from 'react-icons/gi';
import {
  MdAccountCircle,
  MdBubbleChart,
  MdClose,
  MdMenu,
} from 'react-icons/md';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import { useDrawerState } from './useDrawerState';
import BottomNavItem from './BottomNavItem';
import { BottomNavItemPosition } from '../../types/BottomNavItemPosition';
import { motion } from 'framer-motion';
import { useThemeColors } from '../../hooks/useThemeColors';
import { useProfilesApi } from '../../api/profile';

type Props = {
  avatar?: React.ReactNode;
  displayThemeToggle?: boolean;
  drawerTitle?: React.ReactNode;
  drawerContent?: React.ReactNode;
};

const BottomNav = (props: Props) => {
  const colors = useThemeColors();
  const profile = useProfilesApi((state) => state.profile);
  const [opened, setOpened] = useDrawerState((state) => [
    state.opened,
    state.setOpened,
  ]);
  const theme = useMantineTheme();
  const user = useUser();
  const session = useSession();
  const [activePosition, setActivePosition] =
    useState<BottomNavItemPosition | null>(null);
  const navigate = useNavigate();

  if (!user && !session) {
    return <></>;
  }

  return (
    <>
      <NavDrawer
        avatar={props.avatar}
        displayThemeToggle={props.displayThemeToggle}
        linkContent={props.drawerContent}
        title={props.drawerTitle}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          bottom: 0,
          left: 0,
          padding: '1rem',
          paddingTop: '0rem',
          zIndex: 1001,
          borderTopLeftRadius: '1.4rem',
          borderTopRightRadius: '1.4rem',
          filter: `drop-shadow(0 0.2rem 0.3rem ${
            theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 8]
          })`,
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[3],
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            justifyContent: user ? 'space-between' : 'flex-start',
            position: 'relative',
          }}
        >
          {activePosition && user && session && (
            <motion.div
              key={String(activePosition?.x)}
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
              style={{
                position: 'absolute',
                top: activePosition.y,
                left: activePosition.x,
                width: activePosition.width,
                height: '0.2rem',
                borderRadius: '0.2rem',
                backgroundColor: colors.info,
              }}
            />
          )}
          <BottomNavItem
            disableFlex={!user}
            icon={opened ? <MdClose /> : <MdMenu />}
            label='Menu'
            onActivated={(position: BottomNavItemPosition) => {}}
            onClick={(position: BottomNavItemPosition) => {
              setOpened(!opened);
            }}
          />
          {user && (
            <>
              <BottomNavItem
                icon={
                  profile ? (
                    <Avatar
                      src={profile.avatar_url}
                      alt={profile.full_name ?? ''}
                      radius='xl'
                      imageProps={{ referrerPolicy: 'no-referrer' }}
                    />
                  ) : (
                    <MdAccountCircle />
                  )
                }
                label='Profile'
                path='/account/settings'
                onActivated={(position: BottomNavItemPosition) =>
                  setActivePosition(position)
                }
                onClick={(position: BottomNavItemPosition) => {
                  navigate('/account/settings');
                  setActivePosition(position);
                }}
              />
              <BottomNavItem
                icon={<GiPodium />}
                label='Leaders'
                path='/leaderboard'
                onActivated={(position: BottomNavItemPosition) =>
                  setActivePosition(position)
                }
                onClick={(position: BottomNavItemPosition) => {
                  navigate('/leaderboard');
                  setActivePosition(position);
                }}
              />
              <BottomNavItem
                icon={<GiGolfTee />}
                label='Round'
                path='/round'
                onActivated={(position: BottomNavItemPosition) =>
                  setActivePosition(position)
                }
                onClick={(position: BottomNavItemPosition) => {
                  navigate('/round');
                  setActivePosition(position);
                }}
              />
              <BottomNavItem
                icon={<MdBubbleChart />}
                label='Stats'
                path='/account/stats'
                onActivated={(position: BottomNavItemPosition) =>
                  setActivePosition(position)
                }
                onClick={(position: BottomNavItemPosition) => {
                  navigate('/account/stats');
                  setActivePosition(position);
                }}
              />
            </>
          )}
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default BottomNav;
