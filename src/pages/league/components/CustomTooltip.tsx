import { Box, Divider, Stack, Text, useMantineTheme } from "@mantine/core";
import React, { useEffect } from "react";
import type { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import ThemedCard from "../../../components/ThemedCard";
import { useThemeColors } from "../../../hooks/useThemeColors";

export const CustomTooltip = ({ active, label, payload }: TooltipProps<ValueType, NameType>) => {
  const colors = useThemeColors();
  const theme = useMantineTheme();

  if (active && payload) {
    return (
      <Box 
        style={{
          borderRadius: '0.6rem', 
          padding: '0.4rem 1rem', 
          border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}`,
          boxShadow: `0px 0px 12px -6px ${colors.info}`,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
        }}
      >
        <Stack style={{gap: '0.6rem'}}>
          {label && (
            <Stack style={{gap: '0rem'}}>
              <Text size='md'>
                Week {label}
              </Text>
              <Divider />
            </Stack>
          )}
          {payload.map((tp: any, index) => (
            <React.Fragment key={index}>
              {index === 0 && (
                <Text key={index} size='xs'>
                  {tp.name}: {tp.value}
                </Text>
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    )
  }

  return <></>;
}