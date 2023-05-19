import { Flex } from '@chakra-ui/react';
import React from 'react';

import Ability from './Ability';
import { useCharacterAttunement } from '../../../../hooks/use-character-attunement';
import StatContainer from '../../StatContainer';
import { AbilityObject } from '../../../../types/character';

export default function Abilities({
  abilities,
}: {
  abilities: AbilityObject[];
}) {
  const { currentAttunement } = useCharacterAttunement();

  return (
    <StatContainer
      header="Abilities"
      bodyContent={
        <Flex overflowY="auto" flexDir={'column'} rowGap={1}>
          {abilities.map((ability) => (
            <Ability
              key={ability.name}
              currentAttunement={currentAttunement}
              ability={ability}
            />
          ))}
        </Flex>
      }
    />
  );
}
