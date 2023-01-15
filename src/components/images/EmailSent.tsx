import { useMantineTheme } from '@mantine/core';
import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';
import { ImageProps } from '../../types/ImageProps';

const EmailSent = (props: ImageProps) => {
  const colors = useThemeColors();
  const theme = useMantineTheme();

  return (
    <div style={props.containerStyle}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={props.imageSize?.width ?? '100%'}
        height={props.imageSize?.height ?? '100%'}
        data-name='Layer 1'
        viewBox='0 0 576.499 493.5'
      >
        <circle
          cx='203.277'
          cy='191'
          r='31'
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#f2f2f2'}
        ></circle>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#f2f2f2'}
          d='M107.695 84.138h213.582v11.685H134.96a83.418 83.418 0 00-83.419 83.418V312h-23.37a3.895 3.895 0 01-3.895-3.895V167.556a83.418 83.418 0 0183.418-83.418z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[4] : '#3f3d56'}
          d='M148.777 489V311.5h52V489a4.505 4.505 0 01-4.5 4.5h-43a4.505 4.505 0 01-4.5-4.5z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[4] : '#3f3d56'}
          d='M13.277 308V163.666A86.764 86.764 0 0199.942 77h220.335v236h-302a5.006 5.006 0 01-5-5zm305-229H99.942a84.761 84.761 0 00-84.665 84.666V308a3.003 3.003 0 003 3h300z'
        ></path>
        <path
          fill={colors.success}
          d='M203.277 207a18.02 18.02 0 01-18-18V60a3.003 3.003 0 00-3-3h-70a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h104a5.006 5.006 0 015 5v184a18.02 18.02 0 01-18 18z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[4] : '#3f3d56'}
          d='M328.277 75a56.88 56.88 0 0157 56.761v164.31h112a16.965 16.965 0 0117 16.929h-243V131.761a56.88 56.88 0 0157-56.761z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#fff'}
          d='M314.599 168.567l11.803 48.757 230.88-55.892-11.802-48.756a3.638 3.638 0 00-2.358-2.595 3.594 3.594 0 00-1.334-.2L408.33 40.777a3.682 3.682 0 00-4.656 1.12l-64.32 89.693-24.248 33.823a.514.514 0 00-.09.418 3.642 3.642 0 00-.416 2.735z'
        ></path>
        <path
          fill='#3f3d56'
          d='M315.016 165.832a.49.49 0 00.203.316.56.56 0 00.433.086.536.536 0 00.3-.208l.083-.115 1.262-1.766 22.929-31.964 64.3-89.673a2.62 2.62 0 013.323-.796l132.425 68.566 1.188.617a1.292 1.292 0 00.148.052 1.615 1.615 0 01.271-.026.514.514 0 00.29-.245.524.524 0 00-.219-.709l-.164-.087L408.33 40.778a3.682 3.682 0 00-4.656 1.12l-64.32 89.693-24.248 33.823a.514.514 0 00-.09.418z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M384.357 170.804l5.14.57 38.142 4.225 25.286 2.8 1.493.166 31.552-24.645 1.21-.944 7.451-5.82 26.514-20.707.16-1.454 9.43-85.114a4.454 4.454 0 00-3.93-4.912L400.95 21.028a4.456 4.456 0 00-4.912 3.929l-6.65 60.037-3.69 33.286-3.3 29.779-1.53 13.829-.445 4.006a4.457 4.457 0 003.934 4.91z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#fff'}
          d='M418.942 96.198l54.517 6.038 19.333 2.14a6.54 6.54 0 101.44-13l-24.047-2.663-49.8-5.521a6.543 6.543 0 00-1.443 13.006zM415.838 120.314c.14.025.281.05.425.064l63.285 7.01 10.566 1.174a6.542 6.542 0 001.439-13.005l-15.279-1.69-50.13-5.555-8.436-.935a6.54 6.54 0 00-1.87 12.937zM408.676 141.698a6.539 6.539 0 004.88 3.125l25.939 2.873 46.197 5.118.01-.003 1.477.165 7.453-5.82a6.47 6.47 0 000-1.33 6.555 6.555 0 00-5.786-5.824l-6.418-.713-25.457-2.817-18.316-2.032-23.66-2.622a6.54 6.54 0 00-6.32 9.88zM445.108 66.72l13.565 1.502 5.991.665 9.05 1.002a6.542 6.542 0 001.439-13.005l-28.6-3.166a6.54 6.54 0 10-1.445 13.001z'
        ></path>
        <path
          fill={colors.success}
          d='M334.193 102.932l16.538 68.314 27.6 5.248 25.533 4.86 27.393 5.213 8.753 1.666a3.673 3.673 0 002.94-.712l7.022-5.484 4.446-3.472 31.552-24.645-20.062-82.874a4.403 4.403 0 00-1.244-2.159 4.449 4.449 0 00-4.125-1.117L337.47 97.563a4.45 4.45 0 00-3.276 5.369z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#fff'}
          d='M372.114 157.278a6.546 6.546 0 007.895 4.818l72.215-17.482a6.55 6.55 0 004.818-7.896 2.1 2.1 0 00-.07-.246 6.539 6.539 0 00-7.826-4.572l-72.214 17.482a6.546 6.546 0 00-4.818 7.896zM378.332 176.494l25.532 4.86 54.084-13.092a6.54 6.54 0 10-3.077-12.714l-72.215 17.482a6.494 6.494 0 00-3.747 2.511 6.583 6.583 0 00-.577.953zM431.257 186.567l8.753 1.666a3.673 3.673 0 002.94-.712l7.022-5.484zM386.664 120.647a6.546 6.546 0 007.896 4.818l27.97-6.771a6.55 6.55 0 004.819-7.896 6.466 6.466 0 00-1.205-2.486 6.545 6.545 0 00-6.691-2.332l-27.97 6.77a6.541 6.541 0 00-4.819 7.897z'
        ></path>
        <path
          fill={theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#fff'}
          d='M403.862 181.354l27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm81.838-28.539l.266 1.102 1.215-.945zm-81.838 28.54l27.398 5.213 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm0 0l27.398 5.213 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm-89.263-12.788l30.916 127.71a3.667 3.667 0 004.422 2.699l223.76-54.168a3.666 3.666 0 002.699-4.422l-30.916-127.71a3.638 3.638 0 00-2.358-2.595 3.594 3.594 0 00-1.334-.2 3.458 3.458 0 00-1.514.397 3.18 3.18 0 00-.607.377l-18.364 14.34-26.67 20.834-8.935 6.979.002.007-.008.002-32.766 25.578-5.417 4.24-5.205 4.06a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214-27.422-5.215-60.062-11.43a3.59 3.59 0 00-1.547.033 3.67 3.67 0 00-1.788 1.036 4.11 4.11 0 00-.493.651 3.642 3.642 0 00-.417 2.735zm89.263 12.787l27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm0 0l27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm0 0l27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214z'
        ></path>
        <path
          fill='#3f3d56'
          d='M403.862 181.354l27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm81.838-28.539l.266 1.102 1.215-.945zm-81.838 28.54l27.398 5.213 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm0 0l27.398 5.213 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm-87.827-15.444l.135.102c.023-.037.063-.07.093-.11a2.643 2.643 0 012.385-.767l59.686 11.354 25.528 4.864 27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214-27.422-5.215-60.062-11.43a3.59 3.59 0 00-1.547.033zm-1.436 2.657l30.916 127.71a3.667 3.667 0 004.422 2.698l223.76-54.168a3.666 3.666 0 002.699-4.422l-30.916-127.71a3.638 3.638 0 00-2.358-2.595 3.594 3.594 0 00-1.334-.2 3.458 3.458 0 00-1.514.397 3.18 3.18 0 00-.607.377l-18.364 14.34-26.67 20.834-8.935 6.979.002.007-.008.002-32.766 25.578-5.417 4.24-5.205 4.06a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214-27.422-5.215-60.062-11.43a3.59 3.59 0 00-1.547.033 3.67 3.67 0 00-1.788 1.036 4.11 4.11 0 00-.493.651 3.642 3.642 0 00-.417 2.735zm1.02-.247a2.598 2.598 0 01.46-2.19.34.34 0 01.091-.118c.023-.037.063-.07.093-.11a2.643 2.643 0 012.385-.767l59.686 11.354 25.528 4.864 27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487 4.444-3.472 31.547-24.648 1.215-.945 7.447-5.817 26.518-20.71 19.171-14.971a2.604 2.604 0 01.988-.477 1.997 1.997 0 01.305-.05 1.615 1.615 0 01.271-.026 2.679 2.679 0 01.9.147 2.625 2.625 0 011.687 1.853l30.916 127.71a2.62 2.62 0 01-1.931 3.165l-223.761 54.168a2.618 2.618 0 01-3.158-1.933zm88.243 13.033l27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm0 0l27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214zm0 0l27.398 5.214 8.75 1.666a3.689 3.689 0 002.938-.71l7.027-5.487-2.466.597-5.205 4.061a2.636 2.636 0 01-2.099.508l-6.48-1.232-27.397-5.214z'
        ></path>
        <path
          fill={colors.success}
          d='M515.379 219.717a8.128 8.128 0 015.98-9.8l28.242-6.838a8.119 8.119 0 013.82 15.782l-28.241 6.837a8.128 8.128 0 01-9.801-5.98z'
        ></path>
        <circle cx='203.277' cy='189' r='7' fill='#fff'></circle>
      </svg>
    </div>
  );
};

export default EmailSent;