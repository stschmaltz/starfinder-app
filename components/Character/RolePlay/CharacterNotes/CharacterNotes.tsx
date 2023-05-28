import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import StatContainer from '../../StatContainer';

export default function CharacterNotes({
  characterNotes,
}: {
  characterNotes: string[];
}) {
  return (
    <StatContainer
      header="Character Notes"
      bodyContent={
        <Flex height={'215px'} overflowY={'auto'} flexDir={'column'}>
          {characterNotes.map((note) => {
            return (
              <Text fontSize={'0.87rem'} key={note.slice(0, 10)}>
                ▸ {note}
              </Text>
            );
          })}
        </Flex>
      }
    ></StatContainer>
  );
}
