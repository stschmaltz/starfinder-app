import { Box, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function StatContainer({
  header,
  bodyContent,
  headerContent,
}: {
  header: string;
  bodyContent?: ReactNode;
  headerContent?: ReactNode;
}) {
  return (
    <Box
      overflowY="hidden"
      h="100%"
      borderRadius={'2xl'}
      bg="brandPrimary.50"
      px={4}
      py={3}
    >
      <Flex h="100%" flexDir="column" width="100%">
        <Flex justifyContent={'center'}>
          <Text fontSize={'md'} mb={2}>
            {header}
          </Text>
        </Flex>
        {headerContent}
        {bodyContent && (
          <Box overflow={'auto'} width="100%">
            {bodyContent}
          </Box>
        )}
      </Flex>
    </Box>
  );
}
