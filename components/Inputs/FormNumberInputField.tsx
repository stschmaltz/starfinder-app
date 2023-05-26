import {
  Box,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import RequiredTextLabel from './RequiredTextLabel';

export default function FormNumberInputField({
  value,
  onChange,
  placeholder,
  required = false,
  min,
  max,
}: {
  value?: number;
  onChange: (valueAsString: string, valueAsNumber: number) => void;
  placeholder: string;
  required?: boolean;
  min: number;
  max: number;
}) {
  return (
    <Box w="100%">
      <Flex justifyContent={'space-between'}>
        <Text fontWeight={'bold'} fontSize="xs" color="gray.500">
          {placeholder}
        </Text>
        {required && <RequiredTextLabel />}
      </Flex>
      <NumberInput
        w="100%"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      >
        <NumberInputField placeholder={placeholder} required={required} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
}
