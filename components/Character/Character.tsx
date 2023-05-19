import React, { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import BaseDetails from './BaseDetails';
import AbilityScores from './AbilityScores';
import CharacterTabs from './Tabs';
import { CharacterObject } from '../../types/character';
import { CharacterContext } from '../../context/CharacterContext';

function Character(props: CharacterObject) {
  const [state, dispatch] = useContext(CharacterContext);

  const saveCharacter = async () => {
    console.log('saveCharacter', state);

    if (state.isDirty) {
      try {
        console.log('Saving character: ', state.character);

        if (true) {
          dispatch({ type: 'SET_CHARACTER', payload: state.character });
        }
      } catch (err) {
        console.error('Failed to save character: ', err);
      }
    }
  };

  if (!props) {
    return <></>;
  }
  const { character } = state;

  return (
    <>
      <Button onClick={saveCharacter}>Save</Button>

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
