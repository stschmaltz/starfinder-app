import { InfoIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CharacterContext } from '../../../../context/CharacterContext';
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
  const [characterState, dispatch] = useContext(CharacterContext);
  const [name, setName] = useState(ability.name);
  const [description, setDescription] = useState(ability.description);

  const handleInputChange = (field: string, value: string) => {
    if (field === 'name') setName(value);
    else setDescription(value);

    const updatedAbilities = characterState.character.abilities.map(
      (charAbility) => {
        if (charAbility.name === ability.name) {
          return { ...charAbility, [field]: value };
        }

        return charAbility;
      }
    );

    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: { abilities: updatedAbilities },
    });
  };

  const isHighlighted =
    (ability.type === AbilityType.GRAVITON &&
      currentAttunement.currentGraviton >= 3) ||
    (ability.type === AbilityType.PHOTON &&
      currentAttunement.currentPhoton >= 3);

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
      <Flex h={30}>
        <Input
          h={25}
          flex={1}
          value={name}
          fontSize={'sm'}
          key={name} // TODO: Use an id
          variant={'flushed'}
          onChange={(e) => {
            console.log(e.target.value);
          }}
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
            // TODO: Make modal
            console.log(description);
          }}
        />
      </Flex>
      <Input
        flex={1}
        overflow={'hidden'}
        textOverflow={'ellipsis'}
        whiteSpace={'nowrap'}
        fontSize={'sm'}
        value={description}
        key={`${name}-description`}
        onChange={(e) => handleInputChange('description', e.target.value)}
        variant={'flushed'}
      ></Input>
    </Flex>
  ) : (
    <BasicLoader />
  );
}