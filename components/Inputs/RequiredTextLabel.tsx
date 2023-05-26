import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function RequiredTextLabel() {
  return (
    <Box alignSelf="flex-start" mt={0}>
      <Text fontSize="xs" color="gray.500">
        * Required
      </Text>
    </Box>
  );
}
