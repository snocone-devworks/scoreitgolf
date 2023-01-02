import { Group, Text } from '@mantine/core';
import React, { useMemo } from 'react'
import { MdAdd, MdArrowRight, MdRemove } from 'react-icons/md';
import ThemedActionIcon from './ThemedActionIcon';

type Props = {
  strokes: number;
  value: number;
  onChange(value: number): void | Promise<void>;
}

const HoleScore = ({ strokes, value, onChange }: Props) => {
  const score = useMemo<string>(() => {
    if (strokes === 0) return value.toString();
    return `${value} / ${value - strokes}`;
  }, [strokes, value])

  return (
    <Group position='center' align='center' style={{gap: '0.4rem'}}>
      <ThemedActionIcon
        color='info'
        tooltip='Minus'
        size='sm'
        variant='gradient'
        onClick={() => onChange(value - 1)}
      >
        <MdRemove />
      </ThemedActionIcon>
      <Text size='lg'>
        {score}
      </Text>
      <ThemedActionIcon
        color='info'
        size='sm'
        tooltip='Add'
        variant='gradient'
        onClick={() => onChange(value + 1)}
      >
        <MdAdd />
      </ThemedActionIcon>      
    </Group>
  )
}

export default HoleScore