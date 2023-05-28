import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Resource from './Resource';
import { CharacterObject } from '../../../types/character';
import StatContainer from '../StatContainer';

export default function ResourceTabContent({
  character,
}: {
  character: CharacterObject;
}) {
  return (
    <StatContainer
      header="Resources"
      bodyContent={
        <Flex
          mt={5}
          mb={10}
          alignItems={'center'}
          flexDir={'column'}
          h={'53.3vh'}
          overflowY={'auto'}
        >
          <Flex w={'85%'} justifyContent={'space-between'} mb={3}>
            <Text fontWeight={'semibold'} flex={1} fontSize={'sm'}>
              Name
            </Text>
            <Text fontWeight={'semibold'} flex={2} fontSize="sm">
              Description
            </Text>
            <Text fontWeight={'semibold'} flex={0.4} fontSize="sm">
              Image
            </Text>
          </Flex>
          {character.resources.map((resource) => {
            return <Resource key={resource.name} resource={resource} />;
          })}
        </Flex>
      }
    />
  );
}
