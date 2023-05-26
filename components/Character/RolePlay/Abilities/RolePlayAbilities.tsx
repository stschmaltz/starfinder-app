import { Flex } from '@chakra-ui/react';
import React from 'react';

import StatContainer from '../../StatContainer';
import { AbilityObject, AbilityType } from '../../../../types/character';
import { useAttunement } from '../../../../context/AttunementContext';
import Ability from '../../Combat/Abilities/Ability';

export default function RolePlayAbilities({
  abilities,
}: {
  abilities: AbilityObject[];
}) {
  const { currentAttunement } = useAttunement();

  return (
    <StatContainer
      header="Role Play Abilities"
      bodyContent={
        <Flex overflowY="auto" flexDir={'column'} rowGap={1} p={0.5}>
          {abilities
            .filter((ability) => ability.type === AbilityType.NEUTRAL)
            .map((ability) => (
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
