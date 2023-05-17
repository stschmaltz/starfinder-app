import { Flex } from '@chakra-ui/react';
import React from 'react';

import Ability from './Ability';
import { useCharacterAttunement } from '../../../../hooks/use-character-attunement';
import StatContainer from '../../StatContainer';

export interface AbilityObject {
  description: string;
  name: string;
  type: 'GRAVITON' | 'PHOTON' | 'NEUTRAL';
}

export default function Abilities() {
  const { currentAttunement } = useCharacterAttunement();
  const abilities: AbilityObject[] = [
    {
      name: 'Low-light Viz',
      description: 'Can see in light up to 60ft',
      type: 'NEUTRAL',
    },
    {
      name: 'Solar Manifestation',
      description: 'Bight weapon light 20ft',
      type: 'NEUTRAL',
    },
    {
      name: 'Supernova',
      description: '1d6+1d6 fire to all (10ft)',
      type: 'PHOTON',
    },
    {
      name: 'Blackhole',
      description: 'Pull 20ft (fort save for 10).',
      type: 'GRAVITON',
    },
  ];

  console.log('Abilities', currentAttunement);

  return (
    <StatContainer
      header="Abilities"
      bodyContent={
        <Flex overflowY="auto" flexDir={'column'} rowGap={1}>
          {abilities.map((ability) => {
            return (
              <Ability
                key={ability.name}
                currentAttunement={currentAttunement}
                ability={ability}
              />
            );
          })}
        </Flex>
      }
    />
  );
}
