import { Box, Flex, Select, Text } from '@chakra-ui/react';
import React from 'react';
import RequiredTextLabel from './RequiredTextLabel';

export default function FormSelectInputField({
  value,
  onChange,
  placeholder,
  options,
  isRequired = false,
}: {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: { value: string; label: string }[];
  isRequired?: boolean;
}) {
  return (
    <Box w="100%">
      <Flex justifyContent="space-between" w="100%">
        <Text fontWeight="bold" fontSize="xs" color="gray.500">
          {placeholder}
        </Text>
        {isRequired && <RequiredTextLabel />}
      </Flex>
      <Select value={value} onChange={onChange} required={isRequired}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Box>
  );
}
