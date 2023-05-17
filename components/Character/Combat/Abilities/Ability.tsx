import { InfoIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { AbilityObject } from './Abilities';
import { AttunementTrackerProps } from '../../../../hooks/use-character-attunement';
import BasicLoader from '../../../BasicLoader';

export default function Ability({
  ability,
  currentAttunement,
}: {
  ability: AbilityObject;
  currentAttunement: AttunementTrackerProps;
}) {
  const isHighlighted =
    (ability.type === 'GRAVITON' && currentAttunement.currentGraviton >= 3) ||
    (ability.type === 'PHOTON' && currentAttunement.currentPhoton >= 3);

  console.log('Ability', currentAttunement);

  return currentAttunement ? (
    <Flex
      flexDir={'column'}
      backgroundColor={isHighlighted ? 'purple.200' : 'white'}
      key={ability.name + '-flex'}
    >
      <Flex>
        <Input
          flex={1}
          value={ability.name}
          key={ability.name}
          variant={'flushed'}
          fontWeight={'bold'}
        ></Input>

        <IconButton
          flex={0}
          variant="ghost"
          size="md"
          colorScheme="blackAlpha"
          aria-label="Reset Attunement"
          icon={<InfoIcon color={'primary'} />}
          onClick={() => {
            console.log(ability.description);
          }}
        />
      </Flex>
      <Input
        flex={1}
        overflow={'hidden'}
        textOverflow={'ellipsis'}
        whiteSpace={'nowrap'}
        value={`${ability.description}`}
        key={ability.description}
        variant={'flushed'}
      ></Input>
    </Flex>
  ) : (
    <BasicLoader />
  );
}
