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
      borderRadius={'md'}
      boxShadow={'xl'}
      bg="brandPrimary.50"
      border="3px solid"
      borderColor="brandPrimary.600"
      px={4}
      py={3}
      _hover={{
        boxShadow: '2xl',
      }}
    >
      <Flex h="100%" flexDir="column" width="100%">
        <Flex justifyContent={'space-between'} position={'relative'}>
          <Text
            border={'1px'}
            borderColor={'brandPrimary.500'}
            borderRadius={'md'}
            px={3}
            bgColor={'brandPrimary.300'}
            fontWeight="bold"
            fontSize={'lg'}
            mb={2}
            ml={-2}
          >
            {header}
          </Text>
          {actionContent ? (
            <Box position={'absolute'} top={0} right={0.5}>
              {actionContent}
            </Box>
          ) : null}{' '}
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

// ... rest of the code
