import { InfoIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { AttunementTrackerProps } from '../../../../hooks/use-character-attunement';
import { AbilityObject, AbilityType } from '../../../../types/character';
import BasicLoader from '../../../BasicLoader';

const typeToBackgroundColor: Record<AbilityType, string> = {
  GRAVITON: 'purple.100',
  PHOTON: 'orange.50',
  NEUTRAL: 'white',
};

export default function Ability({
  ability,
  currentAttunement,
}: {
  ability: AbilityObject;
  currentAttunement: AttunementTrackerProps;
}) {
  const isHighlighted =
    (ability.type === AbilityType.GRAVITON &&
      currentAttunement.currentGraviton >= 3) ||
    (ability.type === AbilityType.PHOTON &&
      currentAttunement.currentPhoton >= 3);

  console.log('Ability', currentAttunement);

  return currentAttunement ? (
    <Flex
      p={1}
      flexDir={'column'}
      borderRadius={'lg'}
      backgroundColor={
        isHighlighted ? 'purple.200' : typeToBackgroundColor[ability.type]
      }
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
