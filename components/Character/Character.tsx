import React, { useContext } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import BaseDetails from './BaseDetails';
import AbilityScores from './AbilityScores';
import CharacterTabs from './Tabs';
import { CharacterObject } from '../../types/character';
import { CharacterContext } from '../../context/CharacterContext';
import { useHandleSaveCharacter } from '../../hooks/use-save-character.hook';

function Character(props: CharacterObject) {
  const [characterState, dispatch] = useContext(CharacterContext);
  const handleSaveCharacter = useHandleSaveCharacter();

  const saveCharacter = async () => {
    if (characterState.isDirty) {
      try {
        const newCharacter = await handleSaveCharacter(
          characterState.character
        );

        if (newCharacter) {
          dispatch({
            type: 'SET_CHARACTER',
            payload: characterState.character,
          });
        }
      } catch (err) {
        console.error('Failed to save character: ', err);
      }
    }
  };

  if (!props) {
    return <></>;
  }
  const { character } = characterState;

  return (
    <>
      <Flex>
        <Button
          colorScheme={'brandPrimary'}
          isDisabled={!characterState.isDirty}
          onClick={saveCharacter}
        >
          Save
        </Button>
        <Button
          ml={2}
          mb={2}
          colorScheme={'brandSecondary'}
          isDisabled={!characterState.isDirty}
          onClick={saveCharacter}
        >
          Reset
        </Button>
      </Flex>

      <BaseDetails
        baseDetails={character.baseDetails}
        healthStats={character.healthStats}
      />
      <Box mt={2}></Box>
      <AbilityScores
        abilityScores={character.abilityScores}
        abilityScoreModifiers={character.abilityScoreModifiers}
      />
      <Box mt={2}></Box>
      <CharacterTabs character={character} />
    </>
  );
}

export default Character;
