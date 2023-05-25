import { Flex } from '@chakra-ui/react';
import React from 'react';

import Ability from './Ability';

import AddAbilityButton from './AddAbilityButton';
import StatContainer from '../../StatContainer';
import { AbilityObject } from '../../../../types/character';
import { useAttunement } from '../../../../context/AttunementContext';

export default function Abilities({
  abilities,
}: {
  abilities: AbilityObject[];
}) {
  const { currentAttunement } = useAttunement();

  return (
    <StatContainer
      header="Abilities"
      actionContent={
        <AddAbilityButton
          addAbilityFn={() => {
            console.log('Add ability');
          }}
        />
      }
      bodyContent={
        <Flex overflowY="auto" flexDir={'column'} rowGap={1} p={0.5}>
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
