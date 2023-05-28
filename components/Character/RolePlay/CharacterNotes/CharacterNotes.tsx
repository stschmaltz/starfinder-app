import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import AddCharacterNote from './AddCharacterNote';
import StatContainer from '../../StatContainer';

export default function CharacterNotes({ notes }: { notes: string[] }) {
  return (
    <StatContainer
      header="Character Notes"
      actionContent={<AddCharacterNote />}
      bodyContent={
        <Flex height={'215px'} overflowY={'auto'} flexDir={'column'}>
          {notes.map((note) => {
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
