import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function HealthDetailRow({
  currentValue,
  maxValue,
  onCurrentChange,
  onMaxChange,
  title,
}: {
  title: string;
  currentValue: number;
  maxValue: number;
  onCurrentChange: (valueAsString: string, valueAsNumber: number) => void;
  onMaxChange: (valueAsString: string, valueAsNumber: number) => void;
}) {
  return (
    <Flex maxW={'180px'} alignItems={'center'} justifyContent={'space-between'}>
      <Box minWidth="72px">
        <Text fontWeight={'normal'} fontSize="lg">
          {title}:
        </Text>
      </Box>
      <Flex alignItems={'center'}>
        <NumberInput
          ml={2}
          h={9}
          size="md"
          min={0}
          defaultValue={currentValue}
          max={maxValue}
          onChange={onCurrentChange}
          variant="unstyled"
        >
          <NumberInputField fontWeight={'bold'} textAlign={'center'} p={1} />
        </NumberInput>
        /
        <NumberInput
          onChange={onMaxChange}
          h={9}
          size="md"
          min={0}
          defaultValue={maxValue}
          max={1000}
          variant="unstyled"
        >
          <NumberInputField fontWeight={'bold'} textAlign={'center'} p={1} />
        </NumberInput>
      </Flex>
    </Flex>
  );
}
