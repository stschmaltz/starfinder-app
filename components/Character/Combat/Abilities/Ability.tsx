import { InfoIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import AbilityModal from './AbilityModal';
import { CharacterContext } from '../../../../context/CharacterContext';

import { AbilityObject, AbilityType } from '../../../../types/character';
import BasicLoader from '../../../BasicLoader';
import { AttunementTrackerProps } from '../../../../context/AttunementContext';
import { theme } from '../../../../styles/theme';

const typeToBackgroundColor: Record<AbilityType, string> = {
  GRAVITON: 'graviton.50',
  PHOTON: 'photon.50',
  NEUTRAL: 'gray.50',
};
const typeToOutlineColor: Record<AbilityType, string> = {
  GRAVITON: 'graviton.500',
  PHOTON: 'photon.500',
  NEUTRAL: 'gray.400',
};

export default function Ability({
  ability,
  currentAttunement,
}: {
  ability: AbilityObject;
  currentAttunement: AttunementTrackerProps;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <>
      {ability.url && (
        <AbilityModal
          url={ability.url}
          name={ability.name}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          type={ability.type}
        />
      )}

      <Flex
        //css to make noticeale when highlighted
        boxShadow={
          isHighlighted
            ? `0 0 0 3px ${
                ability.type === AbilityType.PHOTON
                  ? theme.colors.photon['700']
                  : theme.colors.graviton['700']
              }`
            : ''
        }
        border={isHighlighted ? '' : '1px solid'}
        borderColor={`${typeToOutlineColor[ability.type]}`}
        p={1}
        flexDir={'column'}
        borderRadius={'lg'}
        backgroundColor={typeToBackgroundColor[ability.type]}
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
            icon={<InfoIcon color={'secondary'} />}
            onClick={() => {
              setIsModalOpen(true);
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
    </>
  ) : (
    <BasicLoader />
  );
}
