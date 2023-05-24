import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Resource from './Resource';
import { CharacterObject } from '../../../types/character';

export default function ResourceTabContent({
  character,
}: {
  character: CharacterObject;
}) {
  return (
    <Flex justifyContent={'center'} flexDir={'column'}>
      <Flex w={'80%'} justifyContent={'space-between'} mb={3}>
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
  );
}
