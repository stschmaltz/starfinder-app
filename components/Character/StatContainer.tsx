import { Box, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function StatContainer({
  header,
  bodyContent,
  headerContent,
  actionContent,
}: {
  header: string;
  bodyContent?: ReactNode;
  headerContent?: ReactNode;
  actionContent?: ReactNode;
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
        <Flex justifyContent={'center'} position={'relative'}>
          <Text fontWeight="bold" fontSize={'md'} mb={2}>
            {header}
          </Text>
          {actionContent ? (
            <Box position={'absolute'} top={1} right={0}>
              {actionContent}
            </Box>
          ) : null}
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
