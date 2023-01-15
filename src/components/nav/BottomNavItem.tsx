import { Text } from '@mantine/core';
import React, { useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useThemeColors } from '../../hooks/useThemeColors';
import { BottomNavItemPosition } from '../../types/BottomNavItemPosition';

type Props = {
  disableFlex?: boolean;
  exact?: boolean;
  icon: JSX.Element;
  label?: string;
  path?: string;
  onActivated(position: BottomNavItemPosition): void | Promise<void>;
  onClick(position: BottomNavItemPosition): void | Promise<void>;
};

const BottomNavItem = ({
  disableFlex,
  exact,
  icon,
  label,
  path,
  onActivated,
  onClick,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const colors = useThemeColors();
  const { pathname } = useLocation();
  const isActive = useMemo<boolean>(() => {
    if (!path) return false;
    if (exact) return pathname === path;
    return pathname.includes(path);
  }, [pathname, exact, path]);

  useEffect(() => {
    if (isActive && ref.current) {
      onActivated({
        x: ref.current.offsetLeft,
        y: ref.current.clientTop,
        height: ref.current.clientHeight,
        width: ref.current.clientWidth,
      });
    }
  }, [isActive, ref]);

  const clickHandler = () => {
    if (!ref.current) return;

    onClick({
      x: ref.current.offsetLeft,
      y: ref.current.clientTop,
      height: ref.current.clientHeight,
      width: ref.current.clientWidth,
    });
  };

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '0.2rem',
        color: isActive ? colors.info : colors.textPrimary,
        cursor: 'pointer',
        zIndex: 1,
        paddingTop: '0.8rem',
        flex: disableFlex ? 0 : 1,
      }}
      onClick={() => clickHandler()}
    >
      {React.cloneElement(icon, { style: { height: '2rem', width: '2rem' } })}
      <Text size='xs' style={{ color: 'inherit' }}>
        {label}
      </Text>
    </div>
  );
};

export default BottomNavItem;
