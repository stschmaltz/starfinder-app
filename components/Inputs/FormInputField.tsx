import { Box, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import RequiredTextLabel from './RequiredTextLabel';

export default function FormInputField({
  value,
  onChange,
  placeholder,
  required = false,
}: {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean | undefined;
}) {
  return (
    <Box w="100%">
      <Flex justifyContent="space-between">
        <Text fontWeight="bold" fontSize="xs" color="gray.500">
          {placeholder}
        </Text>
        {required && <RequiredTextLabel />}
      </Flex>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </Box>
  );
}
