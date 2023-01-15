import { useMantineTheme } from '@mantine/core';
import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';
import { ImageProps } from '../../types/ImageProps';

const EmailConfirmation = (props: ImageProps) => {
  const colors = useThemeColors();
  const theme = useMantineTheme();

  return (
    <div style={props.containerStyle}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={props.imageSize?.width ?? '100%'}
        height={props.imageSize?.height ?? '100%'}
        data-name='Layer 1'
        viewBox='0 0 570 511.675'
      >
        <path
          fill='#3f3d56'
          d='M565 195.675a.997.997 0 01-.572-.18L287.87 2.893a5.015 5.015 0 00-5.729.01L7.574 195.494a1 1 0 01-1.148-1.638L280.993 1.264a7.022 7.022 0 018.02-.013L565.57 193.854a1 1 0 01-.572 1.82z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[9] : '#e6e6e6'}
          d='M23.264 202.502L285.276 8.319 549.276 216.319 298.776 364.819 162.776 333.819 23.264 202.502z'
        ></path>
        <path
          fill={colors.success}
          d='M174.256 456.541H44.816a6.047 6.047 0 110-12.095h129.44a6.047 6.047 0 110 12.095zM91.256 430.541h-46.44a6.047 6.047 0 110-12.095h46.44a6.047 6.047 0 110 12.095z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#fff'}
          d='M288.96 310.66a7.564 7.564 0 01-2.869-.563l-161.59-67.048V33.175a7.008 7.008 0 017-7h310a7.008 7.008 0 017 7v210.02l-.305.13-156.28 66.74a7.616 7.616 0 01-2.956.594z'
        ></path>
        <path
          fill='#3f3d56'
          d='M288.96 311.159a8.072 8.072 0 01-3.06-.599L124 243.383V33.175a7.509 7.509 0 017.5-7.5h310a7.509 7.509 0 017.5 7.5v210.35l-156.887 67a8.11 8.11 0 01-3.153.634zM126 242.047l160.663 66.664a6.118 6.118 0 004.668-.028l155.67-66.478V33.175a5.507 5.507 0 00-5.5-5.5h-310a5.507 5.507 0 00-5.5 5.5z'
        ></path>
        <path
          fill='#3f3d56'
          d='M563 193.675h-.2L448 242.695l-157.07 67.07a5.066 5.066 0 01-3.88.02L125 242.555l-117.62-48.8-.18-.08H7a7.008 7.008 0 00-7 7v304a7.008 7.008 0 007 7h556a7.008 7.008 0 007-7v-304a7.008 7.008 0 00-7-7zm5 311a5.002 5.002 0 01-5 5H7a5.002 5.002 0 01-5-5v-304a5.011 5.011 0 014.81-5L125 244.715l161.28 66.92a7.12 7.12 0 005.44-.03L448 244.865l115.2-49.19a5.016 5.016 0 014.8 5z'
        ></path>
        <path
          fill={colors.success}
          d='M287.345 251.147a27.499 27.499 0 01-16.546-5.496l-.296-.222-62.31-47.708a27.683 27.683 0 1133.673-43.949l40.36 30.948 95.379-124.387a27.682 27.682 0 0138.813-5.124l-.593.806.608-.794a27.714 27.714 0 015.124 38.814L309.369 240.343a27.694 27.694 0 01-22.024 10.804z'
        ></path>
      </svg>
    </div>
  );
};

export default EmailConfirmation;
