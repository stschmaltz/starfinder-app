import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import StatContainer from '../../StatContainer';

export default function Languages({ languages }: { languages: string[] }) {
  return (
    <StatContainer
      header="Languages"
      bodyContent={
        <Flex
          flexDir={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          px={10}
        >
          {languages.map((language) => (
            <Text fontWeight={'normal'} fontSize={'md'} key={language}>
              {language}
            </Text>
          ))}
        </Flex>
      }
    ></StatContainer>
  );
}
